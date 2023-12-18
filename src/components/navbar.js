import React from "react";

function navbar() {
  return (
    <header className="flex items-center pr-10 pl-4 py-5  w-[90%] h-24 mx-auto bg-black/50 rounded-3xl">
      <div className="flex justify-between w-full">
        {/* -----------all icones -----------------*/}

        <div className="hidden">
          {/*  آیکون جهت چپ */}
          <svg
            id="left_arrow"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>

          {/* آیکون سیگنال */}
          <svg
            id="signallogo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 561.585 199.371"
            width="59px"
            height="59px"
          >
            <g
              id="Group_1"
              data-name="Group 1"
              transform="translate(-219.088 -623.363)"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M530.687,736.626H565.01l9.517-7.72,3.235-12.48,5.547-7.4,8.782,2.773,5.084,14.791,4.622,10.031h28.195l7.4-12.8,5.084,7.4,3.235,15.715h3.235l4.16-2.311,2.773-1.849h3.235l3.235,7.858,3.7,8.32h2.773l4.16-8.32,2.773-6.009h6.933L675.751,740l9.706,4.622V740l3.7-11.093,5.084-5.084,11.093,18.951,6.933-6.146,10.169,22.323,6.471-16.177V740h13.4l7.4-20.8L759.874,740h20.8v30.968H599.949l-14.791-12.017-16.177,12.017H526.457l-27.733-26.346L493.64,753.4l-6.471,8.782-8.32,4.622h-6.009l-8.782,4.16h-27.27l-10.169-4.16-8.32-7.858-15.253,12.017h-43.91l-13.4-12.017-5.547-12.017v-104l18.951-16.64,6.009,3.235V731.216l5.084,5.409h28.657l6.933-5.409,6.009-14.791,2.311-7.4H422l4.622,4.622,4.622,17.564,3.235,5.409h38.363l6.933-2.636-.924-10.169L442.8,693.777l5.547-27.27,90.593-23.573-8.25,31.893-55.073,10.631Z"
                fill="#FED7AA"
              />
              <path
                id="Path_2"
                data-name="Path 2"
                d="M569.443,783.446l2.311,7.4,9.706,3.7,7.4-1.849,4.622-9.244-1.849-9.244-9.244-4.622-10.631,3.7Z"
                fill="#FED7AA"
              />
              <path
                id="Path_3"
                data-name="Path 3"
                d="M569.443,783.446l2.311,7.4,9.706,3.7,7.4-1.849,4.622-9.244-1.849-9.244-9.244-4.622-10.631,3.7Z"
                transform="translate(0 25)"
                fill="#FED7AA"
              />
              <path
                id="Path_4"
                data-name="Path 4"
                d="M569.443,783.446l2.311,7.4,9.706,3.7,7.4-1.849,4.622-9.244-1.849-9.244-9.244-4.622-10.631,3.7Z"
                transform="translate(-164 -94)"
                fill="#FED7AA"
              />
              <path
                id="Path_5"
                data-name="Path 5"
                d="M463.994,640.531l64.276-16.957,5.26-.21.421,4-.421,10.94-2.735,2.23-73.213,19.018-2.735-1.893,3.787-14.1Z"
                fill="#FED7AA"
              />
              <path
                id="Path_6"
                data-name="Path 6"
                d="M294.89,649.406l26.346-21.724h5.084V783.447l-8.782,21.724-22.648,13.4-14.791,4.16H237.576l-11.093-13.866-7.4-17.564,70.718-2.773,16.64-10.169Z"
                fill="#FED7AA"
              />
            </g>
          </svg>
          {/* آیکون سبد خرید */}
          <svg
            className="w-1 h-1"
            id="shapping_basket"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          {/* آیکون ماه */}
          <svg
            className="w-1 h-1"
            id="moon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
          {/* آیکون ورود و ثبت نام */}
          <svg
            className="w-1 h-1"
            id="login"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          {/* آیکون خورشید */}
          <svg
            className="w-1 h-1"
            id="sun"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </div>
        {/* ------------logo & menu -----------------*/}
        <nav className="flex gap-x-9">
          {/* ------------logo -----------------*/}

          <div>
            <img alt="لوگو رویا" src="../../public/images/royafood.png"></img>
          </div>
          {/* ------------ menu -----------------*/}

          <ul className="flex gap-x-9">
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
        <div className="flex">
          {/* ------------cart icone and theme switch  btn-----------------*/}
          <div className="flex gap-x-5">
            {/* ------------cart-----------------*/}
            <div>
              <svg width="34" height="34" className=" cursor-pointer">
                <use href="#shapping_basket"></use>
              </svg>{" "}
            </div>
            <div className="flex">
              <svg width="34" height="34" className=" cursor-pointer">
                <use href="#moon"></use>
              </svg>{" "}
            </div>
          </div>
          {/* ------------login link-----------------*/}

          <a href="#" className="flex">
            <svg width="34" height="34" className="rotate-180">
              <use href="#login"></use>
            </svg>
            ورود | ثبت نام
          </a>
        </div>
      </div>
    </header>
  );
}

export default navbar;
