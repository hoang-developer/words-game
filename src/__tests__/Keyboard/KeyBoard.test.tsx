import KeyBoard from "../../Components/Keyboard/KeyBoard"
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";


describe('Test Interface for KeyBoard', () => {
  test("Should have right key Enter", () => {
    render(
    <Provider store={store}>
        <KeyBoard />
        </Provider>
    )
    const key = screen.getByText("Enter")
  expect(key).toHaveTextContent("Enter");
})

test("Should have right key Back", () => {
  render(
  <Provider store={store}>
      <KeyBoard />
      </Provider>
  )
  const key = screen.getByText("Back")
expect(key).toHaveTextContent("Back");
})

test("Should have right row 0", () => {
  render(
  <Provider store={store}>
      <KeyBoard />
      </Provider>
  )
  const key = screen.getByRole("row-0")
  const expectedResult = "QWERTYUIOP"
expect(key).toHaveTextContent(expectedResult);
})

test("Should have right row 1", () => {
  render(
  <Provider store={store}>
      <KeyBoard />
      </Provider>
  )
  const key = screen.getByRole("row-1");
  const expectedResult = "ASDFGHJKL"
expect(key).toHaveTextContent(expectedResult);
})

test("Should have right row 2", () => {
  render(
  <Provider store={store}>
      <KeyBoard />
      </Provider>
  )
  const key = screen.getByRole("row-2")
  const expectedResult = "ZXCVBNM"
expect(key).toHaveTextContent(expectedResult);
})
})
