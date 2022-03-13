import { Col, Row } from "antd";
import CarItem from "../car/Car.item";
import { CarItems } from "./CarItem";

const CarList = ()=>{
    return <div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {CarItems?.map((item) => (
                        <Col className="gutter-row" span={6}>
                            <CarItem CarModel={item}/>
                        </Col>
                        ))}
                    </Row>
            </div>
}

export default  CarList;