const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const FALLBACK_URL = "https://latest.currency-api.pages.dev/v1/currencies";

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
});

// Fetch exchange rate with multi-provider fallback support
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
        const fromLower = from.toLowerCase();
        const toLower = to.toLowerCase();
        let data = null;
        let rate = null;

        // 1. Try primary API (jsDelivr CDN - Fawaz Ahmed Currency API)
        try {
            const response = await fetch(`${BASE_URL}/${fromLower}.json`);
            if (response.ok) {
                data = await response.json();
                rate = data[fromLower]?.[toLower];
            }
        } catch (e) {
            console.warn("Primary API failed, attempting secondary API...", e);
        }

        // 2. Try secondary API (Cloudflare Pages CDN)
        if (rate === null || rate === undefined) {
            try {
                const response = await fetch(`${FALLBACK_URL}/${fromLower}.json`);
                if (response.ok) {
                    data = await response.json();
                    rate = data[fromLower]?.[toLower];
                }
            } catch (e) {
                console.warn("Secondary API failed, attempting Frankfurter API...", e);
            }
        }

        // 3. Try tertiary API (Frankfurter API)
        if (rate === null || rate === undefined) {
            const frankfurterUrl = `https://api.frankfurter.app/latest?amount=1&from=${from}&to=${to}`;
            const response = await fetch(frankfurterUrl);
            if (response.ok) {
                const frankfurterData = await response.json();
                rate = frankfurterData.rates[to];
            }
        }

        if (rate === null || rate === undefined) {
            throw new Error(`Exchange rate unavailable for ${from} to ${to}`);
        }

        const finalAmount = amtval * rate;
        const formattedAmount = finalAmount.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 4
        });
        const singleRate = rate.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 4
        });

        msg.innerText = `${amtval} ${from} = ${formattedAmount} ${to}`;
        rateSubtext.innerText = `1 ${from} = ${singleRate} ${to}`;
    } catch (error) {
        console.error("Exchange rate error:", error);
        msg.innerText = "Error fetching exchange rate";
        rateSubtext.innerText = "Please check your network or try another currency pair.";
    }
};

// Form submit listener (Only conversion trigger when user clicks "Get Exchange Rate")
form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

// Initialize flags on load without fetching rates automatically
window.addEventListener("load", () => {
    updateFlag(fromcurr);
    updateFlag(tocurr);
});