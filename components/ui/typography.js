import styled from 'styled-components';

// see https://www.newline.co/@kchan/styling-react-components-with-styled-components--1e9061c4
// for styled-components basics

// Headings

/* Asap/H1 */
export const H1 = styled.h1`
  color: ${(props) => (props.color ? props.color : 'var(--navy)')};  // default navy color, color prop if specified
  // color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 73px;
`;

/* Asap/H2 */
export const H2 = styled.h2`
  color: ${(props) => (props.color ? props.color : 'var(--navy)')};  
  // color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 48px;
`;

/* Asap/H3 */
export const H3 = styled.h3`
  color: ${(props) => (props.color ? props.color : 'var(--navy)')};  
  // color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 143.01%;
  margin-top: 1em;
`;

/* Asap/H4 */
export const H4 = styled.h4`
  color: ${(props) => (props.color ? props.color : 'var(--navy)')};  
  // color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 143.01%;
`;

/* Asap/H5 */
export const H5 = styled.h5`
  color: ${(props) => (props.color ? props.color : 'var(--navy)')};  
  // color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 115%;
`;

// Body

/* Asap/Paragraph 1 */
export const B1 = styled.b`
  color: ${(props) => (props.color ? props.color : 'var(--navy)')};  
  // color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 122.13%;
`;

/* Asap/Paragraph 2 */
export const B2 = styled.b`
  color: ${(props) => (props.color ? props.color : 'var(--navy)')};  
  // color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 125.63%;
`;

/* Asap/Paragraph 3 */
export const B3 = styled.b`
  color: ${(props) => (props.color ? props.color : 'var(--navy)')};
  // color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 125.63%;
`;

// Other

/* Asap/Text Label */
export const TextLabel = styled.b`
  color: ${(props) => (props.color ? props.color : 'var(--navy)')};
  // color: var(--navy);
  font-family: 'Asap';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 163.44%;

  text-transform: uppercase;
`;

/* Asap/Links */
export const A = styled.a`
  color: ${(props) => (props.color ? props.color : 'var(--navy)')};
  font-family: 'Asap';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 163.4%;
  cursor: pointer;

  text-decoration-line: underline;
  text-transform: uppercase;
`;

/* Asap/Menu */
export const MenuText = styled.b`
  color: ${(props) => (props.color ? props.color : 'var(--navy)')};
  font-family: 'Asap';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 143.01%;
`;
