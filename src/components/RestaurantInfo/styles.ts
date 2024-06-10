import styled from "styled-components"

interface ImageProps {
  iscard?: boolean
}

export const Card = styled.div`
  background: var(--white-color);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  margin: 20px;
`

export const ImageWrapper = styled.div`
  position: relative;
`

export const StyledImage = styled.img<ImageProps>`
  width: 100%;
  height: 150px;
  ${({ iscard }) =>
    iscard &&
    `
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    `}
`

export const StyledLogo = styled.img<ImageProps>`
  width: ${({ iscard }) => (iscard ? "50px" : "75px")};
  height: ${({ iscard }) => (iscard ? "50px" : "75px")};
  border-radius: ${({ iscard }) => (iscard ? "30%" : "20%")};
  position: absolute;
  bottom: ${({ iscard }) => (iscard ? "-25px" : "-40px")};
  left: 15px;
  background-color: var(--white-color);
  box-shadow: 0px 1px 1px rgba(158, 158, 163, 0.2);
`

export const Content = styled.div<ImageProps>`
  margin-left: ${({ iscard }) => (iscard ? "5rem" : "6.5rem")};
`

export const Title = styled.h1`
  font-size: 16px;
  margin: 5px 0 0 0;
`

export const Category = styled.p`
  font-size: 12px;
  color: var(--text-color-secondary);
  margin: 0;
`

export const Info = styled.div`
  display: flex;
  margin-top: 0.5rem;
  padding-bottom: 1rem;
  svg {
    margin-right: 5px;
  }
`

export const InfoText = styled.span`
  font-size: 9px;
  color: var(--text-color-secondary);
`
