import React from "react";
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
// import { Input } from "antd";
// import { SearchOutlined } from "@ant-design/icons";
import Navigation from "./components/common/navigation";
//  import CarouselDisplay from "./components/carousel/carousel"
import Footer from "./components/common/footer";
import CarDetails from "./components/car/Car.item";

const { Content } = Layout;

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Navigation />
            {/* <CarouselDisplay /> */}
          
        
          <Footer/>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
