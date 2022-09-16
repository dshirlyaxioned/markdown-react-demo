import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = ({ children }) => {
  return (
    <div>
      <SyntaxHighlighter language="javascript" style={dark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
