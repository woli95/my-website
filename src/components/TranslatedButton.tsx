import { useTranslations } from "@services/translations";
import { Button, ButtonProps } from "react-native";

type TranslatedButtonProps = Omit<ButtonProps, "title"> & { tKey: string };

export const TranslatedButton = (props: TranslatedButtonProps) => {
  const { t } = useTranslations();
  return <Button {...props} title={t(props.tKey)} />;
};
