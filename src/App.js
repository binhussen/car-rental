import React from "react";
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/common/navigation";
// import CarouselDisplay from "./components/carousel/carousel";
import CarDetails from "./components/car/Car.item";

const { Content } = Layout;

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Navigation />
          {/* <div>
            <CarouselDisplay />
          </div> */}
          <div style={{ padding: "0 50px", marginTop: 64, background: "#ffff" }}>
          <Content 
            className="site-layout">
            <div style={{ padding: 24, minHeight: 380 }}>
              <CarDetails name="Toyatoa-vitz" />
              Content
            </div>
          </Content>
          </div>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
