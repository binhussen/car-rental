import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Col, Row } from "antd";

import MainLayout from "../../components/common/layout";
import Container from "../../components/common/container";
import Sidebar from "../../components/common/sidebar";
import FetchDataHandle from "../../components/FetchDataHandle";
import PartnerOne from "../../components/Shared/PartnerOne";
import products from '../../data/carData.json'
import ProductDetailLayout from "../../components/ProductDetailLayout";

function productDetail() {
  const router = useRouter();
  const { slug } = router.query;

  console.log(products);
  console.log(slug);
  
  return (
    <MainLayout title="Product detail">
      <div className="product-detail">
        <Container>
          <Row gutter={30}>
            <Col xs={24} md={6}>
              <Sidebar showShortcut />
            </Col>
            <Col xs={24} md={18}>
              <FetchDataHandle
                data={products}
                renderData={(data) => <ProductDetailLayout data={data[1]} />}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <PartnerOne />
      </Container>
    </MainLayout>
  );
}

export default React.memo(productDetail);
