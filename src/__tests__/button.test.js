import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/button/button";

describe('check event "click" in Button component', () => {
    test('click event in document', () => {
        render(<Button/>)
        //const btn = screen.getByTestId('todo-done')
        expect(screen.queryByTestId('done-count')).toBeNull()
        //fireEvent.click(btn)
        //expect(screen.queryByTestId('done-count')).toBeInTheDocument()
    })
})