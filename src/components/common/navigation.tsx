import { Row, Col, Menu } from "antd";
import { MenuItems, NavBarMenuItem } from "../../data/menuItems";

const navigation = () => {
  return (
    <>
      <Row>
        <Col span={8}>
          <h1 style={{ color: "white" }}>አቢሲኒያ auto</h1>
        </Col>
        <Col span={8} offset={8}>
          <Menu
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "stretch",
              background: "#053A7F",
              color: "white",
            }}
            theme="light"
            mode="horizontal"
          >
            {MenuItems.map((item: NavBarMenuItem) => (
              <Menu.Item key={Math.random()}>
                {item.title}
                {/* <Link href={item.link} /> */}
              </Menu.Item>
            ))}
          </Menu>
        </Col>
      </Row>
    </>
  );
};
export default navigation;
