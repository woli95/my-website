import { useAnimate } from "framer-motion";
import { useCallback } from "react";
import { IconLinkButtonProps } from "../icon-link-button.types";

export const useSettingsButton = (onClick: IconLinkButtonProps["onClick"]) => {
  const [svgRef, animate] = useAnimate();
  const [path1Ref] = useAnimate();

  const handleOnMouseEnter = useCallback(() => {
    animate(svgRef.current, { scale: 1.2 }, { duration: 0.25 });
    animate(path1Ref.current, { fill: "#EEEEEE" }, { duration: 0.25 });
  }, [animate, svgRef, path1Ref]);

  const handleOnMouseLeave = useCallback(() => {
    animate(svgRef.current, { scale: 1 }, { duration: 0.25 });
    animate(path1Ref.current, { fill: "#888888" }, { duration: 0.25 });
  }, [animate, svgRef, path1Ref]);

  const handleOnClick = useCallback(() => {
    animate(svgRef.current, { opacity: [0.25, 1] }, { duration: 0.25 }).then(
      () => onClick()
    );
  }, [animate, svgRef, onClick]);

  return {
    svgRef,
    path1Ref,
    handleOnMouseEnter,
    handleOnMouseLeave,
    handleOnClick,
  };
};
