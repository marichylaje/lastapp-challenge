import React from "react"
import ProductAsCard from "./ProductAsCard"
import { PageContainer, ProductListContainer } from "./styles"
import type { ProductType, SelectionType } from "types"

interface ProductListProps {
  products: ProductType[] | SelectionType[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <PageContainer>
      <ProductListContainer>
        {products.map((product: ProductType) => (
          <ProductAsCard key={product.name} product={product} />
        ))}
      </ProductListContainer>
    </PageContainer>
  )
}

export default ProductList
