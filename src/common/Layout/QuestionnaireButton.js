import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LOCAL_STORAGE_KEY = "isQuestionnaireActive";
const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfBLs4OG_mCEyHqA6Eud794FKxBIZmyXzTte0IKVz7a1egtPg/viewform?usp=sf_link";

const QuestionnaireButton = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // sessionStorageに保存されているisActiveを取得
    const savedIsActive = JSON.parse(sessionStorage.getItem(LOCAL_STORAGE_KEY));
    if (savedIsActive === null) {
      setIsActive(true);
      return;
    }
    setIsActive(savedIsActive);
  }, []);

  const handleClose = () => {
    setIsActive(false);
    sessionStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(false));
  };

  return (
    <SButton style={{ display: isActive ? "inline-block" : "none" }}>
      <div className="button is-rounded">
        <a className="has-text-black" href={formUrl}>
          アンケート
        </a>
        <div className="pl-3" onClick={handleClose}>
          ×
        </div>
      </div>
    </SButton>
  );
};

const SButton = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
`;

export default QuestionnaireButton;
