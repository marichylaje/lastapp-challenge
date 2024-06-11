import React from "react"
import { StyledChip, StyledTabMenu } from "./styles"

interface TabMenuProps {
  options: string[]
  activeIndex: number
  setActiveIndex: (index: number) => void
}

const TabMenu: React.FC<TabMenuProps> = ({
  options,
  activeIndex,
  setActiveIndex,
}) => {
  const itemRenderer = (option: string, itemIndex: number) => ({
    icon: () => (
      <StyledChip label={option} isselected={activeIndex === itemIndex} />
    ),
    command: () => setActiveIndex(itemIndex),
  })

  const model = options.map((option, index) => itemRenderer(option, index))

  return (
    <StyledTabMenu
      model={model}
      activeIndex={activeIndex}
      onTabChange={(e) => setActiveIndex(e.index)}
    />
  )
}

export default TabMenu
