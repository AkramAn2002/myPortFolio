import { Knob } from "primereact/knob";
import React, { useEffect, useState, useRef } from "react";

const Professionalskill = ({ value = 0, text }) => {
  const [valueIncr, setValueIncr] = useState(0);
  const knobRef = useRef(null); // Use a ref to track the component element
  const [isVisible, setIsVisible] = useState(false); // To track visibility

  useEffect(() => {
    const handleIncrementValue = () => {
      if (valueIncr < value) {
        setTimeout(() => {
          setValueIncr((prevValue) => prevValue + 1);
        }, 50);
      }
    };

    if (isVisible) {
      handleIncrementValue(); // Start incrementing only when the component is visible
      const interval = setInterval(() => {
        if (valueIncr < value) {
          setValueIncr((prevValue) => prevValue + 1);
        } else {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [valueIncr, value, isVisible]); // Dependency array includes valueIncr and isVisible

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // The component is visible, start incrementing
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (knobRef.current) {
      observer.observe(knobRef.current); // Start observing the component
    }

    return () => {
      if (knobRef.current) {
        observer.unobserve(knobRef.current); // Clean up observer on unmount
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center" ref={knobRef}>
      <div className="text-white grid grid-rows-1">
        <Knob
          value={valueIncr}
          readOnly
          valueColor="#14008e"
          strokeWidth={8}
          rangeColor="#322b5b"
          textColor="white"
          size={150}
          valueTemplate="{value}%"
        />
        <h1 className="text-center font-bold">{text}</h1>
      </div>
    </div>
  );
};

export default Professionalskill;
