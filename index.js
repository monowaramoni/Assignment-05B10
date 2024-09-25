// blog btm link 

document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = "./blog.html ";


})

// Card-1 functional code here


document.getElementById('donate-Btn').addEventListener('click', function () {
    const inputDonation = parseFloat(document.getElementById('input-donation').value);

    const addMoney = document.getElementById('current-balance').innerText;
    const reservedMoney = parseFloat(document.getElementById('reserved-amount').innerText);

    const currentBalance = parseFloat(addMoney);

    if (isNaN(inputDonation) || inputDonation <= 0) {
        alert('Failed to add money. Please enter a positive number.');
        return;
    }

    if (inputDonation > reservedMoney) {
        alert('Insufficient reserved funds for this donation.');
        return;
    }

    const newBalance = inputDonation + currentBalance;
    const newReserved = reservedMoney - inputDonation;

    document.getElementById('current-balance').innerText = newBalance.toFixed(2);
    document.getElementById('reserved-amount').innerText = newReserved.toFixed(2);

    console.log('New Balance:', newBalance, 'New Reserved:', newReserved);

});



// Card-2 functional code here

document.getElementById('donation ').addEventListener('click', function () {

    const inputMoney = parseFloat(document.getElementById('input').value);
    const addMoney = document.getElementById('total-balance').innerText;
    const reservedMoney = parseFloat(document.getElementById('reserved-amount').innerText);
    const currentAmount = parseFloat(addMoney);


    if (isNaN(inputMoney) || inputMoney <= 0) {

        alert('Failed to add money. Please enter a positive number.');
        return;
    }
    if (inputMoney > reservedMoney) {
        alert('Insufficient reserved funds for this donation.');
        return;
    }
    const newTotal = inputMoney + currentAmount;
    const newReserved = reservedMoney - inputMoney;

    document.getElementById('total-balance').innerText = newTotal.toFixed(2);
    document.getElementById('reserved-amount').innerText = newReserved.toFixed(2);

    console.log('New Balance', newTotal);
});

//  tab switch Donation to history

const historyTab = document.getElementById("history-tab");
historyTab.addEventListener('click', function () {
    historyTab.classList.add("bg-btn-colors");

    const donationTab = document.getElementById("donation-tab");
    donationTab.classList.remove("bg-btn-colors");

    document.getElementById("main-section").classList.add('hidden');

})
const donationTab = document.getElementById("donation-tab");
donationTab.addEventListener('click', function () {
    donationTab.classList.add("bg-btn-colors");
    historyTab.classList.remove("bg-btn-colors"


    );
    document.getElementById("main-section").classList.remove('hidden');
})




