import React from "react";
//the Header component gives information and usage instructions on how the app should be used to check currencies
const Header = () => {
  return (
    <div>
      <h1 className="header">Currency converter</h1>
      <p className="info">
        This currency converter takes a currency from the left dropdown menu and
        converts it to the currency in the right dropdown menu. Simply add an
        amount in the input field and choose from the available currencies to
        convert the amount.
      </p>
    </div>
  );
};

export default Header;
