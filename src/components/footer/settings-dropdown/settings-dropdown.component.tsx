import { View } from "react-native";
import { LanguagePicker } from "./language-picker";
import { FontSizePicker } from "./font-size-picker";
import { ThemePicker } from "./theme-picker";
import { motion } from "framer-motion";
import { useSettingsDropdown } from "./settings-dropdown.hook";

export const SettingsDropdown = () => {
  const _ = useSettingsDropdown();
  console.log(_);

  return (
    <motion.div
      style={{
        position: "absolute",
        width: 190,
        bottom: 40,
        right: 0,
        backgroundColor: "rgba(0,0,0,0.5)",

        borderRadius: 8,
      }}
    >
      <LanguagePicker />
      <View
        style={{
          height: 1,
          marginVertical: 2,
          //   marginHorizontal: 30,
          backgroundColor: "#fff",
          opacity: 0.15,
        }}
      />
      <ThemePicker />
      <View
        style={{
          height: 1,
          marginVertical: 2,
          //   marginHorizontal: 30,
          backgroundColor: "#fff",
          opacity: 0.15,
        }}
      />
      <FontSizePicker />
      <style>{`
      .picker {
        padding: 0px 10px 0px 10px;
        height: 40px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        display: flex;
        border-radius: 8px;
      }
      .picker:hover {
        background-color: rgba(0,0,0,0.8)
      }
      `}</style>
    </motion.div>
  );
};
