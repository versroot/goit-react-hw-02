import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

export default function App() {
  const defaultValues = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-values");
    if (savedValues !== null) {
      try {
        return JSON.parse(savedValues);
      } catch (e) {
        console.error("Error parsing saved values:", e);
        return defaultValues;
      }
    }
    return defaultValues;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-values", JSON.stringify(values));
  }, [values]);

  function update(key) {
    if (key === "reset") {
      setValues({ ...defaultValues });
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        [key]: prevValues[key] + 1,
        total: prevValues.total + 1,
      }));
    }
  }

  return (
    <>
      <Description />
      <Options update={update} totalFeedback={values.total} />

      {values.total === 0 && <p>No feedback yet</p>}
      {values.total > 0 && (
        <Feedback values={values} totalFeedback={values.total} />
      )}
    </>
  );
}
