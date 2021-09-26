// @flow
import * as React from "react";
import goto from "../assets/icons/arrow.svg";
type Props = {
  name: String;
  desc: String;
};
export const AssessmentCard = (props: Props) => {
  return (
    <div className="assessment-card">
      <div className="attribute">
        <div className="name">{props.name}</div>
        <div className="desc">{props.desc}</div>
      </div>
      <div className="checkAssess">
        <img className="icons" src={goto} alt="Document" />
      </div>
    </div>
  );
};
