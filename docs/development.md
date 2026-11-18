# Android development

The root Gradle build produces the original Briar app. The Expo project has its own dependencies, generated Gradle project and application ID. Both debug apps can be installed on the same phone.

## Toolchain

- JDK 17 with `JAVA_HOME` configured.
- Android SDK with `ANDROID_HOME` configured and `$ANDROID_HOME/platform-tools` on `PATH`. Use a host supported by Android's build tools and NDK, such as x86-64 Linux.
- Android SDK platform and Build Tools 35 for the original build and 36 for Expo. Expo also uses NDK 27.1.12297006 and CMake 3.22.1.
- Node.js 22 LTS (22.13 or later) and npm 10.9.11 for the Expo project.
- A physical Android phone with USB debugging enabled and Android 7.0 or newer for the Expo smoke test.

With Android command-line tools installed, accept the SDK licenses and install the build packages:

```bash
sdkmanager --licenses
sdkmanager 'platform-tools' 'platforms;android-35' 'build-tools;35.0.0' \
  'platforms;android-36' 'build-tools;36.0.0' 'ndk;27.1.12297006' 'cmake;3.22.1'
```

## Original Briar app

From the repository root:

```bash
./gradlew :briar-android:assembleOfficialDebug
adb install -r briar-android/build/outputs/apk/official/debug/briar-android-official-debug.apk
./gradlew :briar-android:testOfficialDebugUnitTest
```

Open Briar and verify startup and account setup or sign-in with a test account. Run `./gradlew :briar-android:connectedOfficialDebugAndroidTest` for device tests. See [.gitlab-ci.yml](../.gitlab-ci.yml) for the upstream test matrix.

For Mailbox interoperability tests, initialize the pinned submodule:

```bash
git submodule update --init briar-mailbox
MAILBOX_INTEGRATION_TESTS=true ./gradlew :mailbox-integration-tests:test
```

## Expo development APK

From the repository root:

```bash
cd briar-expo
npm ci
npm run lint
npm run typecheck
npm test
npm run android:apk
```

The APK is `briar-expo/android/app/build/outputs/apk/debug/app-debug.apk`, relative to the repository root. The build uses the lockfile, the pinned Expo SDK 54 Android template and its Gradle wrapper. Rebuilding regenerates `briar-expo/android/` from Expo config. Edit the local module under `briar-expo/modules/` for native changes and regenerate after changing native dependencies or Expo config.

## Physical-device smoke test

With the phone unlocked and authorized in `adb devices -l`, install and start Metro from `briar-expo/`:

```bash
adb install -r android/app/build/outputs/apk/debug/app-debug.apk
npm start -- --localhost --port 8081
```

In another terminal at the same directory:

```bash
npm run test:device
```

The test sets up `adb reverse`, opens the installed development client at the local Metro URL and checks the screen for the Android API level returned by the Kotlin module. Set `ANDROID_SERIAL` when multiple devices are connected. For a manual run, open **Briar Development** and connect to Metro at `http://127.0.0.1:8081` after `adb reverse tcp:8081 tcp:8081`. The screen reports **Native adapter ready (Android API …)**. This test needs the custom APK with `expo-dev-client` and the linked Kotlin module. [Expo development builds](https://docs.expo.dev/develop/development-builds/introduction/)

`npm test` checks Android app configuration and native module autolinking without a device. `npx expo export --platform android --no-bytecode` checks bundling without building an APK. Use both the Gradle build and physical-device test before marking the foundation criterion complete.
