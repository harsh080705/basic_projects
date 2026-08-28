const BASE_URL = "https://api.frankfurter.app/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const form = document.querySelector("form");
const amountInput = document.querySelector(".amount input");
const fromcurr = document.querySelector("#from-select");
const tocurr = document.querySelector("#to-select");
const msg = document.querySelector(".msg");
const rateSubtext = document.querySelector(".rate-subtext");
const swapBtn = document.querySelector("#swap-btn");

// Populate dropdowns with currency codes
for (let select of dropdowns) {
    for (let currcode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;
        if (select.name === "from" && currcode === "USD") {
            newOption.selected = true;
        } else if (select.name === "to" && currcode === "INR") {
            newOption.selected = true;
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
        updateExchangeRate();
    });
}

// Update flag images dynamically
const updateFlag = (element) => {
    let currcode = element.value;
    let countrycode = countryList[currcode] || "US";
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
};

// Swap currencies functionality
swapBtn.addEventListener("click", () => {
    let tempCode = fromcurr.value;
    fromcurr.value = tocurr.value;
    tocurr.value = tempCode;

    updateFlag(fromcurr);
    updateFlag(tocurr);
    updateExchangeRate();
});

// Fetch exchange rate from Frankfurter API
const updateExchangeRate = async () => {
    let amtval = amountInput.value;

    if (amtval === "" || amtval <= 0 || isNaN(amtval)) {
        amtval = 1;
        amountInput.value = "1";
    }

    const from = fromcurr.value;
    const to = tocurr.value;

    if (from === to) {
        msg.innerText = `${amtval} ${from} = ${amtval} ${to}`;
        rateSubtext.innerText = `1 ${from} = 1 ${to}`;
        return;
    }

    msg.innerText = "Fetching rate...";
    rateSubtext.innerText = "";

    try {
        const URL = `${BASE_URL}?amount=${amtval}&from=${from}&to=${to}`;
        const response = await fetch(URL);
        
        if (!response.ok) {
            throw new Error("Unable to fetch exchange rates");
        }

        const data = await response.json();
        const finalAmount = data.rates[to];
        const singleRate = (finalAmount / amtval).toFixed(4);

        msg.innerText = `${amtval} ${from} = ${finalAmount} ${to}`;
        rateSubtext.innerText = `1 ${from} = ${singleRate} ${to}`;
    } catch (error) {
        console.error("Exchange rate error:", error);
        msg.innerText = "Error fetching exchange rate";
        rateSubtext.innerText = "Please check your network or try again later.";
    }
};

// Form submit listener
form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

// Live input conversion (Debounced)
let debounceTimer;
amountInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        updateExchangeRate();
    }, 400);
});

// Fetch initial rate on page load
window.addEventListener("load", () => {
    updateExchangeRate();
});