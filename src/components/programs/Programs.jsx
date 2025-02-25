import React from "react";
import "./Programs.css";
import program_1 from "../../assets/images/program-1.png";
import program_2 from "../../assets/images/program-2.png";
import program_3 from "../../assets/images/program-3.png";
import program_icon_1 from "../../assets/images/program-1-icon.png";
import program_icon_2 from "../../assets/images/program-2-icon.png";
import program_icon_3 from "../../assets/images/program-3-icon.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="program 1" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="program 2" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="program 3" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
