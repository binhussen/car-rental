import React from "react";
import classNames from "classnames";
import { Button } from "antd";

import categories from '../../data/tabs.json'

const data = {
  color: [
    { name: "All colors", colorCode: "#FFF", value: "" },
    { name: "Black", colorCode: "#000", value: "black" },
    { name: "Blue", colorCode: "#1e73be", value: "blue" },
    { name: "Gray", colorCode: "#848484", value: "gray" },
    { name: "Green", colorCode: "#81D742", value: "green" },
    { name: "Red", colorCode: "#DD3333", value: "red" },
    { name: "Yellow", colorCode: "#eeee22", value: "yellow" },
  ],
  size: [
    { name: "All size", value: "" },
    { name: "XL", value: "xl" },
    { name: "L", value: "l" },
    { name: "M", value: "m" },
    { name: "S", value: "s" },
  ],
  tags: [
    { name: "All tag", value: "" },
    { name: "fresh", value: "fresh" },
    { name: "vegetable", value: "vegetable" },
    { name: "meat", value: "meat" },
  ],
};

const SidebarSection = ({ children, title, className }) => {
  return (
    <div className={`shop-sidebar-section ${classNames(className)}`}>
      <div className="shop-sidebar-section__header">
        <h5>{title}</h5>
      </div>
      <div className="shop-sidebar-section__content">{children}</div>
    </div>
  );
};

function Sidebar({ showShortcut, style }) {
  
  const onChooseCategory = (e, val) => {
    e.preventDefault();
  };
  const onChooseColor = (e, val) => {
    e.preventDefault();
  };
  const onChooseSize = (e, val) => {
    e.preventDefault();
  };
  const onChooseTag = (val) => {
  };
  return (
    <div style={style} className="shop-sidebar">
      <SidebarSection className="-departments" title="Departments">
        <ul>
          {/* <li className={classNames({ active: category === "" })}> */}
          <li>
            <a onClick={(e) => onChooseCategory(e, "")} href="#">
              All departments
            </a>
          </li>
          {categories.map((item, index) => (
            <li
              // className={classNames({ active: category === item.value })}
              key={index}
            >
              <a onClick={(e) => onChooseCategory(e, item.value)} href="#">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </SidebarSection>
      {!showShortcut && (
        <>
          <SidebarSection className="-colors" title="Popular colors">
            <ul>
              {data.color.map((item, index) => (
                <li
                  className={classNames({ active: color === item.value })}
                  key={index}
                >
                  <a onClick={(e) => onChooseColor(e, item.value)} href="#">
                    <span style={{ backgroundColor: item.colorCode }}></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </SidebarSection>

          <SidebarSection className="-size" title="Popular size">
            <ul>
              {data.size.map((item, index) => (
                <li
                  className={classNames({ active: size === item.value })}
                  key={index}
                >
                  <a onClick={(e) => onChooseSize(e, item.value)} href="#">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </SidebarSection>
        </>
      )}

      <SidebarSection className="-tags" title="Popular tags">
        {data.tags.map((item, index) => (
          <Button
            // className={classNames({ active: tag === item.value })}
            onClick={() => onChooseTag(item.value)}
            key={index}
          >
            {item.name}
          </Button>
        ))}
      </SidebarSection>
    </div>
  );
}

export default Sidebar;
