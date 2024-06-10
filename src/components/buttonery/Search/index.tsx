import React from "react"
import StyledFloatingButton from "../styles"

interface SearchProps {
  onClick: () => void
}

const Search: React.FC<SearchProps> = ({ onClick }) => {
  return (
    <StyledFloatingButton
      icon="pi pi-search"
      rounded
      aria-label="search"
      onClick={onClick}
    />
  )
}

export default Search
