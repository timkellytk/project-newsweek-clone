import React from 'react';

const LoginBtn = () => (
  <a className="nav-btn" href="#empty">
    <span class="hidden sm:inline-block">Login</span>
    <span class="sm:hidden">
      <svg
        class="fill-current text-gray-300 h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z" />
      </svg>
    </span>
  </a>
);

export default LoginBtn;
