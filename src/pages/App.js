import React, { useState } from "react";
import Category from "../components/common/category";
import Container from "../components/common/container";
import MainLayout from "../components/common/layout";
import ProductTab from "../components/ProductTab";
import CarList from "../components/Shared/CarList";
import categoryData from "../data/categories.json";
import categories from "../data/tabs.json"
import products from "../data/carData.json"

function App() {
  const [currentProductTabsCategory, setCurrentProductTabsCategory] = useState({
    daleProducts:products,
  });
  return (
    <MainLayout title="My new cool app">
      <Category data={categoryData.one} />
      <Container>
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
