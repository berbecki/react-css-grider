import styled from "styled-components";
import PropTypes from "prop-types";


const wrapper = ({ wrapped }) => {
    console.log(wrapped);
    if (wrapped) {
        return `
            position: relative;
              :before {
                position: absolute;
                content: '';
                border: 1px solid #E0E0E0;
                border-radius: 3px;
                top: -4px;
                right: -4px;
                bottom: -4px;
                left: -4px;
      }
`
    }
};


const GridItem = styled.div`
  ${({ middle }) => middle && `align-self: center;`};
  ${({ bottom }) => bottom && `align-self: end;`};
  ${({ center }) => center && `justify-self: center;`};
  ${({ right }) => right && `justify-self: end;`};
  ${({stretch}) => stretch && `
  justify-self: stretch;
  align-self: stretch;
  `};
  ${wrapper}
`;

export default GridItem;