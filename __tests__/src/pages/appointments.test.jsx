import Appointments from '../../../src/pages/patient/appointments';
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe('Render Bio', () => {
    let container
    beforeEach(() => {
        container = render(<Appointments />)
    });

    test("is Bio page render", () => {
        expect(container).toMatchSnapshot();
    });
})