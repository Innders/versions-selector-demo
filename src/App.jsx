// add to init
import "@ynput/ayon-react-components/dist/style.css";
import { Button, Dialog } from "@ynput/ayon-react-components";
import { useDispatch, useSelector } from "react-redux";
import {
  closeVersionsSelector,
  openVersionsSelector,
} from "./features/versionsSlice";

function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.versions.isOpen);

  return (
    <>
      <Button onClick={() => dispatch(openVersionsSelector())}>
        Open Versions
      </Button>
      <Dialog
        isOpen={isOpen}
        header="Versions"
        onClose={() => dispatch(closeVersionsSelector())}
        size="full"
      >
        <h3></h3>
      </Dialog>
    </>
  );
}

export default App;
