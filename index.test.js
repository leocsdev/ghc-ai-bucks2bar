const { handleUsernameSubmit } = require("./index.js");

describe("handleUsernameSubmit", () => {
  beforeEach(() => {
    document.body.innerHTML = `<input id="username-input" />`;
  });

  test("adds is-valid and removes is-invalid for a valid username", () => {
    const input = document.getElementById("username-input");
    input.value = "Abcde1!";
    handleUsernameSubmit();
    expect(input.classList.contains("is-valid")).toBe(true);
    expect(input.classList.contains("is-invalid")).toBe(false);
  });

  test("adds is-invalid and removes is-valid for an invalid username", () => {
    const input = document.getElementById("username-input");
    input.value = "abc";
    handleUsernameSubmit();
    expect(input.classList.contains("is-invalid")).toBe(true);
    expect(input.classList.contains("is-valid")).toBe(false);
  });

  test("treats an empty username as invalid", () => {
    const input = document.getElementById("username-input");
    input.value = "";
    handleUsernameSubmit();
    expect(input.classList.contains("is-invalid")).toBe(true);
    expect(input.classList.contains("is-valid")).toBe(false);
  });

  test("updates classes correctly across multiple calls", () => {
    const input = document.getElementById("username-input");

    input.value = "invalidusername";
    handleUsernameSubmit();
    expect(input.classList.contains("is-invalid")).toBe(true);
    expect(input.classList.contains("is-valid")).toBe(false);

    input.value = "Valid1!";
    handleUsernameSubmit();
    expect(input.classList.contains("is-valid")).toBe(true);
    expect(input.classList.contains("is-invalid")).toBe(false);
  });
});
