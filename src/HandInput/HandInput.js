import React from 'react';



const HandInput = ({ handString, setHand, handLabel }) => {

  return (
    <div>
      <label className="align-left">{`${handLabel} Hand:`}</label>
      <input
        type="text"
        value={handString}
        onChange={(e) => setHand(e.target.value)}
        placeholder="Enter hand 1"
      />
    </div>
  );
};

export default HandInput;