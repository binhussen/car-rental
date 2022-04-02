import Link from "next/link";
import classNames from "classnames";

function Product({ data, className}) {
  return (
    <>
      <div className={`product ${classNames(className)}`}>
            <div className="product-img">
              <Link
                href={process.env.PUBLIC_URL + `/product/[slug]`}
                as={process.env.PUBLIC_URL + `/product/${data.slug}`}
              >
                <a title={data.name}>
                  <img src={data.coverImage} alt="Product image" />
                </a>
              </Link>
            </div>
            <div className="product-content">
              <h5 className="product-type">{data.category}</h5>
              <Link
                href={process.env.PUBLIC_URL + `/product/[slug]`}
                as={process.env.PUBLIC_URL + `/product/${data.slug}`}
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
          </div>
    </>
  );
}

export default Product;
