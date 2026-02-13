document.getElementById('cash-out')
    .addEventListener('click', function (event) {
        const cashOutAmount = getInputValue('cash-out-amount');
        const cashOutPin = getInputValue('cash-out-pin');
        const loginList = document.getElementById('login-list-cash-out');
        const p = document.createElement('p');
        const balance = getInnerTextById('balance');
        const cashOutTotal = balance - cashOutAmount;
        if (cashOutPin === 1234) {
            p.innerText = 'Cash Out Successful';
            p.style.color = 'green';
            loginList.appendChild(p);
            getSetInnerTextByIdValue('balance', cashOutTotal)
        }
        else {
            p.innerText = 'Password Incorrect';
            p.style.color = 'red';
            loginList.appendChild(p);
        }
    })

    document.getElementById('log-out-btn')
    .addEventListener('click', function(event){
        window.location.href = 'index.html'
    })