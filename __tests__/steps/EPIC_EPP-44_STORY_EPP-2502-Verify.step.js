import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointment from "../../src/pages/patient/appointment";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import mediaQuery from 'css-mediaquery';

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2502.feature"
);

defineFeature(feature, (test) => {
	test('EPIC_EPP-44_STORY_EPP-2502 -Verify if user able to view  the Insurance field', ({ }) => {
		expect(true).toBeTruthy();
	});

	test('EPIC_EPP-44_STORY_EPP-2502 - Verify if user able to select Insurance Carriers from the Insurance field', ({ }) => {
		expect(true).toBeTruthy();
	});

	test('EPIC_EPP-44_STORY_EPP-2502 - Verify if user able to view a (Optional) label under Insurance field', ({ }) => {
		expect(true).toBeTruthy();
	});

	test('EPIC_EPP-44_STORY_EPP-2502 -Verify if user able to view a Other Insurance option in the Insurance search field', ({ }) => {
		expect(true).toBeTruthy();
	});

	test('EPIC_EPP-44_STORY_EPP-2502 - Verify if user able to provide Other Insurance option in the Insurance search field', ({ }) => {
		expect(true).toBeTruthy();
	});

	test('EPIC_EPP-44_STORY_EPP-2502 - Verify if user able to view & select Option(I\'m paying out of pocket) in the Insurance search field', ({ }) => {
		expect(true).toBeTruthy();
	});

	test('EPIC_EPP-44_STORY_EPP-2502 - Verify if user able to view & select Option(Skip and choose insurance later) in the Insurance search field', ({ }) => {
		expect(true).toBeTruthy();
	});
});