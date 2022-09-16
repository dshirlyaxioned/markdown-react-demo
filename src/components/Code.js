import { React, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IoIosCopy as Copy } from "react-icons/io";
import { MdOutlineContentPaste as Paste } from "react-icons/md";

const Code = ({ children, language }) => {
  const [copied, setIsCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="code">
      <CopyToClipboard text={children} onCopy={() => setIsCopied(true)}>
        <button className="icon copy-icon">
          {copied ? <Paste fill="#88d1ef" /> : <Copy fill="#88d1ef" />}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter language={language} style={materialDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
