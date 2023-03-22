import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="#https://linkedin.com" target="_blank">
        <TiSocialLinkedin />
      </a>
      <a href="#https://github.com" target="_blank">
        <TiSocialGithubCircular />
      </a>
      <a href="#https://facebook.com" target="_blank">
        <TiSocialFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
