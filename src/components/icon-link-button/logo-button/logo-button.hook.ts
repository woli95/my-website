import { useAnimate } from "framer-motion";
import { useCallback } from "react";
import { IconLinkButtonProps } from "../icon-link-button.types";

export const useLogoButton = (onClick: IconLinkButtonProps["onClick"]) => {
  const [svgRef, animate] = useAnimate();

  const handleOnMouseEnter = useCallback(() => {
    animate(svgRef.current, { scale: 1.3 }, { duration: 0.25 });
  }, [animate, svgRef]);

  const handleOnMouseLeave = useCallback(() => {
    animate(svgRef.current, { scale: 1 }, { duration: 0.25 });
  }, [animate, svgRef]);

  const handleOnClick = useCallback(() => {
    animate(svgRef.current, { opacity: [0.25, 1] }, { duration: 0.25 }).then(
      () => onClick()
    );
  }, [animate, svgRef, onClick]);

  return {
    svgRef,
    handleOnMouseEnter,
    handleOnMouseLeave,
    handleOnClick,
  };
};
