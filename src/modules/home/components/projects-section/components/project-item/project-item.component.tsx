import { View } from "react-native";
import { TranslatedText } from "@components";
import { homeViewsDataArray } from "@modules/home/machine/home.utils";
import { useProjectItem } from "./project-item.hook";
import { CSSProperties, memo } from "react";

type Props = {
  item: (typeof homeViewsDataArray)[0];
  onClick: VoidFunction;
};

export const ProjectItem = memo(({ item, onClick }: Props) => {
  const { handleOnClick, handleOnMouseEnter, handleOnMouseLeave } =
    useProjectItem(onClick);

  return (
    // @ts-ignore
    <View style={styles.container} onPointerDown={handleOnClick}>
      <TranslatedText tKey={item.titleTKey} />
      <View style={{ height: 2, backgroundColor: "red" }} />
    </View>
  );
});

const styles = {
  container: {
    rowGap: 4,
    cursor: "pointer",
  },
} as Record<string, CSSProperties>;
