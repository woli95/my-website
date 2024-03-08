import { StyleSheet, Text, View } from "react-native";
import { TranslatedText } from "@components";
import { HomeMachineContext } from "@modules/home/machine";

export const WelcomeSection = (props: CommonComponentProps) => {
  const currentView = HomeMachineContext.useSelector(
    (state) => state.context.currentView
  );

  return (
    <View style={props.style}>
      <View style={{ height: 80, width: 350, backgroundColor: "brown" }} />
      <View style={styles.bottomSection}>
        <View style={{ width: 2, backgroundColor: "red" }} />
        <View style={styles.textSection}>
          <Text>{currentView}</Text>
          <TranslatedText tKey="My name is Ian Dunkerley, I'm a front-end developer based in Torquay, Devon, UK. I have developed many types of front-ends well know DJ applications to Ecommerce booking platforms." />

          <TranslatedText tKey="I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX." />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSection: {
    flexDirection: "row",
    columnGap: 32,
  },
  textSection: {
    flex: 1,
    rowGap: 40,
    paddingVertical: 12,
  },
});
