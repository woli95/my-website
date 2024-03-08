import { useAnimate } from "framer-motion";
import { useCallback } from "react";
import { IconLinkButtonProps } from "../icon-link-button.types";

export const useNpmjsButton = (onClick: IconLinkButtonProps["onClick"]) => {
  const [svgRef, animate] = useAnimate();
  const [path1Ref] = useAnimate();
  const [path2Ref] = useAnimate();

  const handleOnMouseEnter = useCallback(() => {
    animate(svgRef.current, { scale: 1.2 }, { duration: 0.25 });
    animate(path1Ref.current, { fill: "#d40001" }, { duration: 0.25 });
    animate(path2Ref.current, { fill: "#ffffff" }, { duration: 0.25 });
  }, [animate, svgRef, path1Ref, path2Ref]);

  const handleOnMouseLeave = useCallback(() => {
    animate(svgRef.current, { scale: 1 }, { duration: 0.25 });
    animate(path1Ref.current, { fill: "#1d1d20" }, { duration: 0.25 });
    animate(path2Ref.current, { fill: "#888888" }, { duration: 0.25 });
  }, [animate, svgRef, path1Ref, path2Ref]);

  const handleOnClick = useCallback(() => {
    animate(svgRef.current, { opacity: [0.25, 1] }, { duration: 0.25 }).then(
      () => onClick()
    );
  }, [animate, svgRef, onClick]);

  return {
    svgRef,
    path1Ref,
    path2Ref,
    handleOnMouseEnter,
    handleOnMouseLeave,
    handleOnClick,
  };
};
