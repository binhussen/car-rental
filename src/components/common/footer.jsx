import { Row } from "antd";
import classNames from "classnames";
import Container from "./container";

const footer = (props) => {
    return (
        <div className="footer-bottom">
           <Container>
                <div className="footer-bottom__wrapper container">
                    <p> &copy; {props.Year}  Abysinia auto inc.</p>
                </div>
            </Container>
        </div>     
    );
}

export default footer;