import { render, screen } from "@testing-library/react";
import ListItem from "../components/listItem/listItem";

test('List item', () => {
    render(<ListItem/>)
    expect(screen.queryByText('fck fck')).toBeNull()
})