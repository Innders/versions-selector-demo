import "@ynput/ayon-react-components/dist/style.css";
import * as Styled from "./App.styled";
import { Button, Dialog } from "@ynput/ayon-react-components";
import { useDispatch, useSelector } from "react-redux";
import versions from "./data.json";

function App() {
  // use https://picsum.photos/seed to get a random image for each version

  return (
    <>
      <Button>Open Versions</Button>
    </>
  );
}

export default App;
