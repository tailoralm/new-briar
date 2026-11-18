const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { test } = require('node:test');

const app = require('../app.json').expo;

test('Android development shell uses an isolated package with backups disabled', () => {
  assert.deepEqual(app.platforms, ['android']);
  assert.equal(app.android.package, 'org.briarproject.briar.expo');
  assert.equal(app.android.allowBackup, false);
});

test('Expo autolinks both the development client and the Kotlin adapter for Android', () => {
  const autolinking = JSON.parse(
    execFileSync('expo-modules-autolinking', ['resolve', '--platform', 'android', '--json'], {
      encoding: 'utf8',
    }),
  );
  const devClient = autolinking.modules.find(({ packageName }) => packageName === 'expo-dev-client');
  assert.ok(devClient?.projects.length, 'Expo dev client is missing from Android autolinking');
  const adapter = autolinking.modules.find(({ packageName }) => packageName === 'briar-foundation');
  const nativeClasses = adapter?.projects.flatMap(({ modules }) => modules) ?? [];
  assert.ok(nativeClasses.includes('org.briarproject.expo.foundation.BriarFoundationModule'));
});
