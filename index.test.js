/**
 * @jest-environment jsdom
 */
const {
  MONTHS,
  currencyFormatter,
  buildMonthRows,
  getMonthlyData,
  isUsernameValid,
  handleUsernameSubmit,
} = require("./index.js");

describe("isUsernameValid", () => {
  test.each([
    ["Abcd1!", true],
    ["abcd1!", false], // missing uppercase
    ["Abcde!", false], // missing number
    ["Abcd12", false], // missing special char
    ["Ab1!", false], // too short
  ])("isUsernameValid(%s) => %s", (username, expected) => {
    expect(isUsernameValid(username)).toBe(expected);
  });
});

describe("currencyFormatter", () => {
  test("formats numbers as PHP currency", () => {
    expect(currencyFormatter.format(1234.5)).toBe("₱1,234.50");
  });
});

describe("buildMonthRows", () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<table><tbody id="months-table-body"></tbody></table>';
  });

  test("creates an income and expense input for every month", () => {
    buildMonthRows();
    MONTHS.forEach((month) => {
      const key = month.toLowerCase();
      expect(document.getElementById(`income-${key}`)).not.toBeNull();
      expect(document.getElementById(`expense-${key}`)).not.toBeNull();
    });
  });
});

describe("getMonthlyData", () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<table><tbody id="months-table-body"></tbody></table>';
    buildMonthRows();
  });

  test("reads parsed values from the income/expense inputs", () => {
    document.getElementById("income-jan").value = "100";
    document.getElementById("expense-jan").value = "40.5";

    const { income, expense } = getMonthlyData();

    expect(income[0]).toBe(100);
    expect(expense[0]).toBe(40.5);
  });

  test("defaults blank inputs to 0", () => {
    const { income, expense } = getMonthlyData();
    expect(income.every((value) => value === 0)).toBe(true);
    expect(expense.every((value) => value === 0)).toBe(true);
  });
});

describe("handleUsernameSubmit", () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<input id="username-input" class="form-control" />';
  });

  test("marks a valid username as valid", () => {
    const input = document.getElementById("username-input");
    input.value = "Abcd1!";
    handleUsernameSubmit();
    expect(input.classList.contains("is-valid")).toBe(true);
    expect(input.classList.contains("is-invalid")).toBe(false);
  });

  test("marks an invalid username as invalid", () => {
    const input = document.getElementById("username-input");
    input.value = "bad";
    handleUsernameSubmit();
    expect(input.classList.contains("is-invalid")).toBe(true);
    expect(input.classList.contains("is-valid")).toBe(false);
  });
});
