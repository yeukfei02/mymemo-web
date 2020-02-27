// TODO: add memo item

const inputField = document.querySelector('#memo-textbox');

if (inputField) {
  inputField.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      let memoItemsList = localStorage.getItem('memoItems');
      if (memoItemsList === null) {
        memoItemsList = [];
      } else {
        memoItemsList = JSON.parse(memoItemsList);
      }

      memoItemsList.push(e.target.value);
      localStorage.setItem('memoItems', JSON.stringify(memoItemsList));
      loadMemoItemslist();
    }
  });
}

function loadMemoItemslist() {
  var memoItemsListDom = $('memo-items-list');
  while (memoItemsListDom.firstChild) {
    memoItemsListDom.removeChild(memoItemsListDom.firstChild);
  }

  var memoItems = JSON.parse(localStorage.getItem('memoItems') || '[]');
  var n = 0;
  memoItems.forEach((item) => {
    n++;
    var memoItemDom = document.createElement('p');
    memoItemDom.innerHTML = n + ". " + item;
    memoItemsListDom.appendChild(memoItemDom);
  });
}
