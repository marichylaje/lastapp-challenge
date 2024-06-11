import React, { useEffect, useState } from "react"
import cannotLoad from "../../assets/images/cannot-load.png"
import { StyledImage } from "./styles"

interface ImageProps {
  src: string
  name: string
}

const ProductImage: React.FC<ImageProps> = ({ src, name }) => {
  const [imageSrc, setImageSrc] = useState<string>(src)

  const handleImageError = () => {
    setImageSrc(cannotLoad)
  }

  useEffect(() => {
    imageSrc !== src && setImageSrc(src)
  }, [src])

  return <StyledImage src={imageSrc} alt={name} onError={handleImageError} />
}

export default React.memo(ProductImage)
