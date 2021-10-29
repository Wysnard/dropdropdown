import React, { ReactElement, useState } from "react";

export interface FinalDropDownContextProps {
  isDrop: boolean;
  setIsDrop: React.Dispatch<React.SetStateAction<boolean>>;
}

type RenderProps = (props: FinalDropDownContextProps) => React.ReactNode;

export interface FinalDropDownAtomProps {
  title: RenderProps;
  children: RenderProps;
}

const FinalDropDownContext = React.createContext<FinalDropDownContextProps>({
  isDrop: false,
  setIsDrop: () => {},
});

export const withFinalDropDown =
  <P extends object>(
    Component: React.ComponentType<P>
  ): React.FC<Omit<P, keyof FinalDropDownContextProps>> =>
  (props) =>
    (
      <FinalDropDownContext.Consumer>
        {(context) => <Component {...(props as P)} {...context} />}
      </FinalDropDownContext.Consumer>
    );

const FinalDropDownAtom: React.FC<FinalDropDownAtomProps> = ({
  children,
  title,
}) => {
  const [isDrop, setIsDrop] = useState(false);
  const functionProps: FinalDropDownContextProps = { isDrop, setIsDrop };

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
