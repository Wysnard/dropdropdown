import "./App.css";
import DropDownAtom from "./components/atoms/DropDown.atom";
import SidePanelMolecule from "./components/molecules/SidePanel.molecule";

function App() {
  return (
    <div>
      <div>Arborescence</div>
      <div>Static Drop Down</div>
      <DropDownAtom title="Drop">
        <div>Down</div>
        <div>Down</div>
        <div>Down</div>
        <DropDownAtom title="Drop">
          <div>Down</div>
          <div>Down</div>
          <div>Down</div>
          <DropDownAtom title="Drop">
            <div>Down</div>
            <div>Down</div>
            <div>Down</div>
          </DropDownAtom>
        </DropDownAtom>
      </DropDownAtom>
      <div>Generative Drop Down</div>
      <SidePanelMolecule
        tree={[
          {
            Drop: [
              "down",
              "down",
              { Drop: ["down", "down", { Drop: ["down"] }] },
            ],
          },
        ]}
      />
    </div>
  );
}

export default App;
