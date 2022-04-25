import React, { useState } from "react";
import Category from "../components/common/category";
import Container from "../components/common/container";
import MainLayout from "../components/common/layout";
import ProductTab from "../components/ProductTab";
import categoryData from "../data/categories.json";
import categories from "../data/tabs.json"
import products from "../data/carData.json"
import SectionTitle from "../components/SectionTitle";
import BannerSlider from "../components/common/bannerSlider";
import Banner from '../data/banner.json';

function App() {
  const [currentProductTabsCategory, setCurrentProductTabsCategory] = useState({
    daleProducts:products,
  });
  return (
    <MainLayout title="My new cool app">
      <BannerSlider data={Banner.one} />
      {/* <SectionTitle
            title={"Find the Car You Want, Your Way"}
            className="-center"
            hideDecoration={true}
      />
      <div className="center"><div style={{
        display: "flex",
        justifyContent: "center",
        maxWidth: "492px",
        marginLeft: "7em",
        marginRight: "7em"
      }}>
      <div className="product-detail-content__delivery row">Shop New</div>
        <div className="product-detail-content__delivery">Shop Used</div></div>
        <div className="product-detail-content__delivery">Sell Your Car</div></div> */}
      <Container>
        <Category data={categoryData.one} />
        <ProductTab
          data={products}
          productCol={{ xs: 12, sm: 8, lg: 6 }}
          onTabChange={(val) =>
            setCurrentProductTabsCategory({
              ...currentProductTabsCategory,
              daleProducts: val,
            })
          }
          headerCategories={categories.slice(0, 5).map((item) => item.name)}
          headerTitle="Finding the Right Car for You"
        />
      </Container>
    </MainLayout>
  );
}

export default App;
