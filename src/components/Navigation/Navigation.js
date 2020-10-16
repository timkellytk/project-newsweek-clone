import React from 'react';
import NavTop from './NavTop/NavTop';
import NavBottom from './NavBottom/NavBottom';
import NavFixed from './NavFixed/NaxFixed';

function Navigation() {
  return (
    <header>
      <div class="hidden lg:block">
        <NavTop />
        <NavBottom />
      </div>
      <div class="lg:hidden">
        <NavFixed />
      </div>
    </header>
  );
}

export default Navigation;
