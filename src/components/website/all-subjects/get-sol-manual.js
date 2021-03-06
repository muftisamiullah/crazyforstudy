import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
export default function GetSolManual({ ...props }) {
  const { SelectedSubSubject } = useContext(AuthContext);
  const content =
    SelectedSubSubject && SelectedSubSubject.content
      ? SelectedSubSubject.content
      : {};

  return (
    <section className="section pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-4">
            <div className="Content_Covered_title Students_title pb-2">
              <h3 className="pb-3">
                {content && content.aboutHeading
                  ? content.aboutHeading
                  : `Get ${props.bookname} Solution Manuals from CFS`}
              </h3>
            </div>
          </div>
          <div className="col-md-12 text-center">
            {/* <p> Crazy For Study is one of the leading providers of {props.bookname} solution manuals for college and high school students. Get textbook answers help and expert answers to your toughest {props.bookname} textbook questions. Master your {props.bookname} assignments with our step-by-step {props.bookname} textbook solutions. Ask any {props.bookname} question and get an answer from our experts in as fast as 30 minutes. With Crazy For Study, we've got you covered 24/7. </p> */}
            <p>
              {content && content.aboutContent
                ? content.aboutContent
                : `${" "}
              Crazy For Study is one of the leading providers of${" "}
              ${props.bookname} solution manuals for college and high school
              students. Get textbook answers help and expert answers to your
              toughest ${props.bookname} textbook questions. Master your${" "}
              ${props.bookname} assignments with our step-by-step${" "}
              ${props.bookname} textbook solutions. Ask any ${
                    props.bookname
                  }${" "}
              question and get an answer from our experts in as fast as 30
              minutes. With Crazy For Study, we've got you covered 24/7.${" "}`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
