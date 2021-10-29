import React, { useState } from "react";

interface RenderPropsProps {
  isDrop: boolean;
  setIsDrop: React.Dispatch<React.SetStateAction<boolean>>;
}

type RenderProps = (props: RenderPropsProps) => React.ReactNode;

export interface FinalDropDownAtomProps {
  title: RenderProps;
  children: RenderProps;
}

export const FinalDropDownContext = React.createContext<RenderPropsProps>({
  isDrop: false,
  setIsDrop: () => {},
});

const FinalDropDownAtom: React.FC<FinalDropDownAtomProps> = ({
  children,
  title,
}) => {
  const [isDrop, setIsDrop] = useState(false);
  const functionProps: RenderPropsProps = { isDrop, setIsDrop };

  return (
    <div>
      <FinalDropDownContext.Provider value={{ isDrop, setIsDrop }}>
        <div className="drop-title">{title(functionProps)}</div>
        <div className="drop-item">{children(functionProps)}</div>
      </FinalDropDownContext.Provider>
    </div>
  );
};

export default FinalDropDownAtom;
