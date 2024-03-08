import { assign, fromTransition, setup } from "xstate";
import {
  StoreContext,
  SupportedLanguages,
  SupportedThemes,
} from "./store.types";
import { LocalStorage } from "@utils/local-storage";

enum StoreStates {
  IDLE = "IDLE",
  CHANGING_LANGUAGE = "CHANGING_LANGUAGE",
}

type SetLanguageEvent = {
  type: "CHANGE LANGUAGE";
  payload: SupportedLanguages;
};
type SetThemeEvent = {
  type: "CHANGE THEME";
  payload: SupportedThemes;
};

export const storeMachine = setup({
  types: {
    context: {} as StoreContext,
    events: {} as SetLanguageEvent | SetThemeEvent,
  },
  actors: {
    asd: fromTransition((state, event) => {
      return state;
    }, {}),
  },
  actions: {
    changeLanguage: assign({
      language: (_, params: SupportedLanguages) => params,
    }),
    changeTheme: assign({
      theme: (_, params: SupportedThemes) => params,
    }),
    updateLanguageInCache: (_, params: SupportedLanguages) =>
      LocalStorage.set("language", params),
    executeEventCallback: (_, params?: Function) => params?.(),
  },
}).createMachine({
  id: "store-machine",
  initial: StoreStates.IDLE,
  context: {
    language: "PL",
    theme: "DARK",
  },
  states: {
    [StoreStates.IDLE]: {
      on: {
        "CHANGE LANGUAGE": [
          {
            guard: ({ context, event }) => context.language !== event.payload,
            actions: [
              {
                type: "changeLanguage",
                params: ({ event }) => event.payload,
              },
            ],
          },
        ],
        "CHANGE THEME": [
          {
            guard: ({ context, event }) => context.theme !== event.payload,
            actions: [
              {
                type: "changeTheme",
                params: ({ event }) => event.payload,
              },
            ],
          },
        ],
      },
    },
  },
});
