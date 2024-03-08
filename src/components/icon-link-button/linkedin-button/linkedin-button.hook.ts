import { useAnimate } from "framer-motion";
import { useCallback } from "react";
import { IconLinkButtonProps } from "../icon-link-button.types";

export const useLinkedinButton = (onClick: IconLinkButtonProps["onClick"]) => {
  const [svgRef, animate] = useAnimate();
  const [pathRef] = useAnimate();

  const handleOnMouseEnter = useCallback(() => {
    animate(svgRef.current, { scale: 1.2 }, { duration: 0.25 });
    animate(pathRef.current, { fill: "#0a66c2" }, { duration: 0.25 });
  }, [animate, svgRef, pathRef]);

  const handleOnMouseLeave = useCallback(() => {
    animate(svgRef.current, { scale: 1 }, { duration: 0.25 });
    animate(pathRef.current, { fill: "#888888" }, { duration: 0.25 });
  }, [animate, pathRef, svgRef]);

  const handleOnClick = useCallback(() => {
    animate(svgRef.current, { opacity: [0.25, 1] }, { duration: 0.25 }).then(
      () => onClick()
    );
  }, [animate, svgRef, onClick]);

  return {
    svgRef,
    pathRef,
    handleOnMouseEnter,
    handleOnMouseLeave,
    handleOnClick,
  };
};
