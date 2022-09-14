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
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2542.feature"
);

defineFeature(feature, (test) => {
	let container;
	const element = document.createElement("div");
	const mock = new MockAdapter(axios);
	const mockSuggestion = {
		appointmentType: [
			{
				id: "1",
				name: "Eye Exam",
				description: "Test the health of your eye",
			},
			{
				id: "2",
				name: "Follow up",
				description: "See your doctor today",
			},
			{
				id: "3",
				name: "Comprehensive",
				description: "Get detailed eye exam",
			},
			{
				id: "4",
				name: "Contacts Only",
				description: "Get fitted for the right contacts",
			},
		],
		insuranceCarrier: {
			general: [
				{
					id: "1",
					name: "I'm paying out of my pocket",
				},
				{
					id: "2",
					name: "skip and choose insurance later",
				},
				{
					id: "3",
					name: "Other Insurance",
				},
			],
			popular: [
				{
					id: "4",
					name: "Aetna",
				},
				{
					id: "5",
					name: "Aetna",
				},
				{
					id: "6",
					name: "Blue Cross Blue Shield",
				},
				{
					id: "7",
					name: "Cigna",
				},
			],
			all: [
				{
					id: "8",
					name: "Kaiser",
				},
			],
		},
		filterbyData: [
			{
				name: "Available Today",
				checked: false,
			},
			{
				name: "language",
				checklist: [
					{
						name: "Arabic",
						checked: false,
					},
					{
						name: "Chinese",
						checked: false,
					},
					{
						name: "English",
						checked: false,
					},
					{
						name: "Farsi",
						checked: false,
					},
					{
						name: "French",
						checked: false,
					},
					{
						name: "Spanish",
						checked: false,
					},
					{
						name: "Portuguese",
						checked: false,
					},
					{
						name: "Korean",
						checked: false,
					},
					{
						name: "German",
						checked: false,
					},
					{
						name: "Italian",
						checked: false,
					},
					{
						name: "Indonesian",
						checked: false,
					},
				],
			},
			{
				name: "Insurance",
				checklist: [
					{
						name: "In Network",
						checked: false,
					},
					{
						name: "Out of Network",
						checked: false,
					},
				],
			},
			{
				name: "Gender",
				checklist: [
					{
						name: "Male",
						checked: false,
					},
					{
						name: "Female",
						checked: false,
					},
					{
						name: "Non-Binary",
						checked: false,
					},
				],
			},
		],
	}

	const mockSubmitFilter = {
		listOfProvider: [
			{
				providerId: "1",
				address: {
					addressLine1: "51 West 51st Street",
					addressLine2: "Floor 3, Suite 320 Midtown",
					city: "Florida",
					state: "FR",
					zipcode: "54231",
				},
				rating: "5",
				name: "Paul Wagner Md",
				phoneNumber: "(123) 123-4567",
				distance: "10 mi",
				image: "/doctor.png",
				from: "2022-09-19",
				to: "2022-09-24",
				availability: [
					{
						date: "2022-09-19",
						list: [
							{
								time: "11:30am",
								key: 12222,
							},
						],
					},
					{
						date: "2022-09-20",
						list: [
							{
								time: "08:00am",
								key: 12223,
							},
							{
								time: "10:30am",
								key: 12224,
							},
							{
								time: "11:00am",
								key: 12225,
							},
							{
								time: "12:00pm",
								key: 12226,
							},
							{
								time: "01:00pm",
								key: 12227,
							},
							{
								time: "02:00pm",
								key: 12228,
							},
						],
					},
					{
						date: "2022-09-21",
						list: [
							{
								time: "08:30am",
								key: 12229,
							},
							{
								time: "10:30am",
								key: 12230,
							},
							{
								time: "11:30am",
								key: 12231,
							},
							{
								time: "12:00pm",
								key: 12232,
							},
							{
								time: "01:30pm",
								key: 12233,
							},
							{
								time: "02:30pm",
								key: 12234,
							},
							{
								time: "03:30pm",
								key: 12235,
							},
							{
								time: "04:30pm",
								key: 12236,
							},
							,
						],
					},
					{
						date: "2022-09-22",
						list: [
							{
								time: "09:30am",
								key: 12237,
							},
							{
								time: "11:00am",
								key: 12238,
							},
						],
					},
					{
						date: "2022-09-23",
						list: [
							{
								time: "09:30am",
								key: 12239,
							},
						],
					},
					{
						date: "2022-09-24",
						list: [
							{
								time: "09:30am",
								key: 12240,
							},
						],
					},
				],
				coordinate: {
					latitude: 32.751204,
					longitude: -117.1641166,
				},
			},
			{
				providerId: "2",
				address: {
					addressLine1: "51 West 51st Street",
					addressLine2: "Floor 3, Suite 320 Midtown",
					city: "Florida",
					state: "FR",
					zipcode: "54231",
				},
				rating: "5",
				name: "Paul Wagner Nd",
				phoneNumber: "(123) 123-4567",
				distance: "10 mi",
				image: "/doctor.png",
				from: "2022-09-19",
				to: "2022-09-24",
				availability: [
					{
						date: "2022-09-19",
						list: [],
					},
					{
						date: "2022-09-20",
						list: [
							{
								time: "08:00am",
								key: 12223,
							},
							{
								time: "10:30am",
								key: 12224,
							},
							{
								time: "11:00am",
								key: 12225,
							},
							{
								time: "12:00pm",
								key: 12226,
							},
							{
								time: "01:00pm",
								key: 12227,
							},
							{
								time: "02:00pm",
								key: 12228,
							},
						],
					},
					{
						date: "2022-09-21",
						list: [
							{
								time: "08:30am",
								key: 12229,
							},
							{
								time: "10:30am",
								key: 12230,
							},
							{
								time: "11:30am",
								key: 12231,
							},
							{
								time: "12:00pm",
								key: 12232,
							},
							{
								time: "01:30pm",
								key: 12233,
							},
							{
								time: "02:30pm",
								key: 12234,
							},
							{
								time: "03:30pm",
								key: 12235,
							},
							{
								time: "04:30pm",
								key: 12236,
							},
							,
						],
					},
					{
						date: "2022-09-22",
						list: [
							{
								time: "09:30am",
								key: 12237,
							},
							{
								time: "11:00am",
								key: 12238,
							},
						],
					},
					{
						date: "2022-09-23",
						list: [],
					},
					{
						date: "2022-09-24",
						list: [
							{
								time: "09:30am",
								key: 12240,
							},
						],
					},
				],
				coordinate: {
					latitude: 32.751204,
					longitude: -117.1641166,
				},
			},
			{
				providerId: "3",
				name: "Paul Wagner Md",
				address: {
					addressLine1: "51 West 51st Street",
					addressLine2: "Floor 3, Suite 320 Midtown",
					city: "Florida",
					state: "FR",
					zipcode: "54231",
				},
				rating: "5",
				phoneNumber: "(123) 123-4567",
				distance: "10 mi",
				image: "/doctor.png",
				from: "2022-09-19",
				to: "2022-09-24",
				availability: [
					{
						date: "2022-09-19",
						list: [
							{
								time: "11:30am",
								key: 12222,
							},
						],
					},
					{
						date: "2022-09-20",
						list: [
							{
								time: "08:00am",
								key: 12223,
							},
							{
								time: "10:30am",
								key: 12224,
							},
							{
								time: "11:00am",
								key: 12225,
							},
							{
								time: "12:00pm",
								key: 12226,
							},
							{
								time: "01:00pm",
								key: 12227,
							},
							{
								time: "02:00pm",
								key: 12228,
							},
						],
					},
					{
						date: "2022-09-21",
						list: [
							{
								time: "08:30am",
								key: 12229,
							},
							{
								time: "10:30am",
								key: 12230,
							},
							{
								time: "11:30am",
								key: 12231,
							},
							{
								time: "12:00pm",
								key: 12232,
							},
							{
								time: "01:30pm",
								key: 12233,
							},
							{
								time: "02:30pm",
								key: 12234,
							},
							{
								time: "03:30pm",
								key: 12235,
							},
							{
								time: "04:30pm",
								key: 12236,
							},
							,
						],
					},
					{
						date: "2022-09-22",
						list: [
							{
								time: "09:30am",
								key: 12237,
							},
							{
								time: "11:00am",
								key: 12238,
							},
						],
					},
					{
						date: "2022-09-23",
						list: [
							{
								time: "09:30am",
								key: 12239,
							},
						],
					},
					{
						date: "2022-09-24",
						list: [],
					},
				],
				coordinate: {
					latitude: 32.751204,
					longitude: -117.1641166,
				},
			},
		],
		filterbyData: [
			{
				name: "Available Today",
				checked: false,
			},
			{
				name: "Language",
				checklist: [
					{
						name: "Arabic",
						checked: false,
					},
					{
						name: "Chinese",
						checked: false,
					},
					{
						name: "English",
						checked: false,
					},
					{
						name: "Farsi",
						checked: false,
					},
					{
						name: "French",
						checked: false,
					},
					{
						name: "Spanish",
						checked: false,
					},
					{
						name: "Portuguese",
						checked: false,
					},
					{
						name: "Korean",
						checked: false,
					},
					{
						name: "German",
						checked: false,
					},
					{
						name: "Italian",
						checked: false,
					},
					{
						name: "Indonesian",
						checked: false,
					},
				],
			},
			{
				name: "Insurance",
				checklist: [
					{
						name: "In Network",
						checked: false,
					},
					{
						name: "Out of Network",
						checked: false,
					},
				],
			},
			{
				name: "Gender",
				checklist: [
					{
						name: "Male",
						checked: false,
					},
					{
						name: "Female",
						checked: false,
					},
					{
						name: "Non-Binary",
						checked: false,
					},
				],
			},
		],
	}

	const defaultValidation = () => {
		expect(true).toBeTruthy();
	};

	function createMatchMedia(width) {
		return query => ({
			matches: mediaQuery.match(query, { width }),
			addListener: () => { },
			removeListener: () => { },
		});
	}

  test('EPIC_EPP-44_STORY_EPP-2542-Verify whether the doctors availability details is displaying when the user clicks the View all availability in Schedule Appointment screen', ({ given, when, then, and }) => {

  })
  
  test("EPIC_EPP-44_STORY_EPP-2542-Verify whether the below mentioned details are displaying after user clicking the View all availability button. Doctor's name with image", ({ given, when, then, and }) => {

  })

  test('EPIC_EPP-44_STORY_EPP-2542-Verify whether the user can able to see the available time slots of the doctors for the whole week in day wise', ({ given, when, then, and }) => {

  })

  test('EPIC_EPP-44_STORY_EPP-2542-Verify whether the user is able to select the available time slot and schedule the appointment.', ({ given, when, then, and }) => {

  })
})