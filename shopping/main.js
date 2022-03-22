// 필요로 하는 DOM요소 선언
const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    console.log('11');
    // 1. 사용자가 입력한 텍스트를 받아온다.
    const text = input.value;

    //만약에 빈문자열이면
    if (text === '') {
        input.focus();
        //if문에서 return를 만나면 해당 함수를 빠져나감
        return;
    }

    // 2. 새로운 아이템을 만듦(텍스트+삭제버튼)
    // :DOM생성하기
    const item = createItem(text);

    // 3. items컨테이너안에 새로 만든 아이템을 추가함
    // :item = 텍스트+삭제버튼
    items.appendChild(item);

    // 4. 새로 추가된 아이템을 스크롤링 - 목록이 늘어나면 커서를 자동이동
    item.scrollIntoView({
        block: 'center'
    });

    // 5. input초기화하기
    input.value = '';
    input.focus();
}

// 2.새로운 아이템에 대한 DOM만들기
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    const item = document.createElement('div');
    item.setAttribute('class', 'item');
    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text; //사용자가 입력한 문자열 추가
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    });
    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);
    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;
}

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', event => {
    //console.log('key ===> '+event.key);Enter
    if (event.key === 'Enter') {
        onAdd();
    }
});
items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    console.log('items');
    if (id) {
        //console.log(`${id}`);
        const toBeDelete = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDelete.remove();
    }
});