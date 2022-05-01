/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let el = document.createElement('button');
    el.innerHTML="Удали меня";
    el.addEventListener('click',()=>{el.remove();});
    document.body.appendChild(el);
}
/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let list = document.createElement('ul');
    for(let i =0 ; i<  arr.length;i++){
        let el = arr[i];
        let item = document.createElement('li');
        item.innerHTML = el;
        item.onmouseover = function (){
            item.setAttribute('title',el);
        }
        list.appendChild(item);
    }
    document.body.appendChild(list);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let a = document.createElement('a');
    a.href = "https://tensor.ru/";
    a.innerHTML = "tensor";
    a.onclick = (event) => {
        event.preventDefault();
        a.innerHTML += ' ' + a.getAttribute('href');
        a.onclick = null;
    };
    document.body.appendChild(a);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let li = document.createElement('li');
    let ul = document.createElement('ul');
    let button = document.createElement('button');
    button.innerHTML = "Добавить пункт";
    li.innerHTML = 'Пункт';
    ul.appendChild(li);
    li.onclick = () => {
        li.innerHTML = li.innerHTML + '!';
    };
    button.onclick = () => {
        let li2 = document.createElement('li');
        li2.innerHTML = 'Пункт';
        li2.onclick = () => {
            li2.innerHTML = li2.innerHTML + '!';
        };
        ul.appendChild(li2);
    };
    document.body.appendChild(ul);
    document.body.appendChild(button);
}
