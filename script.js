function validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(gmail.com)|(mail.ru)|(yahoo.com)|(yandex.ru)$/
    return regex.test(email);
};

function validatePassword(password) {
    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return regex.test(password);
};

function signUp() {
    var email = $('#InputEmail1').val();
    var password1 = $('#InputPassword1').val();
    var password2 = $('#InputPassword2').val();

    if (validateEmail(email)) {
        console.log('Valid Email');
        if (validatePassword(password1)) {
            if (password1 == password2) {
                if (!$("input[name='inlineRadioOptions']").is(':checked')) {
                    alert('Nothing is checked!');
                }
                else {
                    if (document.getElementById('exampleCheck1').checked) {
                        var obj = {
                            "email": email,
                            "pass": password1
                        }

                        postRegister(obj);
                    }
                    else {
                        alert('Accept Terms and Conditions of Use');
                    }

                }

            }
            else {
                alert('Passwords don\'t match');
            }
        }
        else {
            alert("Password should contain at least one Capital letter, one Special symbol and contain a minimum of 8 characters in length");
        }
    }
    else {
        alert("Invalid Email");
    }
};

