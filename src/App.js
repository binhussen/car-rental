import React from "react";
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
// import { Input } from "antd";
// import { SearchOutlined } from "@ant-design/icons";
import Navigation from "./components/common/navigation";
  // import CarouselDisplay from "./components/carousel/carousel"
import Footer from "./components/common/footer";
// import CarDetails from "./components/car/Car.item";

const { Content,Header } = Layout;

function App() {
  return (
    <>
      <BrowserRouter>
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
          </Content>

          <Footer />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
