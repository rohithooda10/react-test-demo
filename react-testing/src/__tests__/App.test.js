import { render, getByTestId, getByRole } from "@testing-library/react";
import App from "../App";
describe(App, () => {
  it("counter heading, counter text and increment, decrement, rest buttons are there", () => {
    const { getByTestId, getByRole } = render(<App />);
    const counterHeading = getByTestId("counterHeading");
    expect(counterHeading).toBeInTheDocument(); // is heading there
    expect(counterHeading.textContent).toEqual("Counter"); // is heading text "Counter"

    const count = getByTestId("count");
    expect(count).toBeInTheDocument(); // is actual counter there

    const incrementButton = getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument(); // is increment button there

    const decrementButton = getByRole("button", { name: "Decrement" });
    expect(decrementButton).toBeInTheDocument(); // is decrement button there

    const resetButton = getByRole("button", { name: "Reset" });
    expect(resetButton).toBeInTheDocument(); // is reset button there
  });
});
