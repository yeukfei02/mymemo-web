// TODO: add memo item

const inputField = document.querySelector('#memo-textbox');

if (inputField) {
  inputField.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      if (e.target.value) {
        let memoItemsList = localStorage.getItem('memoItems');
        if (memoItemsList === null) {
          memoItemsList = [];
        } else {
          memoItemsList = JSON.parse(memoItemsList);
        }

        memoItemsList.push(e.target.value);
        localStorage.setItem('memoItems', JSON.stringify(memoItemsList));
        window.location.reload();
      }
    }
  });
}
