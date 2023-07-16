chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'toggleMemo') {
      const memoContainer = document.getElementById('memo-container');
      if (memoContainer) {
        memoContainer.remove();
      } else {
        createMemoContainer();
      }
    }
  });
  
  function createMemoContainer() {
    const memoContainer = document.createElement('div');
    memoContainer.id = 'memo-container';
    memoContainer.style.position = 'fixed';
    memoContainer.style.bottom = '10px';
    memoContainer.style.right = '10px';
    memoContainer.style.width = '300px';
    memoContainer.style.height = '150px';
    memoContainer.style.backgroundColor = '#fff';
    memoContainer.style.border = '1px solid #ddd';
    memoContainer.style.padding = '10px';
    memoContainer.style.zIndex = '9999';
  
    const memoTextArea = document.createElement('textarea');
    memoTextArea.id = 'memo-textarea';
    memoTextArea.style.width = '100%';
    memoTextArea.style.height = '100%';
    memoTextArea.style.resize = 'none';
  
    memoContainer.appendChild(memoTextArea);
    document.body.appendChild(memoContainer);
  
    memoTextArea.focus();
  }
  