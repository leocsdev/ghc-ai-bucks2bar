# Project Guidelines

Bucks2Bar is a static, no-build front-end project: plain HTML/JS with Bootstrap 5 and Chart.js loaded via CDN in [index.html](../index.html). All logic lives in [index.js](../index.js). There is no build step, bundler, or package manager — open `index.html` directly in a browser to test changes.

## Conventions

- Currency is Philippine Peso, formatted with `Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" })` (see `currencyFormatter` in [index.js](../index.js)). Do not use the ₱ symbol in labels — write "Php" instead.
- Keep the "Data" and "Chart" tab structure in [index.html](../index.html); the chart on the Chart tab reads its values from the Data tab's income/expense inputs.
- All buttons must have a pink background color.
