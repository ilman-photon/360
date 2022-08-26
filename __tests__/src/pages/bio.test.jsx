import Bio from '../../../src/pages/patient/bio';
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe('Render Bio', () => {
    let container
    beforeEach(() => {
        container = render(<Bio />)
    });

    test("is Bio page render", () => {
        expect(container).toMatchSnapshot();
    });
})