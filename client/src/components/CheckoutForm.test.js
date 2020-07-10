import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

});

test("form shows success message on submit with form details", () => {
    const {getByText, getByLabelText, getByTestId} = render(<CheckoutForm/>)

    const h2 = getByText(/checkout form/i);
    const firstName = getByLabelText(/first name/i);
    const lastName = getByLabelText(/last name/i);
    const address = getByLabelText(/address/i);
    const city = getByLabelText(/city/i);
    const state = getByLabelText(/state/i);
    const zip = getByLabelText(/zip/i);

});
test("handle input changes on submit form", () => {
    const { getByLabelText} = render(<CheckoutForm/>)

    const firstName = getByLabelText(/first name/i);
    const lastName = getByLabelText(/last name/i);
    const address = getByLabelText(/address/i);
    const city = getByLabelText(/city/i);
    const state = getByLabelText(/state/i);
    const zip = getByLabelText(/zip/i);

    fireEvent.change(firstName, {target: {value: 'Khwanchai'} });
    fireEvent.change(lastName, {target: {value: 'Phaipha'} });
    fireEvent.change(address, {target: {value: '2728 Tudor Rd'} });
    fireEvent.change(city, {target: {value: 'columbus'} });
    fireEvent.change(state, {target: {value: 'ohio'} });
    fireEvent.change(zip, {target: {value: 43209 } });

})
test("Submit button", () => {
    const { getByText} = render(<CheckoutForm/>)
    const submit = {button: 0}
    fireEvent.click(getByText('Checkout'), submit)
})