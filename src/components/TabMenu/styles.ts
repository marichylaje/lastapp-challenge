import { Chip } from "primereact/chip"
import { TabMenu as PrimereactTabMenu } from "primereact/tabmenu"
import styled from "styled-components"

interface ChipProps {
  isSelected: boolean
}

export const StyledChip = styled(Chip)<ChipProps>`
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--primary-color)" : "transparent"};
  color: ${({ isSelected }) =>
    !isSelected ? "var(--primary-color)" : "var(--white-color)"};
  border-radius: 2rem;
`

export const StyledTabMenu = styled(PrimereactTabMenu)`
  margin-left: 1rem;
  position: relative;
  z-index: 5;

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
