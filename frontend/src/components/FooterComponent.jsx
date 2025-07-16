import React from "react";
("use client");
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
function FooterComponent() {
  return (
    <div>
      <Footer container className="rounded-none">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <FooterBrand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Quí Academy"
              className="ml-11"
            />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <FooterIcon href="#" icon={BsFacebook} />
                <FooterIcon href="#" icon={BsInstagram} />
                <FooterIcon href="#" icon={BsTwitter} />
                <FooterIcon href="#" icon={BsGithub} />
                <FooterIcon href="#" icon={BsDribbble} />
              </div>
            </div>
          </div>
          <FooterDivider />
          <FooterCopyright href="#" by="Learn English" year={2025} />
        </div>
      </Footer>
     
    </div>
  );
}

export default FooterComponent;
