import { StyleSheet, View } from "react-native";
import { TranslatedText } from "@components";
import { HomeMachineContext, homeViewsDataArray } from "@modules/home/machine";
import { ProjectItem } from "./components";
import { useCallback } from "react";
import { HomeViews } from "@modules/home/machine/home.types";

export const ProjectsSection = (props: CommonComponentProps) => {
  const { send } = HomeMachineContext.useActorRef();
  const handleOnClick = useCallback(
    (project: HomeViews) => () =>
      send({ type: "projects-section-button-press", payload: project }),
    [send]
  );

  return (
    <View style={props.style}>
      <TranslatedText tKey="Projects" />
      <View style={styles.projectItemsContainer}>
        {homeViewsDataArray
          .filter((item) => item.id !== "welcome")
          .map((item) => (
            <ProjectItem
              key={item.id}
              item={item}
              onClick={handleOnClick(item.id as HomeViews)}
            />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  projectItemsContainer: {
    rowGap: 24,
    alignItems: "flex-start",
  },
});
