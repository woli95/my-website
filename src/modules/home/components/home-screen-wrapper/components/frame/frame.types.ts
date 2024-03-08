import { CSSProperties, SVGAttributes } from "react";

export type FrameProps = {
  style?: CSSProperties;
  colorA: SVGAttributes<SVGStopElement>["stopColor"];
  colorB: SVGAttributes<SVGStopElement>["stopColor"];
};
