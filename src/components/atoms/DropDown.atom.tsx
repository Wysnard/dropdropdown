import React, { useState } from "react";
import DropDownListAtom from "./DropDownList.atom";
import FinalDropDownAtom from "./FinalDropDown.atom";

export interface DropDownAtomProps {
  title: React.ReactNode;
}

const DropDownAtom: React.FC<DropDownAtomProps> = ({ children, title }) => {
  return (
    <FinalDropDownAtom
      title={({ setIsDrop, isDrop }) => (
        <div
          className="cursor-pointer font-bold"
          onClick={() => setIsDrop(!isDrop)}
        >
          {title}
        </div>
      )}
    >
      {/* same as {({ isDrop }) => <>{isDrop && <div>{children}</div>}</>} */}
      {() => <DropDownListAtom>{children}</DropDownListAtom>}
    </FinalDropDownAtom>
  );
};

export default DropDownAtom;
