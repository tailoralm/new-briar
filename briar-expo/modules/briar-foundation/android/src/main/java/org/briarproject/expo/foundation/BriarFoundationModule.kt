package org.briarproject.expo.foundation

import android.os.Build
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class BriarFoundationModule : Module() {
    override fun definition() = ModuleDefinition {
        Name("BriarFoundation")

        Function("getAndroidApiLevel") {
            Build.VERSION.SDK_INT
        }
    }
}
