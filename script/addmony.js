document.getElementById('add-money')
    .addEventListener('click', function (event) {
        const amount = parseInt(document.getElementById('amount').value);
        const pin = parseInt(document.getElementById('pin').value);
        const loginList = document.getElementById('login-list');
        const p = document.createElement('p');
        const balance = parseInt(document.getElementById('balance').innerText);
        const totalBalace = amount + balance;
        if (pin === 123) {
            p.innerText = 'Add Money Successful';
            p.style.color = 'green';
            loginList.appendChild(p);
            document.getElementById('balance').innerText = totalBalace;

        }
        else {
            p.innerText = 'Incorrect Pin';
            p.style.color = 'red';
            loginList.appendChild(p);
        }
    })