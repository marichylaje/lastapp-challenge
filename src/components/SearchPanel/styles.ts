import styled from "styled-components"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  padding: 0.5rem;
  max-width: 400px;
  background-color: var(--shadow-color);
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const SelectButton = styled(Button)`
  background-color: var(--primary-color);
  color: var(--white-color);
`
