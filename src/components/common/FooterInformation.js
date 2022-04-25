import React from "react";
import Link from "next/link";
import SocialIcons from "../Shared/SocialIcons";

export default function FooterInformation() {
  return (
    <div className="footer-info">
      <Link href={process.env.PUBLIC_URL + "/"}>
        <a className="footer-info__logo">
          <img 
                  src="/assets/images/logo/logo.jpg"
                  alt="አቢሲኒያ logo"
                />
        </a>
      </Link>
      <ul>
        <li>Address: </li>
        <li>Phone: +251923692424</li>
        <li>Email: mhdhsna@gmail.com</li>
      </ul>
      <SocialIcons type="primary" shape="circle" className="-btn-light" />
    </div>
  );
}
