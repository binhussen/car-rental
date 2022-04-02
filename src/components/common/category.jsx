import React from "react";
import { Col, Row, Empty } from "antd";
import Link from "next/link";
import Container from "./container";

function Category({ data }) {
  return (
    <div className="categories-one">
      <Container>
        <Row gutter={[{ sm: 0, md: 15 }]}>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <Col key={index} xs={12} sm={8} md={4}>
                <Link href="">
                  <a
                    href=""
                    className="categories-one-item"
                  >
                    <div className="categories-one-item__image up-down-anim-hover">
                      <span>{item.image.background}</span>
                      <img
                        src={item.image.main}
                        alt="Category image"
                      />
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.quantity} Items</p>
                  </a>
                </Link>
              </Col>
            ))
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Category;
