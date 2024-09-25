// blog btm link 

document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = "./blog.html ";


})

// Card functional code here

const donationAmount = document.getElementById('donate-Btn').addEventListener('click', function () {

    const inputDonation = parseFloat(document.getElementById('input-donation').value);
    const addMoney = document.getElementById('current-balance').innerText;
    const currentBalance = parseFloat(addMoney);

    
    if (isNaN(inputDonation) || inputDonation <= 0) {

        alert('Failed to add money. Please enter a positive number.');
        return; 
    }

   
    const newBalance = inputDonation + currentBalance;
    
    
    document.getElementById('current-balance').innerText = newBalance;

    console.log('New Balance:', newBalance);
});



//  tab switch Donation to history

const historyTab = document.getElementById("history-tab");
historyTab.addEventListener('click', function () {
    historyTab.classList.add("bg-btn-colors");

    const donationTab = document.getElementById("donation-tab");
    donationTab.classList.remove("bg-btn-colors");

    document.getElementById("main-section").classList.add('hidden');

})

