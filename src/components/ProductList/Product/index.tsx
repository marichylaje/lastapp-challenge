import React, { useEffect, useState } from "react"
import {
  ButtoneryContainer,
  StyledButton,
  ProductContainer,
  ProductImageContainer,
  ProductName,
  ProductPrice,
  PriceContainer,
  Quantity,
} from "./styles"
import { useRestaurantCatalogContext } from "hooks/useRestaurantCatalogContext"
import ProductImage from "components/ProductImage"
import type { ProductType } from "types"

interface ProductProps {
  product: ProductType
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { setSelection } = useRestaurantCatalogContext()
  const [ quantity, setQuantity ] = useState<number>(0)
  const { selection } = useRestaurantCatalogContext()

  const handleQuantityChange = (byNumber: number) => {
    const newQuantity = quantity + byNumber
    setQuantity(newQuantity)

    const productSelected = { ...product, quantity: newQuantity }

    setSelection((prevState) => {
      if (!prevState) {
        return [productSelected]
      }

      const existingProductIndex = prevState.findIndex(
        (state) => state.name === productSelected.name
      )

      if (existingProductIndex !== -1) {
        // Update the quantity of the existing product
        const updatedSelection = [...prevState]
        updatedSelection[existingProductIndex] = productSelected
        return updatedSelection
      } else {
        // Add the new product to the selection
        return [...prevState, productSelected]
      }
    })
  }

  useEffect(() => {
    const selectedMatch = selection?.find((item) => item.name === product.name)
    if (selectedMatch) setQuantity(selectedMatch.quantity)
}, [selection])

  return (
    <ProductContainer>
      <ProductImageContainer>
        <ProductImage
          src={product.image}
          name={product.name}
        />
      </ProductImageContainer>
      <ProductName>{product.name}</ProductName>
      <PriceContainer>
        <ProductPrice>{product.price.toFixed(2)} €</ProductPrice>
        <ButtoneryContainer>
          {quantity > 0 && (
            <>
              <StyledButton
                responsability="minus"
                icon="pi pi-minus"
                aria-label="decrease quantity"
                onClick={() => handleQuantityChange(-1)}
              />
              <Quantity>{quantity}</Quantity>
            </>
          )}
          <StyledButton
            responsability="add"
            icon="pi pi-plus"
            aria-label="increase quantity"
            onClick={() => handleQuantityChange(+1)}
          />
        </ButtoneryContainer>
      </PriceContainer>
    </ProductContainer>
  )
}

export default Product
