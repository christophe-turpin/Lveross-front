import React from "react";
import "./footer.css";
import { Col, Card, CardImg, CardBody, CardText } from "reactstrap";
import resumeData from "../assets/resumeData";
import PrestaModal from "./PrestaModal";

const Footer = () => {
  return (
    <div className="footer">
      <Col id="prestDiv" lg="8">
        <p>Ils me font confiance:</p>
        <div id="presta">
          {resumeData.prestataires &&
            resumeData.prestataires.map((item) => (
              <a href={item.website} target="blank" key={item.website}>
                <Card className="prestacard" key={item.name}>
                  <div className="divImg">
                    <CardImg
                      className="cardImg"
                      top
                      src={item.logo}
                      alt={item.name}
                    />
                  </div>
                  <CardBody className="cardBody">
                    <CardText className="cardTitle">{item.name}</CardText>
                    {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                    {/* <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button>Button</Button> */}
                  </CardBody>
                </Card>
              </a>
            ))}
        </div>
      </Col>
      <Col id="mobilePresta" md="3">
        <PrestaModal buttonLabel="Voir les prestataires" />
      </Col>
      <Col lg="4" md="8" className="devContent">
        <h4 className="devTitle">Ce site a été créé par :</h4>
        <div className="devResponse">
          {resumeData.devs &&
            resumeData.devs.map((item) => (
              <div className="devItem" key={item.url}>
                <p className="devName">{item.name}</p>
                <a href={item.url} target="blank">
                  <img src={item.logo} className="logodev" alt={`logo dev`} />
                </a>
              </div>
            ))}
        </div>
      </Col>
    </div>
  );
};

export default Footer;
