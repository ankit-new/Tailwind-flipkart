import React from "react";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h5 className="font-bold uppercase pt-2">About</h5>
          <ul>
            <li className="py-1">Contact us</li>
            <li className="py-1">About us</li>
            <li className="py-1">Carrers</li>
            <li className="py-1">Flipkart Stories</li>
            <li className="py-1">Press</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Help</h6>
          <ul>
            <li className="py-1">Payment</li>
            <li className="py-1">Shipping</li>
            <li className="py-1">Cancellation</li>
            <li className="py-1">FAQs</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Policy</h6>
          <ul>
            <li className="py-1">Return Policy</li>
            <li className="py-1">Terms of use</li>
            <li className="py-1">Security</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Sitemap</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Socials</h6>
          <ul>
            <a href="https://www.facebook.com/" target="blank">
              Facebook
            </a>
            <br />
            <a href="https://www.instagram.com/" target="blank">
              Instagram
            </a>
            <br />
            <a href="https://twitter.com/i/flow/login" target="blank">
              Twitter
            </a>
            <br />
          </ul>
        </div>

        <div className="divide-x-4">
          <h6 className="font-bold uppercase pt-2 pl-6 text-sm	">Mail us</h6>
          <ul>
            <li className="py-1 pl-6 text-xs">
              Flipkart Internet Private Limited
            </li>
            <li className="py-1 pl-6 text-xs">Buildings Alyssa, Begonia &</li>
            <li className="py-1 pl-6 text-xs">Clove Embassy Tech Village</li>
            <li className="py-1 pl-6 text-xs">
              Outer Ring Road, Devarabeesanahalli Village,
            </li>
            <li className="py-1 pl-6 text-xs">Bengaluru, 560103,</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 pl-6 text-sm	">
            Registered Office Address:
          </h6>
          <ul>
            <li className="py-1 pl-6 text-xs">
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India CIN :
              U51109KA2012PTC066107 Telephone: 044-45614700
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">© 2007-2022 Flipkart.com</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <a href="https://www.facebook.com/" target="blank"></a>
          <a href="https://www.instagram.com/" target="blank"></a>
          <a href="https://twitter.com/i/flow/login" target="blank"></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
