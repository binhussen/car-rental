import React from "react";
import { Card } from 'antd';

const CarDetails= (props)=>{
    return <>
        <Card title="Default size card" extra={<a href="/home">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>

    </>
}

export default CarDetails;