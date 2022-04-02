import { Col, Row } from "antd";
import CarItem from "../car/Car.item";
import { CarItems } from "../../data/CarItem";

const CarList = ()=>{
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {CarItems?.map((item) => (
                    <Col className="gutter-row" span={6} key={Math.random()}>
                        <CarItem CarModel={item} />
                    </Col>
                ))}
        </Row>
    );
}

export default  CarList;