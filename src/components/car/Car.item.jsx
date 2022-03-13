import  React from "react";
 import { Card } from 'antd';
const { Meta } = Card;

const CarItem = (props) => {
  const car= props.CarModel;
  return (<>
          <Card
    hoverable
    cover={<img alt="example" src={car.image} />}
  >
    <Meta title={car.name} description="www.instagram.com" />
  </Card>
      </>
  );
};

export default CarItem;
