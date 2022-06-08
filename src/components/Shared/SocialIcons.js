import React from "react";
import classNames from "classnames";
import { Button } from "antd";
import {FacebookOutlined,TwitterOutlined,LinkedinOutlined} from '@ant-design/icons';

export default function SocialIcons({ className, type = "link", shape }) {
  return (
    <ul className={`social-icons ${classNames(className)}`}>
      <li>
        <Button type={type} shape={shape} href="#">
          <FacebookOutlined />
        </Button>
      </li>
      <li>
        <Button type={type} shape={shape} href="#">
        <TwitterOutlined />
        </Button>
      </li>
      <li>
        <Button type={type} shape={shape} href="#">
        <LinkedinOutlined />
        </Button>
      </li>
    </ul>
  );
}
