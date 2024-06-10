import React, { useEffect, useState } from "react"
import {
  ClearIcon,
  SearchIcon,
  SearchInput,
  SearchContainer,
  StyledSidebar,
  sidebarPt,
  SidebarListItem,
} from "./styles"
import { useRestaurantCatalogContext } from "hooks/useRestaurantCatalogContext"
import type { ProductType, SelectionType } from "types"
import SearchProduct from "./SearchProduct"

interface SearchPanelProps {
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
}

//TODO: image error handler as common component 
const SearchPanel: React.FC<SearchPanelProps> = ({
  isVisible,
  setIsVisible,
}) => {
  const [ search, setSearch ] = useState<string>("")
  const [ matches, setMatches ] = useState<ProductType[]>([])
  const { catalog, setSelection } = useRestaurantCatalogContext()

  const clearSearch = () => {
    setSearch("")
    setMatches([])
  }

  useEffect(() => {
    if (!catalog) return;

    const innerMatches: ProductType[] = catalog.reduce(
      (acc: ProductType[], category) => {
        const categoryMatches = category.products.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
        return [...acc, ...categoryMatches]
      },
      []
    )

    setMatches(innerMatches)
  }, [catalog, search])

  const handleSelectProduct = (product: ProductType) => {
    const select: SelectionType = { ...product, quantity: 1 }

    setSelection((prevState) => {
      if (!prevState) {
        return [select]
      }

      const existingProductIndex = prevState.findIndex(
        (state) => state.name === select.name
      )

      if (existingProductIndex !== -1) {
        const updatedSelection = [...prevState]
        updatedSelection[existingProductIndex] = select
        return updatedSelection
      } else {
        return [...prevState, select]
      }
    })

    clearSearch()
    setIsVisible(false)
  }

  return (
    <StyledSidebar pt={sidebarPt} visible={isVisible} onHide={() => setIsVisible(false)} fullScreen >
      <SearchContainer>
        <SearchIcon className="pi pi-search" />
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        {search && <ClearIcon className="pi pi-times" onClick={clearSearch} />}
      </SearchContainer>

      {matches.length > 0 && (
        <SidebarListItem>
          {matches.map((match) => (
              <SearchProduct match={match} handleSelectProduct={handleSelectProduct} />
          ))}
        </SidebarListItem>
      )}
    </StyledSidebar>
  )
}

export default SearchPanel
