import { Header } from "antd/lib/layout/layout";
import Link from "next/link";
import Container from "./container";
import Navigation from "./navigation";

function MainHeader() {
  return (
    <div className="menu -style-one">
      <Container>
        <Header style={{
          // position: "fixed",
          color: "#ffff",
          background: "white",
          zIndex: 100,
          width: "100%",
          boxShadow: "5px 0 1px 0",
          // marginBottom:"20px"
        }} >
          <Navigation />
        </Header>
        </Container>
      </div>
    );
}

export default MainHeader;