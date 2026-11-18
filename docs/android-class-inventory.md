# Android class inventory

This inventory covers Java and Kotlin class-bearing sources in the Briar client, Bramble Android and the standalone Mailbox Android app at the submodule revision in this checkout. Each name denotes a source file in the indicated package and source set. Nested helpers and additional declarations follow their enclosing source's classification. In Mailbox, `OnboardingFragment.kt` also defines `Onboarding0Fragment`, `Onboarding1Fragment`, `Onboarding2Fragment`, `Onboarding3Fragment` and `FinishFragment` as presentation. Package-level metadata has no class entry.

- **P** means replaceable presentation. Port its behavior and accessibility before removing the Android view.
- **I** means application integration. Review lifecycle, compatibility, threading, and side effects before substituting or moving this code. Activity tests, debug fixtures and their support code are classified as integration because they validate the native host.
- **N** means essential native infrastructure. Preserve the native responsibility and existing behavior while adding the frontend. Mailbox classifications describe its separate application and imply no changes to that submodule.

Some Android activities own multiple responsibilities. The classification reflects the work needed to replace the source safely. For example, the navigation drawer combines a view with external intent handling. The unlock and panic entry points enforce native policy even when their presentation changes.

The table records 580 sources. See the [architecture audit](architecture.md) for component ownership and the [feature inventory](feature-parity.md) for screen and test mappings.

## Briar client

| Source set / package | Replaceable presentation (P) | Application integration (I) | Essential native infrastructure (N) |
| --- | --- | --- | --- |
| main<br>`im.delight.android.identicons` | `Identicon`<br>`IdenticonDrawable` | — | — |
| main<br>`info.guardianproject` | — | — | `GuardianProjectRSA4096` |
| main<br>`info.guardianproject.trustedintents` | — | — | `ApkSignaturePin`<br>`TrustedIntents` |
| main<br>`org.briarproject.bramble.account` | — | — | `BriarAccountManager`<br>`BriarAccountModule` |
| main<br>`org.briarproject.briar.android` | `RecentEmojiImpl` | `AndroidComponent`<br>`AppModule`<br>`LevelRaisingHandler`<br>`Localizer`<br>`NetworkUsageMetricsImpl`<br>`TestingConstants` | `AndroidDatabaseConfig`<br>`AndroidEagerSingletons`<br>`AndroidKeyStrengthener`<br>`AndroidNotificationManagerImpl`<br>`BriarApplication`<br>`BriarApplicationImpl`<br>`BriarService`<br>`DestroyableContext`<br>`DozeWatchdogImpl`<br>`NotificationCleanupService`<br>`ScreenFilterMonitorImpl`<br>`StartupFailureActivity` |
| main<br>`org.briarproject.briar.android.account` | `AuthorNameFragment`<br>`DozeFragment`<br>`DozeView`<br>`HuaweiAppLaunchView`<br>`HuaweiProtectedAppsView`<br>`PowerView`<br>`SetPasswordFragment`<br>`SetupActivity`<br>`SetupFragment`<br>`XiaomiLockAppsView`<br>`XiaomiRecentAppsView` | `DozeHelperModule`<br>`SetupModule`<br>`SetupViewModel` | `LockManagerImpl`<br>`UnlockActivity` |
| main<br>`org.briarproject.briar.android.activity` | — | `ActivityComponent`<br>`ActivityModule`<br>`ActivityScope`<br>`BaseActivity`<br>`BriarActivity`<br>`RequestCodes` | — |
| main<br>`org.briarproject.briar.android.attachment` | `AttachmentItem` | `AttachmentDimensions`<br>`AttachmentItemResult`<br>`AttachmentManager`<br>`AttachmentModule`<br>`AttachmentResult`<br>`UnsupportedMimeTypeException` | `AttachmentCreationTask`<br>`AttachmentCreator`<br>`AttachmentCreatorImpl`<br>`AttachmentRetriever`<br>`AttachmentRetrieverImpl` |
| main<br>`org.briarproject.briar.android.attachment.media` | — | `ImageSizeCalculator`<br>`ImageSizeCalculatorImpl`<br>`MediaModule`<br>`Size` | `ImageCompressor`<br>`ImageCompressorImpl`<br>`ImageHelper`<br>`ImageHelperImpl` |
| main<br>`org.briarproject.briar.android.blog` | `BlogActivity`<br>`BlogCommentItem`<br>`BlogFragment`<br>`BlogItem`<br>`BlogPostAdapter`<br>`BlogPostFragment`<br>`BlogPostItem`<br>`BlogPostViewHolder`<br>`FeedFragment`<br>`OnBlogPostClickListener`<br>`ReblogActivity`<br>`ReblogFragment`<br>`RssFeedActivity`<br>`RssFeedAdapter`<br>`RssFeedDeleteFeedDialogFragment`<br>`RssFeedImportFailedDialogFragment`<br>`RssFeedImportFragment`<br>`RssFeedManageFragment`<br>`RssImportResult`<br>`WriteBlogPostActivity` | `BaseViewModel`<br>`BlogModule`<br>`BlogViewModel`<br>`FeedViewModel`<br>`RssFeedViewModel` | — |
| main<br>`org.briarproject.briar.android.contact` | `BaseContactListAdapter`<br>`ContactItem`<br>`ContactItemViewHolder`<br>`ContactListAdapter`<br>`ContactListFragment`<br>`ContactListItem`<br>`ContactListItemViewHolder`<br>`OnContactClickListener` | `ContactListModule`<br>`ContactListViewModel`<br>`ContactsViewModel` | — |
| main<br>`org.briarproject.briar.android.contact.add.nearby` | `AddNearbyContactErrorFragment`<br>`AddNearbyContactFragment`<br>`AddNearbyContactIntroFragment` | `AddContactState`<br>`AddNearbyContactActivity`<br>`AddNearbyContactModule`<br>`AddNearbyContactPermissionManager`<br>`AddNearbyContactViewModel` | — |
| main<br>`org.briarproject.briar.android.contact.add.remote` | `LinkExchangeFragment`<br>`NicknameFragment`<br>`PendingContactItem`<br>`PendingContactListActivity`<br>`PendingContactListAdapter`<br>`PendingContactListener`<br>`PendingContactViewHolder` | `AddContactActivity`<br>`AddContactViewModel`<br>`PendingContactListViewModel` | — |
| main<br>`org.briarproject.briar.android.contact.connect` | `BluetoothIntroFragment`<br>`BluetoothProgressFragment` | `BluetoothConditionManager`<br>`ConnectViaBluetoothActivity`<br>`ConnectViaBluetoothModule`<br>`ConnectViaBluetoothState`<br>`ConnectViaBluetoothViewModel` | — |
| main<br>`org.briarproject.briar.android.contactselection` | `BaseContactSelectorAdapter`<br>`BaseContactSelectorFragment`<br>`BaseSelectableContactHolder`<br>`BaseSelectableContactItem`<br>`ContactSelectorActivity`<br>`ContactSelectorAdapter`<br>`ContactSelectorFragment`<br>`ContactSelectorListener`<br>`SelectableContactHolder`<br>`SelectableContactItem` | `ContactSelectorController`<br>`ContactSelectorControllerImpl` | — |
| main<br>`org.briarproject.briar.android.controller` | — | `ActivityLifecycleController`<br>`BriarController`<br>`BriarControllerImpl`<br>`DbController`<br>`DbControllerImpl` | — |
| main<br>`org.briarproject.briar.android.controller.handler` | `ExceptionHandler`<br>`ResultExceptionHandler`<br>`ResultHandler`<br>`UiExceptionHandler`<br>`UiResultExceptionHandler`<br>`UiResultHandler` | — | — |
| main<br>`org.briarproject.briar.android.conversation` | `AliasDialogFragment`<br>`ConversationActivity`<br>`ConversationAdapter`<br>`ConversationItem`<br>`ConversationItemDetailsLookup`<br>`ConversationItemKeyProvider`<br>`ConversationItemViewHolder`<br>`ConversationListener`<br>`ConversationMessageItem`<br>`ConversationMessageViewHolder`<br>`ConversationNoticeItem`<br>`ConversationNoticeViewHolder`<br>`ConversationRequestItem`<br>`ConversationRequestViewHolder`<br>`ConversationScrollListener`<br>`ConversationSettingsDialog`<br>`ConversationVisitor`<br>`ImageActivity`<br>`ImageAdapter`<br>`ImageFragment`<br>`ImageItemDecoration`<br>`ImageViewHolder`<br>`OutItemViewHolder` | `ConversationModule`<br>`ConversationViewModel`<br>`ImageViewModel` | — |
| main<br>`org.briarproject.briar.android.conversation.glide` | `BriarImageTransformation`<br>`CustomCornersTransformation`<br>`Radii` | `BriarDataFetcher`<br>`BriarDataFetcherFactory`<br>`BriarGlideModule`<br>`BriarModelLoader`<br>`BriarModelLoaderFactory` | — |
| main<br>`org.briarproject.briar.android.forum` | `CreateForumActivity`<br>`ForumActivity`<br>`ForumListAdapter`<br>`ForumListFragment`<br>`ForumListItem`<br>`ForumPostItem`<br>`ForumViewHolder` | `ForumListViewModel`<br>`ForumModule`<br>`ForumViewModel` | — |
| main<br>`org.briarproject.briar.android.fragment` | `BaseEventFragment`<br>`BaseFragment`<br>`ErrorFragment`<br>`FinalFragment`<br>`ProgressFragment` | `ScreenFilterDialogFragment` | — |
| main<br>`org.briarproject.briar.android.hotspot` | `AbstractTabsFragment`<br>`FallbackFragment`<br>`HotspotErrorFragment`<br>`HotspotFragment`<br>`HotspotHelpFragment`<br>`HotspotIntroFragment`<br>`ManualHotspotFragment`<br>`QrHotspotFragment`<br>`WebsiteFragment` | `AbstractConditionManager`<br>`ConditionManager`<br>`ConditionManager29`<br>`ConditionManager33`<br>`HotspotActivity`<br>`HotspotModule`<br>`HotspotState`<br>`HotspotViewModel` | `HotspotManager`<br>`WebServer`<br>`WebServerManager` |
| main<br>`org.briarproject.briar.android.introduction` | `ContactChooserFragment`<br>`IntroductionActivity`<br>`IntroductionInfo`<br>`IntroductionMessageFragment` | `IntroductionModule`<br>`IntroductionViewModel` | — |
| main<br>`org.briarproject.briar.android.logging` | — | `BriefLogFormatter`<br>`CachingLogHandler`<br>`LoggingModule` | `LogDecrypter`<br>`LogDecrypterImpl`<br>`LogEncrypter`<br>`LogEncrypterImpl` |
| main<br>`org.briarproject.briar.android.login` | `ChangePasswordActivity`<br>`OpenDatabaseFragment`<br>`PasswordFragment`<br>`StrengthMeter` | `ChangePasswordViewModel`<br>`LoginModule`<br>`LoginUtils`<br>`StartupActivity`<br>`StartupViewModel` | `SignInReminderReceiver` |
| main<br>`org.briarproject.briar.android.logout` | `SignOutFragment` | — | `ExitActivity`<br>`HideUiActivity` |
| main<br>`org.briarproject.briar.android.mailbox` | `ErrorFragment`<br>`ErrorWizardFragment`<br>`MailboxConnectingFragment`<br>`MailboxScanFragment`<br>`MailboxStatusFragment`<br>`OfflineFragment`<br>`OfflineStatusFragment`<br>`SetupDownloadFragment`<br>`SetupIntroFragment` | `CameraPermissionManager`<br>`MailboxActivity`<br>`MailboxModule`<br>`MailboxState`<br>`MailboxViewModel` | — |
| main<br>`org.briarproject.briar.android.navdrawer` | `TransportsActivity` | `IntentRouter`<br>`NavDrawerActivity`<br>`NavDrawerModule`<br>`NavDrawerViewModel`<br>`PluginViewModel` | — |
| main<br>`org.briarproject.briar.android.panic` | `PanicPreferencesActivity`<br>`PanicPreferencesFragment` | — | `FDroidSignaturePin`<br>`PanicResponderActivity` |
| main<br>`org.briarproject.briar.android.privategroup` | — | `VisibilityHelper` | — |
| main<br>`org.briarproject.briar.android.privategroup.conversation` | `GroupActivity`<br>`GroupMessageAdapter`<br>`GroupMessageItem`<br>`JoinMessageItem`<br>`JoinMessageItemViewHolder` | `GroupConversationModule`<br>`GroupViewModel` | — |
| main<br>`org.briarproject.briar.android.privategroup.creation` | `CreateGroupActivity`<br>`CreateGroupFragment`<br>`CreateGroupListener`<br>`CreateGroupMessageFragment`<br>`GroupInviteActivity`<br>`GroupInviteFragment` | `CreateGroupController`<br>`CreateGroupControllerImpl`<br>`CreateGroupModule` | — |
| main<br>`org.briarproject.briar.android.privategroup.invitation` | `GroupInvitationActivity`<br>`GroupInvitationAdapter`<br>`GroupInvitationViewHolder` | `GroupInvitationController`<br>`GroupInvitationControllerImpl`<br>`GroupInvitationModule` | — |
| main<br>`org.briarproject.briar.android.privategroup.list` | `GroupItem`<br>`GroupListAdapter`<br>`GroupListFragment`<br>`GroupViewHolder` | `GroupListModule`<br>`GroupListViewModel` | — |
| main<br>`org.briarproject.briar.android.privategroup.memberlist` | `GroupMemberListActivity`<br>`MemberListAdapter`<br>`MemberListItem`<br>`MemberListItemHolder` | `GroupMemberListController`<br>`GroupMemberListControllerImpl`<br>`GroupMemberModule` | — |
| main<br>`org.briarproject.briar.android.privategroup.reveal` | `RevealContactsActivity`<br>`RevealContactsFragment`<br>`RevealableContactAdapter`<br>`RevealableContactItem`<br>`RevealableContactViewHolder` | `GroupRevealModule`<br>`RevealContactsController`<br>`RevealContactsControllerImpl` | — |
| main<br>`org.briarproject.briar.android.qrcode` | — | `QrCodeDecoder`<br>`QrCodeUtils` | `CameraException`<br>`CameraView`<br>`PreviewConsumer` |
| main<br>`org.briarproject.briar.android.removabledrive` | `ChooserFragment`<br>`ErrorFragment`<br>`ReceiveFragment`<br>`SendFragment` | `RemovableDriveActivity`<br>`RemovableDriveViewModel`<br>`TransferDataModule`<br>`TransferDataState` | — |
| main<br>`org.briarproject.briar.android.reporting` | `CrashFragment`<br>`FeedbackActivity`<br>`ReportDataAdapter`<br>`ReportFormFragment` | `CrashReportActivity`<br>`DevReportModule`<br>`ReportData`<br>`ReportViewModel` | `BriarExceptionHandler`<br>`BriarReportCollector` |
| main<br>`org.briarproject.briar.android.settings` | `AboutFragment`<br>`AvatarPreference`<br>`ConfirmAvatarDialogFragment`<br>`ConnectionsFragment`<br>`DisplayFragment`<br>`NotificationsFragment`<br>`SecurityFragment`<br>`SettingsFragment`<br>`TorSummaryProvider` | `ConnectionsManager`<br>`ConnectionsStore`<br>`NotificationsManager`<br>`OwnIdentityInfo`<br>`SettingsActivity`<br>`SettingsModule`<br>`SettingsStore`<br>`SettingsViewModel` | — |
| main<br>`org.briarproject.briar.android.sharing` | `BaseMessageFragment`<br>`BlogInvitationActivity`<br>`BlogSharingStatusActivity`<br>`ForumInvitationActivity`<br>`ForumSharingStatusActivity`<br>`InvitationActivity`<br>`InvitationAdapter`<br>`InvitationViewHolder`<br>`ShareActivity`<br>`ShareBlogActivity`<br>`ShareBlogFragment`<br>`ShareBlogMessageFragment`<br>`ShareForumActivity`<br>`ShareForumFragment`<br>`ShareForumMessageFragment`<br>`SharingInvitationAdapter`<br>`SharingInvitationViewHolder`<br>`SharingStatusActivity`<br>`SharingStatusAdapter` | `BlogInvitationController`<br>`BlogInvitationControllerImpl`<br>`ForumInvitationController`<br>`ForumInvitationControllerImpl`<br>`InvitationController`<br>`InvitationControllerImpl`<br>`ShareBlogController`<br>`ShareBlogControllerImpl`<br>`ShareForumController`<br>`ShareForumControllerImpl`<br>`SharingController`<br>`SharingControllerImpl`<br>`SharingModule` | — |
| main<br>`org.briarproject.briar.android.splash` | `ExpiredActivity` | `ExpiredOldAndroidActivity`<br>`SplashScreenActivity` | — |
| main<br>`org.briarproject.briar.android.test` | — | `TestDataActivity` | — |
| main<br>`org.briarproject.briar.android.threaded` | `BaseThreadItemViewHolder`<br>`ThreadItem`<br>`ThreadItemAdapter`<br>`ThreadListActivity`<br>`ThreadPostViewHolder`<br>`ThreadScrollListener` | `ThreadListViewModel` | — |
| main<br>`org.briarproject.briar.android.util` | `BriarAdapter`<br>`BriarSnackbarBuilder`<br>`ItemReturningAdapter`<br>`UiUtils`<br>`VersionedAdapter` | `ActivityLaunchers`<br>`Permission`<br>`PermissionUtils` | `BriarNotificationBuilder` |
| main<br>`org.briarproject.briar.android.view` | `ArticleMovementMethod`<br>`AuthorView`<br>`BlankFragment`<br>`BriarButton`<br>`BriarRecyclerView`<br>`BriarRecyclerViewScrollListener`<br>`CompositeSendButton`<br>`EmojiTextInputView`<br>`ImagePreview`<br>`ImagePreviewAdapter`<br>`ImagePreviewDecoration`<br>`ImagePreviewItem`<br>`ImagePreviewViewHolder`<br>`InfoView`<br>`LargeTextInputView`<br>`PullDownLayout`<br>`QrCodeView`<br>`SnackbarAwareBehavior`<br>`TextAvatarView`<br>`TextInputView`<br>`TextSendController`<br>`TrustIndicatorView`<br>`UnreadMessageButton` | `TextAttachmentController` | — |
| main<br>`org.briarproject.briar.android.viewmodel` | `LiveEvent`<br>`LiveResult`<br>`MutableLiveEvent` | `DbViewModel`<br>`ViewModelFactory`<br>`ViewModelKey`<br>`ViewModelModule` | — |
| main<br>`org.briarproject.briar.android.widget` | `LinkDialogFragment`<br>`OnboardingFullDialogFragment`<br>`TouchInterceptingLinearLayout` | — | `TapSafeFrameLayout` |
| main<br>`org.briarproject.briar.api.android` | — | — | `AndroidNotificationManager`<br>`DozeWatchdog`<br>`LockManager`<br>`MemoryStats`<br>`NetworkUsageMetrics`<br>`ScreenFilterMonitor` |
| androidTest<br>`org.briarproject.briar.android` | — | `BriarTestComponentApplication`<br>`BriarTestRunner`<br>`ScreenshotOnFailureRule`<br>`UiTest`<br>`ViewActions` | — |
| androidTestOfficial<br>`org.briarproject.briar.android` | — | `BriarUiTestComponent` | — |
| androidTestOfficial<br>`org.briarproject.briar.android.account` | — | `SignInTestCreateAccount`<br>`SignInTestSignIn` | — |
| androidTestOfficial<br>`org.briarproject.briar.android.attachment` | — | `AbstractAttachmentRetrieverComponent`<br>`AttachmentRetrieverIntegrationTest` | — |
| androidTestOfficial<br>`org.briarproject.briar.android.attachment.media` | — | `AbstractImageCompressorComponent`<br>`AbstractImageCompressorTest`<br>`AbstractImageSizeCalculatorComponent`<br>`AbstractImageSizeCalculatorTest`<br>`ImageCompressorTest`<br>`ImageSizeCalculatorTest`<br>`PngSuiteImageCompressorTest`<br>`PngSuiteImageSizeCalculatorTest` | — |
| androidTestOfficial<br>`org.briarproject.briar.android.navdrawer` | — | `NavDrawerActivityTest` | — |
| androidTestScreenshot<br>`org.briarproject.briar.android` | — | `BriarUiTestComponent`<br>`OverlayTapViewAction`<br>`OverlayView`<br>`PromoVideoTest`<br>`ScreenshotTest`<br>`SetupDataTest` | — |
| androidTestScreenshot<br>`org.briarproject.briar.android.conversation` | — | `ConversationActivityScreenshotTest` | — |
| androidTestScreenshot<br>`org.briarproject.briar.android.settings` | — | `SettingsActivityScreenshotTest` | — |
| debug<br>`org.briarproject.briar.android.test` | `TestAvatarCreatorImpl` | — | — |
| release<br>`org.briarproject.briar.android.test` | `TestAvatarCreatorImpl` | — | — |
| test<br>`org.briarproject.briar.android` | — | `AndroidExecutorTestImpl` | — |
| test<br>`org.briarproject.briar.android.account` | — | `SetupActivityTest`<br>`SetupViewModelTest` | — |
| test<br>`org.briarproject.briar.android.attachment` | — | `AttachmentRetrieverTest`<br>`MarkEnforcingInputStreamTest` | — |
| test<br>`org.briarproject.briar.android.logging` | — | `LogEncryptionDecryptionTest`<br>`LoggingComponent`<br>`LoggingTestModule` | — |
| test<br>`org.briarproject.briar.android.login` | — | `ChangePasswordActivityTest` | — |
| test<br>`org.briarproject.briar.android.privategroup.list` | — | `GroupListViewModelTest` | — |
| test<br>`org.briarproject.briar.android.util` | — | `UiUtilsFormatDurationTest` | — |
| test<br>`org.briarproject.briar.android.viewmodel` | — | `LiveDataTestUtil`<br>`LiveEventTestUtil` | — |

## Bramble Android

| Source set / package | Replaceable presentation (P) | Application integration (I) | Essential native infrastructure (N) |
| --- | --- | --- | --- |
| main<br>`org.briarproject.bramble` | — | — | `BrambleAndroidEagerSingletons`<br>`BrambleAndroidModule`<br>`BrambleAppComponent`<br>`BrambleApplication` |
| main<br>`org.briarproject.bramble.account` | — | — | `AndroidAccountManager` |
| main<br>`org.briarproject.bramble.api.system` | — | — | `AlarmListener`<br>`AndroidExecutor` |
| main<br>`org.briarproject.bramble.battery` | — | — | `AndroidBatteryManager`<br>`AndroidBatteryModule` |
| main<br>`org.briarproject.bramble.network` | — | — | `AndroidNetworkManager`<br>`AndroidNetworkModule` |
| main<br>`org.briarproject.bramble.plugin.bluetooth` | — | — | `AndroidBluetoothConnectionFactory`<br>`AndroidBluetoothPlugin`<br>`AndroidBluetoothPluginFactory`<br>`AndroidBluetoothTransportConnection` |
| main<br>`org.briarproject.bramble.plugin.file` | — | — | `AndroidRemovableDrivePlugin`<br>`AndroidRemovableDrivePluginFactory` |
| main<br>`org.briarproject.bramble.plugin.tcp` | — | — | `AndroidLanTcpPlugin`<br>`AndroidLanTcpPluginFactory` |
| main<br>`org.briarproject.bramble.plugin.tor` | — | — | `AndroidTorPluginFactory` |
| main<br>`org.briarproject.bramble.system` | — | — | `AlarmConstants`<br>`AlarmReceiver`<br>`AndroidExecutorImpl`<br>`AndroidResourceProvider`<br>`AndroidSecureRandomProvider`<br>`AndroidSystemModule`<br>`AndroidTaskScheduler`<br>`AndroidTaskSchedulerModule`<br>`AndroidWakeLockModule`<br>`AndroidWakefulIoExecutorModule` |
| main<br>`org.briarproject.bramble.util` | — | — | `AndroidUtils` |
| test<br>`org.briarproject.bramble.account` | — | `AndroidAccountManagerTest` | — |

## Mailbox Android (separate upstream app)

| Source set / package | Replaceable presentation (P) | Application integration (I) | Essential native infrastructure (N) |
| --- | --- | --- | --- |
| main<br>`org.briarproject.mailbox.android` | `UiUtils` | `AppModule`<br>`ApplicationComponent`<br>`MailboxPreferences`<br>`QrCodeUtils`<br>`StatusManager` | `MailboxApplication`<br>`MailboxNotificationManager`<br>`MailboxService`<br>`StartReceiver` |
| main<br>`org.briarproject.mailbox.android.dontkillme` | `AbstractDoNotKillMeFragment`<br>`DoNotKillMeFragment`<br>`DozeView`<br>`HuaweiAppLaunchView`<br>`HuaweiProtectedAppsView`<br>`PowerView`<br>`XiaomiLockAppsView`<br>`XiaomiRecentAppsView` | `DoNotKillMeUtils` | — |
| main<br>`org.briarproject.mailbox.android.ui` | `ClockSkewFragment`<br>`InitFragment`<br>`MainActivity`<br>`NoNetworkFragment`<br>`OnboardingContainerFragment`<br>`OnboardingFragment`<br>`QrCodeFragment`<br>`QrCodeLinkFragment`<br>`SetupCompleteFragment`<br>`StartupFragment`<br>`StatusFragment`<br>`StoppingFragment`<br>`Utils`<br>`WipeCompleteActivity`<br>`WipeCompleteFragment`<br>`WipingFragment` | `MailboxViewModel` | `StartupFailureActivity` |
| main<br>`org.briarproject.mailbox.core` | — | — | `AndroidEagerSingletons` |
| main<br>`org.briarproject.mailbox.core.system` | — | — | `AlarmConstants`<br>`AlarmReceiver`<br>`AndroidExecutor`<br>`AndroidExecutorImpl`<br>`AndroidSystemModule`<br>`AndroidTaskScheduler`<br>`AndroidTaskSchedulerModule`<br>`AndroidWakeLock`<br>`AndroidWakeLockImpl`<br>`AndroidWakeLockManager`<br>`AndroidWakeLockManagerImpl`<br>`DozeWatchdog`<br>`RenewableWakeLock`<br>`SharedWakeLock` |
| main<br>`org.briarproject.mailbox.core.tor` | — | — | `AndroidLocationUtils`<br>`AndroidNetworkManager`<br>`AndroidTorModule`<br>`AndroidTorPlugin` |
| androidTest<br>`org.briarproject.mailbox` | — | `JacksonProguardTest` | — |
