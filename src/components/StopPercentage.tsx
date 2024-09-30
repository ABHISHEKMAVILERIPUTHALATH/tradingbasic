import React, { useState } from "react";
import "../General.css";
interface classbodyProps {
  sentence: string;
}

const StopPercentage = ({ sentence }: classbodyProps) => {
  const [slValue, setSlValue] = useState(""); // State for SL value
  const [stopPercentage, setStopPercentage] = useState(0); // State for stop percentage
  const [value, setvalue] = useState(false);

  const handleSlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSlValue(event.target.value);
  };

  const handleStopChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    // Check if the input is empty or not a number
    if (!newValue) {
      return; // Do nothing if invalid input
    }

    // Handle conversion to percentage and update state
    const percentage = parseFloat(newValue) / 100;
    setStopPercentage(percentage);
  };

  return (
    <>
      <div className=" color font">
        <div>
          <p>{sentence}</p>
        </div>
        <input
          type="number"
          className="form"
          placeholder="enter the sl value"
          onChange={handleSlChange}
          value={slValue} // Set the input value to state
        />
        <div>
          <input
            type="number"
            className="form"
            placeholder="enter the stop percentage"
            onChange={handleStopChange}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              setvalue(true);
            }}
          >
            Submit
          </button>
        </div>
        <div>
          {value === true && stopPercentage != 0 && (
            <h3>
              use {(parseFloat(slValue) / stopPercentage).toFixed(2)} USDT
            </h3>
          )}
        </div>
      </div>
    </>
  );
};

export default StopPercentage;
