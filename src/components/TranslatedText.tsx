import { useTranslations } from "@services/translations";
import { Text, TextProps } from "react-native";

type TranslatedTextProps = Omit<TextProps, "children"> & { tKey: string };

export const TranslatedText = (props: TranslatedTextProps) => {
  const { t } = useTranslations();

  return <Text {...props}>{t(props.tKey)}</Text>;
};
