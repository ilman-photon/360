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
import mediaQuery from "css-mediaquery";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2507.feature"
);

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  const mockSuggestionReal = {
		"count": 5,
		"entities": [
			{
				"code": "Clinical_Diagnosis",
				"name": "Clinical_Diagnosis",
				"key": 4,
				"order": 4,
				"category": {
					"code": "Vision",
					"description": "Vision"
				},
				"acronym": "CAD",
				"color": "#6fc77b",
				"slotLength": 5,
				"notes": "",
				"_links": {
					"self": {
						"href": "/v1/appointment-types/Clinical_Diagnosis"
					}
				}
			},
			{
				"code": "NO_APPOINTMENT",
				"name": "NO APPOINTMENT",
				"key": 1,
				"order": 1,
				"category": {
					"code": "Medical",
					"description": "Medical"
				},
				"acronym": "NA",
				"color": "#8F8F8F",
				"slotLength": 5,
				"notes": "NO_APPOINTMENT is a default appointment type",
				"_links": {
					"self": {
						"href": "/v1/appointment-types/NO_APPOINTMENT"
					}
				}
			},
			{
				"code": "Comprehensive",
				"name": "Comprehensive",
				"key": 2,
				"order": 2,
				"category": {
					"code": "Medical",
					"description": "Medical"
				},
				"acronym": "CP",
				"color": "#f2ee74",
				"slotLength": 5,
				"notes": "",
				"_links": {
					"self": {
						"href": "/v1/appointment-types/Comprehensive"
					}
				}
			},
			{
				"code": "Glaucome_Appointment",
				"name": "Glaucoma_Appointment",
				"key": 3,
				"order": 3,
				"category": {
					"code": "Vision",
					"description": "Vision"
				},
				"acronym": "GPA",
				"color": "#528aa8",
				"slotLength": 5,
				"notes": "",
				"_links": {
					"self": {
						"href": "/v1/appointment-types/Glaucome_Appointment"
					}
				}
			},
			{
				"code": "Retina_checkup",
				"name": "Retina checkup",
				"key": 5,
				"order": 5,
				"category": {
					"code": "Vision",
					"description": "Vision"
				},
				"acronym": "RET",
				"color": "#db8686",
				"slotLength": 5,
				"notes": "",
				"_links": {
					"self": {
						"href": "/v1/appointment-types/Retina_checkup"
					}
				}
			}
		],
		"_links": {
			"self": {
				"href": "/appointments?pageNo=0&pageSize=100"
			}
		}
	}

	const mockSubmitFilterReal = {
		"offices": [
			{
				"office": {
					"name": "Ballwin",
					"_id": "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
					"_version": "0c381712-420e-4705-bb6d-f0226ceb5b12",
					"_updated": "Sep 17, 2022, 10:14:52 AM",
					"_updatedBy": {
						"_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
						"_links": {
							"self": {
								"href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
							}
						}
					},
					"_links": {
						"self": {
							"href": "/v1/offices/4cd970a0-8529-4b44-a4c5-99c9f4e8d078"
						}
					}
				},
				"providerTemplate": [
					{
						"name": "NEURO",
						"templateType": {
							"code": "USER",
							"description": "User template type"
						},
						"provider": {
							"firstName": "Steve",
							"lastName": "Adam",
							"designation": "Dr",
							"inHouse": false,
							"workPhone": "3219898898",
							"rating": 2,
							"language1": "Arabic",
							"language2": "Chinese",
							"language3": "German",
							"sex": {
								"name": "M",
								"key": 11,
								"order": 1,
								"notes": ""
							},
							"profilePhoto": {
								"digitalAsset": {
									"uid": "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
									"fileName": "test",
									"assetUrl": "/v1/patient",
									"_version": "d72b0b16-99ab-4ae4-aba3-13b81930b77a"
								}
							},
							"address": {
								"addressLine1": "800 14th St Apt B",
								"city": "Virginia Beach",
								"state": "VA",
								"zip": "23451"
							},
							"_id": "19f1c186-37a8-46ef-a731-0a1f022be782",
							"_version": "403a6428-9a69-4fe5-b186-e5549f4eeecc",
							"_updated": "Oct 20, 2022, 10:51:39 AM",
							"_updatedBy": {
								"_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
								"_links": {
									"self": {
										"href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
									}
								}
							}
						},
						"slots": [
							{
								"appointmentType": {
									"code": "Cataract Eval",
									"name": "Cataract Eval",
									"key": 105,
									"order": 105,
									"category": {
										"code": "OPT/OPH",
										"description": "OPT/OPH"
									},
									"acronym": "CAT",
									"color": "#0202F8",
									"slotLength": 5,
									"notes": "Cataract Eval"
								},
								"startHHMM": "09:45",
								"endHHMM": "09:50",
								"_id": "d51b411f-f50d-4396-8f8f-38697306f4f6",
								"_version": "e9433164-3263-4172-bb18-4139dc0780ee",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Cataract Eval",
									"name": "Cataract Eval",
									"key": 105,
									"order": 105,
									"category": {
										"code": "OPT/OPH",
										"description": "OPT/OPH"
									},
									"acronym": "CAT",
									"color": "#0202F8",
									"slotLength": 5,
									"notes": "Cataract Eval"
								},
								"startHHMM": "09:50",
								"endHHMM": "09:55",
								"_id": "a16dfe59-c00b-48c6-86b8-aadb1b15f8f7",
								"_version": "852bfe84-feea-412b-9cf2-c61865cc317e",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Cataract Eval",
									"name": "Cataract Eval",
									"key": 105,
									"order": 105,
									"category": {
										"code": "OPT/OPH",
										"description": "OPT/OPH"
									},
									"acronym": "CAT",
									"color": "#0202F8",
									"slotLength": 5,
									"notes": "Cataract Eval"
								},
								"startHHMM": "09:55",
								"endHHMM": "10:00",
								"_id": "8d3912cc-d11b-4d7b-8070-264bd7629030",
								"_version": "90c59c99-5da2-4206-812a-070dd12577ad",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Cataract Eval",
									"name": "Cataract Eval",
									"key": 105,
									"order": 105,
									"category": {
										"code": "OPT/OPH",
										"description": "OPT/OPH"
									},
									"acronym": "CAT",
									"color": "#0202F8",
									"slotLength": 5,
									"notes": "Cataract Eval"
								},
								"startHHMM": "10:00",
								"endHHMM": "10:05",
								"_id": "d40809f9-6e67-45fb-a6a8-28784f60960d",
								"_version": "f12be621-a274-44af-87ef-4ee6c1a5439d",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:00",
								"endHHMM": "16:05",
								"_id": "3ff35d73-a01f-41c8-a698-fe17888e6c5b",
								"_version": "7549a902-8f4f-4ff9-af6a-29b1c9d0fc03",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:05",
								"endHHMM": "16:10",
								"_id": "0bb65a7c-7b7c-45a2-9ff1-38879803b5cf",
								"_version": "81f421a9-10f6-4c30-8afb-64d8b6da01c5",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:10",
								"endHHMM": "16:15",
								"_id": "f8186ba0-ff7a-4e68-81a4-24f1b22a59ea",
								"_version": "f102c9e7-c7b3-4b96-b18b-61c290245cd2",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:15",
								"endHHMM": "16:20",
								"_id": "42eee764-b78a-404e-9393-1fda66b06e73",
								"_version": "1ab131ed-a5aa-4219-87a4-97cb8dc62b66",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:20",
								"endHHMM": "16:25",
								"_id": "81be5e4d-d25d-422a-aa49-533236eccc46",
								"_version": "87629eb5-538c-4500-8885-15eb8df1fadc",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:25",
								"endHHMM": "16:30",
								"_id": "7a82bcbe-d58b-4448-933a-b2932032b489",
								"_version": "be2a85ff-ae5a-4806-86d7-efb8c8655d30",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:30",
								"endHHMM": "16:35",
								"_id": "18ab9d4e-46ab-4d3b-95ee-87b9961fc53c",
								"_version": "872c560e-93f6-4979-812f-035bfde93a44",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:35",
								"endHHMM": "16:40",
								"_id": "f0c6a887-626f-46ed-b48b-be65ee21b150",
								"_version": "c4d7a99d-1548-4554-a701-ae30ca705250",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							}
						],
						"scheduleDate": "10/20/2022",
						"status": "UPDATED",
						"_id": "ad3faafc-5ac1-43ae-a30e-463ca13590d9",
						"_version": "ac2d47d9-477d-49ea-ab4d-626b174f2ce3",
						"_created": "Oct 20, 2022, 7:48:23 AM",
						"_updated": "Oct 21, 2022, 9:43:32 AM",
						"_createdBy": {
							"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
							"_links": {
								"self": {
									"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
								}
							}
						},
						"_updatedBy": {
							"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
							"_links": {
								"self": {
									"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
								}
							}
						}
					},
					{
						"name": "NEURO",
						"templateType": {
							"code": "USER",
							"description": "User template type"
						},
						"provider": {
							"firstName": "Steve",
							"lastName": "Adam",
							"designation": "Dr",
							"inHouse": false,
							"workPhone": "3219898898",
							"rating": 2,
							"profilePhoto": {
								"digitalAsset": {
									"uid": "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
									"fileName": "test",
									"assetUrl": "/v1/patient",
									"_version": "d72b0b16-99ab-4ae4-aba3-13b81930b77a"
								}
							},
							"address": {
								"addressLine1": "800 14th St Apt B",
								"city": "Virginia Beach",
								"state": "VA",
								"zip": "23451"
							},
							"_id": "19f1c186-37a8-46ef-a731-0a1f022be782",
							"_version": "403a6428-9a69-4fe5-b186-e5549f4eeecc",
							"_updated": "Oct 20, 2022, 10:51:39 AM",
							"_updatedBy": {
								"_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
								"_links": {
									"self": {
										"href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
									}
								}
							}
						},
						"slots": [
							{
								"appointmentType": {
									"code": "Cataract Eval",
									"name": "Cataract Eval",
									"key": 105,
									"order": 105,
									"category": {
										"code": "OPT/OPH",
										"description": "OPT/OPH"
									},
									"acronym": "CAT",
									"color": "#0202F8",
									"slotLength": 5,
									"notes": "Cataract Eval"
								},
								"startHHMM": "09:45",
								"endHHMM": "09:50",
								"_id": "d51b411f-f50d-4396-8f8f-38697306f4f6",
								"_version": "e9433164-3263-4172-bb18-4139dc0780ee",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Cataract Eval",
									"name": "Cataract Eval",
									"key": 105,
									"order": 105,
									"category": {
										"code": "OPT/OPH",
										"description": "OPT/OPH"
									},
									"acronym": "CAT",
									"color": "#0202F8",
									"slotLength": 5,
									"notes": "Cataract Eval"
								},
								"startHHMM": "09:50",
								"endHHMM": "09:55",
								"_id": "a16dfe59-c00b-48c6-86b8-aadb1b15f8f7",
								"_version": "852bfe84-feea-412b-9cf2-c61865cc317e",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Cataract Eval",
									"name": "Cataract Eval",
									"key": 105,
									"order": 105,
									"category": {
										"code": "OPT/OPH",
										"description": "OPT/OPH"
									},
									"acronym": "CAT",
									"color": "#0202F8",
									"slotLength": 5,
									"notes": "Cataract Eval"
								},
								"startHHMM": "09:55",
								"endHHMM": "10:00",
								"_id": "8d3912cc-d11b-4d7b-8070-264bd7629030",
								"_version": "90c59c99-5da2-4206-812a-070dd12577ad",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Cataract Eval",
									"name": "Cataract Eval",
									"key": 105,
									"order": 105,
									"category": {
										"code": "OPT/OPH",
										"description": "OPT/OPH"
									},
									"acronym": "CAT",
									"color": "#0202F8",
									"slotLength": 5,
									"notes": "Cataract Eval"
								},
								"startHHMM": "10:00",
								"endHHMM": "10:05",
								"_id": "d40809f9-6e67-45fb-a6a8-28784f60960d",
								"_version": "f12be621-a274-44af-87ef-4ee6c1a5439d",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:00",
								"endHHMM": "16:05",
								"_id": "3ff35d73-a01f-41c8-a698-fe17888e6c5b",
								"_version": "7549a902-8f4f-4ff9-af6a-29b1c9d0fc03",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:05",
								"endHHMM": "16:10",
								"_id": "0bb65a7c-7b7c-45a2-9ff1-38879803b5cf",
								"_version": "81f421a9-10f6-4c30-8afb-64d8b6da01c5",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:10",
								"endHHMM": "16:15",
								"_id": "f8186ba0-ff7a-4e68-81a4-24f1b22a59ea",
								"_version": "f102c9e7-c7b3-4b96-b18b-61c290245cd2",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:15",
								"endHHMM": "16:20",
								"_id": "42eee764-b78a-404e-9393-1fda66b06e73",
								"_version": "1ab131ed-a5aa-4219-87a4-97cb8dc62b66",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:20",
								"endHHMM": "16:25",
								"_id": "81be5e4d-d25d-422a-aa49-533236eccc46",
								"_version": "87629eb5-538c-4500-8885-15eb8df1fadc",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:25",
								"endHHMM": "16:30",
								"_id": "7a82bcbe-d58b-4448-933a-b2932032b489",
								"_version": "be2a85ff-ae5a-4806-86d7-efb8c8655d30",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:30",
								"endHHMM": "16:35",
								"_id": "18ab9d4e-46ab-4d3b-95ee-87b9961fc53c",
								"_version": "872c560e-93f6-4979-812f-035bfde93a44",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:35",
								"endHHMM": "16:40",
								"_id": "f0c6a887-626f-46ed-b48b-be65ee21b150",
								"_version": "c4d7a99d-1548-4554-a701-ae30ca705250",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							}
						],
						"scheduleDate": "10/20/2022",
						"status": "UPDATED",
						"_id": "ad3faafc-5ac1-43ae-a30e-463ca13590d9",
						"_version": "ac2d47d9-477d-49ea-ab4d-626b174f2ce3",
						"_created": "Oct 20, 2022, 7:48:23 AM",
						"_updated": "Oct 21, 2022, 9:43:32 AM",
						"_createdBy": {
							"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
							"_links": {
								"self": {
									"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
								}
							}
						},
						"_updatedBy": {
							"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
							"_links": {
								"self": {
									"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
								}
							}
						}
					},
					{
						"name": "NEURO",
						"templateType": {
							"code": "USER",
							"description": "User template type"
						},
						"provider": {
							"firstName": "Steve",
							"lastName": "Adam",
							"designation": "Dr",
							"inHouse": false,
							"workPhone": "3219898898",
							"rating": 2,
							"profilePhoto": {
								"digitalAsset": {
									"uid": "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
									"fileName": "test",
									"assetUrl": "/v1/patient",
									"_version": "d72b0b16-99ab-4ae4-aba3-13b81930b77a"
								}
							},
							"address": {
								"addressLine1": "800 14th St Apt B",
								"city": "Virginia Beach",
								"state": "VA",
								"zip": "23451"
							},
							"_id": "19f1c186-37a8-46ef-a731-0a1f022be782",
							"_version": "403a6428-9a69-4fe5-b186-e5549f4eeecc",
							"_updated": "Oct 20, 2022, 10:51:39 AM",
							"_updatedBy": {
								"_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
								"_links": {
									"self": {
										"href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
									}
								}
							}
						},
						"slots": [
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:30",
								"endHHMM": "16:35",
								"_id": "18ab9d4e-46ab-4d3b-95ee-87b9961fc53c",
								"_version": "872c560e-93f6-4979-812f-035bfde93a44",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:35",
								"endHHMM": "16:40",
								"_id": "f0c6a887-626f-46ed-b48b-be65ee21b150",
								"_version": "c4d7a99d-1548-4554-a701-ae30ca705250",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							}
						],
						"scheduleDate": "10/21/2022",
						"status": "UPDATED",
						"_id": "ad3faafc-5ac1-43ae-a30e-463ca13590d9",
						"_version": "ac2d47d9-477d-49ea-ab4d-626b174f2ce3",
						"_created": "Oct 20, 2022, 7:48:23 AM",
						"_updated": "Oct 21, 2022, 9:43:32 AM",
						"_createdBy": {
							"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
							"_links": {
								"self": {
									"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
								}
							}
						},
						"_updatedBy": {
							"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
							"_links": {
								"self": {
									"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
								}
							}
						}
					},
					{
						"name": "NEURO",
						"templateType": {
							"code": "USER",
							"description": "User template type"
						},
						"provider": {
							"firstName": "Steve",
							"lastName": "Adam",
							"designation": "Dr",
							"inHouse": false,
							"workPhone": "3219898898",
							"rating": 2,
							"profilePhoto": {
								"digitalAsset": {
									"uid": "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
									"fileName": "test",
									"assetUrl": "/v1/patient",
									"_version": "d72b0b16-99ab-4ae4-aba3-13b81930b77a"
								}
							},
							"address": {
								"addressLine1": "800 14th St Apt B",
								"city": "Virginia Beach",
								"state": "VA",
								"zip": "23451"
							},
							"_id": "19f1c186-37a8-46ef-a731-0a1f022be782",
							"_version": "403a6428-9a69-4fe5-b186-e5549f4eeecc",
							"_updated": "Oct 20, 2022, 10:51:39 AM",
							"_updatedBy": {
								"_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
								"_links": {
									"self": {
										"href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
									}
								}
							}
						},
						"slots": [
							{
								"appointmentType": {
									"code": "Cataract Eval",
									"name": "Cataract Eval",
									"key": 105,
									"order": 105,
									"category": {
										"code": "OPT/OPH",
										"description": "OPT/OPH"
									},
									"acronym": "CAT",
									"color": "#0202F8",
									"slotLength": 5,
									"notes": "Cataract Eval"
								},
								"startHHMM": "09:45",
								"endHHMM": "09:50",
								"_id": "d51b411f-f50d-4396-8f8f-38697306f4f6",
								"_version": "e9433164-3263-4172-bb18-4139dc0780ee",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Cataract Eval",
									"name": "Cataract Eval",
									"key": 105,
									"order": 105,
									"category": {
										"code": "OPT/OPH",
										"description": "OPT/OPH"
									},
									"acronym": "CAT",
									"color": "#0202F8",
									"slotLength": 5,
									"notes": "Cataract Eval"
								},
								"startHHMM": "09:55",
								"endHHMM": "10:00",
								"_id": "8d3912cc-d11b-4d7b-8070-264bd7629030",
								"_version": "90c59c99-5da2-4206-812a-070dd12577ad",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:00",
								"endHHMM": "16:05",
								"_id": "3ff35d73-a01f-41c8-a698-fe17888e6c5b",
								"_version": "7549a902-8f4f-4ff9-af6a-29b1c9d0fc03",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:05",
								"endHHMM": "16:10",
								"_id": "0bb65a7c-7b7c-45a2-9ff1-38879803b5cf",
								"_version": "81f421a9-10f6-4c30-8afb-64d8b6da01c5",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:10",
								"endHHMM": "16:15",
								"_id": "f8186ba0-ff7a-4e68-81a4-24f1b22a59ea",
								"_version": "f102c9e7-c7b3-4b96-b18b-61c290245cd2",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:15",
								"endHHMM": "16:20",
								"_id": "42eee764-b78a-404e-9393-1fda66b06e73",
								"_version": "1ab131ed-a5aa-4219-87a4-97cb8dc62b66",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:20",
								"endHHMM": "16:25",
								"_id": "81be5e4d-d25d-422a-aa49-533236eccc46",
								"_version": "87629eb5-538c-4500-8885-15eb8df1fadc",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:25",
								"endHHMM": "16:30",
								"_id": "7a82bcbe-d58b-4448-933a-b2932032b489",
								"_version": "be2a85ff-ae5a-4806-86d7-efb8c8655d30",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:30",
								"endHHMM": "16:35",
								"_id": "18ab9d4e-46ab-4d3b-95ee-87b9961fc53c",
								"_version": "872c560e-93f6-4979-812f-035bfde93a44",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:35",
								"endHHMM": "16:40",
								"_id": "f0c6a887-626f-46ed-b48b-be65ee21b150",
								"_version": "c4d7a99d-1548-4554-a701-ae30ca705250",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							}
						],
						"scheduleDate": "10/22/2022",
						"status": "UPDATED",
						"_id": "ad3faafc-5ac1-43ae-a30e-463ca13590d9",
						"_version": "ac2d47d9-477d-49ea-ab4d-626b174f2ce3",
						"_created": "Oct 20, 2022, 7:48:23 AM",
						"_updated": "Oct 21, 2022, 9:43:32 AM",
						"_createdBy": {
							"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
							"_links": {
								"self": {
									"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
								}
							}
						},
						"_updatedBy": {
							"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
							"_links": {
								"self": {
									"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
								}
							}
						}
					},
					{
						"name": "NEURO",
						"templateType": {
							"code": "USER",
							"description": "User template type"
						},
						"provider": {
							"firstName": "Steve",
							"lastName": "Adam",
							"designation": "Dr",
							"inHouse": false,
							"workPhone": "3219898898",
							"rating": 2,
							"profilePhoto": {
								"digitalAsset": {
									"uid": "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
									"fileName": "test",
									"assetUrl": "/v1/patient",
									"_version": "d72b0b16-99ab-4ae4-aba3-13b81930b77a"
								}
							},
							"address": {
								"addressLine1": "800 14th St Apt B",
								"city": "Virginia Beach",
								"state": "VA",
								"zip": "23451"
							},
							"_id": "19f1c186-37a8-46ef-a731-0a1f022be782",
							"_version": "403a6428-9a69-4fe5-b186-e5549f4eeecc",
							"_updated": "Oct 20, 2022, 10:51:39 AM",
							"_updatedBy": {
								"_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
								"_links": {
									"self": {
										"href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
									}
								}
							}
						},
						"slots": [
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:00",
								"endHHMM": "16:05",
								"_id": "3ff35d73-a01f-41c8-a698-fe17888e6c5b",
								"_version": "7549a902-8f4f-4ff9-af6a-29b1c9d0fc03",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:05",
								"endHHMM": "16:10",
								"_id": "0bb65a7c-7b7c-45a2-9ff1-38879803b5cf",
								"_version": "81f421a9-10f6-4c30-8afb-64d8b6da01c5",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:10",
								"endHHMM": "16:15",
								"_id": "f8186ba0-ff7a-4e68-81a4-24f1b22a59ea",
								"_version": "f102c9e7-c7b3-4b96-b18b-61c290245cd2",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:15",
								"endHHMM": "16:20",
								"_id": "42eee764-b78a-404e-9393-1fda66b06e73",
								"_version": "1ab131ed-a5aa-4219-87a4-97cb8dc62b66",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:20",
								"endHHMM": "16:25",
								"_id": "81be5e4d-d25d-422a-aa49-533236eccc46",
								"_version": "87629eb5-538c-4500-8885-15eb8df1fadc",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:25",
								"endHHMM": "16:30",
								"_id": "7a82bcbe-d58b-4448-933a-b2932032b489",
								"_version": "be2a85ff-ae5a-4806-86d7-efb8c8655d30",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:30",
								"endHHMM": "16:35",
								"_id": "18ab9d4e-46ab-4d3b-95ee-87b9961fc53c",
								"_version": "872c560e-93f6-4979-812f-035bfde93a44",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							},
							{
								"appointmentType": {
									"code": "Charity",
									"name": "Charity",
									"key": 107,
									"order": 107,
									"category": {
										"code": "OPH",
										"description": "OPH"
									},
									"acronym": "CHA",
									"color": "#F19D69",
									"slotLength": 5,
									"notes": "Charity"
								},
								"startHHMM": "16:35",
								"endHHMM": "16:40",
								"_id": "f0c6a887-626f-46ed-b48b-be65ee21b150",
								"_version": "c4d7a99d-1548-4554-a701-ae30ca705250",
								"_created": "Oct 20, 2022, 7:48:23 AM",
								"_updated": "Oct 21, 2022, 9:43:32 AM",
								"_createdBy": {
									"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
									"_links": {
										"self": {
											"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
										}
									}
								},
								"_updatedBy": {
									"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
									"_links": {
										"self": {
											"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
										}
									}
								}
							}
						],
						"scheduleDate": "10/25/2022",
						"status": "UPDATED",
						"_id": "ad3faafc-5ac1-43ae-a30e-463ca13590d9",
						"_version": "ac2d47d9-477d-49ea-ab4d-626b174f2ce3",
						"_created": "Oct 20, 2022, 7:48:23 AM",
						"_updated": "Oct 21, 2022, 9:43:32 AM",
						"_createdBy": {
							"_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
							"_links": {
								"self": {
									"href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
								}
							}
						},
						"_updatedBy": {
							"_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
							"_links": {
								"self": {
									"href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
								}
							}
						}
					}
				]
			}
		]
	}

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: defaultValidation,
      removeListener: defaultValidation,
    });
  }

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance.", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results on the Schedule Appointments screen",
      defaultValidation
    );

    and(
      "user views the selected location, date of appointment, the purpose of visit, and insurance carrier.",
      defaultValidation
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the selected location.", defaultValidation);
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the date of appointment", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the date of appointment.", defaultValidation);
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site URL", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the purpose of the visit.", defaultValidation);
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier.", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the insurance carrier.", defaultValidation);
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit as blank when the user not entered", ({
    given,
    and,
    then,
    when,
  }) => {
    given("user launch the Marketing Site URL", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the purpose of the visit as blank", defaultValidation);

    when("the user not entered the purpose of the visit", defaultValidation);
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using City with the selected location", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the selected location.", defaultValidation);

    and(
      "user views an option to search locations using City with the selected location",
      defaultValidation
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using State with the selected location", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the selected location.", defaultValidation);

    and(
      "user views an option to search locations using State with the selected location",
      defaultValidation
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using  Zipcode with the selected location", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the selected location.", defaultValidation);

    and(
      "user views an option to search locations using Zipcode with the selected location",
      defaultValidation
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and user view the location using the system to detect their location", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the selected location.", defaultValidation);

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      defaultValidation
    );

    and(
      "user has the option to allow the system to detect their location",
      defaultValidation
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user views the filter options", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the selected location.", defaultValidation);

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      defaultValidation
    );

    and(
      "user has the option to allow the system to detect their location",
      defaultValidation
    );

    and("user views the filter options", defaultValidation);
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user view options to change the appointment date", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the selected location.", defaultValidation);

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      defaultValidation
    );

    and(
      "user has the option to allow the system to detect their location",
      defaultValidation
    );

    and("user views the filter options", defaultValidation);

    and("user view options to change the appointment date", defaultValidation);
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the Purpose of the Visit", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the selected location.", defaultValidation);

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      defaultValidation
    );

    and(
      "user has the option to allow the system to detect their location",
      defaultValidation
    );

    and("user views the filter options", defaultValidation);

    and("user view options to change the appointment date", defaultValidation);

    and(
      "user view options to change the Purpose of the Visit",
      defaultValidation
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the insurance.", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the selected location.", defaultValidation);

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      defaultValidation
    );

    and(
      "user has the option to allow the system to detect their location",
      defaultValidation
    );

    and("user views the filter options", defaultValidation);

    and("user view options to change the appointment date", defaultValidation);

    and(
      "user view options to change the Purpose of the Visit",
      defaultValidation
    );

    and("user view options to change the insurance.", defaultValidation);
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the insurance carrier as blank when the user not entered", ({
    given,
    and,
    then,
    when,
  }) => {
    given("user launch the Marketing Site URL", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the purpose of the visit as blank", defaultValidation);

    when("the user not entered the purpose of the visit", defaultValidation);
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to view the following filters", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    when("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("user should select the date of appointment", defaultValidation);

    and("user should select the purpose of the visit", defaultValidation);

    and("user should fill the insurance name", defaultValidation);

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      defaultValidation
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      defaultValidation
    );

    and(
      "user should be able to view the following filters as below",
      async (table) => {
        const filterBtn = container.getByTestId("filterbtn");
        fireEvent.click(filterBtn);

        await waitFor(() => {
          container.getByText(/Filter By/i);
        });
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to apply the Language filter", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    when("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("user should select the date of appointment", defaultValidation);

    and("user should select the purpose of the visit", defaultValidation);

    and("user should fill the insurance name", defaultValidation);

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument();
      }
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument();
      }
    );

    when("user selects Language filter", async () => {
      const filterBtn = container.getByTestId("filterbtn");
      fireEvent.click(filterBtn);

      await waitFor(() => {
        container.getByText(/Filter By/i);
      });

      // const language = container.getByText("English");
      // fireEvent.click(language);

      // const done = container.getByRole("button", { name: "Done" });
      // fireEvent.click(done);
      // await waitFor(() => {
      //   container.getByText("English");
      //   expect(container.getByText("English")).toBeInTheDocument();
      // });
    });

    then("user should see Filtered Language", () => {
      // expect(container.getByText("English")).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to apply the Gender filter", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    when("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("user should select the date of appointment", defaultValidation);

    and("user should select the purpose of the visit", defaultValidation);

    and("user should fill the insurance name", defaultValidation);

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      defaultValidation
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      defaultValidation
    );

    when("user selects Gender filter", async () => {
      const filterBtn = container.getByTestId("filterbtn");
      fireEvent.click(filterBtn);

      await waitFor(() => {
        container.getByText(/Filter By/i);
      });

      // const language = container.getByText("Male");
      // fireEvent.click(language);

      // const done = container.getByRole("button", { name: "Done" });
      // fireEvent.click(done);
      // await waitFor(() => {
      //   container.getByText("Male");
      //   expect(container.getByText("Male")).toBeInTheDocument();
      // });
    });

    then("user should see Filtered Gender", () => {
      // expect(container.getByText("Male")).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to apply the Insurance In/Out of Network filter", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    when("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("user should select the date of appointment", defaultValidation);

    and("user should select the purpose of the visit", defaultValidation);

    and("user should fill the insurance name", defaultValidation);

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      defaultValidation
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      defaultValidation
    );

    when("user selects Insurance In/Out of Network filter", async () => {
      const filterBtn = container.getByTestId("filterbtn");
      fireEvent.click(filterBtn);

      await waitFor(() => {
        container.getByText(/Filter By/i);
      });

      // const insurance = container.getByText("In Network");
      // fireEvent.click(insurance);

      // const done = container.getByRole("button", { name: "Done" });
      // fireEvent.click(done);
      // await waitFor(() => {
      //   container.getByText("In Network");
      //   expect(container.getByText("In Network")).toBeInTheDocument();
      // });
    });

    then('user should see Filtered Insurance In/Out of Network"', () => {
      // expect(container.getByText("In Network")).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to apply the Available Today (Provider) filter", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    when("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("user should select the date of appointment", defaultValidation);

    and("user should select the purpose of the visit", defaultValidation);

    and("user should fill the insurance name", defaultValidation);

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      defaultValidation
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      defaultValidation
    );

    when(
      "user selects Insurance Available Today (Provider) filter",
      async () => {
        const filterBtn = container.getByTestId("filterbtn");
        fireEvent.click(filterBtn);

        await waitFor(() => {
          container.getByText(/Filter By/i);
        });

        const filter = container.getAllByText("Available Today")[0];
        fireEvent.click(filter);

        const done = container.getByRole("button", { name: "Done" });
        fireEvent.click(done);
        // await waitFor(() => {
        //   container.getByText("Available Today");
        //   expect(container.getByText("Available Today")).toBeInTheDocument();
        // });
      }
    );

    then("user should see Filtered Available Today (Provider)", () => {
      // expect(container.getByText("Available Today")).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should see an option to clear those filters when applied", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    when("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("user should select the date of appointment", defaultValidation);

    and("user should select the purpose of the visit", defaultValidation);

    and("user should fill the insurance name", defaultValidation);

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      defaultValidation
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      defaultValidation
    );

    when(
      "user selects Insurance Available Today (Provider) filter",
      async () => {
        const filterBtn = container.getByTestId("filterbtn");
        fireEvent.click(filterBtn);

        await waitFor(() => {
          container.getByText(/Filter By/i);
        });

        const filter = container.getAllByText("Available Today")[0];
        fireEvent.click(filter);

        const done = container.getByRole("button", { name: "Done" });
		act(() => {
			fireEvent.click(done);
		})
        // await waitFor(() => {
        //   container.getByText("Available Today");
        // });
		// expect(container.getByText("Available Today")).toBeInTheDocument();
      }
    );

    then("user should see Filtered Available Today (Provider)", () => {
    //   expect(container.getByText("Available Today")).toBeInTheDocument();
    });

    and("user should see an option to clear the applied filter", () => {
    //   expect(container.queryAllByTestId("CloseIcon")[0]).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should see the filter was removed when user clicks on Clear option", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    when("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("user should select the date of appointment", defaultValidation);

    and("user should select the purpose of the visit", defaultValidation);

    and("user should fill the insurance name", defaultValidation);

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      // await waitFor(() => {
      //   container.getByText(/Filter/i);
      // });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      defaultValidation
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      defaultValidation
    );

    when(
      "user selects Insurance Available Today (Provider) filter",
      async () => {
        const filterBtn = container.getByTestId("filterbtn");
        fireEvent.click(filterBtn);

        // await waitFor(() => {
        //   container.getByText(/Filter By/i);
        // });

        // const filter = container.getAllByText("Available Today")[0];
        // fireEvent.click(filter);

        // const done = container.getByRole("button", { name: "Done" });
        // fireEvent.click(done);
        // await waitFor(() => {
        //   container.getByText("Available Today");
        //   expect(container.getByText("Available Today")).toBeInTheDocument();
        // });
      }
    );

    then("user should see Filtered Available Today (Provider)", () => {
      // expect(container.getByText("Available Today")).toBeInTheDocument();
    });

    and("user should see an option to clear the applied filter", () => {
      // expect(container.queryAllByTestId("CloseIcon")[0]).toBeInTheDocument();
    });

    and(
      "user should see the filter was removed when user clicks on Clear option",
      async () => {
        // const filterBtn = container.getByTestId("filterbtn");
        // fireEvent.click(filterBtn);

        // await waitFor(() => {
        //   container.getByText(/Filter By/i);
        // });

        // const reset = container.getByRole("button", { name: "Reset" });
        // expect(reset).toBeInTheDocument();
        // fireEvent.click(reset);

        // const done = container.getByRole("button", { name: "Done" });
        // fireEvent.click(done);
      }
    );
  });
});
