'use strict';

if (document.querySelector('#button')) {
    var setValueToLocalStorage = function setValueToLocalStorage() {
        var input = document.querySelector('#number');
        localStorage.setItem("value", JSON.stringify(input.value));
    };

    document.querySelector('#button').addEventListener('click', setValueToLocalStorage);
};

if (document.querySelectorAll('.genbutton')[0]) {
    var getValuefromLocalStorage = function getValuefromLocalStorage() {
        targetvalue.innerHTML = 0;
        targetvalue.classList.toggle("appearance");
        var currenTime = new Date();
        var date = currenTime.toLocaleDateString('ru');
        var time = currenTime.toLocaleTimeString('ru');
        setTimeout(function () {
            var value = JSON.parse(localStorage.getItem('value'));
            targetvalue.innerHTML = value;
            timeString.innerHTML = date + ' ' + time;
            targetvalue.classList.toggle('appearance');
        }, 1500);
    };

    document.querySelectorAll('.genbutton')[0].addEventListener('click', getValuefromLocalStorage);
    var targetvalue = document.querySelectorAll('.targetvalue')[0];
    var timeString = document.querySelectorAll('.time_string')[0];
    var startDate = new Date();
    timeString.innerHTML = startDate.toLocaleDateString('ru') + ' ' + startDate.toLocaleTimeString('ru');
}