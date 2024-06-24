import "@ynput/ayon-react-components/dist/style.css";
import { Button, Dialog } from "@ynput/ayon-react-components";
import { useDispatch, useSelector } from "react-redux";
import {
  closeVersionsSelector,
  openVersionsSelector,
  updateSelected,
} from "./features/versionsSlice";
import versions from "./data.json";
import * as Styled from "./App.styled";
import VersionImage from "./components/VersionImage";
import VersionsToolbar from "./components/VersionsToolbar";

function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.versions.isOpen);
  const selected = useSelector((state) => state.versions.selected);

  const handleOpenVersion = (id) => {
    dispatch(openVersionsSelector(id));
  };

  const handleVersionChange = (id) => {
    dispatch(updateSelected(id));
  };

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
        onClose={() => dispatch(closeVersionsSelector())}
        size="full"
      >
        <VersionImage id={selected} />
      </Dialog>
    </>
  );
}

export default App;
