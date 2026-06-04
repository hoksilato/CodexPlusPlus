export type Route = "overview" | "relay" | "sessions" | "context" | "enhance" | "userScripts" | "recommendations" | "maintenance" | "about" | "settings";
export type Theme = "dark" | "light";
export type Language = "zh" | "en" | "vi";

export type UiText = {
  brandSubtitle: string;
  routeLabels: Record<Route, string>;
  routeSubtitles: Record<Route, string>;
  topbar: {
    switchToLight: string;
    switchToDark: string;
    restart: string;
    refresh: string;
    language: string;
  };
  runtime: {
    callFailed: string;
    backendUnavailable: string;
  };
  overview: {
    healthTitle: string;
    healthDetail: string;
    codexVersion: string;
    codexVersionMissing: string;
    codexApp: string;
    codexAppMissing: string;
    silentShortcut: string;
    silentShortcutMissing: string;
    managementShortcut: string;
    managementShortcutMissing: string;
    check: string;
    repairEntrypoints: string;
    repairBackend: string;
    latestLaunch: string;
    noStatusFile: string;
    noLaunchStatus: string;
    launchCodex: string;
    openAbout: string;
    status: string;
    message: string;
    time: string;
    statuses: Record<string, string>;
  };
  settings: {
    basicTitle: string;
    themeTitle: string;
    themeCurrent: (theme: Theme) => string;
    dark: string;
    light: string;
    switchTheme: string;
    relayTestModel: string;
    relayTestModelPlaceholder: string;
    enableCliWrapper: string;
    wrapperBaseUrl: string;
    apiKeyEnv: string;
    apiKey: string;
    saveSettings: string;
    resetSettings: string;
    launchArgsTitle: string;
    launchArgsDetail: string;
    extraArgs: string;
    extraArgsHint: string;
  };
};
