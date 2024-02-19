
const scrollButton = document.getElementById('first-btn');
const goalElement = document.getElementById('scroll');


first-btn.addEventListener('click', function() {

    goalElement.scrollIntoView({ behavior: 'smooth' });
});





document.getElementsByClassName('btn').addEventListener('click', function(){
for ( const singleBtn of btn){
    console.log(singleBtn)
}

})

