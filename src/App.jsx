import { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //the useEffect fetches data from the currency api when the fromCurrency, toCurrency and amount state values change
  useEffect(() => {
    const convertAmount = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const json = await res.json();

      if (res.ok) {
        console.log(json);
        setConverted(json.rates[toCurrency]);
        setIsLoading(false);
      }
    };
    if (fromCurrency === toCurrency) return setConverted(amount);
    convertAmount();
  }, [fromCurrency, toCurrency, amount]);

  const handleChange = (e) => {
    if (e.target.name === "from") {
      setFromCurrency(e.target.value);
    } else if (e.target.name === "amount") {
      setAmount(e.target.value);
    } else {
      setToCurrency(e.target.value);
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="converter">
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={handleChange}
          className="detail"
        />
        <select
          value={fromCurrency}
          name="from"
          onChange={handleChange}
          disabled={isLoading}
          className="detail"
        >
          <option value="USD">US dollar</option>
          <option value="EUR">Euro</option>
          <option value="ZAR">South African Rand</option>
          <option value="GBP">British Pound Sterling</option>
          <option value="CNY">Chinese yuan</option>
          <option value="INR">Indian rupee</option>
          <option value="PHP">Phillipine peso</option>
          <option value="MXN">Mexican peso</option>
          <option value="THB">Thai baht</option>
        </select>
        <select
          value={toCurrency}
          name="to"
          onChange={handleChange}
          disabled={isLoading}
          className="detail"
        >
          <option value="USD">US dollar</option>
          <option value="EUR">Euro</option>
          <option value="ZAR">South African Rand</option>
          <option value="GBP">British Pound Sterling</option>
          <option value="CNY">Chinese yuan</option>
          <option value="INR">Indian rupee</option>
          <option value="PHP">Phillipine peso</option>
          <option value="MXN">Mexican peso</option>
          <option value="THB">Thai baht</option>
        </select>

        <p className="convertMsg">
          The converted amount is:{" "}
          <span>
            {Number(converted).toFixed(2)} {toCurrency}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;