import { FrameProps } from "./frame.types";

export const Frame = (props: FrameProps) => (
  <svg width="300" height="300" viewBox="0 0 200 200" style={props.style}>
    <defs>
      <linearGradient
        id="gradient-1"
        x1="107.5"
        x2="107.5"
        y1="0"
        y2="15"
        gradientTransform="matrix(-.01811 .99984 -11.33333 0 200.947 -107.482)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor={props.colorA}>
          <animate
            attributeName="offset"
            dur="10s"
            keyTimes="0; 0.25751; 0.50503; 0.75179; 1"
            repeatCount="indefinite"
            values="0;0.25;0;0.5;0"
          ></animate>
        </stop>
        <stop offset="0.087" stopColor={props.colorA}></stop>
        <stop offset="1" stopColor={props.colorB}></stop>
      </linearGradient>
      <linearGradient
        id="gradient-0"
        x1="-5.901"
        x2="-5.901"
        y1="17.548"
        y2="202.548"
        gradientTransform="matrix(.99916 -.01208 0 .91892 5.896 12.804)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor={props.colorB}>
          <animate
            attributeName="offset"
            calcMode="spline"
            dur="10s"
            keySplines="0.42 0 0.23 0.84; 0.42 0 0.23 0.84; 0.42 0 0.23 0.84; 0.42 0 0.23 0.84"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
            repeatCount="indefinite"
            values="0;0.5;0.25;0.5;0"
          ></animate>
        </stop>
        <stop offset="0.915" stopColor={props.colorA}></stop>
        <stop offset="1" stopColor={props.colorA}></stop>
      </linearGradient>
    </defs>
    <path fill="url('#gradient-1')" d="M29 15h156l15-15H29v15z"></path>
    <path
      style={{
        WebkitTransformOrigin: 7.5,
        // @ts-ignore
        MsTransformOrigin: 7.5,
        transformOrigin: 7.5,
      }}
      fill="url('#gradient-0')"
      d="M0 29v171l15-15V29H0z"
    ></path>
    <path
      fill={props.colorB}
      d="M15 0C0 0 0 0 0 15c0 14.428 0 0 0 0v15h15c0-15 0-15 15-15V0H15z"
    ></path>
  </svg>
);
