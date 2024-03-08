import { View, ViewProps } from "react-native";
import { TranslatedText } from "@components";
import { useLanguagePicker } from "./language-picker.hook";
import { motion } from "framer-motion";

export const LanguagePicker = ({ style, ...props }: ViewProps) => {
  const { handleOnPress, language } = useLanguagePicker();

  return (
    <div className="picker">
      <TranslatedText
        tKey="Language"
        style={{ color: "white", fontSize: 10 }}
      />
      <View style={{ flexDirection: "row", columnGap: 12 }}>
        <motion.svg
          animate={
            language === "PL"
              ? {
                  scale: 1.2,
                }
              : { scale: 1 }
          }
          transition={{
            duration: 0.25,
          }}
          initial={{
            scale: language === "PL" ? 1.2 : 1,
            borderRadius: 6,
            cursor: "pointer",
          }}
          xmlns="http://www.w3.org/2000/svg"
          id="flag-icons-pl"
          viewBox="0 0 640 480"
          width="22"
          onClick={handleOnPress("PL")}
        >
          <g fill-rule="evenodd">
            <motion.path
              animate={
                language === "PL"
                  ? {
                      fill: "#FFFFFF",
                    }
                  : { fill: "#888888" }
              }
              initial={{ fill: language ? "#FFFFFF" : "#888888" }}
              transition={{ duration: 0.25 }}
              d="M640 480H0V0h640z"
            />
            <motion.path
              animate={
                language === "PL"
                  ? {
                      fill: "#dc143c",
                    }
                  : { fill: "#666666" }
              }
              transition={{ duration: 0.25 }}
              initial={{ fill: language ? "#dc143c" : "#666666" }}
              d="M640 480H0V240h640z"
            />
          </g>
        </motion.svg>
        <motion.svg
          animate={
            language === "EN"
              ? {
                  scale: 1.2,
                }
              : { scale: 1 }
          }
          transition={{
            duration: 0.25,
          }}
          initial={{
            scale: language === "EN" ? 1.2 : 1,
            borderRadius: 6,
            cursor: "pointer",
          }}
          xmlns="http://www.w3.org/2000/svg"
          id="flag-icons-gb"
          viewBox="0 0 640 480"
          width="22"
          onClick={handleOnPress("EN")}
        >
          <motion.path
            animate={
              language === "EN"
                ? {
                    fill: "#012169",
                  }
                : { fill: "#444444" }
            }
            transition={{ duration: 0.25 }}
            initial={{ fill: language ? "#012169" : "#444444" }}
            d="M0 0h640v480H0z"
          />
          <motion.path
            animate={
              language === "EN"
                ? {
                    fill: "#C8102E",
                  }
                : { fill: "#888888" }
            }
            transition={{ duration: 0.25 }}
            initial={{ fill: language ? "#C8102E" : "#888888" }}
            d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"
          />
          <motion.path
            animate={
              language === "EN"
                ? {
                    fill: "#FFFFFF",
                  }
                : { fill: "#666666" }
            }
            transition={{ duration: 0.25 }}
            initial={{ fill: language ? "#FFFFFF" : "#666666" }}
            d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
          />
          <motion.path
            animate={
              language === "EN"
                ? {
                    fill: "#FFFFFF",
                  }
                : { fill: "#666666" }
            }
            transition={{ duration: 0.25 }}
            initial={{ fill: language ? "#FFFFFF" : "#666666" }}
            d="M241 0v480h160V0zM0 160v160h640V160z"
          />
          <motion.path
            animate={
              language === "EN"
                ? {
                    fill: "#C8102E",
                  }
                : { fill: "#888888" }
            }
            transition={{ duration: 0.25 }}
            initial={{ fill: language ? "#C8102E" : "#888888" }}
            d="M0 193v96h640v-96zM273 0v480h96V0z"
          />
        </motion.svg>
      </View>
    </div>
  );
};
