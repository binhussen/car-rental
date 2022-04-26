import React from "react";
import classNames from "classnames";
import { Button, Slider, Switch } from "antd";

import categories from '../../data/tabs.json'

const data = {
  Brand: [
    {name: "Acura"},
    {name: "Alfa Romeo"},
    {name: "AM General"},
    {name: "Aston "},
    {name: "Audi"},
    {name: "Bentley"},
    {name: "BMW"},
    {name: "Buick"},
    {name: "Cadillac"},
    {name: "Chevrolet"},
    {name: "Chrysler"},
    {name: "Dodge"},
    {name: "Ferrari"},
    {name: "FIAT"},
    {name: "Fisker"},
    {name: "Ford"},
    {name: "Freightliner"},
    {name: "Genesis"},
    { name: "GMC"},
    { name: "Honda"},
    { name: "HUMMER"},
    { name: "Hyundai"},
    { name: "INFINITI"},
    { name: "Isuzu"},
    { name: "Jaguar"},
    { name: "Jeep"},
    { name: "Karma"},
    { name: "Kia"},
    { name: "Lamborghini"},
    { name: "Land Rover"},
    { name: "Lexus"},
    { name: "Lincoln"},
    { name: "Lotus"},
    { name: "Lucid"},
    { name: "Maserati"},
    { name: "Maybach"},
    { name: "Mazda"},
    { name: "McLaren"},
    { name: "Mercedes-Benz"},
    { name: "Mercury"},
    { name: "MINI"},
    { name: "Mitsubishi"},
    { name: "Nissan"},
    { name: "Oldsmobile"},
    { name: "Plymouth"},
    { name: "Polestar"},
    { name: "Pontiac"},
    { name: "Porsche"},
    { name: "Ram"},
    { name: "Rivian"},
    { name: "Rolls-Royce"},
    { name: "Saab"},
    { name: "Saturn"},
    { name: "Scion"},
    { name: "smart"},
    { name: "Volvo"},
    { name: "Subaru"},
    { name: "Suzuki"},
    { name: "Tesla"},
    { name: "Toyota"},
    { name: "Volkswagen"}
  ],
  Type: [
    { name: "Convertibles"},
    { name: "Coupes"},
    { name: "SUVs"},
    { name: "Sedans"},
    { name: "Trucks"},
    { name: "Vans"},
    { name: "Wagons"},
    { name: "Hatchbacks"},
    { name: "Hybrids"},
    { name: "Electrics" },
  ],
  tags: [
    { name: "All tag", value: "" }
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
      <SidebarSection className="-departments" title="Brands">
        <ul>
          <li>
            <a onClick={(e) => onChooseCategory(e, "")} href="#">
              All Brands
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
      <SidebarSection className="-tags" title="Type">
        {data.Brand.map((item, index) => (
          <Button
            // className={classNames({ active: tag === item.value })}
            onClick={() => onChooseTag(item.value)}
            key={index}
          >
            {item.name}
          </Button>
        ))}
      </SidebarSection>
      <SidebarSection className="-tags" title="Price">
        <Slider range defaultValue={[500000, 30000000]}/>
      </SidebarSection>
    </div>
  );
}

export default Sidebar;
