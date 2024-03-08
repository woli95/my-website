import { StoreMachineContext } from "@services/store";
import { SupportedThemes } from "@services/store/store.types";
import { useCallback } from "react";

export const useThemePicker = () => {
  const theme = StoreMachineContext.useSelector((state) => state.context.theme);

  const { send } = StoreMachineContext.useActorRef();

  const handleOnPress = useCallback(
    (theme: SupportedThemes) => () =>
      send({ type: "CHANGE THEME", payload: theme }),

    [send]
  );

  return {
    handleOnPress,
    theme,
  };
};
