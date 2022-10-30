import styled from "styled-components"

// see https://www.newline.co/@kchan/styling-react-components-with-styled-components--1e9061c4
// for styled-components basics

const StyledH1 = styled.h1`
  font-family: 'Asap', sans-serif;
  color: red;
`

export const H1 = ({ children }) => (
  <StyledH1>{children}</StyledH1>
)

const StyledH2 = styled.h2`
  font-family: 'Asap', sans-serif;
`

export const H2 = ({ children }) => (
  <StyledH2>{children}</StyledH2>
)

const StyledH3 = styled.h3`
  font-family: 'Asap', sans-serif;
`

export const H3 = ({ children }) => (
  <StyledH3>{children}</StyledH3>
)

const StyledH4 = styled.h4`
  font-family: 'Asap', sans-serif;
`

export const H4 = ({ children }) => (
  <StyledH4>{children}</StyledH4>
)

const StyledH5 = styled.h5`
  font-family: 'Asap', sans-serif;
`

export const H5 = ({ children }) => (
  <StyledH5>{children}</StyledH5>
)