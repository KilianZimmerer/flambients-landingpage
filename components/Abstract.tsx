import React, { FunctionComponent } from "react";

export interface AbstractData {
  abstractText: string;
}

const Abstract: FunctionComponent<AbstractData> = ({ abstractText }) => {
  return (
    <div className="container-fluid decilo-background pt-5 ps-3">
          <p className="text-light">{abstractText}</p>
      </div>
  );
};

export default Abstract;
