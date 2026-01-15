import React, { useRef, useState } from "react";
import { Input } from "../ui/input";

const QtyInput = ({ qty, onIncrease, onDecrease }) => {
  const prevValue = useRef(qty);
  const [value, setValue] = useState(qty);

  const handleChange = (e) => {
    const newValue = Number(e.target.value);

    if (newValue < 1) return;

    if (newValue > prevValue.current) {
      console.log("⬆️ User clicked UP arrow or typed higher");
      onIncrease?.(newValue - prevValue.current);
    } else if (newValue < prevValue.current) {
      console.log("⬇️ User clicked DOWN arrow or typed lower");
      onDecrease?.(prevValue.current - newValue);
    }

    prevValue.current = newValue;
    setValue(newValue);
  };

  return <Input type="number" className="border-primary w-20" min={1} value={value} onChange={handleChange} />;
};

export default QtyInput;
