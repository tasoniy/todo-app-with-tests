import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/button/button";

describe('check event "click" in Button component', () => {
    it('click event in document', () => {
        render(<Button/>)
        const btn = screen.getByTestId('todo-done')
        const span = screen.getByTestId('done-count')
        expect(span).toBeNull()
        fireEvent.click(btn)
        expect(span).toBeInTheDocument()
    })
})