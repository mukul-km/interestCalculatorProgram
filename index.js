// Interest Calculator Program

function calculate(){
    const totalAmt = document.getElementById("totalAmt");
    const principalAmtInput = document.getElementById("principalAmt");
    const interestRateInput = document.getElementById("interestRate");
    const yearsInput = document.getElementById("years");

    let principalAmt = Number(principalAmtInput.value);
    let interestRate = Number(interestRateInput.value / 100);
    let years = Number(yearsInput.value);

    if(principalAmt < 0 || isNaN(principalAmts)){
        principalAmt = 0;
        principalAmtInput.value = 0;
    }
    if(interestRate < 0 || isNaN(interestRate)){
        interestRate = 0;
        interestRateInput.value = 0;
    }
    if(years < 0 || isNaN(years)){
        years = 0;
        yearsInput.value = 0;
    }

    const result = principalAmt * Math.pow((1 + interestRate / 1), 1 * years);

    totalAmt.textContent = result.toLocaleString(undefined, {style: "currency", currency: "INR"} );

}