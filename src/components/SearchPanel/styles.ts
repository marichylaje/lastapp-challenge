import styled from "styled-components"
import { InputText } from "primereact/inputtext"
import { Sidebar } from 'primereact/sidebar';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  padding: 0.5rem;
  max-width: var(--max-width); 
  background-color: var(--shadow-color);
  margin-top: 2rem;
`

export const SearchIcon = styled.i`
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-right: 0.5rem;
  padding-left: 1rem;
`

export const ClearIcon = styled.i`
  font-size: 1.2rem;
  color: var(--primary-color);
  cursor: pointer;
  margin-left: 0.5rem;
  background-color: var(--white-color);
  border-radius: 50%;
  margin-right: 1rem;
  padding: 0.5rem;

  &.pi {
    font-size: 0.85rem;
  }
`

export const SearchInput = styled(InputText)`
  border: none;
  flex-grow: 1;
  background-color: var(--shadow-color);

  &:focus {
    outline: none;
    box-shadow: none;
  }
`

export const StyledSidebar = styled(Sidebar)`
  max-width: var(--max-width); 
  max-height: 80%;
  margin: auto;
  border-bottom: 1rem solid var(--white-color);
`

export const sidebarPt = { header: { style: { display: "none" } } }

export const SidebarListItem = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
`