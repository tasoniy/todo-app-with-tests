import { render, screen } from "@testing-library/react";
import List from "../components/list/list";

describe('check elements in List component', () => {
    test('in component List no element "bla bla"', () => {
        render(<List/>)
        const noElem = screen.queryByText(/bla bla/i)
        expect(noElem).toBeNull()
    })
})