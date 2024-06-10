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