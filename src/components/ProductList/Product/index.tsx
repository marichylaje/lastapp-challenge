import React, { useEffect, useState } from "react"
import {
  ButtoneryContainer,
  StyledButton,
  ProductContainer,
  ProductImage,
  ProductImageWrapper,
  ProductName,
  ProductPrice,
  PriceContainer,
  Quantity,
} from "./styles"
import cannotLoad from "assets/images/cannot-load.png"
import { useRestaurantCatalogContext } from "hooks/useRestaurantCatalogContext"
import type { ProductType } from "types"

interface ProductProps {
  product: ProductType
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const [imageSrc, setImageSrc] = useState<string>(product.image)
  const { selection, setSelection } = useRestaurantCatalogContext()
  const [quantity, setQuantity] = useState<number>(0)

  const handleImageError = () => {
    setImageSrc(cannotLoad)
  }

  useEffect(() => {
    imageSrc !== product.image && setImageSrc(product.image)
    const selectedMatch = selection?.find((item) => item.name === product.name)

    if (selectedMatch) setQuantity(selectedMatch.quantity)
  }, [product, selection])

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

  return (
    <ProductContainer>
      <ProductImageWrapper>
        <ProductImage
          src={imageSrc}
          alt={product.name}
          onError={handleImageError}
        />
      </ProductImageWrapper>
      <ProductName>{product.name}</ProductName>
      <PriceContainer>
        <ProductPrice>{product.price.toFixed(2)} €</ProductPrice>
        <ButtoneryContainer>
          {quantity > 0 && (
            <>
              <StyledButton
                responsability="minus"
                icon="pi pi-minus"
                onClick={() => handleQuantityChange(-1)}
              />
              <Quantity>{quantity}</Quantity>
            </>
          )}
          <StyledButton
            responsability="add"
            icon="pi pi-plus"
            onClick={() => handleQuantityChange(+1)}
          />
        </ButtoneryContainer>
      </PriceContainer>
    </ProductContainer>
  )
}

export default Product
