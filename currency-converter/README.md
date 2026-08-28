# 🔀 Real-Time Currency Converter

A modern, glassmorphism web application that fetches live exchange rates, instantly converts currency values, supports interactive currency swapping (`⇄`), and displays national flags.

---

## 📌 Project Overview

The Currency Converter project showcases modern UI design and asynchronous JavaScript programming (`async/await`, RESTful `fetch` API). Users can select any source and target currency, swap currencies with a single click, type amounts for instant debounced conversions, and view real-time conversion rates alongside corresponding country flags.

---

## ⚡ Key Features

- **Modern Glassmorphism UI**: Translucent glass card container with backdrop blur filters, glowing ambient background elements, and custom typography (Google Fonts Poppins).
- **Interactive Swap Button (`⇄`)**: Inverts source and target currencies instantly with smooth rotation animations and automatic flag updates.
- **Live Debounced Conversion**: Automatically calculates exchange rates in real time as the user types without requiring manual form re-submission.
- **Real-Time Exchange Rates**: Fetches current currency exchange data asynchronously using the public Frankfurter API.
- **Dynamic Country Flags**: Automatically displays the national flag corresponding to selected currency codes via `FlagsAPI`.
- **Comprehensive Currency Mapping**: Supports 150+ international currency codes mapped to ISO country codes in `codes.js`.
- **Rate Subtext & Error Handling**: Displays unit conversion breakdown (e.g. `1 USD = 83.50 INR`) and handles network connectivity errors gracefully.

---

## 🛠️ Tech Stack

- **HTML5**: Accessible input fields, select dropdowns, and semantic layout tags.
- **CSS3**: Custom CSS Variables, Glassmorphism backdrop-filters, CSS animations, and Flexbox alignment.
- **JavaScript (ES6+)**: `async/await`, RESTful `fetch` API, input debouncing, event listeners, and dynamic DOM manipulation.
- **External APIs**:
  - Exchange Rate API: `https://api.frankfurter.app/latest`
  - Flag Icons API: `https://flagsapi.com/`

---

## 📂 Project Structure

```
currency-converter/
├── index.html            # Main web page structure
├── style.css             # Glassmorphism UI & responsive styling
├── app.js                # Live rate fetch logic, debouncing & swap handler
├── codes.js              # Currency-to-Country code mapping object
└── README.md             # Project documentation
```

---

## 🚀 How to Run

1. Clone or download the repository.
2. Open `currency-converter/index.html` in your web browser.
3. Select your "From" and "To" currencies or click the **Swap (`⇄`)** button to invert them.
4. Type any amount to see instant conversion results!

---

## 🔮 Future Enhancements

- Implement historical rate trend charts using Chart.js.
- Cache recent exchange rates in `localStorage` for offline fallback mode.
- Add multi-currency comparison matrix.
