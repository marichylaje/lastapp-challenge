import { Toast } from "primereact/toast"
import styled from "styled-components"

export const toastPt = {
  root: {
    style: { left: "50%", transform: "translateX(-50%)" },
  },
}

export const StyledToast = styled(Toast)`
  .p-confirm-dialog-accept {
    background-color: var(--primary-color);
    color: var(--white-color);
  }

  .p-confirm-dialog-reject {
    color: var(--primary-color);
    background-color: var(--white-color);
  }
`
