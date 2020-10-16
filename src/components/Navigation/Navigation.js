import React, { useState } from 'react';
import NavTop from './NavTop/NavTop';
import NavBottom from './NavBottom/NavBottom';
import NavFixed from './NavFixed/NaxFixed';

function Navigation() {
  const [mobileNav, setMobileNav] = useState(false);
  const handleMobileNav = () => setMobileNav(!mobileNav);

  return (
    <header>
      <div class="hidden lg:block">
        <NavTop />
        <NavBottom />
      </div>
      <div class="lg:hidden">
        <NavFixed mobileNav={mobileNav} handleMobileNav={handleMobileNav} />
      </div>
    </header>
  );
}

export default Navigation;
