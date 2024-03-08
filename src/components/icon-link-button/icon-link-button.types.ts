import { SVGProps } from "react";

export type IconLinkButtonProps = {
  onClick: VoidFunction;
  size: number;
  style?: SVGProps<SVGSVGElement>["style"];
  variant: "github" | "linkedin" | "npmjs" | "logo" | "settings";
};
