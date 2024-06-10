import { Button } from "primereact/button"
import styled from "styled-components"

export const ProductContainer = styled.div`
  flex: 1 1;
  width: 180px;
  max-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`

export const ProductImageWrapper = styled.div`
  width: 150px;
  height: 120px;
  overflow: hidden;
  position: relative;
`

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export const ProductPrice = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: var(--primary-color);
  align-self: flex-start;
  margin: 0;
  margin-left: 0.5rem;
  padding: 0;
  padding-top: 4px;
`

export const ProductName = styled.h3`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: var(--primary-color);
  align-self: flex-start;
  margin-left: 0.5rem;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`

interface StyledButtonProps {
  responsability: "add" | "minus"
}

export const StyledButton = styled(Button)<StyledButtonProps>`
  color: ${(props) =>
    props.responsability === "add"
      ? "var(--white-color)"
      : "var(--primary-color)"};
  background-color: ${(props) =>
    props.responsability === "minus"
      ? "var(--white-color)"
      : "var(--primary-color)"};
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  margin-left: 0.5rem;
  font-size: 0.7rem;

  .pi {
    font-size: inherit;
  }
`

export const Quantity = styled.p`
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  color: var(--primary-color);
  margin: 0;
  margin-left: 0.5rem;
  padding: 0;
  padding-top: 4px;
`

export const ButtoneryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 1rem;
`
