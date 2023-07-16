import React, { useState } from 'react';

function MemoPopup({ saveMemo }) {
  const [memoText, setMemoText] = useState('');

  const handleInputChange = (event) => {
    setMemoText(event.target.value);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      saveMemo(memoText);
    }
  };

  return (
    <div>
      <textarea
        value={memoText}
        onChange={handleInputChange}
        onKeyDown={handleEnterKeyPress}
        placeholder="메모를 입력하세요..."
      ></textarea>
    </div>
  );
}

export default MemoPopup;
