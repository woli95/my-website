import { StyleSheet, View } from "react-native";

import { HomeMachineContext } from "@modules/home/machine";
import { useCallback } from "react";
import { IconLinkButton } from "@components";
import { HomeIconButtons } from "@modules/home/machine/home.types";

export const TopBar = (props: CommonComponentProps) => {
  const { send } = HomeMachineContext.useActorRef();

  const handlePress = useCallback(
    (variant: HomeIconButtons) => () => {
      send({ type: "top-bar-button-press", payload: variant });
    },
    [send]
  );

  return (
    <View style={[styles.container, props.style]}>
      <IconLinkButton variant="logo" size={50} onClick={handlePress("logo")} />
      <View style={styles.rightButtonsContainer}>
        <IconLinkButton
          variant="npmjs"
          size={24}
          onClick={handlePress("npmjs")}
        />
        <IconLinkButton
          variant="linkedin"
          size={24}
          onClick={handlePress("linkedin")}
        />
        <IconLinkButton
          variant="github"
          size={24}
          onClick={handlePress("github")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  rightButtonsContainer: {
    flexDirection: "row",
    columnGap: 32,
    alignItems: "center",
  },
});
