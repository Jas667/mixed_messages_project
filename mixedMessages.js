//create array of quotes
const quotes = [`“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein`, `“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi`, `“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt`, `“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale`, `“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson`, `"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill`, `"The road to success and the road to failure are almost exactly the same." — Colin R. Davis`];

//assign variable to element in html by id for the button that will display quote
const getQuote = document.getElementById('getQuote');




//function to loop through and pick quote at random

const quoteSelector = (arr) => {

    const quoteSelector = Math.floor(Math.random() * arr.length);

    return String(arr[quoteSelector]);
};

// create function to display quote on page
const showQuote = () => {
    quoteBox.style.display = "block";
    theQuote.innerHTML = quoteSelector(quotes);
}

//add event listener for click on button to show quotes
getQuote.addEventListener('click', showQuote);

