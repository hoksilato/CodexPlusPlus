import { en } from "./en";
import { vi } from "./vi";
import { zh } from "./zh";
import type { Language, UiText } from "./types";

export type { Language, Route, Theme, UiText } from "./types";

export const languageOptions: Array<{ id: Language; label: string; shortLabel: string }> = [
  { id: "zh", label: "中文", shortLabel: "中文" },
  { id: "en", label: "English", shortLabel: "EN" },
  { id: "vi", label: "Tiếng Việt", shortLabel: "VI" },
];

export const uiText: Record<Language, UiText> = { zh, en, vi };
