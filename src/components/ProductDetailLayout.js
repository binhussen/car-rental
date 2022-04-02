import React from "react";
import { Col, Row } from "antd";
import ProductDetailImages from "./ProductDetailImages";
import ProductDetailContent from "./ProductDetailContent";

function ProductDetailLayout({ data, type, hideTab, style }) {
  return (
    <div className="product-detail" style={style}>
      <Row gutter={30}>
        <Col md={12}>
          <ProductDetailImages images={data.images} />
        </Col>
        <Col md={12}>
          <ProductDetailContent data={data} />
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetailLayout;
