import { ViewProps } from "react-native";

export {};

declare global {
  type TestID = (elementName: string) => string;
  type CommonComponentProps = {
    style?: ViewProps["style"];
    // testID: TestID;
  };
}
