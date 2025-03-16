function sendForm(){
            const keyBox = document.search.key;
            const val = keyBox.value;
            if(val.length<3){
                alert("Недопустимая длина строки");
                e.preventDefault();
            } else alert("Отправка разрешена");
        }
        const sendButton = document.search.send;
        sendButton.addEventListener("click", sendForm);
