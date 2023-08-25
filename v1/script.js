
document.addEventListener("DOMContentLoaded", function () {

    var options = {
        strings: ["Hello!<br>My name is Ziyang Chen (陈子扬)!<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to my homepage!<br>"],
        typeSpeed: 50,
        backSpeed: 0,  // 设置为0确保文字不会被删除
        backDelay: 1000,  // 因为我们不删除文字，所以设置为0
        startDelay: 1000,  
        loop: false,   // 不循环
        showCursor: true,   // 保持光标可见
        cursorChar: '|',    // 设置光标字符
        bindInputFocusEvents: true,
        onComplete: (self) => { // 当打字结束时触发
            self.cursor.remove(); // 删除光标
        }
    };

    var typed = new Typed("#typed-output" , options);
});

 