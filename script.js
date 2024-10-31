const inputs = document.querySelectorAll('.input-container input[type="text"]');
    const errorMessage = document.getElementById('error-message');

    function moveToNextInput(event){
        console.log(event);
        if(event.inputType == "insertText"){
            if(event.data.length >= event.target.maxLength){
                const nextInput = event.target.nextElementSibling;
                if(nextInput){
                    nextInput.focus();
                } else{
                    checkCode();
                }
            }
        }else if(event.inputType == "deleteContentBackward"){
            const prevInput = event.target.previousElementSibling;
            if(prevInput){
                prevInput.focus();
            }
        }
    }

    inputs.forEach(input => {
        input.addEventListener('input', moveToNextInput);
    });

    function checkCode(){
        let completeCode = '';

        inputs.forEach(input => {
            completeCode+=input.value;
        });

        if(completeCode!=11111){
            errorMessage.innerHTML = "OTP doesn't match";
        }else{
            errorMessage.innerHTML = "OTP successfully match";
        }

        setTimeout(() => {
            errorMessage.innerHTML = "";
        }, 3000);
    }