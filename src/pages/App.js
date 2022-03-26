import React from "react";
import { Col, Layout, Row } from "antd";
// import { Input } from "antd";
// import { SearchOutlined } from "@ant-design/icons";
import Navigation from "../components/common/navigation";
  // import CarouselDisplay from "./components/carousel/carousel"
import Footer from "../components/common/footer";
import CarItem from "../components/car/Car.item";
// import CarDetails from "./components/car/Car.item";
import { CarItems,CarModel } from "../components/common/CarItem";
import CarList from "../components/common/CarList";

const { Content,Header } = Layout;

function App() {
  return (
    <>
        <Layout>
          <Header style={{
          position: "fixed",
          color: "#ffff",
          background: "#053A7F",
          zIndex: 100,
          width: "100%",
          boxShadow: "5px 0 1px 0",
          marginBottom:"20px"
        }} >
          <Navigation />
          </Header>
          {/* <CarouselDisplay /> */}
          <Content style={{marginTop:'130px'}}>
            This is page
            <CarList/>
          </Content>

          <Footer />
        </Layout>
    </>
  );
}

export default App;
