import React from "react";
import styled from "styled-components";

// TODO: Not being used
const RangeSliderStyles = styled.div``;

const RangeSlider = (props) => {
  return (
    <RangeSliderStyles>
      <input type="range" list="tickmarks" min="0" max="10" step="1" />
      <datalist id="tickmarks">
        <option value="0" label="0"></option>
        <option value="5" label="5"></option>
        <option value="10" label="10"></option>
        <option value="11" label="10+"></option>
      </datalist>
    </RangeSliderStyles>
  );
};

export default RangeSlider;
