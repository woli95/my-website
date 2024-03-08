import { homeViewsData } from "./home.utils";

export type HomeContext = {
  currentView: HomeViews;
  settingsVisible: boolean;
};

export type HomeViews = keyof typeof homeViewsData;

export type HomeIconButtons = "github" | "linkedin" | "npmjs" | "logo";
