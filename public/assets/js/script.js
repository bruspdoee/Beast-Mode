var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
    greeting = 'GoodEvening!';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome!';
}
document.write(`
<div class="container greeting-container">
<p class = "ml1">
        <span class = "text-wrapper">
        <span class = "letters" id="greeting" > ${greeting}
        </span> 
        </span> 
        </p>
        </div>
        `);


{ /* <h3 id="greeting">' + greeting + '</h3>'); */ }