import Copyright from "../../molecules/footer/copyright-text";
import PageLinks from "../../molecules/footer/page-links";
import SocialLinks from "../../molecules/footer/social-links";

const Footer = () => {
  return (
    <footer className="bg-footerBg py-2 w-full px-12">
      <div className="grid my-4 w-full grid-cols-3   font-satoshi-regular">
        <div className="w-full h-full flex justify-start items-center">
          <p>the logo will be here</p>
        </div>
        <div>
          <p className="font-chillax-light text-[1.25rem] mb-8 text-primary">
            Social Links
          </p>
          <SocialLinks />
        </div>
        <div>
          <p className="font-chillax-light text-[1.25rem] mb-8 text-primary">
            Pages
          </p>
          <PageLinks />
        </div>
      </div>
      <Copyright>
        © 2024 Made by Najmul Huda Chowdhury. All rights reserved.
      </Copyright>
    </footer>
  );
};

export default Footer;
