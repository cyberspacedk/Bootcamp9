"use strict";
//     Модуль 1 - Домашнее задание
/*
Напишите скрипт имитирующий авторизацию администратора в панели управления.

При загрузке страницы у посетителя запрашивается логин через prompt:

- Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
- Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
    показывать alert с текстом 'Доступ запрещен, неверный логин!'   
- Если был введен логин совпадающий со значением константы adminLogin, 
    спрашивать пароль через prompt.

При вводе пароля:

    - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
    - Если введен пароль который не совпадает со значением константы adminPassword,
    показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
    - Если введён пароль который совпадает со значением константы adminPassword, 
    показывать alert с текстом 'Добро пожаловать!'
    
🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

// const adminLogin = "admin";
// const adminPassword = "m4ngo1zh4ackz0r";

// let userLogin = prompt("Please input your Login !", "");
// // Message
// let userCancel = "Cancelled by user !";
// let deniedLog = "Acces denied. Uncorrect login!";
// let deniedPass = "Acces denied. Uncorrect password!";
// let welcome = "Добро пожаловать";

// if (userLogin == null) {
//   alert(userCancel);
// } else if (userLogin !== adminLogin) {
//   alert(deniedLog);
// } else if (userLogin === adminLogin) {
//   let userPass = prompt("Input your password !", "");

//   if (userPass == null) {
//     alert(userCancel);
//   } else if (userPass !== adminPassword) {
//     alert(deniedPass);
//   }else if(userPass === adminPassword){
//       alert(welcome);
//   }
// }

/*
⚠️ ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах): 
* sharm - 15
* hurgada - 25
* taba - 6.
Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
результат сохранить в переменную.
Необходимо проверить являются ли введенные данные целым положительным числом. 

- В случае неверного ввода от пользователя, скрипт показывает alert с текстом 
    "Ошибка ввода" и больше ничего не делает.
- Если пользователь нажал Cancel, скрипт показывает alert с текстом "Нам очень жаль, приходите еще!".
- В случае верного ввода, последовательно проверить кол-во мест в группах, 
    и кол-во необходимых мест введенных пользователем.

    /*Если была найдена группа в которой количество мест больше либо равно необходимому, 
вывести сообщение через confirm, что есть место в группе такой-то, согласен ли 
пользоваетель быть в этой группе?
* Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
* Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'

Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!' */

// HOTELS
const sharm = 15;
const hurgada = 25;
const taba = 6;

// USER-ACTION
let greetings = prompt("Приветствуем ! Сколько мест Вам необходимо ?");
let greetingsNum = Number(greetings);
let foundPlace;

//MESSAGE
let wrongMessage = "Ошибка ввода";
let userEscape = "Нам очень жаль, приходите еще!";
let confirmYes = "Приятного путешествия в этой группе";
let sorry = "Извините, столько мест нет ни в одной группе!";

//START
if (greetingsNum <= 0) {
  alert(wrongMessage);
} 
else if(!Number.isInteger(greetingsNum)){
  alert(wrongMessage); 
}
else if (greetings == null) {
  alert(userEscape);
} 
else if (sharm >= greetingsNum) {
    foundPlace = confirm("В группе Sharm есть свободные места, Согласны ли вы на эту группу?");
    if (foundPlace) {
        alert(confirmYes);
    } else {
        alert(userEscape);
  }
} 
else if (hurgada >= greetingsNum) {
  foundPlace = confirm("В группе Hurgada есть свободные места, Согласны ли вы на эту группу?");
    if (foundPlace) {
        alert(confirmYes);
    } else {
        alert(userEscape);
  }
} else if (taba >= greetingsNum) {
  foundPlace = confirm("В группе Taba есть свободные места, Согласны ли вы на эту группу?");
    if (foundPlace) {
        alert(confirmYes);
    } else {
        alert(userEscape);
    }
} 
else {
    alert(sorry);
}
