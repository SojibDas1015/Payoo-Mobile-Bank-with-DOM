handleToggle('cash-out-section', 'none')
handleToggle('transaction-section', 'none')

const addMoneyBtn = document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        handleToggle('add-money-section', 'block');
        handleToggle('cash-out-section', 'none');
        handleToggle('transaction-section', 'none')
        document.getElementById('cash-out-btn').style.backgroundColor = 'white'
        document.getElementById('add-money-btn').style.backgroundColor = 'silver'
        document.getElementById('transaction-btn').style.backgroundColor = 'white'
    })

const cashOutBtn = document.getElementById('cash-out-btn')
    .addEventListener('click', function (event) {
        handleToggle('add-money-section', 'none')
        handleToggle('cash-out-section', 'block')
        handleToggle('transaction-section', 'none')
        document.getElementById('cash-out-btn').style.backgroundColor = 'silver'
        document.getElementById('add-money-btn').style.backgroundColor = 'white'
        document.getElementById('transaction-btn').style.backgroundColor = 'white'
    })

const transactionBtn = document.getElementById('transaction-btn')
    .addEventListener('click', function (event) {
        handleToggle('add-money-section', 'none')
        handleToggle('cash-out-section', 'none')
        handleToggle('transaction-section', 'block')
        document.getElementById('cash-out-btn').style.backgroundColor = 'white'
        document.getElementById('add-money-btn').style.backgroundColor = 'white'
        document.getElementById('transaction-btn').style.backgroundColor = 'silver'
    })