"use strict";

DOM узлы:
EventTarget - Node - Element - HTML Element

Получение элементов:
document.getElementById("idElem");
document.getElementsByClassName("className");
document.getElementsByTagName("tag");
document.querySelector("css")
document.querySelectorAll("css")

Проверка элемента:
elem.matches("css"); // проверка соответствия
elem.closest("css"); // ближайший сосед

Атрибуты :
elem.hasAttribute("name")
elem.getAttribute("name")
elem.setAttribute("name")
elem.removeAttribute("name")

пример, вывод всех атрибутов элемента
let id1 = document.getElementById("id1");
for (let i of id1.attributes){
    console.log(`${i.name}=${i.value}`);
}

Создание элемента document.createElement('tag');
Удалить элемент node.remove()
Клонирование элемента elem.cloneNode(true)
Вставка элемента:
node.append(node) - в конец узла добавляет
node.prepend(node) - в начало узла
node.before(node)
node.after(node)

Классы элемента:
elem.className
elem.classList - методы add("class"), remote(), contains(), toggle()

пример, элемент списка
let newli  = document.createElement('li');
newli.innerText = 'new list item';
ul.append(newli);

СОБЫТИЯ
1 способ - использовать атрибут
<input type="button" oclick="fun1" value="Counter">
    <script>
    function fun1(){
    for(let i=1; i<5; i++){alert(i);}
    }
    </script>
2 способ - использовать свойства DOM элемента
<input type="button" id="id1" value="Counter">
    <script>
    id1 = document.getElementById("id1");
    id1.onclick = function () {
        for(let i=1; i<5; i++){alert(i);}
    };
    </script>
3 способ - addEventListener() для нескольких обработчиков
<input type="button" id="id1" value="msg">
<script>
id1 = document.getElementById("id1");
id1.addEventListener("click", fun1);
id1.addEventListener("click", fun2);
function fun1(){alert("hello1");}
function fun2(){alert("hello2");}
</script>

Обьект - обработчик handleEvent

Формы элементы управление
document.forms
form.elements
Событие отправки формы submit

