import React from "react";
import {
  SelectButton,
  RightSideContainer,
  ItemDataContainer,
  ItemTextContainer,
  SidebarItem,
  ImageContainer,
} from "./styles";
import type { ProductType, SelectionType } from "types";
import ProductImage from "components/ProductImage";

interface SearchPanelProps {
  product: ProductType | SelectionType;
  handleSelectProduct?: (product: ProductType) => void;
  isSUmmary?: boolean;
}

const isSelectionType = (product: ProductType | SelectionType): product is SelectionType => {
  return (product as SelectionType).quantity !== undefined;
};

const ProductAsRow: React.FC<SearchPanelProps> = ({ product, handleSelectProduct, isSUmmary = false }) => {
  const { name, image, price } = product;
  return (
    <SidebarItem key={name}>
      <ItemDataContainer>
        <ImageContainer>
          <ProductImage src={image} name={name} />
        </ImageContainer>
        <ItemTextContainer>
          <h3 className="m-0">{name}</h3>
          <p className="m-0">{price}€</p>
        </ItemTextContainer>
      </ItemDataContainer>
      <RightSideContainer>
        {!isSUmmary ? (
          <SelectButton
            icon="pi pi-chevron-right"
            rounded
            aria-label="select product"
            className="p-button-text p-button-rounded"
            onClick={() => handleSelectProduct && handleSelectProduct(product)}
          />
        ) : (
          isSelectionType(product) && (
            <h2 className="mr-4">
              {`x${product.quantity} = ${(price * product.quantity).toFixed(2)}€`}
            </h2>
          )
        )}
      </RightSideContainer>
    </SidebarItem>
  );
};

export default ProductAsRow;
