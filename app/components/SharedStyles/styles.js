import styled from 'styled-components';

export const P = styled.p`
  margin-left: 20px;
  padding-right: 20px;
  margin-bottom: 5px;
  font-family: 'Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif';
`;

export const PLeft = styled(P)`
  text-align: left;
`;

export const SectionBreak = styled.div`
  margin-bottom: 25px;
`;

export const Img = styled.img`
  // height: 200px;
  width: 200px;
`;

export const Ul = styled.ul`
  -webkit-column-width: 150px;
  -moz-column-width: 150px;
  column-width: 150px;
`;

// export const UL = styled.ul`
//   -webkit-column-width: ${props => props.width || '150px'};
//   -moz-column-width: ${props => props.width || '150px'};
//   column-width: ${props => props.width || '150px'};
// `;

export const Div = styled.div`
  margin-left: 20px;
  padding-right: 20px;
  margin-bottom: 5px;
  font-family: 'Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif';
`;
