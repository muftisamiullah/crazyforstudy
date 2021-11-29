import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";

export default function InstantAccess() {
  const [location, setLocation] = useState("/");
  const { state, selectedCon } = useContext(AuthContext);

  const content =
    selectedCon && selectedCon.content && selectedCon.content.feature
      ? selectedCon.content.feature
      : "";
  console.log("item", content);

  useEffect(() => {
    if (state.Subscribe != "true") {
      setLocation("/paynow");
    } else if (state.Subscribe == "true") {
      setLocation("/user/my-subs");
    } else {
      setLocation(
        "/auth/signin?callbackUrl=" + `${process.env.REACT_APP_URL}` + "/paynow"
      );
    }
  }, []);

  return (
    <section className="section pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="Text_title2 services_title1 text_tb_center3 pb-3">
              <h4 className="pb-2">Services</h4>
              <h3>
                {content && content.serviceHeading
                  ? content.serviceHeading
                  : "Get Instant Access Of Business textbook Solutions"}{" "}
              </h3>
              {content && content.serviceContent ? (
                content.serviceContent
              ) : (
                <>
                  <p>
                    Our mission is to help Australian students get better grades
                    by filling their vessel of knowledge; inspiring and
                    empowering them to strengthen our communities. Through our
                    online assignment writing services Australia, we give an
                    opportunity to all Australian students to excel in education
                    and leave a sustainable world for the future.
                  </p>
                  <p>
                    Our vision is to be the Best Assignment Writing Service
                    provider, in terms of quality, delivery, and pricing. We
                    envision a space where Australian students from the remotest
                    areas have access to lifelong learning and advanced
                    knowledge through us.{" "}
                  </p>
                  <ul className="include_list">
                    <li>
                      <i className="fa fa-check-circle"></i> 50 Question to ask
                      every month{" "}
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i> Unlimited access to
                      textbook Solutions{" "}
                    </li>
                  </ul>
                </>
              )}
              {state.Subscribe != "true" ? (
                <div className="btn1">
                  <Link to={`${location}`}>Get Unlimited Access</Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-md-7 col-lg-7 services_text box_services">
            <div className="row services_boxes">
              <div className="col-md-6 text-center help_service_title">
                <div className="help_service help_service1">
                  <span className="service_icon Assigment_icon">
                    <i className="fa fa-book" aria-hidden="true"></i>
                  </span>
                  <h4>
                    {content && content.subServiceHeading1
                      ? content.subServiceHeading1
                      : "Step-by-step business solutions manual"}{" "}
                  </h4>
                  <p>
                    {content && content.subServiceContent1
                      ? content.subServiceContent1
                      : `All Assignment Services provides custom-written, delivered
                    on time assignment writing help to students `}
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-center help_service_title">
                <div className="help_service help_service2">
                  <span className="service_icon Essay_icon">
                    <i className="fa fa-book" aria-hidden="true"></i>
                  </span>
                  <h4>
                    {content && content.subServiceHeading2
                      ? content.subServiceHeading2
                      : "Latest Business Textbook Editions"}{" "}
                  </h4>
                  <p>
                    {content && content.subServiceContent2
                      ? content.subServiceContent2
                      : `As an essay writing provider, we help the Australian
                    students to achieve academic excellence.`}
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-center help_service_title">
                <div className="help_service help_service3">
                  <span className="service_icon Dissertation_icon">
                    <i className="fa fa-sticky-note" aria-hidden="true"></i>
                  </span>
                  <h4>
                    {content && content.subServiceHeading3
                      ? content.subServiceHeading3
                      : "Add your business college textbooks"}{" "}
                  </h4>
                  <p>
                    {content && content.subServiceContent3
                      ? content.subServiceContent3
                      : `We deliver well-written dissertations utilizing primary and
                    secondary research methods.`}
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-center help_service_title">
                <div className="help_service help_service4">
                  <span className="service_icon last_icon">
                    <i className="fa fa-sticky-note" aria-hidden="true"></i>
                  </span>
                  <h4>
                    {content && content.subServiceHeading4
                      ? content.subServiceHeading4
                      : "Business Professors and Phd Experts"}
                  </h4>
                  <p>
                    {content && content.subServiceContent4
                      ? content.subServiceContent4
                      : `Our case study writers are experienced and possess a high
                    level of knowledge and expertise. `}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
