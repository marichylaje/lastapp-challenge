import { Button } from "primereact/button"
import styled from "styled-components"

export const StyledFloatingButton = styled(Button)`
  background-color: var(--primary-color);
  color: var(--white-color);
  width: 2rem;
  height: 2rem;
  opacity: 0.85;

  .pi {
    font-size: 0.7rem;
  }
`

export const FloatingBottomButton = styled(Button)`
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
