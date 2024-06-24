import { Button, Icon } from "@ynput/ayon-react-components";
import * as Styled from "../App.styled";

const VersionsToolbar = ({ versions = [], selected, onChange }) => {
  const currentIndex = versions.findIndex((version) => version.id === selected);
  const currentVersion = versions[currentIndex];
  const previousVersion =
    versions[currentIndex - 1] || currentVersion || "Unknown";
  const nextVersion = versions[currentIndex + 1] || currentVersion || "Unknown";
  const approvedVersion =
    versions.find((version) => version.approved) || "None";

  const handleVersionChange = (id) => {
    onChange(id);
  };

  return (
    <Styled.VersionsToolbar>
      <Button
        onClick={() => handleVersionChange(previousVersion.id)}
        icon="chevron_left"
      >
        {previousVersion?.version}
      </Button>
      <Button>{currentVersion?.version}</Button>
      <Button
        onClick={() => handleVersionChange(nextVersion.id)}
        style={{ paddingRight: 6 }}
        selected
      >
        {nextVersion?.version} <Icon icon="chevron_right" />
      </Button>
      <Button
        onClick={() => handleVersionChange(approvedVersion.id)}
        selected={approvedVersion?.id === selected}
        disabled={!approvedVersion}
      >
        Approved: {approvedVersion?.version}
      </Button>
    </Styled.VersionsToolbar>
  );
};

export default VersionsToolbar;
