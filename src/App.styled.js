import { Dropdown } from "@ynput/ayon-react-components";
import styled from "styled-components";

export const Versions = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  width: fit-content;
`;

export const VersionImg = styled.img`
  height: 100%;
  object-fit: contain;
`;

export const VersionsToolbar = styled.div`
  display: flex;
  gap: 4px;
`;

export const VersionDropdown = styled(Dropdown)`
  .button {
    background-color: var(--md-sys-color-surface-container-highest);

    &:hover {
      background-color: var(--md-sys-color-surface-container-highest-hover);
    }
  }
`;
