import { useAnimate } from "framer-motion";
import { useCallback } from "react";

export const useGithubButton = (onClick: VoidFunction) => {
  const [svgRef, animate] = useAnimate();
  const [pathRef] = useAnimate();

  const handleOnMouseEnter = useCallback(() => {
    animate(svgRef.current, { scale: 1.2 }, { duration: 0.25 });
    animate(pathRef.current, { fill: "#EEEEEE" }, { duration: 0.25 });
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
