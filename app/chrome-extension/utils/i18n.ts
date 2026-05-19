/**
 * Chrome Extension i18n utility
 * Provides safe access to chrome.i18n.getMessage with fallbacks
 */

// Fallback messages for when Chrome APIs aren't available (English)
const fallbackMessages: Record<string, string> = {
  // Extension metadata
  extensionName: 'chrome-mcp-server',
  extensionDescription: 'Exposes browser capabilities with your own chrome',

  // Section headers
  nativeServerConfigLabel: 'Native Server Configuration',
  semanticEngineLabel: 'Semantic Engine',
  embeddingModelLabel: 'Embedding Model',
  indexDataManagementLabel: 'Index Data Management',
  modelCacheManagementLabel: 'Model Cache Management',

  // Status labels
  statusLabel: 'Status',
  runningStatusLabel: 'Running Status',
  connectionStatusLabel: 'Connection Status',
  lastUpdatedLabel: 'Last Updated:',

  // Connection states
  connectButton: 'Connect',
  disconnectButton: 'Disconnect',
  connectingStatus: 'Connecting...',
  connectedStatus: 'Connected',
  disconnectedStatus: 'Disconnected',
  detectingStatus: 'Detecting...',

  // Server states
  serviceRunningStatus: 'Service Running (Port: {0})',
  serviceNotConnectedStatus: 'Service Not Connected',
  connectedServiceNotStartedStatus: 'Connected, Service Not Started',

  // Configuration labels
  mcpServerConfigLabel: 'MCP Server Configuration',
  connectionPortLabel: 'Connection Port',
  refreshStatusButton: 'Refresh Status',
  copyConfigButton: 'Copy Configuration',

  // Action buttons
  retryButton: 'Retry',
  cancelButton: 'Cancel',
  confirmButton: 'Confirm',
  saveButton: 'Save',
  closeButton: 'Close',
  resetButton: 'Reset',

  // Progress states
  initializingStatus: 'Initializing...',
  processingStatus: 'Processing...',
  loadingStatus: 'Loading...',
  clearingStatus: 'Clearing...',
  cleaningStatus: 'Cleaning...',
  downloadingStatus: 'Downloading...',

  // Semantic engine states
  semanticEngineReadyStatus: 'Semantic Engine Ready',
  semanticEngineInitializingStatus: 'Semantic Engine Initializing...',
  semanticEngineInitFailedStatus: 'Semantic Engine Initialization Failed',
  semanticEngineNotInitStatus: 'Semantic Engine Not Initialized',
  initSemanticEngineButton: 'Initialize Semantic Engine',
  reinitializeButton: 'Reinitialize',

  // Model states
  downloadingModelStatus: 'Downloading Model... {0}%',
  switchingModelStatus: 'Switching Model...',
  modelLoadedStatus: 'Model Loaded',
  modelFailedStatus: 'Model Failed to Load',

  // Model descriptions
  lightweightModelDescription: 'Lightweight Multilingual Model',
  betterThanSmallDescription: 'Slightly larger than e5-small, but better performance',
  multilingualModelDescription: 'Multilingual Semantic Model',

  // Performance levels
  fastPerformance: 'Fast',
  balancedPerformance: 'Balanced',
  accuratePerformance: 'Accurate',

  // Error messages
  networkErrorMessage: 'Network connection error, please check network and retry',
  modelCorruptedErrorMessage: 'Model file corrupted or incomplete, please retry download',
  unknownErrorMessage: 'Unknown error, please check if your network can access HuggingFace',
  permissionDeniedErrorMessage: 'Permission denied',
  timeoutErrorMessage: 'Operation timed out',

  // Data statistics
  indexedPagesLabel: 'Indexed Pages',
  indexSizeLabel: 'Index Size',
  activeTabsLabel: 'Active Tabs',
  vectorDocumentsLabel: 'Vector Documents',
  cacheSizeLabel: 'Cache Size',
  cacheEntriesLabel: 'Cache Entries',

  // Data management
  clearAllDataButton: 'Clear All Data',
  clearAllCacheButton: 'Clear All Cache',
  cleanExpiredCacheButton: 'Clean Expired Cache',
  exportDataButton: 'Export Data',
  importDataButton: 'Import Data',

  // Dialog titles
  confirmClearDataTitle: 'Confirm Clear Data',
  settingsTitle: 'Settings',
  aboutTitle: 'About',
  helpTitle: 'Help',

  // Dialog messages
  clearDataWarningMessage:
    'This operation will clear all indexed webpage content and vector data, including:',
  clearDataList1: 'All webpage text content index',
  clearDataList2: 'Vector embedding data',
  clearDataList3: 'Search history and cache',
  clearDataIrreversibleWarning:
    'This operation is irreversible! After clearing, you need to browse webpages again to rebuild the index.',
  confirmClearButton: 'Confirm Clear',

  // Cache states
  cacheDetailsLabel: 'Cache Details',
  noCacheDataMessage: 'No cache data',
  loadingCacheInfoStatus: 'Loading cache information...',
  processingCacheStatus: 'Processing cache...',
  expiredLabel: 'Expired',

  // Browser integration
  bookmarksBarLabel: 'Bookmarks Bar',
  newTabLabel: 'New Tab',
  currentPageLabel: 'Current Page',

  // Accessibility
  menuLabel: 'Menu',
  navigationLabel: 'Navigation',
  mainContentLabel: 'Main Content',

  // Future features
  languageSelectorLabel: 'Language',
  themeLabel: 'Theme',
  lightTheme: 'Light',
  darkTheme: 'Dark',
  autoTheme: 'Auto',
  advancedSettingsLabel: 'Advanced Settings',
  debugModeLabel: 'Debug Mode',
  verboseLoggingLabel: 'Verbose Logging',

  // Notifications
  successNotification: 'Operation completed successfully',
  warningNotification: 'Warning: Please review before proceeding',
  infoNotification: 'Information',
  configCopiedNotification: 'Configuration copied to clipboard',
  dataClearedNotification: 'Data cleared successfully',

  // Units
  bytesUnit: 'bytes',
  kilobytesUnit: 'KB',
  megabytesUnit: 'MB',
  gigabytesUnit: 'GB',
  itemsUnit: 'items',
  pagesUnit: 'pages',

  // Legacy keys for backwards compatibility
  nativeServerConfig: 'Native Server Configuration',
  runningStatus: 'Running Status',
  refreshStatus: 'Refresh Status',
  lastUpdated: 'Last Updated:',
  mcpServerConfig: 'MCP Server Configuration',
  connectionPort: 'Connection Port',
  connecting: 'Connecting...',
  disconnect: 'Disconnect',
  connect: 'Connect',
  semanticEngine: 'Semantic Engine',
  embeddingModel: 'Embedding Model',
  retry: 'Retry',
  indexDataManagement: 'Index Data Management',
  clearing: 'Clearing...',
  clearAllData: 'Clear All Data',
  copyConfig: 'Copy Configuration',
  serviceRunning: 'Service Running (Port: {0})',
  connectedServiceNotStarted: 'Connected, Service Not Started',
  serviceNotConnected: 'Service Not Connected',
  detecting: 'Detecting...',
  lightweightModel: 'Lightweight Multilingual Model',
  betterThanSmall: 'Slightly larger than e5-small, but better performance',
  multilingualModel: 'Multilingual Semantic Model',
  fast: 'Fast',
  balanced: 'Balanced',
  accurate: 'Accurate',
  semanticEngineReady: 'Semantic Engine Ready',
  semanticEngineInitializing: 'Semantic Engine Initializing...',
  semanticEngineInitFailed: 'Semantic Engine Initialization Failed',
  semanticEngineNotInit: 'Semantic Engine Not Initialized',
  downloadingModel: 'Downloading Model... {0}%',
  switchingModel: 'Switching Model...',
  networkError: 'Network connection error, please check network and retry',
  modelCorrupted: 'Model file corrupted or incomplete, please retry download',
  unknownError: 'Unknown error, please check if your network can access HuggingFace',
  reinitialize: 'Reinitialize',
  initializing: 'Initializing...',
  initSemanticEngine: 'Initialize Semantic Engine',
  indexedPages: 'Indexed Pages',
  indexSize: 'Index Size',
  activeTabs: 'Active Tabs',
  vectorDocuments: 'Vector Documents',
  confirmClearData: 'Confirm Clear Data',
  clearDataWarning:
    'This operation will clear all indexed webpage content and vector data, including:',
  clearDataIrreversible:
    'This operation is irreversible! After clearing, you need to browse webpages again to rebuild the index.',
  confirmClear: 'Confirm Clear',
  cancel: 'Cancel',
  confirm: 'Confirm',
  processing: 'Processing...',
  modelCacheManagement: 'Model Cache Management',
  cacheSize: 'Cache Size',
  cacheEntries: 'Cache Entries',
  cacheDetails: 'Cache Details',
  noCacheData: 'No cache data',
  loadingCacheInfo: 'Loading cache information...',
  processingCache: 'Processing cache...',
  cleaning: 'Cleaning...',
  cleanExpiredCache: 'Clean Expired Cache',
  clearAllCache: 'Clear All Cache',
  expired: 'Expired',
  bookmarksBar: 'Bookmarks Bar',

  // Popup home view
  quickToolsLabel: 'Quick Tools',
  recordingComingSoonTooltip: 'Recording feature in development',
  enablePageEditTooltip: 'Enable page edit mode',
  enableElementMarkerTooltip: 'Enable element marker',
  managementSectionLabel: 'Management',
  agentChatTitle: 'AI Assistant',
  agentChatDesc: 'AI Agent conversations & tasks',
  workflowManagementTitle: 'Workflow Management',
  workflowManagementDesc: 'Record & replay automation flows',
  elementMarkerTitle: 'Element Marker Management',
  elementMarkerDesc: 'Manage page element markers',
  localModelTitle: 'Local Model',
  localModelDesc: 'Semantic engine & model management',
  comingSoonMessage: '{0} feature is under development, stay tuned',
  featureRecordReplay: 'Recording & Replay',

  // Secondary popup and sidepanel views
  backHomeTitle: 'Back to home',
  backButton: 'Back',
  deleteButton: 'Delete',
  sidepanelNavigatorTooltip: 'Switch page (drag to move, double-click to reset position)',
  sidepanelNavigatorTitle: 'Switch Page',
  elementMarkerCurrentPageLabel: 'Current Page',
  elementMarkerMarkedElementsLabel: 'Marked Elements',
  elementMarkerAddTitle: 'Add Marker',
  elementMarkerEditTitle: 'Edit Marker',
  nameLabel: 'Name',
  elementMarkerNamePlaceholder: 'Name, e.g. Login button',
  elementMarkerSelectorPlaceholder: 'CSS selector',
  elementMarkerSelectorOrXPathPlaceholder: 'CSS selector or XPath',
  selectorTypeLabel: 'Selector Type',
  matchTypeLabel: 'Match Type',
  selectorLabel: 'Selector',
  matchTypePrefix: 'Path Prefix',
  matchTypeExact: 'Exact Match',
  matchTypeHost: 'Domain',
  clearButton: 'Clear',
  validateButton: 'Validate',
  editButton: 'Edit',
  updateButton: 'Update',
  markerSearchPlaceholder: 'Search marker name or selector...',
  markerFilteredStats: 'Filtered {0} markers ({1} total, {2} domains)',
  markerStats: '{0} markers across {1} domains',
  markerCountLabel: '{0} markers',
  noMatchingMarkers: 'No matching markers found',
  noMarkersMessage: 'No marked elements yet',
  localFileLabel: '(Local file)',
  unknownUrlLabel: '(Unknown URL)',
  confirmDeleteMarkerMessage: 'Delete marker "{0}"?',
  v3TriggerCreateUnavailable:
    'V3 Trigger management is not implemented yet, so triggers cannot be created.',
  v3TriggerEditUnavailable:
    'V3 Trigger management is not implemented yet, so triggers cannot be edited.',
  v3BuilderEditUnavailable: 'V3 Builder is not implemented yet, so workflows cannot be edited.',
  v3BuilderCreateUnavailable: 'V3 Builder is not implemented yet, so workflows cannot be created.',
  confirmDeleteWorkflowMessage: 'Delete this workflow? This cannot be undone.',
  replayFailedLog: 'Replay failed',
  scheduleExecutionTitle: 'Scheduled Execution',
  enabledLabel: 'Enabled',
  enableScheduleLabel: 'Enable schedule',
  typeLabel: 'Type',
  scheduleTypeInterval: 'Every N minutes',
  scheduleTypeDaily: 'Fixed daily time',
  scheduleTypeOnce: 'Run once',
  intervalMinutesLabel: 'Interval (minutes)',
  timeHhMmLabel: 'Time (HH:mm)',
  timeIsoLabel: 'Time (ISO)',
  timeHhMmPlaceholder: 'e.g. 09:30',
  timeIsoPlaceholder: 'e.g. 2025-10-05T10:00:00',
  argsJsonLabel: 'Args (JSON)',
  existingSchedulesLabel: 'Existing Schedules',
  scheduleIntervalDescription: 'Every {0} minutes',
  scheduleDailyDescription: 'Daily at {0}',
  scheduleOnceDescription: 'Once at {0}',
  runStatusLabel: 'Status',
  durationLabel: 'Duration',
  runStatusQueued: 'Queued',
  runStatusRunning: 'Running',
  runStatusPaused: 'Paused',
  runStatusSucceeded: 'Succeeded',
  runStatusFailed: 'Failed',
  runStatusCanceled: 'Canceled',
};

/**
 * Safe i18n message getter with fallback support
 * @param key Message key
 * @param substitutions Optional substitution values
 * @returns Localized message or fallback
 */
export function getMessage(key: string, substitutions?: string[]): string {
  try {
    // Check if Chrome extension APIs are available
    if (typeof chrome !== 'undefined' && chrome.i18n && chrome.i18n.getMessage) {
      const message = chrome.i18n.getMessage(key, substitutions);
      if (message) {
        return message;
      }
    }
  } catch (error) {
    console.warn(`Failed to get i18n message for key "${key}":`, error);
  }

  // Fallback to English messages
  let fallback = fallbackMessages[key] || key;

  // Handle substitutions in fallback messages
  if (substitutions && substitutions.length > 0) {
    substitutions.forEach((value, index) => {
      fallback = fallback.replace(`{${index}}`, value);
    });
  }

  return fallback;
}

/**
 * Check if Chrome extension i18n APIs are available
 */
export function isI18nAvailable(): boolean {
  try {
    return (
      typeof chrome !== 'undefined' && chrome.i18n && typeof chrome.i18n.getMessage === 'function'
    );
  } catch {
    return false;
  }
}
