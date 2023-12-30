## Testing in react

Convention to write tests-

- Make folder **tests**
- Make file ComponentName.test.js

Run tests

```
yarn test

// Run tests and shows -
// Test Suites: count // it is number of test files like Counter, App
// Tests: count // it is number of total tests
```

### Testing App component

- We check if counter heading is present in the document, and says "Counter"
- We check if actual counter is there
- We check if increment, decrement and reset buttons are there

### Testing Counter component

- We check if counter initial value is getting set properly

```
it("counter shows correct initial value", () => { // decribing what test is
    const { getByTestId } = render(<Counter initial={0} />); // we render sample component and get counter by test id, we have added 'data-testid="count"' to counter in the Counter component
    const count = getByTestId("count").textContent; // we get its text
    expect(count).toEqual("0"); // and compare to initial value we gave to Counter in render above
  });
```

- We check if increment button is working

```
it("should increment the counter value upon clicking the Increment button", () => {
    const { getByTestId, getByRole } = render(<Counter initial={0} />);
    const incrementButton = getByRole("button", { name: "Increment" }); // we get button by button's name, since it doesn't change so no need to give it a id

    expect(getByTestId("count").textContent).toBe("0"); // get starting value

    fireEvent.click(incrementButton); // we trigger a click on the button

    expect(getByTestId("count").textContent).toBe("1"); // compare updated value
  });
```

- We then check decrement and reset button too similarly
