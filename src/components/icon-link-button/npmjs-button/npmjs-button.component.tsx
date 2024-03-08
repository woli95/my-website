import { useNpmjsButton } from "./npmjs-button.hook";
import { IconLinkButtonProps } from "../icon-link-button.types";

export const NpmjsButton = (props: Omit<IconLinkButtonProps, "variant">) => {
  const {
    handleOnClick,
    handleOnMouseEnter,
    handleOnMouseLeave,
    path1Ref,
    path2Ref,
    svgRef,
  } = useNpmjsButton(props.onClick);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onClick={handleOnClick}
      style={{ cursor: "pointer", ...props.style }}
    >
      <g fill="none" fillRule="evenodd">
        <path ref={path1Ref} fill="#1d1d20" d="M0 0H24V24H0z"></path>
        <path
          fill="#888888"
          ref={path2Ref}
          d="M16.718 7.928h-4.513V20.25H4V3h16v17.249h-3.282V7.93z"
        ></path>
      </g>
    </svg>
  );
};
