import "@ynput/ayon-react-components/dist/style.css";
import * as Styled from "./App.styled";
import { Button, Dialog } from "@ynput/ayon-react-components";
import { useDispatch, useSelector } from "react-redux";
import versions from "./data.json";
import {
  closeVersionsSelector,
  openVersionsSelector,
  updateSelected,
} from "./features/versionsSlice";
import VersionImage from "./components/VersionImage";
import VersionsToolbar from "./components/VersionsToolbar";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.versions.isOpen);
  const selected = useSelector((state) => state.versions.selected);

  const handleOpenVersion = (id) => {
    dispatch(openVersionsSelector(id));
  };

  const handleCloseVersion = () => {
    dispatch(closeVersionsSelector());
  };

  const handleVersionChange = (id) => {
    dispatch(updateSelected(id));
  };

  // open version using key o
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "o") {
        if (isOpen) {
          handleCloseVersion();
        }
        // open version selector
        else dispatch(openVersionsSelector(selected));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch, selected, isOpen]);

  return (
    <>
      <h3>Click to open version</h3>
      <Styled.Versions>
        {versions.map((version) => (
          <Button
            key={version.id}
            onClick={() => handleOpenVersion(version.id)}
          >
            {version.version}
          </Button>
        ))}
      </Styled.Versions>
      <Dialog
        isOpen={isOpen}
        header={
          <VersionsToolbar
            versions={versions}
            selected={selected}
            onChange={handleVersionChange}
          />
        }
        onClose={handleCloseVersion}
        size="full"
      >
        <VersionImage id={selected} />
      </Dialog>
    </>
  );
}

export default App;
