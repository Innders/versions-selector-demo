import { Button, Icon } from "@ynput/ayon-react-components";
import * as Styled from "../App.styled";
import { useCallback, useEffect } from "react";

const VersionsToolbar = ({ versions = [], selected, onChange }) => {
  const sortedVersions = [...versions].sort((a, b) => a.version - b.version);

  const options = sortedVersions.map((version) => ({
    value: version.id,
    label: version.version,
  }));

  const currentIndex = sortedVersions.findIndex(
    (version) => version.id === selected
  );
  const currentVersion = sortedVersions[currentIndex];
  const previousVersion =
    sortedVersions[currentIndex - 1] || currentVersion || "Unknown";
  const nextVersion =
    sortedVersions[currentIndex + 1] || currentVersion || "Unknown";
  const approvedVersion =
    sortedVersions.find((version) => version.approved) || "None";

  const handleVersionChange = useCallback(
    (id) => {
      onChange(id);
    },
    [onChange]
  );

  //   keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handleVersionChange(previousVersion.id);
      } else if (e.key === "ArrowRight") {
        handleVersionChange(nextVersion.id);
      } else if (e.key === "a") {
        handleVersionChange(approvedVersion.id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previousVersion, nextVersion, approvedVersion, handleVersionChange]);

  return (
    <Styled.VersionsToolbar>
      <Button
        onClick={() => handleVersionChange(previousVersion.id)}
        icon="chevron_left"
        style={{ paddingRight: 16 }}
        disabled={!sortedVersions[currentIndex - 1]}
      >
        {previousVersion?.version}
      </Button>
      <Styled.VersionDropdown
        value={[selected]}
        options={options}
        onChange={(v) => handleVersionChange(v[0])}
      />
      <Button
        onClick={() => handleVersionChange(nextVersion.id)}
        style={{ paddingRight: 6 }}
        disabled={!sortedVersions[currentIndex + 1]}
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
