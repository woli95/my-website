import { StoreMachineContext } from "@services/store";
import { EN } from "./EN";
import { PL } from "./PL";

const translations = {
  PL: PL,
  EN: EN,
};

export const useTranslations = () => {
  const currentLanguage = StoreMachineContext.useSelector(
    (state) => state.context.language
  );

  const t = (key: string) => translations[currentLanguage]?.[key] ?? key;

  return { t };
};
