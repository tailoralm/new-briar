import { requireNativeModule } from 'expo-modules-core';

interface BriarFoundationModule {
  getAndroidApiLevel(): number;
}

export function getAndroidApiLevel(): number {
  return requireNativeModule<BriarFoundationModule>('BriarFoundation').getAndroidApiLevel();
}
