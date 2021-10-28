import React from "react";
import DropDownAtom from "../atoms/DropDown.atom";

type Node = string | URLTree;

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
        const isString = typeof node === "string";
        return (
          <>
            {isString && <div>{node}</div>}
            {!isString &&
              Object.entries(node).map(([key, node]) => (
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
