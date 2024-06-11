import { Chip } from "primereact/chip"
import { TabMenu as PrimereactTabMenu } from "primereact/tabmenu"
import styled from "styled-components"

interface ChipProps {
  isselected: boolean
}

export const StyledChip = styled(Chip)<ChipProps>`
  background-color: ${({ isselected }) =>
    isselected ? "var(--primary-color)" : "transparent"};
  color: ${({ isselected }) =>
    !isselected ? "var(--primary-color)" : "var(--white-color)"};
  border-radius: 2rem;
`

export const StyledTabMenu = styled(PrimereactTabMenu)`
  padding-left: 1rem;
  position: relative;
  z-index: 5;
  max-width: var(--max-width);
  margin: 0 auto;

  & > ul,
  .p-menuitem-link,
  a {
    border: none;
    background-color: transparent;
  }

  a {
    padding: 0.25rem;
    & > div > span {
      margin: 0.5rem;
    }
  }
`
