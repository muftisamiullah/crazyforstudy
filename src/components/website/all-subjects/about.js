import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
export default function About() {
  const { selectedCon } = useContext(AuthContext);
  const content =
    selectedCon && selectedCon.content && selectedCon.content.feature
      ? selectedCon.content.feature
      : "";
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 Content_Covered_title mb-4 pb-2  text-center pt-5 get-homework">
            <h2>
              {content && content.mainHeading
                ? content.mainHeading
                : "About Business Textbook Solutions Manual"}
            </h2>
          </div>
          <div className="col-md-12 text-center pb-5 get-homework">
            <p>
            {content && content.mainContent
                ? content.mainContent :
            
              `Crazy For Study is one of the leading providers of Business
              Textbook solution manuals for college and high school students.
              Get business textbook manual help and expert answers to your
              toughest college textbook questions. Master your Business
              assignments with our step-by-step business textbook solutions. Ask
              any college question and get an answer from our experts in as fast
              as 30 minutes. With Crazy For Study, we've got you covered 24/7.`
            }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
