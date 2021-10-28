import React, { useState } from "react";

export interface DropDownAtomProps {
  title: string;
}

const DropDownAtom: React.FC<DropDownAtomProps> = ({ children, title }) => {
  const [isDrop, setIsDrop] = useState(false);

  return (
    <div>
      <div
        className="cursor-pointer font-bold"
        onClick={() => setIsDrop(!isDrop)}
      >
        {title}
      </div>
      {isDrop && <div>{children}</div>}
    </div>
  );
};

export default DropDownAtom;
