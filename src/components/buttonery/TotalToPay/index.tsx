import React, { useRef } from "react"
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { StyledToast, toastPt } from "./styles"
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";
import { FloatingBottomButton } from "../styles";

interface TotalToPayProps {
  total: string;
}

const TotalToPay: React.FC<TotalToPayProps> = ({ total }) => {
  const toast = useRef<Toast>(null);
  const navigate = useNavigate()

    const accept = () => {
        navigate(`/confirmed-order`)
    }

    const reject = () => {
        toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected, complete your order and try again', life: 3000 });
    }

    const confirm = () => {
        confirmDialog({
              message: 'Are you sure you want to proceed?',
              header: 'Confirmation',
              defaultFocus: 'accept',
              accept,
              reject
        });
  };

  return (
    <>
      <StyledToast ref={toast} pt={toastPt} />
      <ConfirmDialog />
      <FloatingBottomButton 
        onClick={confirm}
        aria-label="total to pay"
        label={`TOTAL (${total} €)`}
      />
    </>

  )
}

export default TotalToPay
