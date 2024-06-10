import React from "react"
import {
  SelectButton,
  ButtonContainer,
  ItemDataContainer,
  ItemTextContainer,
  SidebarItem,
  ImageContainer,
} from "./styles"
import type { ProductType } from "types"
import ProductImage from "components/ProductImage"

interface SearchPanelProps {
    match: ProductType
    handleSelectProduct: (product: ProductType) => void
}

//TODO: image error handler as common component 
const SearchPanel: React.FC<SearchPanelProps> = ({ match, handleSelectProduct }) => {
  return (
    <SidebarItem key={match.name} >
        <ItemDataContainer >
            <ImageContainer >
                <ProductImage
                    src={match.image}
                    name={match.name}
                />
            </ImageContainer>
            <ItemTextContainer>
                <h3 style={{ margin: 0 }}>{match.name}</h3>
                <p style={{ margin: 0 }}>{match.price}€</p>
            </ItemTextContainer>
        </ItemDataContainer>
        <ButtonContainer>
            <SelectButton
                icon="pi pi-chevron-right"
                rounded
                aria-label="select product"
                className="p-button-text p-button-rounded"
                onClick={() => handleSelectProduct(match)}
            />
        </ButtonContainer>
    </SidebarItem>
  )
}

export default SearchPanel
