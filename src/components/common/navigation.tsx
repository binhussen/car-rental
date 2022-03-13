import { Row, Col, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Link } from "react-router-dom";
import { MenuItems, NavBarMenuItem } from "./menuItems";
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
                {item.title} <Link to={item.link} />
              </Menu.Item>
            ))}
          </Menu>
        </Col>
      </Row>
    </>
  );
};
export default navigation;
