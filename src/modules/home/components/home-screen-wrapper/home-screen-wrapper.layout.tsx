import { StyleSheet, View } from "react-native";
import { Frame, TopBar } from "./components";
import { ReactNode } from "react";
import { HomeMachineContext } from "@modules/home/machine";
import { homeViewsData } from "@modules/home/machine/home.utils";
import { Footer } from "@components";

type Props = {
  children: ReactNode;
};

export const HomeScreenWrapper = (props: Props) => {
  const currentView = HomeMachineContext.useSelector(
    (state) => state.context.currentView
  );

  return (
    <View style={styles.container}>
      {/* Absolute */}

      <Frame
        style={styles.topLeftFrame}
        colorA={homeViewsData[currentView].colorA}
        colorB={homeViewsData[currentView].colorB}
      />
      <Frame
        style={styles.topRightFrame}
        colorA={homeViewsData[currentView].colorA}
        colorB={homeViewsData[currentView].colorB}
      />

      <View style={styles.content}>
        <TopBar />
        <View style={styles.viewContainer}>{props.children}</View>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    margin: "auto",
    maxWidth: 1480,
    padding: 50,
  },
  topLeftFrame: { position: "absolute", top: 0, left: 0 },
  topRightFrame: {
    transform: "rotate(180deg)",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  content: { flex: 1, justifyContent: "center" },
  viewContainer: {
    flex: 1,
    // backgroundColor: "pink",
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    userSelect: "none",
  },
});
