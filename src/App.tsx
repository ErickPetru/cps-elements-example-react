import { CpsButton } from "@cps-elements/web/react/button/index.js";
import { CpsIcon } from "@cps-elements/web/react/icon/index.js";

import { useState } from "react";
import "./App.css";

export default function App() {
  const [isWaiting, setIsWaiting] = useState(false);
  const [message, setMessage] = useState("");

  const onClick = () => {
    if (isWaiting) return;

    setIsWaiting(true);
    setTimeout(() => {
      setMessage(`Atualizado às ${new Date().toLocaleTimeString()}.`);
      setIsWaiting(false);
    }, 1000);
  };

  return (
    <>
      <CpsButton variant="accent" waiting={isWaiting} onClick={onClick}>
        <CpsIcon slot="prefix" name="arrow-right" />
        Clique
      </CpsButton>

      {message ? (
        <p>
          <CpsIcon library="uil" name="clock-mono" />
          &nbsp;
          {message}
        </p>
      ) : null}
    </>
  );
}
