import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";

export function App() {
  const periodTimer = 60 * 25;
  const shortTimer = 60 * 10;
  const pauseTimer = 60 * 5;
  const [baseTime, setBaseTime] = useState(periodTimer);
  const [minutes, setMinutes] = useState(baseTime);
  const [currentTimer, setCurrentTimer] = useState(
    format(baseTime * 1000, "mm:ss")
  );
  const [isActive, setIsActive] = useState(false);
  const [storeTimeOut, setStoreTimeOut] = useState(0);

  useEffect(() => {
    if (isActive && minutes >= 0) {
      setStoreTimeOut(
        setTimeout(() => {
          setMinutes(minutes - 1);
          setCurrentTimer(format(minutes * 1000, "mm:ss"));
        }, 1000)
      );
    } else {
      clearTimeout(storeTimeOut);
    }
  }, [minutes, isActive]);

  useEffect(() => {
    reset();
  }, [baseTime]);

  function reset() {
    setMinutes(baseTime);
    setCurrentTimer(format(baseTime * 1000, "mm:ss"));
    setIsActive(false);
  }

  return (
    <main>
      <div className="title">
        <h2>🍅 POMODORO 🍅</h2>
      </div>
      <div className="times">
        <button
          onClick={() => setBaseTime(periodTimer)}
          className={baseTime === periodTimer ? "selected" : ""}
        >
          CODAR
        </button>
        <button
          onClick={() => setBaseTime(pauseTimer)}
          className={baseTime === pauseTimer ? "selected" : ""}
        >
          PAUSA
        </button>
        <button
          onClick={() => setBaseTime(shortTimer)}
          className={baseTime === shortTimer ? "selected" : ""}
        >
          INTERVALO
        </button>
      </div>
      <div className="timer">
        <div className="hour">
          <span>{currentTimer}</span>
        </div>
      </div>

      <div className="actions">
        <button className="start" onClick={() => setIsActive(true)}>
          <FaPlay />
        </button>
        <button onClick={() => setIsActive(false)}>
          <FaPause />
        </button>
        <button className="stop" onClick={reset}>
          <FaStop />
        </button>
      </div>
    </main>
  );
}
