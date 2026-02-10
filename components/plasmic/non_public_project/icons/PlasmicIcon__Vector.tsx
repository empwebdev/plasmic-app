/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "m5.52 6.581-5.3-5.3A.752.752 0 0 1 .75 0a.75.75 0 0 1 .53.22l4.242 4.242L9.765.22a.75.75 0 1 1 1.06 1.061z"
        }
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
