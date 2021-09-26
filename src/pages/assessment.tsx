// @flow
import * as React from "react";
import { AssessmentCard } from "../components/assessment_card";
import "../style/assessment.css";

type Props = {};
type State = {};
export class Assessment extends React.Component<Props, State> {
  render() {
    return (
      <div id="assessment-container">
        <AssessmentCard name="React" desc="4 sections - 23 questions" />
        <AssessmentCard name="VueJs" desc="4 sections - 23 questions" />
        <AssessmentCard name="NodeJs" desc="4 sections - 23 questions" />
      </div>
    );
  }
}
