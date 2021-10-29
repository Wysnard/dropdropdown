import React from "react";
import DropDownAtom from "../atoms/DropDown.atom";

type Node = React.ReactNode | URLTree;

interface URLTree {
  [key: string]: Node[];
}

export interface SidePanelMoleculeProps {
  tree: Node[];
}

const SidePanelMolecule: React.FC<SidePanelMoleculeProps> = ({ tree }) => {
  return (
    <div>
      {tree.map((node) => {
        const isPrimitive = (element: Node) =>
          typeof element === "string" || typeof element === "number";
        const isReact = (element: Object) => "props" in element;

        return (
          <>
            {isPrimitive(node) && <div>{node}</div>}
            {!isPrimitive(node) && isReact(node as Object) && <>{node}</>}
            {!isPrimitive(node) &&
              !isReact(node as Object) &&
              Object.entries(node as URLTree).map(([key, node]) => (
                <DropDownAtom title={key}>
                  <SidePanelMolecule tree={node} />
                </DropDownAtom>
              ))}
          </>
        );
      })}
    </div>
  );
};

export default SidePanelMolecule;
