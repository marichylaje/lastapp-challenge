import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react"
import { RESTAURANT_CATALOG_ENDPOINT } from "utils/dynamicEndpoints"
import { useParams } from "react-router-dom"
import type { ProductApiType, SelectionType } from "types"

interface DataContextType {
  catalog: ProductApiType[] | undefined
  selection: SelectionType[] | undefined
  setSelection: Dispatch<SetStateAction<SelectionType[] | undefined>>
  totalToPay: number
}

export const RestaurantCatalogContext = createContext<
  DataContextType | undefined
>(undefined)

export const RestaurantCatalogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [catalog, setCatalog] = useState<ProductApiType[] | undefined>(
    undefined
  )
  const [selection, setSelection] = useState<SelectionType[] | undefined>(
    undefined
  )
  const [totalToPay, setTotalToPay] = useState<number>(0)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (!id) return

    fetch(RESTAURANT_CATALOG_ENDPOINT(id))
      .then((response) => response.json())
      .then((data) => setCatalog(data))
      .catch((error) => console.error("Error fetching catalog data:", error))
  }, [id])

  useEffect(() => {
    if (!selection) return
    console.log({ selection })
    const total = selection.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    )
    setTotalToPay(total)
  }, [selection])

  return (
    <RestaurantCatalogContext.Provider
      value={{ catalog, selection, setSelection, totalToPay }}
    >
      {children}
    </RestaurantCatalogContext.Provider>
  )
}
