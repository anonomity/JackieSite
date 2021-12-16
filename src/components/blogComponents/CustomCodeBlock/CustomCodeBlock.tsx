import React, { FunctionComponent } from "react";
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";

type CutstomCodeBlockProps = {
  className: any;
  copy: any;
  children: any;
};

const CustomCodeBlock: FunctionComponent<CutstomCodeBlockProps> = ({
  className,
  copy,
  children,
}) => {
  // if any language selected or javascript by default

  const language =
    className?.split("-")[0] === "language"
      ? className.split("-")[1]
      : "javascript";

  return copy ? (
    <CopyBlock
      text={children}
      language={language}
      theme={dracula}
      wrapLines
      codeBlock
    />
  ) : (
    <CodeBlock text={children} language={language} theme={dracula} wrapLines />
  );
};

export default CustomCodeBlock;
