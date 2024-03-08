export const useProjectItem = (onClick: VoidFunction) => {
  const handleOnClick = () => {
    onClick();
  };

  const handleOnMouseEnter = () => {};

  const handleOnMouseLeave = () => {};

  return { handleOnClick, handleOnMouseEnter, handleOnMouseLeave };
};
