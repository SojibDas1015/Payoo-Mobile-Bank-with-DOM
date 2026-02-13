document.getElementById('add-money')
    .addEventListener('click', function (event) {
        const accountNumber = getInputValue('accoutn-number');
        const amount = getInputValue('amount')
        const pin = getInputValue('pin');
        const loginList = document.getElementById('login-list');
        const p = document.createElement('p');
        const balance = getInnerTextById('balance');
        const totalBalace = amount + balance;
        const transactionHistory = document.getElementById('transaction-history');
        const bankName = document.getElementById('bank-name').value;
        if (pin === 1234) {
            if (0 < amount) {
                p.innerText = 'Add Money Successful';
                p.style.color = 'green';
                loginList.appendChild(p);
                getSetInnerTextByIdValue('balance', totalBalace);

                const div = document.createElement('div');
                div.classList.add('px-4')
                div.classList.add('mt-4')
                div.classList.add('mx-4')
                div.classList.add('bg-white')
                div.classList.add('py-4')
                div.classList.add('rounded-2xl')
                div.innerHTML = `
                <h4 class="font-outfit text-xl font-bold">Add Money <span class="font-outfit text-xs font-light">${bankName}</span></h4>
                <p>$${amount} form this ${accountNumber} account</p>
                
                `
                transactionHistory.appendChild(div);
            }
            else {
                p.innerText = 'Add Money Should be Grater then 0';
                p.style.color = 'red';
                loginList.appendChild(p);
            }

        }
        else {
            p.innerText = 'Incorrect Pin';
            p.style.color = 'red';
            loginList.appendChild(p);
        }
    }) 