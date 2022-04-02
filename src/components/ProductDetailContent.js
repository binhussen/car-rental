import { Button, Col, Rate, Row, message } from "antd";
import SocialIcons from "./Shared/SocialIcons";

export default function ProductDetailContent({ data, type }) {
  
  return (
    <div className="product-detail-content">
      <h5 className="product-type">{data.category}</h5>
      <h2 className="product-detail-content__name">{data.name}</h2>
      <p className="product-detail-content__description">
        {data.fullDescription}.
        {data.shortDescription}.
      </p>
      <div className="product-detail-content__delivery">Free delivery</div>
      <h3 className="product-detail-content__price">
        {data.discount && <del>{data.price}</del>}
        <div className="product-detail-content__price-discount">
          <h5>
            {data.discount
              ? (data.price - data.discount)
              : (data.price)}
          </h5>
          <span>
            <Rate defaultValue={data.rate} />
          </span>
        </div>
      </h3>
      <div className="product-detail-content__share">
        <h5>Contact link:</h5>
        <SocialIcons />
      </div>
    </div>
  );
}
