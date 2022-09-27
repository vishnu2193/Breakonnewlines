import "./styles.css";
import { Fragment } from "react";

//refer:
//https://30secondsofinterviews.org/
 //https://github.com/30-seconds/30-seconds-of-interviews

const str = "Wow I am so cool \n I'm a JavaScript haiku \n render my newlines";

export default function App() {
  const lines = str.split(/\n/);
  const withBreaks = lines.flatMap((line, index) =>
    index > 0
      ? [<br key={`br-${index}`} />, <Fragment key={index}>{line}</Fragment>]
      : [line]
  );
  return (
    <div className="App">
      <h1>Break on newlines</h1>
      <h2>{withBreaks}</h2>
    </div>
  );
}
