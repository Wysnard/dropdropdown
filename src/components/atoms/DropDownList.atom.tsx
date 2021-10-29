import React from "react";
import {
  FinalDropDownContextProps,
  withFinalDropDown,
} from "./FinalDropDown.atom";

export interface DropDownListAtomProps extends FinalDropDownContextProps {}

const DropDownListAtom: React.FC<DropDownListAtomProps> = ({
  children,
  isDrop,
}) => {
  return <>{isDrop && <>{children}</>}</>;
};

export default withFinalDropDown(DropDownListAtom);
