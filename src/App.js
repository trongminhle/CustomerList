import "./App.css";
import "./Root.css";
import { useState } from "react";

function App() {
  const titleLisst = [
    {
      title: "First name",
    },
    {
      title: "Email",
    },
    {
      title: "Account status",
    },
    {
      title: "Phone",
    },
    {
      title: "Created at",
    },
  ];
  const listcountry = [
    {
      url: "https://cdn.shopify.com/shopifycloud/web/assets/v1/bcc8ac62a2436cb9f808e37f4ccee13a40b0146196150318487d20382d791c26.svg",
      firtsnumber: "Australia (+61)",
      number: +61,
    },
    {
      url: "https://cdn.shopify.com/shopifycloud/web/assets/v1/dba77f84783603578980c0ae9801d617e27ff9acca6c45be81264a6b1d7df8b6.svg",
      firtsnumber: "Austria (+43)",
      number: +43,
    },
    {
      url: "https://cdn.shopify.com/shopifycloud/web/assets/v1/bdea9cf33394beea9912609c85ae10f2151d390f6aa588b96546039446c0b6c6.svg",
      firtsnumber: "Anguilla (+1)",
      number: +1,
    },
    {
      url: "https://cdn.shopify.com/shopifycloud/web/assets/v1/dcd0178b83005514907ec37082d5c6c4e36da42c4c7df768a54060a31521537c.svg",
      firtsnumber: "Argentina (+54)",
      number: +54,
    },
    {
      url: "https://cdn.shopify.com/shopifycloud/web/assets/v1/806dd1aa913ace4035ededeac4c1708e323909c7bf213b6b3e4245109aa8ba02.svg",
      firtsnumber: "Belgium (+32)",
      number: +32,
    },
    {
      url: "https://cdn.shopify.com/shopifycloud/web/assets/v1/a37a6bc1fe59000adbe09ea8ac216e2b66ba728742e119349bab34d1fd1b3c11.svg",
      firtsnumber: "Colombia (+57)",
      number: +57,
    },
    {
      url: "https://cdn.shopify.com/shopifycloud/web/assets/v1/dba77f84783603578980c0ae9801d617e27ff9acca6c45be81264a6b1d7df8b6.svg",
      firtsnumber: "Brazil (+55)",
      number: +55,
    },
    {
      url: "https://cdn.shopify.com/shopifycloud/web/assets/v1/1761097966133c21c47ac7ed46a0ecd73a08b1037a4500ab2145311b33221562.svg",
      firtsnumber: "Brunei (+673)",
      number: +673,
    },
    {
      url: "https://cdn.shopify.com/shopifycloud/web/assets/v1/da1b1ba84a00fbd98e657f06943e7022e7912a1ba32b44e5cdb1c70ac1edf1d1.svg",
      firtsnumber: "Brazil (+55)",
      number: +55,
    },
    {
      url: "https://cdn.shopify.com/shopifycloud/web/assets/v1/dba77f84783603578980c0ae9801d617e27ff9acca6c45be81264a6b1d7df8b6.svg",
      firtsnumber: "Curaçao (+599)",
      number: +599,
    },
    {
      url: "https://cdn.shopify.com/shopifycloud/web/assets/v1/3d6a06718f3daff15fe3cfec5b834a4124bddf906199ad828a0666f581d7aed7.svg",
      firtsnumber: "Ascension Island (+247)",
      number: +247,
    },
    {
      url: "https://cdn.shopify.com/shopifycloud/web/assets/v1/d9453819872a7de3c717436f9d1a7e6650a3bec2d72bdfc1f581b80cf6bcc278.svg",
      firtsnumber: "Yemen (+967)",
      number: +967,
    },
    {
      url: "https://cdn.shopify.com/shopifycloud/web/assets/v1/2282da174377ff774608494e12061f10177499844180e447e23a6940a609ea0b.svg",
      firtsnumber: "Uzbekistan (+998)",
      number: +998,
    },
  ];

  const listElement = [
    {
      name: "minh",
      email: "leminhtrong19121999@gmail.com",
      account: "Account active",
      phone: "+84382364470",
      created: "September 17, 2022 09:41 AM +07 (8 months ago)",
    },
    {
      name: "anh",
      email: "leminhtrong19121999@gmail.com",
      account: "Account draft",
      phone: "+84382364470",
      created: "March 17, 2022 09:41 AM +07 (8 months ago)",
    },
    {
      name: "Lê",
      email: "leminhtrong19121999@gmail.com",
      account: "Account active",
      phone: "+84382364470",
      created: "december 17, 2022 09:41 AM +07 (8 months ago)",
    },
    {
      name: "James",
      email: "leminhtrong19121999@gmail.com",
      account: "Account active",
      phone: "+84382364470",
      created: "october 17, 2022 09:41 AM +07 (8 months ago)",
    },
    {
      name: "Ronaldo",
      email: "leminhtrong19121999@gmail.com",
      account: "Account draft",
      phone: "+84382364470",
      created: "november 17, 2022 09:41 AM +07 (8 months ago)",
    },
    {
      name: "maldini",
      email: "leminhtrong19121999@gmail.com",
      account: "Account archived",
      phone: "+84382364470",
      created: "august 17, 2022 09:41 AM +07 (8 months ago)",
    },
    {
      name: "Ronaldo",
      email: "leminhtrong19121999@gmail.com",
      account: "Account draft",
      phone: "+84382364470",
      created: "november 17, 2022 09:41 AM +07 (8 months ago)",
    },
    {
      name: "Ronaldo",
      email: "leminhtrong19121999@gmail.com",
      account: "Account draft",
      phone: "+84382364470",
      created: "november 17, 2022 09:41 AM +07 (8 months ago)",
    },
    {
      name: "Ronaldo",
      email: "leminhtrong19121999@gmail.com",
      account: "Account draft",
      phone: "+84382364470",
      created: "november 17, 2022 09:41 AM +07 (8 months ago)",
    },
    {
      name: "Ronaldo",
      email: "leminhtrong19121999@gmail.com",
      account: "Account draft",
      phone: "+84382364470",
      created: "november 17, 2022 09:41 AM +07 (8 months ago)",
    },
    {
      name: "Ronaldo",
      email: "leminhtrong19121999@gmail.com",
      account: "Account draft",
      phone: "+84382364470",
      created: "november 17, 2022 09:41 AM +07 (8 months ago)",
    },
    {
      name: "Ronaldo",
      email: "leminhtrong19121999@gmail.com",
      account: "Account active",
      phone: "+84382364470",
      created: "november 17, 2022 09:41 AM +07 (8 months ago)",
    },
    {
      name: "Ronaldo",
      email: "leminhtrong19121999@gmail.com",
      account: "Account active",
      phone: "+84382364470",
      created: "november 17, 2022 09:41 AM +07 (8 months ago)",
    },
    {
      name: "Ronaldo",
      email: "leminhtrong19121999@gmail.com",
      account: "Account draft",
      phone: "+84382364470",
      created: "november 17, 2022 09:41 AM +07 (8 months ago)",
    },
    {
      name: "Ronaldo",
      email: "leminhtrong19121999@gmail.com",
      account: "Account active",
      phone: "+84382364470",
      created: "november 17, 2022 09:41 AM +07 (8 months ago)",
    },
    {
      name: "Ronaldo",
      email: "leminhtrong19121999@gmail.com",
      account: "Account draft",
      phone: "+84382364470",
      created: "november 17, 2022 09:41 AM +07 (8 months ago)",
    },
    {
      name: "Ronaldo",
      email: "leminhtrong19121999@gmail.com",
      account: "Account active",
      phone: "+84382364470",
      created: "november 17, 2022 09:41 AM +07 (8 months ago)",
    },
  ];

  const [addCustomer, setAddCustomer] = useState();
  const [showOverlay, setShowOverlay] = useState();
  const [showCountry, setShowCountry] = useState(false);
  const [countryName, setCountryName] = useState();
  const [listCountry, setListCountry] = useState();

  const handleClickaddcustomer = () => {
    setAddCustomer(true);
    setShowOverlay(true);
  };

  const handleremovecustomer = () => {
    setAddCustomer(false);
    setShowOverlay(false);
  };

  const handleClickcountry = () => {
    setShowCountry(!showCountry);
  };

  const handleRemoveCountry = () => {
    setShowCountry(false);
  };

  const handleButtonLearn = () => {
    setAddCustomer(false);
    setShowOverlay(false);
  };

  const handleCountryNumber = () => {};

  const handleClickCountry = (item) => {
    setCountryName(item.firtsnumber);
    setShowCountry(false);
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="header-customer-title">Customers</h1>
        <button
          onClick={handleClickaddcustomer}
          type="button"
          className="header-btn-add"
        >
          Add Customer
        </button>
      </header>

      <div className="main">
        <div className="list-show">
          <div className="show-customers">
            <span>
              Show {listElement.length} of {listElement.length} customers
            </span>
          </div>
          <div className="show-customers-columns">
            <span className="show-colums-cover">
              Show 5 of 30 columns
              <span className="column-icon"> </span>
              <span className="down-icon">
                <i className="fa-solid fa-caret-down"></i>
              </span>
            </span>
          </div>
        </div>
        <div className="title-list">
          <div className="input-check">
            <input type="checkbox" />
          </div>
          {titleLisst.map((item, index) => (
            <div key={index} className="title-item">
              <li>
                <a>{item.title}</a>
              </li>
            </div>
          ))}
        </div>
        <div>
          <div id="style-1" className="mt-list-element">
            {listElement.map((item, index) => (
              <div key={index} className="mt-element">
                <div className="mt-element-pd element-input">
                  <input type="checkbox"></input>
                </div>
                <div className="mt-element-pd element-name">
                  <span>{item.name}</span>
                </div>
                <div className="mt-element-pd element-email">
                  <span>{item.email}</span>
                </div>
                <div className="mt-element-pd element-account">
                  <span
                    className={`${
                      item.account === "Account draft"
                        ? "draft"
                        : item.account === "Account archived"
                        ? "archived"
                        : null
                    }`}
                  >
                    {item.account}
                  </span>
                </div>
                <div className="mt-element-pd element-phone">
                  <span>{item.phone}</span>
                </div>
                <div className="mt-element-pd element-created">
                  <span>{item.created}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`add-customer ${addCustomer ? "show-5" : ""}`}>
        <div className="add-customer-container">
          <div className="release-customer">
            <span>Reach more shoppers with Instagram product tags</span>
            <button onClick={handleremovecustomer} className="btn-icon">
              <i className="fa-regular fa-x"></i>
            </button>
          </div>
          <div className="overview-customer bd-top">
            <h3 className="title-overview-customer">Customer overview</h3>
            <div className="customer-overview-content">
              <div className="customer-overview-name">
                <div className="first-name wt-50-pd">
                  <h5 className="title-first-name">First name</h5>
                  <input className="wt-100 bd-input pd-input" type="text" />
                </div>
                <div className="last-name wt-50-pd">
                  <h5 className="title-last-name">Last name</h5>
                  <input className="wt-100 bd-input pd-input" type="text" />
                </div>
              </div>
              <div className="customer-overview-email wt-100">
                <h5 className="title-email">Email</h5>
                <input className="wt-100 bd-input pd-input" type="email" />
              </div>
              <div className="customer-overview-phone wt-100">
                <div className="title-phone wt-100 ">
                  <h5>Phone number</h5>
                </div>
                <div className="input-phone-country">
                  <div className="phone-number-input wt-90">
                    <input className="wt-100 bd-input pd-input" type="text" />
                  </div>
                  <div className="country-number wt-10">
                    <button
                      onClick={handleClickcountry}
                      className="btn-country"
                    >
                      <span className="ensign-country wt-50">
                        <img
                          alt=""
                          src="https://cdn.shopify.com/shopifycloud/web/assets/v1/82cd9f8eb18f3e42d3b7d540deecbeaa067e95351c1ceee96741dd43ab2059d1.svg"
                        />
                      </span>
                      <span className="btn-icon-down wt-50">
                        <i className="fa-solid fa-caret-down"></i>
                      </span>
                    </button>
                    <div
                      className={`list-number-country ${
                        showCountry ? "show-9" : ""
                      }`}
                    >
                      <ul className="list-item">
                        <p>Country</p>
                        {listcountry.map((item, index) => (
                          <li
                            onClick={() => handleClickCountry(item)}
                            className={`item-country ${
                              item.firtsnumber === countryName
                                ? "bd-left"
                                : null
                            }`}
                            key={index}
                          >
                            <span className="btn-item-country">
                              {item.firtsnumber}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="notes-customer bd-top">
            <div className="title-customer-note">
              <h3>Notes</h3>
              <span>Add note about your customer</span>
            </div>
            <div className="customer-overview-content">
              <div className="customer-overview-email wt-100">
                <h3 className="title-note">Note</h3>
                <textarea
                  name="comment"
                  form="usrform"
                  className="textarea-note "
                ></textarea>
              </div>
            </div>
          </div>
          <div className="modal-footer-content bd-top">
            <div className="footer-alignmentCenter">
              <div className="btn-learn">
                <button onClick={handleButtonLearn} className="btn-footer">
                  Learn more
                </button>
              </div>
              <div className="btn-add-instagram">
                <button className="btn-footer btn-primary">
                  Add Instagram
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={handleRemoveCountry}
        className={`add-customer-overlay ${showOverlay ? "show-1" : null}`}
      ></div>
    </div>
  );
}

export default App;
