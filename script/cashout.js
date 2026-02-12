document.getElementById('cash-out')
    .addEventListener('click', function (event) {
        const cashOutAmount = parseInt(document.getElementById('cash-out-amount').value);
        const cashOutPin = parseInt(document.getElementById('cash-out-pin').value);
        const loginList = document.getElementById('login-list-cash-out');
        const p = document.createElement('p');
        const balance = parseInt(document.getElementById('balance').innerText);
        const cashOutTotal = balance - cashOutAmount;
        console.log(cashOutTotal)
        if (cashOutPin === 123) {
            p.innerText = 'Cash Out Successful';
            p.style.color = 'green';
            loginList.appendChild(p);
            document.getElementById('balance').innerText = cashOutTotal;
            
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