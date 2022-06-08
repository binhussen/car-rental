import { Header } from "antd/lib/layout/layout";
import Link from "next/link";
import Container from "./container";
import Navigation from "./navigation";

function MainHeader() {
  return (
    <div className="menu -style-one" style={{backgroundColor:"#1890ff",marginBottom:"-60px"}}>
      <Container>
        {/* <Header style={{
          color: "#1890ff",
          background: "#1890ff",
          zIndex: 100,
          width: "100%",
          boxShadow: "5px 0 1px 0",
          marginBottom:"-80px"
        }} > */}
          <Navigation />
        </Container>
      </div>
    );
}

export default MainHeader;