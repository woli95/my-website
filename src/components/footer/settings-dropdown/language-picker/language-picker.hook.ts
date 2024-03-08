import { StoreMachineContext, SupportedLanguages } from "@services/store";
import { useCallback } from "react";

export const useLanguagePicker = () => {
  const language = StoreMachineContext.useSelector(
    (state) => state.context.language
  );
  const { send } = StoreMachineContext.useActorRef();

  const handleOnPress = useCallback(
    (language: SupportedLanguages) => () =>
      send({ type: "CHANGE LANGUAGE", payload: language }),
    [send]
  );

  return {
    handleOnPress,
    language,
  };
};
