import Link from "next/link";
import classNames from "classnames";
import { Button, Modal, Tooltip } from "antd";
import { useState } from "react";
import ProductDetailLayout from "./ProductDetailLayout";
import router from 'next/router';

function Product({ data, className }) {
  
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
  };
  const onModalClose = (e) => {
    setModalVisible(false);
  };

  return (
    <>
      <div className={`product ${classNames(className)}`}>
            <div className="product-img">
              <Link
                href={`/product/[slug]`}
                as={`/product/${data.id}`}
              >
                <a title={data.name}>
                  <img src={data.coverImage} alt="Product image" />
                </a>
              </Link>
            </div>
            <div className="product-content">
              <h5 className="product-type">{data.category}</h5>
              <Link
                href={ `/product/[slug]`}
                as={`/product/${data.id}`}
              >
                <a className="product-name" title="Pure Pineapple">
                  {data.name}
                </a>
              </Link>
              <h3 className="product-price">
                {data.discount
                  ? data.price - data.discount
                  : data.price}
                {data.discount && <del>{data.price}</del>}
              </h3>
            </div>
            <div className="product-select">
              <Tooltip title="Quick view">
                <Button
                  onClick={showModal}
                  className="product-btn"
                  type="primary"
                  shape="round"
                  icon={<i className="far fa-eye" />}
                />
              </Tooltip>
            </div>
      </div>
      <Modal
        visible={modalVisible}
        onCancel={onModalClose}
        footer={null}
        header={null}
        width={860}
      >
        <ProductDetailLayout style={{ marginBottom: 0 }} hideTab data={data} />
      </Modal>
    </>
  );
}

export default Product;
