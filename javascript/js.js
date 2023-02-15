
// Event Click
$(document).ready(function(){
    $(".main-btn").click(function(){
        $(".main-btn").css({"box-shadow": ""});
        $(this).css({"box-shadow": "0 0 0 0.25rem rgb(13 110 253 / 25%)"});
    });
});