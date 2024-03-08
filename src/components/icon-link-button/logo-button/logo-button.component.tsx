import { IconLinkButtonProps } from "../icon-link-button.types";
import { useLogoButton } from "./logo-button.hook";

export const LogoButton = (props: Omit<IconLinkButtonProps, "variant">) => {
  const { handleOnClick, handleOnMouseEnter, handleOnMouseLeave, svgRef } =
    useLogoButton(props.onClick);
  return (
    <svg
      ref={svgRef}
      width={props.size}
      height={props.size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 259.23 343.78"
      data-inlinesvg=".inlineSvgFile-2"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onClick={handleOnClick}
    >
      <defs>
        <style>{`.cls-1{fill:#777}.cls-2{fill:#ccc}`}</style>
      </defs>
      <path
        className="cls-1"
        d="M915 419.1c22.75 1.32 45.5 2.69 68.26 3.89 3.74.2 2.67 2.69 2.67 4.59q.09 39 0 78c0 8.65 0 8.58 8.53 7.83 7-.61 13.93-1.14 20.91-1.49a27.35 27.35 0 0 0 19.27-9.14c19-20.15 18.24-63.83-1.61-83.18a22.94 22.94 0 0 0-15-7c-7-.4-13.94-1-20.92-1.29-2.16-.1-3.22-.37-3.21-3 .08-33.13.06-66.27.06-98.74 37.75.43 63.34 19.89 80.84 51.71 15.54 28.26 22.68 58.83 24 90.8 1.44 35.39-3.86 69.7-18.92 102-9.71 20.87-22.75 39.08-43.44 50.66-10.09 5.65-21.42 7-32.41 9.46q-43.26 9.86-86.57 19.52a11.85 11.85 0 0 1-2.46.07V419.1Z"
        transform="translate(-839.8 -290.1)"
      ></path>
      <path
        className="cls-2"
        d="M915 419.1v214.75q-26.28-5.64-52.56-11.3c-6.16-1.33-12.28-2.92-18.48-4-3.28-.58-4.17-1.95-4.15-5.23.14-27.45.08-54.91.08-82.36 0-34.44.06-68.88-.09-103.31 0-3.6.86-4.85 4.55-5 23.56-1.03 47.07-3.12 70.65-3.55ZM915 404.67c-23.69 1.79-47.39 3.53-71.07 5.44-3.43.28-4.14-.88-4.13-4.06.1-31.94 0-63.88.06-95.82 0-2-.34-3.71 2.64-4.35 23.85-5.14 47.65-10.49 71.48-15.76a3.34 3.34 0 0 1 1 .06Z"
        transform="translate(-839.8 -290.1)"
      ></path>
      <path
        className="cls-1"
        d="M915 404.67V290.18c13.94 2.27 27.49 6.28 41.27 9.27 8.76 1.9 17.43 4.27 26.21 6.11 2.93.61 3.57 1.85 3.56 4.63q-.15 48.22 0 96.44c0 3.16-.81 3.88-3.89 3.61-22.36-1.95-44.74-3.73-67.15-5.57Z"
        transform="translate(-839.8 -290.1)"
      ></path>
    </svg>
  );
};
