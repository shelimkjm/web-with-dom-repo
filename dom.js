
const scrollButton = document.getElementById('first-btn');
const goalElement = document.getElementById('scroll');


scrollButton.addEventListener('click', function() {

    goalElement.scrollIntoView({ behavior: 'smooth' });
});





// document.getElementsByClassName('btn').addEventListener('click', function(){
// for ( const singleBtn of btn){
//     console.log(singleBtn)
// }

// })





document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button-but');
    const selectDown = document.getElementById('select-down');
    const seatAdd = document.getElementById('seat-add');
    const totalPrice = document.getElementById('total-price');
    
    let total = 0;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
        selectDown.textContent = parseInt(selectDown.textContent) - 1;
    seatAdd.textContent = parseInt(seatAdd.textContent) + 1;

           total += 550;
            totalPrice.textContent = total;
        });
    });
});




   




