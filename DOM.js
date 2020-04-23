// TASK #2.1
//  Вывести alert(“Добро пожаловать!”) сразу после загрузки сайта.

// window.addEventListener('load', event => {
//     alert("Добро пожаловать!")
// })

// TASK #2.2
// Создайте обработчик нажатия на кнопку, который будет менять цвет фона
// страницы. Кнопка должна работать при любом количестве нажатий.

// btn.addEventListener('click', function(event){
//     document.body.style.backgroundColor = 'blue';
//     console.log('one')
// })



// TASK #2.3
// Создайте HTML-форму и по нажатию на кнопку проверяйте заполненность всех
// полей. Если останутся незаполненные поля — выводите предупреждение и не
// отправляйте форму. Так же, введенные данные нужно отобразить на странице(не alert и
// не console).

// let h1 = document.querySelector('h2');
// let inp1 = document.querySelector('.inp')
// let btn = document.querySelector('#btn')
// let form = document.querySelector('#form')

// form.addEventListener('click', function(e){
//     e.preventDefault()
// })
// btn.addEventListener('click', function(e){
//     if(inp1.value === ""){
//         h1.innerText = 'Пустое поле'
//     } else {
//         return h1.innerText = inp1.value
//     }
// })

// TASK #2.5 
// Навесьте на событие движения мыши обработчик, который будет в консоль
// выводить координаты движения. Примечание: выводите их как x и y. Событие надо
// «повесить» на document.

// document.addEventListener('mousemove', event => {
//     console.log("X =" + event.clientX, "Y =" + event.clientY)
// });