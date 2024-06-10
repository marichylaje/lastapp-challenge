import styled from "styled-components"

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-bottom: 5rem;
`

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Alinea los items al inicio de la fila */
  gap: 16px;
  max-width: 1200px; /* Define un ancho máximo para el contenedor de productos */
`
