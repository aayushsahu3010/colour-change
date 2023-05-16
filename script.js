const colors = ['green', 'red', "rgba(133,122,200)", "#F15025","blue",'cyan'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {

    let random_number = Math.floor(Math.random() * colors.length - 1) + 1;
    ;
    console.log(random_number);
    document.body.style.backgroundColor = colors[random_number];
    color.textContent = colors[random_number];
});

