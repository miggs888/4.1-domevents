// select empty div and assign to a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");

// put an h1 inside of it
// create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'Click here to learn what a llama\'s favorite color is!';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);

//change h1 to pink background when clicked
function handleHeadingClick () {
    console.log('Pink is the favorite color of all llamas!');
    document.body.style.backgroundColor = 'pink';
}