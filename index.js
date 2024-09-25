// blog btm link 

document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = "./blog.html ";


})

const donationAmount = document.getElementById('donate-Btn').addEventListener('click', function (event) {
    event.preventDefault;
    const inputDonation = parseFloat(document.getElementById('input-donation').value);
    //  const currentAmountElement = document.getElementById('current-amount');
    //  currentAmountElement.innerText = current-amount.toFixed(2);
    //  const donationAmount = inputDonation + currentAmount;
    console.log();

})

//  tab switch Donation to history

const historyTab = document.getElementById("history-tab");
historyTab.addEventListener('click', function () {
    historyTab.classList.add("bg-btn-colors");

    const donationTab = document.getElementById("donation-tab");
    donationTab.classList.remove ("bg-btn-colors");

    document.getElementById("main-section").classList.add('hidden');

})

