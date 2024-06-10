import React from "react"
import Product from "./Product"
import { PageContainer, ProductListContainer } from "./styles"
import type { ProductType } from "types"

interface ProductListProps {
  products: ProductType[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <PageContainer>
      <ProductListContainer>
        {products.map((product: ProductType) => (
          <Product product={product} key={product.name} />
        ))}
      </ProductListContainer>
    </PageContainer>
  )
}

export default ProductList
