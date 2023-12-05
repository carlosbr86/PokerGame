import React from 'react';

type HandInputProps = {
  handString: string;
  setHand: (value: string) => void;
  handLabel: string;
}

const HandInput = ({ handString, setHand, handLabel }: HandInputProps) => {

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
