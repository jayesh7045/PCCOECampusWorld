// TypedText.jsx

import React, { useEffect, useState } from "react";

const TypedText = () => {
    const text = "Hello World";
    const typingSpeed = 10
  const [typedContent, setTypedContent] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const type = () => {
      if (charIndex < text.length) {
        setTypedContent((prev) => prev + text.charAt(charIndex));
        charIndex++;
        setTimeout(type, typingSpeed);
      }
    };

    type();
  }, [text, typingSpeed]);

  return (
    <div className="typed-text">
      {typedContent}
    </div>
  );
};

export default TypedText;
