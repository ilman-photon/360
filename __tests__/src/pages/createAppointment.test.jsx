import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import CreateAppointmentPage from '../../../src/pages/patient/appointments/create';

describe('Render Create Appointment', () => {
    let container
    beforeEach(() => {
        container = render(<CreateAppointmentPage />)
    });

    test("is Create Appointment page render", () => {
        expect(container).toMatchSnapshot();
    });
})