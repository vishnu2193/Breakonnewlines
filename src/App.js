import "./styles.css";
import { Fragment } from "react";

const str = "Wow I `am` so cool \n I'm a JavaScript haiku\nrender my newlines";

export default function App() {
  // Function to wrap text within backticks with a styled span
  const applyStylesToBackticks = (text) => {
    const parts = text.split(/(`[^`]+`)/g); // Split the text by backticks
    return parts.map((part, index) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        // Remove backticks and apply styles to the content
        const content = part.slice(1, -1);
        return (
          <span
            key={index}
            style={{
              background:
                "radial-gradient(circle at 30% 50%, rgb(242 248 255), #e4edff)",
              color: "#4b47c7",
              padding: "2px 3px",
              borderRadius: "2px",
              fontSize: "90%",
              overflowWrap: "break-word",
            }}
          >
            {content}
          </span>
        );
      }
      return part; // Return the unstyled part as is
    });
  };

  // Split the input string by newlines and apply styles to backticks
  const renderWithBreaks = str.split(/\n/).flatMap((line, index) => (
    <Fragment key={index}>
      {index > 0 && <br />} {/* Add a line break for newlines */}
      {applyStylesToBackticks(line)} {/* Apply styles to backtick content */}
    </Fragment>
  ));

  return (
    <div className="App">
      <h1>Break on newlines</h1>
      <h2>{renderWithBreaks}</h2>
    </div>
  );
}
