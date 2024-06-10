import { Button } from "primereact/button"
import styled from "styled-components"

export const FloatingButtonContainer = styled.div`
  position: fixed;
  top: 6rem;
  width: 90%;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  transform: translateX(-50%);
  left: 50%;
  z-index: 3;
`

export const TotalButton = styled(Button)`
  width: 90%;
  height: 4rem;
  font-size: 18px;
  font-weight: 600;
  color: var(--white-color);
  background-color: var(--primary-color);
  border-radius: 0.75rem;
  z-index: 10;

  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`
