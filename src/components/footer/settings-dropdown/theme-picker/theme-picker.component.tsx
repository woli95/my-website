import { View } from "react-native";
import { TranslatedText } from "../../../TranslatedText";
import { useThemePicker } from "./theme-picker.hook";

export const ThemePicker = () => {
  const { handleOnPress, theme } = useThemePicker();

  return (
    <div className="picker">
      <TranslatedText tKey="Theme" style={{ color: "white", fontSize: 10 }} />
      <View style={{ flexDirection: "row", columnGap: 12 }}>
        <TranslatedText
          tKey="DARK"
          style={{
            color: theme === "DARK" ? "#fff" : "#888",
            //@ts-ignore
            cursor: "pointer",
            fontSize: 10,
          }}
          onPress={handleOnPress("DARK")}
        />
        <TranslatedText
          tKey="LIGHT"
          style={{
            color: theme === "LIGHT" ? "#fff" : "#888",
            //@ts-ignore
            cursor: "not-allowed",
            fontSize: 10,
          }}
          // onPress={handleOnPress("LIGHT")}
          disabled={true}
        />
      </View>
    </div>
  );
};
