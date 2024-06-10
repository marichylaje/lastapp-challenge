import styled from "styled-components"
import { Button } from "primereact/button"

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const SelectButton = styled(Button)`
  background-color: var(--primary-color);
  color: var(--white-color);
`

export const ItemDataContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const ItemTextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const SidebarItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const ImageContainer = styled.div`
  width: 60px;
  height: 47px;
  margin: 1rem;
`;