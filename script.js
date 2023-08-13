
document.addEventListener("DOMContentLoaded", function () {
    var whiteBg = document.getElementById("white-background");
    var options = {
        strings: ["Hello!","My name is Ziyang Chen (陈子扬)!","Welcome to my homepage!"],
        typeSpeed: 20,
        backSpeed: 8,
        backDelay: 300,
        startDelay: 100,
        loop: false,
        onComplete: function() {
            // 设置透明度为0，开始CSS过渡效果
            whiteBg.style.opacity = "0";
        }
        
    };

    var typed = new Typed("#typed-output" , options);
    whiteBg.addEventListener("transitionend", function() {
        whiteBg.style.display = "none";
    });
});
    