const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const currencyFormatter = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
});

let chart;

function buildMonthRows() {
  const tbody = document.getElementById("months-table-body");
  tbody.innerHTML = MONTHS.map((month) => {
    const key = month.toLowerCase();
    return `
      <tr>
        <th scope="row">${month}</th>
        <td>
          <input
            type="number"
            class="form-control"
            id="income-${key}"
            min="0"
            step="0.01"
            placeholder="0.00"
          />
        </td>
        <td>
          <input
            type="number"
            class="form-control"
            id="expense-${key}"
            min="0"
            step="0.01"
            placeholder="0.00"
          />
        </td>
      </tr>`;
  }).join("");
}

function getMonthlyData() {
  const income = [];
  const expense = [];
  MONTHS.forEach((month) => {
    const key = month.toLowerCase();
    income.push(
      parseFloat(document.getElementById(`income-${key}`).value) || 0,
    );
    expense.push(
      parseFloat(document.getElementById(`expense-${key}`).value) || 0,
    );
  });
  return { income, expense };
}

function createChart() {
  const ctx = document.getElementById("bucks2bar-chart");
  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: MONTHS,
      datasets: [
        {
          label: "Income",
          data: Array(12).fill(0),
          backgroundColor: "#198754",
        },
        {
          label: "Expense",
          data: Array(12).fill(0),
          backgroundColor: "#dc3545",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          ticks: {
            callback: (value) => currencyFormatter.format(value),
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (context) =>
              `${context.dataset.label}: ${currencyFormatter.format(context.parsed.y)}`,
          },
        },
      },
    },
  });
}

function updateChart() {
  const { income, expense } = getMonthlyData();
  chart.data.datasets[0].data = income;
  chart.data.datasets[1].data = expense;
  chart.update();
}

window.onload = function () {
  buildMonthRows();
  createChart();
  document
    .getElementById("chart-tab")
    .addEventListener("shown.bs.tab", updateChart);
};
