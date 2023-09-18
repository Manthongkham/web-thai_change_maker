function calculateChange() {
    const bahtInput = document.getElementById('bahtInput').value;
    
    const thousandBill = Math.floor(bahtInput / 1000);
    const fiveHunBill = Math.floor((bahtInput % 1000) / 500);
    const oneHunBill = Math.floor((bahtInput % 1000 % 500) / 100);
    const fiftyBill = Math.floor((bahtInput % 1000 % 500 % 100) / 50);
    const twentyBill = Math.floor((bahtInput % 1000 % 500 % 100 % 50) / 20);
    const tenCoin = Math.floor((bahtInput % 1000 % 500 % 100 % 50 % 20) / 10);
    const fiveCoin = Math.floor((bahtInput % 1000 % 500 % 100 % 50 % 20 % 10) / 5);
    const twoCoin = Math.floor((bahtInput % 1000 % 500 % 100 % 50 % 20 % 10 % 5) / 2);
    const oneCoin = Math.floor((bahtInput % 1000 % 500 % 100 % 50 % 20 % 10 % 5 % 2) / 1);

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>1000 baht bills: ${thousandBill}</p>
        <p>500 baht bills: ${fiveHunBill}</p>
        <p>100 baht bills: ${oneHunBill}</p>
        <p>50 baht bills: ${fiftyBill}</p>
        <p>20 baht bills: ${twentyBill}</p>
        <p>10 baht coins: ${tenCoin}</p>
        <p>5 baht coins: ${fiveCoin}</p>
        <p>2 baht coins: ${twoCoin}</p>
        <p>1 baht coins: ${oneCoin}</p>
    `; 

    // Calculate USD equivalent
    const usdEquivalent = (0.027 * bahtInput).toFixed(2);
    resultElement.innerHTML += `<p>In USD, that's $${usdEquivalent}</p>`;

}
