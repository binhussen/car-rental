import { Row, Col, Menu } from "antd";
import { MenuItems, NavBarMenuItem } from "../../data/menuItems";

const navigation = () => {
  return (
    <>
      <Row>
        <Col span={6}>
          <div style={{display:"flex"}}>
          <img 
                  src="/assets/images/logo/logo.jpg"
                  alt="አቢሲኒያ logo"
                />
            <h2 style={{ color: "#1890ff" , paddingLeft:"1em",}}>አቢሲኒያ auto</h2></div>
        </Col>
        <Col span={10} offset={8}>
          <Menu
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "stretch",
              background: "#1890ff",
              color: "#fff",
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
