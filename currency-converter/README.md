# 🔀 Real-Time Currency Converter

An interactive web application that fetches live exchange rates and converts currency values between global currencies, featuring automatic country flag updates.

---

## 📌 Project Overview

The Currency Converter project demonstrates async JavaScript programming, REST API consumption (`fetch`), dynamic DOM manipulation, and input validation. Users can select any source and target currency, enter an amount, and retrieve real-time conversion rates alongside corresponding national flags.

---

## ⚡ Key Features

- **Real-Time Exchange Rates**: Fetches current currency exchange data asynchronously using the public Frankfurter API.
- **Dynamic Country Flags**: Automatically displays the national flag corresponding to selected currency codes via `FlagsAPI`.
- **Comprehensive Currency List**: Supports 150+ international currency codes mapped to ISO country codes in `codes.js`.
- **Bidirectional Conversion**: Easily swap or select any pair of currencies.
- **Input Validation**: Automatically handles empty or invalid numerical entries, setting defaults to maintain seamless UX.

---

## 🛠️ Tech Stack

- **HTML5**: Structured form controls, select dropdowns, and message outputs.
- **CSS3**: Custom card styling, dropdown layouts, and responsive flexbox alignment.
- **JavaScript (ES6+)**: `async/await`, RESTful `fetch` API, Event Listeners, and DOM manipulation.
- **External APIs**:
  - Exchange Rate API: `https://api.frankfurter.app/latest`
  - Flag Icons API: `https://flagsapi.com/`

---

## 📂 Project Structure

```
currency-converter/
├── index.html            # Main web page (renamed from first.html)
├── style.css             # Converter card & typography styles
├── app.js                # Core JavaScript logic & API fetch handling
├── codes.js              # Currency-to-Country code mapping object
└── README.md             # Project documentation
```

---

## 🚀 How to Run

1. Clone or download the repository.
2. Open `currency-converter/index.html` in your web browser.
3. Select your "From" and "To" currencies.
4. Enter the amount and click **Get Exchange Rate** to view the live conversion result.

---

## 🔮 Future Enhancements

- Add a swap button (`⇄`) listener to invert source and target currencies instantly.
- Implement rate history charts using Chart.js.
- Cache fetched rates in `localStorage` for offline fallback capability.
