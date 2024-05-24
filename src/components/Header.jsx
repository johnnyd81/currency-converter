import React from "react";
//the Header component provides information and usage instructions on how the app should be used to check currencies
//currency data is correct at the time of data request
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
