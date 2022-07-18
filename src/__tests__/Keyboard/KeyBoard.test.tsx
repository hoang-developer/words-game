import KeyBoard from "../../Components/Keyboard/KeyBoard"
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import App from "../../App";
import userEvent from "@testing-library/user-event";


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

describe('Test Input from Keyboard', () => {
  test("Should display a word after fill a row", async() => {
    render(
      <Provider store={store}>
        <App/>
      </Provider>
    );
    const keyT = screen.getByTestId("letter-T");
    const keyE = screen.getByTestId("letter-E");
    const keyA = screen.getByTestId("letter-A");
    const keyC = screen.getByTestId("letter-C");
    const keyH = screen.getByTestId("letter-H");
    await userEvent.click(keyT)
    await userEvent.click(keyE)
    await userEvent.click(keyA)
    await userEvent.click(keyC)
    await userEvent.click(keyH)
    const board = screen.getByRole("board");

    expect(board).toHaveTextContent("TEACH");
  });
  test("Should display a word after enter a row", async() => {
    render(
      <Provider store={store}>
        <App/>
      </Provider>
    );
    const keyT = screen.getByTestId("letter-T");
    const keyE = screen.getByTestId("letter-E");
    const keyA = screen.getByTestId("letter-A");
    const keyC = screen.getByTestId("letter-C");
    const keyH = screen.getByTestId("letter-H");
    const keyEnter = screen.getByText("Enter")

    await userEvent.click(keyT)
    await userEvent.click(keyE)
    await userEvent.click(keyA)
    await userEvent.click(keyC)
    await userEvent.click(keyH)
    await userEvent.click(keyEnter)
    const board = screen.getByRole("board");

    expect(board).toHaveTextContent("TEACH");
  });
})