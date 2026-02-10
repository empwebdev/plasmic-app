/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ButtonIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ButtonIconIcon(props: ButtonIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M6.294 0A5.36 5.36 0 0 1 11 2.8 5.36 5.36 0 0 1 15.706 0q.552 0 1.094.109a5.38 5.38 0 0 1 4.13 4.066 5.3 5.3 0 0 1-.864 4.265.7.7 0 0 1-.1.162l-7.758 9.048a1.592 1.592 0 0 1-2.416 0L2.036 8.603a.7.7 0 0 1-.1-.162 5.3 5.3 0 0 1-.867-4.265A5.38 5.38 0 0 1 5.199.109 5.6 5.6 0 0 1 6.295 0zm4.056 5.356a4.06 4.06 0 0 0-4.896-3.972 4.04 4.04 0 0 0-2.386 6.405 1 1 0 0 1 .05.079l7.66 8.937a.29.29 0 0 0 .443 0l7.66-8.937a1 1 0 0 1 .05-.079A4.041 4.041 0 0 0 15.707 1.3a4.06 4.06 0 0 0-4.056 4.056.65.65 0 0 1-1.3 0z"
        }
      ></path>
    </svg>
  );
}

export default ButtonIconIcon;
/* prettier-ignore-end */
