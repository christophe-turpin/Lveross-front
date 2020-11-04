import React from "react";
import "./evenementiel.css";
import { Col , Row } from "reactstrap";
import Carousel from "./Carousel";
import resumeData from "../assets/resumeData";
const Birthday = () => {
  return (
    <div className="about">
      <div className="columns">
        {/* <Col className="image" lg="4">
          <img className="Alex" src={resumeData.mariagePic} alt="alex" />
        </Col> */}
        <Col lg="12" md="12">
          <h2 className="title">Gender Reveal</h2>
          <div id="ct">
            <div className="corner " id="left_top" />
            <div className="corner" id="left_bottom" />
            <div className="corner" id="right_top" />
            <div className="corner" id="right_bottom" />
            <blockquote id='quote'>
              <p>
                <i>
                  &ldquo;{resumeData.eventCit4}&rdquo;{" "}
                </i>
              </p>
            </blockquote>
          </div>
		  {resumeData.temoinGenderReveal[0].date ?
            resumeData.temoinGenderReveal.map((item) => (
              <div className="comItem">
                <Row className="comRow">
                  <h4 className="info">
                    {item.date} par {item.name} :
                  </h4>
                  <p className="com">"{item.com}"</p>
                </Row>
              </div>
            )): <p>Pas de témoignage pour le moment</p>}
            <div id="carDiv">
                <Carousel carousel={resumeData.GenderRevealCarousel} />
            </div>
          {/* <Link to="/contact">
            <div className="evenCarousel">
              <button className="contactButton">Contactez-nous</button>
            </div>
          </Link> */}
        </Col>
      </div>
    </div>
  );
};

export default Birthday;
