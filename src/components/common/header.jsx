import { Header } from "antd/lib/layout/layout";
import Navigation from "./navigation";

function MainHeader() {
    return (
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
    );
}

export default MainHeader;