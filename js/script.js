$(document).ready(function () {
    var currentFloor = 2; // переменная с текущим этажом
    var floorPath = $(".home-image path"); //каждый отдельный этаж svg
    var counterUp = $(".counter-up"); /*кнопка увеличения этажа*/
    var counterDown = $(".counter-down");/*кнопка уменьшения этажа*/
    //функция при наведении мыщью на этаж
    floorPath.on("mouseover", function() {
        floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
        currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
        $(".counter").text(currentFloor); //записываем значение этажа в счетчик справа
});


counterUp.on("click", function() { //отслеживаем клик по кнопке вверх
    if (currentFloor < 18) {
        currentFloor++;
        usCurrentFLoor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false}); //форматируем переменную с этажом, чтобы было 01, а не 1
        $(".counter").text(usCurrentFLoor);//записываем значение этажа в счетчик справа
        floorPath.removeClass("current-floor");//удаляем активный класс у этажей
        $(`[data-floor=${usCurrentFLoor}]`).toggleClass("current-floor"); //подсвечиваем текущий этаж
    }
});

counterDown.on("click", function() {//отслеживаем клик по кнопке вниз
    if (currentFloor > 2) {
        currentFloor--;
        usCurrentFLoor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});//форматируем переменную с этажом, чтобы было 01, а не 1
        $(".counter").text(usCurrentFLoor);//записываем значение этажа в счетчик справа
        floorPath.removeClass("current-floor");//удаляем активный класс у этажей
        $(`[data-floor=${usCurrentFLoor}]`).toggleClass("current-floor");//подсвечиваем текущий этаж
    }
});
});