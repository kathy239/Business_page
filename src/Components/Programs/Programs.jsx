import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="program">
        <img src={program_1} alt="program_1"></img>
        <div className="caption">
          <img src={program_icon_1} alt=""></img>
          <p>Undergradute students</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="program_2"></img>
        <div className="caption">
          <img src={program_icon_2} alt=""></img>
          <p>Postgradute students</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="program_3"></img>
        <div className="caption">
          <img src={program_icon_3} alt=""></img>
          <p>International students</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
