import { Row, Col, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import {Link } from "react-router-dom";
const navigation = () => {
  return (
    <>
      <Header 
        style={{
          position: "fixed",
          color:"#ffff",
          background: "#053A7F",
          zIndex: 100,
          width: "100%",
          boxShadow: "5px 0 1px 0",
        }}
      >
        <Row >
          <Col span={8}>
            <h1 style={{color:'white'}}>አቢሲኒያ auto</h1>
          </Col>
          <Col span={8} offset={8}>
            <Menu
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "stretch",
                background: "#053A7F",
                color:"white"
              }}
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
            >
              <Menu.Item key="1">
                Featured <Link to="/home" />
              </Menu.Item>
              <Menu.Item key="2">
                Brokers
                <Link to="/brokers" />
                </Menu.Item>
              <Menu.Item key="3">
              <Link to="/categories" />
                Categories</Menu.Item>
              <Menu.Item key="4">Owners 
              <Link to="/owners" />
              </Menu.Item>
              <Menu.Item key="4">Post car
              <Link to="/postcar" />
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      {/* <Route path="/about">
        This will show about page
      </Route>
      <Route path="/users">
        This will show users page
      </Route>
      <Route path="/">
        This will show default page
      </Route>
      =        </Router> */}
    </>
  );
};
export default navigation;
