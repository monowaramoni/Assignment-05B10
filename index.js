// blog btm link 

document.getElementById('blog-btn').addEventListener('click', function () {
     window.location.href = "./blog.html ";


})

 const donationAmount =document.getElementById('donate-Btn').addEventListener('click', function (event){
     event.preventDefault;
     const inputDonation = parseFloat(document.getElementById('input-donation').value);
     const currentAmount = document.getElementById('current-amount');
     const donationAmount = inputDonation + currentAmount;
     console.log(donationAmount);
 })
 
// function for all donate now form

//  const donationAmount = document.getElementById('donate-Btn').addEventListener('click', function (event){
//      event.preventDefault;
//      const inputDonation = parseFloat(document.getElementById('donate-Btn').value);
//      console.log(inputDonation);
//  })