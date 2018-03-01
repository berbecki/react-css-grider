import styled from "styled-components";
import PropTypes from "prop-types";

const gap = ({ gap = "1rem" }) => `${gap}`;
const autoRows = ({ minRowHeight = "2rem" }) => `minmax(${minRowHeight}, auto)`;
const columns = ({ columns = 12 }) => {
    if (typeof columns === "number") {
        return `repeat(${columns}, 1fr)`;
    } else if (typeof columns === "string") {
        return columns;
    }
    return columns;
};

/**
 * Should be used as <Grid [props]>[content]</Grid>
 */
const Grid = styled.div`
  display: grid;
  grid-gap: ${gap};
  grid-auto-rows: ${autoRows};
  grid-template-columns: ${columns};
  ${({rows}) => rows && `grid-template-rows: ${rows}`};
  ${({justifyContent}) => justifyContent && `justify-content: ${justifyContent}`};
  ${({alignContent}) => alignContent && `align-content: ${alignContent}`};
`;
Grid.propTypes = {
};
export default Grid;