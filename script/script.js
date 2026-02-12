document.getElementById('login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const number = document.getElementById('number').value;
        const password = document.getElementById('password').value;
        const loginList = document.getElementById('login-list');
        const p = document.createElement('p');
        if (parseInt(number.length) >= 11) {


            if (parseInt(password) === 1234) {
                p.innerText = 'Login Successful';
                p.style.color = 'green';
                loginList.appendChild(p);
                window.location.href = 'main.html'
            }
            else {
                p.innerText = 'Password Incorrect';
                p.style.color = 'red';
                loginList.appendChild(p);
            }
        }
        else {
            p.innerText = 'Not Valid Mobile Number';
            p.style.color = 'red';
            loginList.appendChild(p);
        }
    })