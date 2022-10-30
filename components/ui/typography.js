import styled from "styled-components"

// see https://www.newline.co/@kchan/styling-react-components-with-styled-components--1e9061c4
// for styled-components basics

// Headings

/* Asap/H1 */
const StyledH1 = styled.h1`
  color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 73px;
`
export const H1 = ({ children }) => (
  <StyledH1>{children}</StyledH1>
)

/* Asap/H2 */
const StyledH2 = styled.h2`
  color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 48px;
`
export const H2 = ({ children }) => (
  <StyledH2>{children}</StyledH2>
)

/* Asap/H3 */
const StyledH3 = styled.h3`
  color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 143.01%;
`
export const H3 = ({ children }) => (
  <StyledH3>{children}</StyledH3>
)

/* Asap/H4 */
const StyledH4 = styled.h4`
  color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 143.01%;
`
export const H4 = ({ children }) => (
  <StyledH4>{children}</StyledH4>
)

/* Asap/H5 */
const StyledH5 = styled.h5`
  color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 115%;
`
export const H5 = ({ children }) => (
  <StyledH5>{children}</StyledH5>
)



// Body

/* Asap/Paragraph 1 */
const StyledB1 = styled.b`
  color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 122.13%;
`
export const B1 = ({ children }) => (
  <StyledB1>{children}</StyledB1>
)

/* Asap/Paragraph 2 */
const StyledB2 = styled.b`
  color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 125.63%;
`
export const B2 = ({ children }) => (
  <StyledB2>{children}</StyledB2>
)

/* Asap/Paragraph 3 */
const StyledB3 = styled.b`
  color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 125.63%;
`
export const B3 = ({ children }) => (
  <StyledB3>{children}</StyledB3>
)



// Other

/* Asap/Text Label */
const StyledTextLabel = styled.b`
  color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 163.44%;
`
export const TextLabel = ({ children }) => (
  <StyledTextLabel>{children}</StyledTextLabel>
)

/* Asap/Links */
const StyledLink = styled.a`
  color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 137.52%;

  text-decoration-line: underline;
`
export const A = ({ children }) => (
  <StyledLink>{children}</StyledLink>
)

/* Asap/Menu */
const StyledMenuText = styled.b`
  color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 143.01%;
`
export const MenuText = ({ children }) => (
  <StyledMenuText>{children}</StyledMenuText>
)