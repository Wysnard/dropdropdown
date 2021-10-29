import React from "react";
import { FinalDropDownContext } from "./FinalDropDown.atom";

export interface DropDownListAtomProps {}

const DropDownListAtom: React.FC<DropDownListAtomProps> = ({ children }) => {
  return (
    <FinalDropDownContext.Consumer>
      {({ isDrop }) => <>{isDrop && <>{children}</>}</>}
    </FinalDropDownContext.Consumer>
  );
};

export default DropDownListAtom;
