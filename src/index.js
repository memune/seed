import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MemoPopup from './components/MemoPopup';

ReactDOM.render(
  <React.StrictMode>
    <MemoPopup saveMemo={saveMemo} />
  </React.StrictMode>,
  document.getElementById('root')
);

function saveMemo(memoText) {
  if (memoText.trim() !== '') {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const memo = {
        url: tabs[0].url,
        text: memoText,
      };
      chrome.storage.sync.get('memos', function(result) {
        let memos = result.memos || [];
        memos.push(memo);
        chrome.storage.sync.set({ memos: memos });
        memoText = '';
        removeMemoContainer();
      });
    });
  } else {
    removeMemoContainer();
  }
}

function removeMemoContainer() {
  const memoContainer = document.getElementById('memo-container');
  if (memoContainer) {
    memoContainer.remove();
  }
}
