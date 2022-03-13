import  React from "react";
 import { Card } from 'antd';
const { Meta } = Card;

const CarDetails = (props) => {
  return (<>
          <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o="
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      </>
  );
};

export default CarDetails;
