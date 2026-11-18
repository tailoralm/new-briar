#!/usr/bin/env bash
set -euo pipefail

# Set ANDROID_SERIAL when more than one device is connected.
package=org.briarproject.briar.expo
dump=/data/local/tmp/briar-expo-smoke.xml
port=8081

curl --fail --silent --show-error "http://127.0.0.1:$port/status" |
  grep -q 'packager-status:running'
adb reverse "tcp:$port" "tcp:$port"
adb shell am force-stop "$package"
adb shell am start -W -a android.intent.action.VIEW \
  -d "briar-development://expo-development-client/?url=http%3A%2F%2F127.0.0.1%3A$port" \
  -p "$package"

# Allow time for the first Metro bundle. A reused UI dump can mask a failed launch.
trap 'adb shell rm -f "$dump" >/dev/null 2>&1 || true' EXIT
for ((attempt = 1; attempt <= 45; attempt++)); do
  adb shell rm -f "$dump"
  adb shell uiautomator dump "$dump" >/dev/null 2>&1 || true
  if ui=$(adb shell cat "$dump" 2>/dev/null) &&
    [[ "$ui" =~ Native\ adapter\ ready\ \(Android\ API\ [0-9]+\) ]]; then
    echo "Expo development build rendered the Android native adapter status."
    exit 0
  fi
  sleep 2
done
echo "Native adapter status did not appear. Check Metro and adb logcat." >&2
exit 1
