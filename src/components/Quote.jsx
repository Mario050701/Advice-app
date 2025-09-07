import { useState, useEffect } from "react";
import { FaDiceFive } from "react-icons/fa";

export default function App() {
  const [current, setCurrent] = useState(null);
  const [adviceNumber, setAdviceNumber] = useState(null);

  const fetchData = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setCurrent(data.slip.advice));
    const randomNum = Math.floor(Math.random() * 200) + 1;
    setAdviceNumber(randomNum);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <h2>Advice #{adviceNumber}</h2>

        <div className="content">
          {current ? <p>"{current}"</p> : <p>Loading..</p>}
          <hr className="line" />

          <div className="circle">
            <FaDiceFive className="dice" onClick={fetchData} />
          </div>
        </div>
      </div>
    </>
  );
}
