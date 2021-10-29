import "./App.css";
import DropDownAtom from "./components/atoms/DropDown.atom";
import FinalDropDownAtom from "./components/atoms/FinalDropDown.atom";
import SidePanelMolecule from "./components/molecules/SidePanel.molecule";

function App() {
  return (
    <div>
      <div>Arborescence</div>
      <div>Static Drop Down become a nice wrapper to final drop down</div>
      <DropDownAtom title="Drop">
        <div
          className="cursor-pointer"
          onDoubleClick={() => console.log("I AM A BIG FAT LEAF")}
        >
          DoubleClick Me
        </div>
        <div className="text-blue-500">Down</div>
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
              <span className="text-blue-500">down</span>,
              {
                Drop: [
                  1,
                  2,
                  {
                    Drop: [
                      <button
                        onDoubleClick={() => console.log("I AM A BIG FAT LEAF")}
                      >
                        Leaf
                      </button>,
                    ],
                  },
                ],
              },
            ],
          },
        ]}
      />

      <div>FINAL DROP DOWN</div>
      <FinalDropDownAtom
        title={({ setIsDrop, isDrop }) => (
          <div
            className={`font-bold cursor-pointer ${
              isDrop ? "text-red-500" : ""
            }`}
            onClick={() => setIsDrop(!isDrop)}
          >
            Drop: become red when dropped
          </div>
        )}
      >
        {({ isDrop }) => {
          return (
            <>
              {isDrop && (
                <div>
                  <div>Down</div>
                  <div>Down</div>
                  <div>Down</div>
                  <FinalDropDownAtom
                    title={({ setIsDrop }) => (
                      <div
                        className="font-bold cursor-pointer"
                        onClick={() => setIsDrop((isDrop) => !isDrop)}
                      >
                        Drop
                      </div>
                    )}
                  >
                    {({ isDrop }) => {
                      return (
                        <>
                          {isDrop && (
                            <div>
                              <div>Down</div>
                              <div>Down</div>
                              <div>Down</div>
                              <div>Down</div>
                              <div
                                className="cursor-pointer"
                                onDoubleClick={() =>
                                  console.log("I AM A BIG FAT LEAF")
                                }
                              >
                                DoubleClick me to console log
                              </div>
                            </div>
                          )}
                        </>
                      );
                    }}
                  </FinalDropDownAtom>
                  <div>Bottom</div>
                </div>
              )}
            </>
          );
        }}
      </FinalDropDownAtom>
    </div>
  );
}

export default App;
