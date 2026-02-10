/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ButtonIcon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ButtonIcon3Icon(props: ButtonIcon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M15.057 16.907a2.36 2.36 0 1 1 4.722.002 2.36 2.36 0 0 1-4.722-.002m1.3 0a1.062 1.062 0 1 0 2.123.002 1.062 1.062 0 0 0-2.123-.002m-10.712 0a2.36 2.36 0 1 1 4.722.002 2.36 2.36 0 0 1-4.722-.002m1.3 0a1.06 1.06 0 1 0 2.122 0 1.06 1.06 0 0 0-2.122 0m1.52-2.773a2.365 2.365 0 0 1-2.282-1.752L3.27 1.453a.21.21 0 0 0-.2-.152H1.16A.65.65 0 1 1 1.16 0h1.91a1.51 1.51 0 0 1 1.455 1.117l.158.594H20.84a.65.65 0 0 1 .637.779l-1.58 7.854a1.506 1.506 0 0 1-1.48 1.224H7.312l.128.479a1.064 1.064 0 0 0 1.026.788H19.13a.65.65 0 0 1 0 1.3zm9.953-3.867a.2.2 0 0 0 .2-.167v-.01l1.425-7.079H5.03l1.935 7.256z"
        }
      ></path>
    </svg>
  );
}

export default ButtonIcon3Icon;
/* prettier-ignore-end */
