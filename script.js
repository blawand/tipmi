// script.js
document.getElementById('tip-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let price = parseFloat(document.getElementById('price').value);
    let percentage = parseInt(document.getElementById('percentage').value);
    let customPercentageInput = document.getElementById('custom-percentage').value;
    let customPercentage = customPercentageInput ? parseInt(customPercentageInput) : null;
    let result = document.getElementById('result');
    let message = '';
    let tipPercentage = customPercentage !== null ? customPercentage : percentage;
    
    if (event.submitter.id === 'calculate-4') {
        tipPercentage = tipPercentage >= 4 ? 4 : tipPercentage;
    }

    if (tipPercentage >= 4) {
        let tip = price * (tipPercentage / 100);
        if (tipPercentage >= 100) {
            message = 'Wow! You are incredibly generous!';
        } else if (tipPercentage >= 90) {
            message = 'Amazing! Your generosity knows no bounds!';
        } else if (tipPercentage >= 75) {
            message = 'That’s a fantastic tip! You are awesome!';
        } else if (tipPercentage >= 60) {
            message = 'Incredible! You are so generous!';
        } else if (tipPercentage >= 50) {
            message = 'Half the price as tip! You are fantastic!';
        } else if (tipPercentage >= 40) {
            message = 'You are going above and beyond!';
        } else if (tipPercentage >= 30) {
            message = 'You are really generous!';
        } else if (tipPercentage >= 25) {
            message = 'Thanks for the amazing tip!';
        } else if (tipPercentage >= 20) {
            message = 'Thank you for being so generous!';
        } else if (tipPercentage >= 15) {
            message = 'This is a great tip, thank you!';
        } else if (tipPercentage >= 10) {
            message = 'You are a great tipper!';
        } else if (tipPercentage >= 5) {
            message = 'Thanks for the nice tip!';
        } else {
            message = 'Thank you!';
        }
        result.textContent = `Tip: $${tip.toFixed(2)}. ${message}`;
    } else {
        let criticism = '';
        if (tipPercentage === 0) {
            criticism = 'A tip of 0%? That’s quite disappointing.';
        } else if (tipPercentage === 1) {
            criticism = '1% tip? Really? You can do better.';
        } else if (tipPercentage === 2) {
            criticism = '2%? That’s almost like not tipping at all.';
        } else if (tipPercentage === 3) {
            criticism = '3% is pretty low. Consider being more generous.';
        }
        result.textContent = criticism;
    }
});