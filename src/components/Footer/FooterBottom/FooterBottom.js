import React from 'react';
import FooterLink from './FooterLink/FooterLink';

const FooterBottom = () => {
  return (
    <div className="px-6 pb-8">
      <div className="text-sm border-t border-gray-300 text-gray-700 pt-2 ">
        <ul>
          <span className="font-bold mr-1">Editions:</span>
          <FooterLink>U.S. Edition</FooterLink>
          <FooterLink>日本</FooterLink>
          <FooterLink>Pakistan</FooterLink>
          <FooterLink>Romania</FooterLink>
        </ul>
        <ul className="-ml-3">
          <FooterLink>About Us</FooterLink>
          <FooterLink>Corrections</FooterLink>
          <FooterLink>Contact Us</FooterLink>
          <FooterLink>Editorial Guidelines</FooterLink>
          <FooterLink>Advertise</FooterLink>
          <FooterLink>Copyright</FooterLink>
          <FooterLink>Terms & Conditions</FooterLink>
          <FooterLink>Privacy Policy</FooterLink>
          <FooterLink>Cookie Policy</FooterLink>
          <FooterLink>Terms of Sale</FooterLink>
          <FooterLink>Archive</FooterLink>
          <FooterLink>Announcements</FooterLink>
        </ul>
      </div>
      <div></div>
    </div>
  );
};
export default FooterBottom;
