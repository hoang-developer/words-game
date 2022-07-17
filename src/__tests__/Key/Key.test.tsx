import KeyBoard from "../../Components/Keyboard/KeyBoard"
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";

test("Should have right key", () => {
    render(
    <Provider store={store}>
        <KeyBoard />
        </Provider>
    )
    const key = screen.getByText("A")
  expect(key).toHaveTextContent("A");
})
