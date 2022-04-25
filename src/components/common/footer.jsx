import { Col, Row } from "antd";
import classNames from "classnames";
import Container from "./container";
import FooterInformation from "./FooterInformation";
import FooterQuickLinks from "./FooterQuickLinks";

const footer = (props) => {
    return (
        <div className={`footer -style-one`}>
            <div className="footer-top">
                <Container>
                <Row gutter={15}>
                    <Col xs={24} md={9} lg={8}>
                    <FooterInformation />
                    </Col>
                    <Col xs={24} md={15} lg={16}>
                    <FooterQuickLinks colSize={{ span: 8 }} />
                    </Col>
                </Row>
                </Container>
            </div>
            <div className="footer-bottom">
            <Container>
                    <div className="footer-bottom__wrapper container">
                        <p> &copy; {props.Year}  Abysinia auto inc.</p>
                    </div>
                </Container>
            </div>  
        </div>
    );
}

export default footer;