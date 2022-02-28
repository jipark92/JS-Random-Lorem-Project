const rndmLorem = [
    `Crocubot. So, you’re a cold, unfeeling reptile and also an equally cold, and unfeeling machine? Yes. So your origin is what? You fell in a vat of redundancy?`,
    `Chase mice meowing chowing and wowing cats go for world domination. Side-eyes your "jerk" other hand while being petted while happily ignoring when being called, cry louder at reflection. Chase red laser dot cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog. Floof tum, tickle bum, jellybean footies curly toes check cat door for ambush 10 times before coming in or meow meow, i tell my human or show belly. Waffles milk the cow meow`,
    `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
    `Quinoa cold-pressed kickstarter, health goth lomo snackwave meditation subway tile polaroid meggings affogato chambray fashion axe. Tumblr art party PBR&B shaman bushwick cloud bread health goth vape next level franzen asymmetrical +1 glossier succulents brunch. Affogato hella edison bulb iceland. Poutine pug DIY butcher pok pok vape health goth raclette etsy.`,
];


const quantities = document.querySelector('.quantity');
const generateBtn = document.querySelector('.generate');

const pOne = document.querySelector('.one');
const pTwo = document.querySelector('.two');
const pThree = document.querySelector('.three');
const pFour = document.querySelector('.four');

const loremParagraph = document.querySelector('.lorem');

generateBtn.addEventListener('click', ()=> {
    console.log(quantities.value);
    if (quantities.value == 1){
       pOne.textContent = rndmLorem[rndmNumber()];
       pFour.style.visibility = "hidden";
       pThree.style.visibility = "hidden";
       pTwo.style.visibility = "hidden";
       pOne.style.visibility = "visible";

    } else if (quantities.value == 2) {
        pTwo.textContent = rndmLorem[rndmNumber()];
        pOne.textContent = rndmLorem[rndmNumber()];

        pFour.style.visibility = "hidden";
        pThree.style.visibility = "hidden";
        pTwo.style.visibility = "visible";
        pOne.style.visibility ="visible";

    } else if (quantities.value == 3) {
        pThree.textContent = rndmLorem[rndmNumber()];
        pTwo.textContent = rndmLorem[rndmNumber()];
        pOne.textContent = rndmLorem[rndmNumber()];

        pFour.style.visibility = "hidden";
        pThree.style.visibility = "visible";
        pTwo.style.visibility = "visible";
        pOne.style.visibility = "visible";

    } else if (quantities.value == 4) {
        pFour.textContent = rndmLorem[rndmNumber()];
        pThree.textContent = rndmLorem[rndmNumber()];
        pTwo.textContent = rndmLorem[rndmNumber()];
        pOne.textContent = rndmLorem[rndmNumber()];

        pFour.style.visibility = "visible";
        pThree.style.visibility = "visible";
        pTwo.style.visibility = "visible";
        pOne.style.visibility = "visible";
    } else if (quantities.value == 0){

        pFour.style.visibility = "hidden";
        pThree.style.visibility = "hidden";
        pTwo.style.visibility = "hidden";
        pOne.style.visibility = "hidden";
    } else {
        return;
    }
});


// function loremOne(random) {
//     pOne.textContent = rndmLorem[random];
//     console.log(random)
// }
// loremOne(rndmNumber());

// function loremTwo(random) {
//     pTwo.textContent = rndmLorem[random];
//     console.log(random)
// }
// loremTwo(rndmNumber());


// function loremThree(random) {
//     pThree.textContent = rndmLorem[random];
//     console.log(random)
// }
// loremThree(rndmNumber());

// function loremFour(random) {
//     pFour.textContent = rndmLorem[random];
//     console.log(random)
// }
// loremFour(rndmNumber());


function rndmNumber() {
    return Math.floor(Math.random()*rndmLorem.length);
}
console.log(rndmNumber());