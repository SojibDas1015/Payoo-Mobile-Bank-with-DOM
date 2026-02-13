document.getElementById('cash-out')
    .addEventListener('click', function (event) {
        const agentNumber = getInputValue('agent-number');
        const cashOutAmount = getInputValue('cash-out-amount');
        const cashOutPin = getInputValue('cash-out-pin');
        const loginList = document.getElementById('login-list-cash-out');
        const p = document.createElement('p');
        const balance = getInnerTextById('balance');
        const cashOutTotal = balance - cashOutAmount;
        const transactionHistory = document.getElementById('transaction-history');
        if (cashOutPin === 1234) {
            if (balance > cashOutAmount) {
                p.innerText = 'Cash Out Successful';
                p.style.color = 'green';
                loginList.appendChild(p);
                getSetInnerTextByIdValue('balance', cashOutTotal)

                const div = document.createElement('div');
                div.classList.add('px-4')
                div.classList.add('mt-4')
                div.classList.add('mx-4')
                div.classList.add('bg-white')
                div.classList.add('py-4')
                div.classList.add('rounded-2xl')
                div.innerHTML = `
                <h4 class="font-outfit text-xl font-bold">Cash Out</h4>
                <p>$${cashOutAmount} form this ${agentNumber} account</p>
                
                `
                transactionHistory.appendChild(div);
            }
            else
            {
                p.innerText = 'Insufficient Balance';
                p.style.color = 'red';
                loginList.appendChild(p);
            }
        }
        else {
            p.innerText = 'Password Incorrect';
            p.style.color = 'red';
            loginList.appendChild(p);
        }
    })

document.getElementById('log-out-btn')
    .addEventListener('click', function (event) {
        window.location.href = 'index.html'
    })