import React, { useEffect, useState } from "react"
import { Sidebar } from "primereact/sidebar"
import {
  ClearIcon,
  SearchIcon,
  SearchInput,
  SearchContainer,
  SelectButton,
  ButtonContainer,
} from "./styles"
import { useRestaurantCatalogContext } from "hooks/useRestaurantCatalogContext"
import type { ProductType, SelectionType } from "types"

interface SearchPanelProps {
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
}

const SearchPanel: React.FC<SearchPanelProps> = ({
  isVisible,
  setIsVisible,
}) => {
  const [search, setSearch] = useState<string>("")
  const [matches, setMatches] = useState<ProductType[]>([])
  const { catalog, setSelection } = useRestaurantCatalogContext()

  const clearSearch = () => {
    setSearch("")
    setMatches([])
  }

  useEffect(() => {
    if (!catalog) return

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
    <Sidebar visible={isVisible} onHide={() => setIsVisible(false)} fullScreen>
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
        <ul style={{ listStyleType: "none", margin: "10px 0", padding: 0 }}>
          {matches.map((match, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "2rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={match.image}
                  alt={match.name}
                  style={{ width: "60px", height: "47px", marginRight: "10px" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h3 style={{ margin: 0 }}>{match.name}</h3>
                  <p style={{ margin: 0 }}>{match.price}€</p>
                </div>
              </div>
              <ButtonContainer>
                <SelectButton
                  icon="pi pi-chevron-right"
                  rounded
                  aria-label="select product"
                  className="p-button-text p-button-rounded"
                  onClick={() => handleSelectProduct(match)}
                />
              </ButtonContainer>
            </li>
          ))}
        </ul>
      )}
    </Sidebar>
  )
}

export default SearchPanel
