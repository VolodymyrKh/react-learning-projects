import React, { useState, useEffect, useRef } from "react";
import { fromEvent, interval } from "rxjs";
import { map, tap, pairwise } from "rxjs/operators";

import "./App.css";

function App() {
  const [value, setValue] = useState(100);
  const [btnAction, setBtnAction] = useState("");

  const resetRef = useRef(null);
  useEffect(() => {
    resetRef.current.disabled = true;
  }, []);

  useEffect(() => {
    const clickStream = fromEvent(document, "click")
      .pipe(
        map((event) => ({
          action: event.target.dataset.action,
          clickTime: Date.now(),
        }))
      )
      .pipe(pairwise())
      .pipe(
        map((arr) => {
          return (
            arr[0].action === "wait" &&
            arr[1].action === "wait" &&
            arr[1].clickTime - arr[0].clickTime <= 300
          );
        })
      );

    const clickSubscription = clickStream.subscribe((v) => {
      if (v) {
        setBtnAction("wait");
      }
    });

    const intervalStream$ = interval(1000)
      // .pipe(tap((v) => console.log(v)))
      .subscribe(() => {
        if (btnAction === "start") {
          setValue((prev) => prev + 1000);
          resetRef.current.disabled = false;
        } else {
          intervalStream$.unsubscribe();
        }
      });

    return () => {
      clickSubscription.unsubscribe();
      intervalStream$.unsubscribe();
    };
  }, [btnAction]);

  return (
    <div className="container">
      <span className="display">
        {new Date(value).toISOString().slice(11, 19)}
      </span>
      <div className="btn-controls">
        <button
          type="button"
          data-action="start"
          onClick={() => {
            setBtnAction("start");
          }}
        >
          Start
        </button>
        <button
          type="button"
          data-action="stop"
          onClick={() => {
            setBtnAction("stop");
            setValue(0);
            resetRef.current.disabled = true;
          }}
        >
          Stop
        </button>
        <button type="button" data-action="wait">
          Wait
        </button>
        <button
          type="button"
          data-action="start"
          ref={resetRef}
          onClick={() => {
            setBtnAction("start");
            setValue(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
