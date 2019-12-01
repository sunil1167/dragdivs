import { SteppedLineTo } from "react-lineto";
import React from "react";

function Line() {
  return (
    <div>
      <div className="A">Element A</div>
      <div className="B">Element B</div>
      <SteppedLineTo from="A" to="B" orientation="v" />
    </div>
  );
}
export default Line;
