import { render, fireEvent, cleanup } from "@testing-library/react";
import Counter from "../Counter";

describe(Counter, () => {
  afterEach(cleanup);
  it("counter shows correct initial value", () => {
    const { getByTestId } = render(<Counter initial={0} />);
    const count = getByTestId("count").textContent;
    expect(count).toEqual("0");
  });
  it("should increment the counter value upon clicking the Increment button", () => {
    const { getByTestId, getByRole } = render(<Counter initial={0} />);
    const incrementButton = getByRole("button", { name: "Increment" });

    expect(getByTestId("count").textContent).toBe("0");

    fireEvent.click(incrementButton);

    expect(getByTestId("count").textContent).toBe("1");
  });
  it("should decrement the counter value upon clicking the decrement button", () => {
    const { getByTestId, getByRole } = render(<Counter initial={1} />);
    const decrementButton = getByRole("button", { name: "Decrement" });

    expect(getByTestId("count").textContent).toBe("1");

    fireEvent.click(decrementButton);

    expect(getByTestId("count").textContent).toBe("0");
  });
  it("should reset the counter value upon clicking the reset button", () => {
    const { getByTestId, getByRole } = render(<Counter initial={10} />);
    const resetButton = getByRole("button", { name: "Reset" });

    expect(getByTestId("count").textContent).toBe("10");

    fireEvent.click(resetButton);

    expect(getByTestId("count").textContent).toBe("0");
  });
});
