import { StyleSheet, View } from "react-native";
import { IconLinkButton, TranslatedText } from "@components";
import { useCallback, useState } from "react";
import { SettingsDropdown } from "./settings-dropdown";

export const Footer = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const handleOnClick = useCallback(() => setSettingsOpen((c) => !c), []);

  return (
    <View style={styles.container}>
      <TranslatedText style={styles.text} tKey="copyright" />
      <IconLinkButton variant="settings" size={24} onClick={handleOnClick} />
      {settingsOpen && <SettingsDropdown />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 24,
  },

  text: {
    color: "#FFF",
  },
});
