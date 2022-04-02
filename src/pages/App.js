import React from "react";
import Category from "../components/common/category";
import MainLayout from "../components/common/layout";
import CarList from "../components/Shared/CarList";
import categoryData from "../data/categories.json";

function App() {
  return (
    <MainLayout title="My new cool app">
      <CarList />
      <Category data={categoryData.one} />
      <CarList />
    </MainLayout>
  );
}

export default App;
