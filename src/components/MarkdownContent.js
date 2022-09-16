import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import Code from "./Code";

const MarkdownContent = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    import("../markdown/content.md").then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setContent(response))
        .catch((err) => console.log(err));
    });
  }, []);

  return (
    <div>
      <Markdown
        options={{
          overrides: {
            Code: {
              component: Code,
            },
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
};

export default MarkdownContent;
