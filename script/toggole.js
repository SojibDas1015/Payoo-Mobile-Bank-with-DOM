document.getElementById('cash-out-section').style.display = 'none';
const addMoneyBtn = document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        document.getElementById('add-money-section').style.display = 'block';
        document.getElementById('cash-out-section').style.display = 'none';
        document.getElementById('cash-out-btn').style.backgroundColor = 'white'
        document.getElementById('add-money-btn').style.backgroundColor = 'silver'
    })

const cashOutBtn = document.getElementById('cash-out-btn')
    .addEventListener('click', function (event) {
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('cash-out-section').style.display = 'block';
        document.getElementById('cash-out-btn').style.backgroundColor = 'silver'
        document.getElementById('add-money-btn').style.backgroundColor = 'white'
    })