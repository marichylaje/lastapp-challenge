import { Button } from "primereact/button"
import styled from "styled-components"

const StyledFloatingButton = styled(Button)`
  background-color: var(--primary-color);
  color: var(--white-color);
  width: 2rem;
  height: 2rem;
  opacity: 0.85;

  .pi {
    font-size: 0.7rem;
  }
`

export default StyledFloatingButton
