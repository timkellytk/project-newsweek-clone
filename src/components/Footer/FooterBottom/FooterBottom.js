import React from 'react';
import FooterLink from './FooterLink/FooterLink';

const FooterBottom = () => {
  return (
    <div className="pt-2 p-6 border-t border-gray-700 text-gray-700">
      <div className="text-sm">
        <ul>
          <span className="font-bold mr-1">Editions:</span>
          <FooterLink>U.S. Edition</FooterLink>
          <FooterLink>日本</FooterLink>
          <FooterLink>Pakistan</FooterLink>
          <FooterLink>Romania</FooterLink>
        </ul>
        <ul className="mt-2 -ml-3">
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
