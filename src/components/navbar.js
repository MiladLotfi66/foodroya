import React from "react";

function navbar() {
  return (
    <header>
      {/* ------------logo & menu -----------------*/}
      <nav>
        <div>
          <img alt="لوگو رویا" src="../../public/images/royafood.png"></img>
        </div>
        <ul>
          <li>
            <a href="#">صفحه اصلی</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#"></a>محصولات
          </li>
        </ul>
        <ul>
          <li>
            <a href="#"></a>درباره ی ما
          </li>
        </ul>
        <ul>
          <li>
            <a href="#"></a>تماس با ما
          </li>
        </ul>
      </nav>
      {/* ------------cart and theme toggle and login link-----------------*/}
      <div>
        {/* ------------cart icone and theme switch  btn-----------------*/}
        <div>
          {/* ------------cart-----------------*/}
          <div>
            <svg></svg>
          </div>
          <div>
            <svg></svg>
          </div>
        </div>
        {/* ------------login link-----------------*/}

        <a href="#">
          <svg></svg>
          ورود | ثبت نام
        </a>
      </div>
    </header>
  );
}

export default navbar;
