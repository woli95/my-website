import { assign, setup } from "xstate";
import { HomeContext, HomeIconButtons, HomeViews } from "./home.types";
import { RoutingApi } from "@utils/routing";
import { config } from "@services/config";

export const homeMachine = setup({
  types: {
    context: {} as HomeContext,
    events: {} as
      | {
          type: "top-bar-button-press";
          payload: HomeIconButtons;
        }
      | {
          type: "projects-section-button-press";
          payload: HomeViews;
        },
  },
  actors: {},
  actions: {
    navigateTo: (_, params: string) => RoutingApi.openBrowserAt(params),
    setCurrentView: assign({
      currentView: (_, params: HomeViews) => params,
    }),
    toggleSettings: assign({
      settingsVisible: (state) => !state.context.settingsVisible,
    }),
  },
}).createMachine({
  id: "home-machine",
  initial: "ACTIVE",
  context: { currentView: "welcome", settingsVisible: false },
  states: {
    ACTIVE: {
      on: {
        "top-bar-button-press": [
          {
            guard: (state) => state.event.payload === "logo",
            actions: { type: "setCurrentView", params: "welcome" },
          },
          {
            guard: (state) => state.event.payload === "github",
            actions: { type: "navigateTo", params: config.urls.github },
          },
          {
            guard: (state) => state.event.payload === "linkedin",
            actions: { type: "navigateTo", params: config.urls.linkedin },
          },
          {
            guard: (state) => state.event.payload === "npmjs",
            actions: { type: "navigateTo", params: config.urls.npmjs },
          },
        ],
        "projects-section-button-press": {
          guard: (state) => state.event.payload !== state.context.currentView,
          actions: {
            type: "setCurrentView",
            params: (state) => state.event.payload,
          },
        },
      },
    },
  },
});
