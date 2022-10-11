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
				"name": "OPT Dr Bellamy",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "JOHN",
				  "lastName": "WATSON",
				  "designation": "MBBS, MD",
				  "inHouse": false,
				  "_id": "c68ced42-dfad-452a-acf0-0cee3a066157",
				  "_version": "cf46e997-3ee1-48b6-895a-c55fe3493112",
				  "_updated": "Sep 28, 2022, 5:35:36 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "bf25db10-db28-49c5-b5a7-d17d6155fbd4",
					"_version": "b41cc5be-9845-4d9a-a105-7dbd8c077f5d",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "10:00",
					"endHHMM": "10:05",
					"_id": "58739079-324c-4c75-b567-ed1c77bf30e0",
					"_version": "6de8d152-3afb-4210-84ae-4d2254902342",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:00",
					"endHHMM": "11:05",
					"_id": "d3b1b831-0334-4739-be3b-bf0fe6caa98b",
					"_version": "f7f6e68d-5258-47ed-a4c9-a73f66bc28ec",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:05",
					"endHHMM": "11:10",
					"_id": "c088a900-e474-41ca-b979-3950297ad884",
					"_version": "81546a4b-65b1-4b2a-9cfb-7d464a715d4a",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:10",
					"endHHMM": "11:15",
					"_id": "96b31edf-1723-453e-b044-44568047d6a0",
					"_version": "ed0b9833-1bde-4188-9076-f09529d52841",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:15",
					"endHHMM": "11:20",
					"_id": "9fd493a0-c666-4203-b403-6c2fc8bfba38",
					"_version": "a0c73134-ee47-44f4-837b-08dd8bb16bee",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:20",
					"endHHMM": "11:25",
					"_id": "ea203688-d2ce-471c-a341-f301ccc822bb",
					"_version": "c52fabdd-ed77-4e14-ab5a-69f0c64a713c",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:25",
					"endHHMM": "11:30",
					"_id": "16f51651-e7fe-4fce-ad36-53259cfe71f6",
					"_version": "6f224cd7-83cf-40ac-aec6-823eafeb47be",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:30",
					"endHHMM": "11:35",
					"_id": "fcbf1cb5-e07b-475e-aa16-03ca00682cd6",
					"_version": "5a330f64-8648-49f7-b35b-7c4ddac74f8b",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:35",
					"endHHMM": "11:40",
					"_id": "1b5cda56-04f0-4f7e-850c-54a5e9ddd670",
					"_version": "5a4a233c-ea88-483d-b5a1-a56e480c715e",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/19/2022",
				"status": "UPDATED",
				"_id": "33121e46-dc04-408f-97b4-a6d3ec5b66f7",
				"_version": "320be71c-b832-4039-b332-593a4cbd4a3e",
				"_created": "Feb 15, 2022, 6:57:45 AM",
				"_updated": "Sep 22, 2022, 10:25:06 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "Sick",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "Steve",
				  "lastName": "Adam",
				  "designation": "Dr",
				  "inHouse": false,
				  "_id": "19f1c186-37a8-46ef-a731-0a1f022be782",
				  "_version": "a1c4536d-6e5e-4779-81b0-080fe4e23a23",
				  "_updated": "Apr 8, 2022, 8:35:42 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "10:15",
					"endHHMM": "10:20",
					"_id": "5cccda4c-c309-4a73-bed5-2b4dcd320490",
					"_version": "0649e227-df6c-40be-a576-cd68874cd73d",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:00",
					"endHHMM": "11:05",
					"_id": "8d0f66d8-67e6-4c93-8c41-3e92c4a88b0e",
					"_version": "3f41f3e8-90d2-4a39-8579-cb1d11539d15",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:05",
					"endHHMM": "11:10",
					"_id": "6f64f4e2-5273-4631-b2fa-b4d6745d6062",
					"_version": "3e03ec17-50fd-4a43-9147-ca300d3025be",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:10",
					"endHHMM": "11:15",
					"_id": "646deec2-3859-405b-9b9d-25df8545efe3",
					"_version": "acbf2731-4ac6-4d9f-8606-3b2f791bbace",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:15",
					"endHHMM": "11:20",
					"_id": "9186b279-ca0c-4b1e-88f5-33be923c060b",
					"_version": "aa875054-51e1-4f81-97f2-7a077a618eae",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:20",
					"endHHMM": "11:25",
					"_id": "83a08007-4537-424d-90e2-563947d0d91c",
					"_version": "d8b7d0fe-cd95-410b-97c8-0bfc90bdf983",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:25",
					"endHHMM": "11:30",
					"_id": "1375634c-23f5-47b9-a15a-990df8752f8b",
					"_version": "9e2571a8-20f4-4426-8238-68802cf056ed",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:30",
					"endHHMM": "11:35",
					"_id": "fec3523e-a6ab-4ca1-8444-6ab463524b4e",
					"_version": "2041999e-83bb-47dd-9c6b-ca7a0dc1abfa",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:35",
					"endHHMM": "11:40",
					"_id": "4a9fa94d-2ef9-444b-bcb3-e13e4298f46e",
					"_version": "20549e02-dda6-4653-ac01-bc49b74fc27d",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "15:20",
					"endHHMM": "15:25",
					"_id": "c2ecd16d-6dd0-434f-8c79-f2eedf3cd8ad",
					"_version": "19eb2ffd-92a6-42df-b3bd-3692c4e8f047",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "16:15",
					"endHHMM": "16:20",
					"_id": "5f4ef00d-a8d1-4587-8d96-33a845f83cfe",
					"_version": "7861bfe1-ab4c-4152-b102-c5619cb881b3",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "17:15",
					"endHHMM": "17:20",
					"_id": "c30757cc-a2b9-4f2d-a53d-fb3067f0eedb",
					"_version": "7f02a502-4c2c-4cc4-8062-e397d8238a5c",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/19/2022",
				"status": "UPDATED",
				"_id": "ff788e3f-4ed2-4cf8-9d6f-ab50dcf70789",
				"_version": "7c6e09ea-9159-4bfe-aa18-395f5c30ea4b",
				"_created": "Apr 8, 2022, 8:37:38 AM",
				"_updated": "Sep 22, 2022, 10:24:08 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "OPT Dr Bellamy",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "JOHN",
				  "lastName": "WATSON",
				  "designation": "MBBS, MD",
				  "inHouse": false,
				  "_id": "c68ced42-dfad-452a-acf0-0cee3a066157",
				  "_version": "cf46e997-3ee1-48b6-895a-c55fe3493112",
				  "_updated": "Sep 28, 2022, 5:35:36 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "bf25db10-db28-49c5-b5a7-d17d6155fbd4",
					"_version": "b41cc5be-9845-4d9a-a105-7dbd8c077f5d",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "10:00",
					"endHHMM": "10:05",
					"_id": "58739079-324c-4c75-b567-ed1c77bf30e0",
					"_version": "6de8d152-3afb-4210-84ae-4d2254902342",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:00",
					"endHHMM": "11:05",
					"_id": "d3b1b831-0334-4739-be3b-bf0fe6caa98b",
					"_version": "f7f6e68d-5258-47ed-a4c9-a73f66bc28ec",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:05",
					"endHHMM": "11:10",
					"_id": "c088a900-e474-41ca-b979-3950297ad884",
					"_version": "81546a4b-65b1-4b2a-9cfb-7d464a715d4a",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:10",
					"endHHMM": "11:15",
					"_id": "96b31edf-1723-453e-b044-44568047d6a0",
					"_version": "ed0b9833-1bde-4188-9076-f09529d52841",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:15",
					"endHHMM": "11:20",
					"_id": "9fd493a0-c666-4203-b403-6c2fc8bfba38",
					"_version": "a0c73134-ee47-44f4-837b-08dd8bb16bee",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:20",
					"endHHMM": "11:25",
					"_id": "ea203688-d2ce-471c-a341-f301ccc822bb",
					"_version": "c52fabdd-ed77-4e14-ab5a-69f0c64a713c",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:25",
					"endHHMM": "11:30",
					"_id": "16f51651-e7fe-4fce-ad36-53259cfe71f6",
					"_version": "6f224cd7-83cf-40ac-aec6-823eafeb47be",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:30",
					"endHHMM": "11:35",
					"_id": "fcbf1cb5-e07b-475e-aa16-03ca00682cd6",
					"_version": "5a330f64-8648-49f7-b35b-7c4ddac74f8b",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:35",
					"endHHMM": "11:40",
					"_id": "1b5cda56-04f0-4f7e-850c-54a5e9ddd670",
					"_version": "5a4a233c-ea88-483d-b5a1-a56e480c715e",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/20/2022",
				"status": "UPDATED",
				"_id": "33121e46-dc04-408f-97b4-a6d3ec5b66f7",
				"_version": "320be71c-b832-4039-b332-593a4cbd4a3e",
				"_created": "Feb 15, 2022, 6:57:45 AM",
				"_updated": "Sep 22, 2022, 10:25:06 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "TEST",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "JOHN",
				  "lastName": "WATSON",
				  "designation": "MBBS, MD",
				  "inHouse": false,
				  "_id": "c68ced42-dfad-452a-acf0-0cee3a066157",
				  "_version": "cf46e997-3ee1-48b6-895a-c55fe3493112",
				  "_updated": "Sep 28, 2022, 5:35:36 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:00",
					"endHHMM": "09:05",
					"_id": "623f2ec9-fb0c-4eb2-a5dd-6eaed0c1468a",
					"_version": "34701468-b29a-4625-96b0-52c7d330b1b5",
					"_created": "Jun 4, 2022, 5:26:57 AM",
					"_updated": "Jun 4, 2022, 5:28:13 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:05",
					"endHHMM": "09:10",
					"_id": "945273ce-acf6-466f-82a3-35ed41fbc7b1",
					"_version": "4afa3951-e731-4aaf-9171-e8d115c0b44f",
					"_created": "Jun 4, 2022, 5:26:57 AM",
					"_updated": "Jun 4, 2022, 5:28:13 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:10",
					"endHHMM": "09:15",
					"_id": "a116d838-71b9-48d3-b73d-d95e2bde8b03",
					"_version": "f089bd0f-0d8c-4b46-892d-4ab7d4534550",
					"_created": "Jun 4, 2022, 5:26:57 AM",
					"_updated": "Jun 4, 2022, 5:28:13 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "81e526df-7255-4ba0-a037-a4f7d467395b",
					"_version": "490e1de1-b8c6-4dc5-ba6f-fee2d46fb62a",
					"_created": "Jun 4, 2022, 5:26:57 AM",
					"_updated": "Jun 4, 2022, 5:28:13 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					}
				  }
				],
				"scheduleDate": "09/20/2022",
				"status": "UPDATED",
				"_id": "f7e8abcf-9522-42da-876c-03dd6b6fc253",
				"_version": "cce8a7e0-3802-484e-accb-9bd1d62d97b8",
				"_created": "Jun 4, 2022, 5:26:57 AM",
				"_updated": "Jun 4, 2022, 5:28:13 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
					}
				  }
				},
				"_updatedBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
					}
				  }
				}
			  },
			  {
				"name": "Standard",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "Jaco",
				  "lastName": "David",
				  "designation": "MBBS, MD",
				  "inHouse": false,
				  "_id": "b579b0d1-0c93-4db4-8ca8-294a60e718e4",
				  "_version": "cbff920b-0dbb-4450-b00d-cd94f5a842ca",
				  "_updated": "Feb 15, 2022, 7:06:54 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "10:15",
					"endHHMM": "10:20",
					"_id": "2761acee-e634-4db1-a54f-172443f47532",
					"_version": "bae0fa33-2df5-41a1-94c0-e5b037139d63",
					"_created": "Feb 28, 2022, 12:11:38 PM",
					"_updated": "Sep 20, 2022, 4:57:56 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "10:30",
					"endHHMM": "10:35",
					"_id": "7eb8c88b-02a4-4f55-8d9e-6cc1d25377e0",
					"_version": "3b839d5f-e929-4177-a722-16dac797782e",
					"_created": "Feb 28, 2022, 12:11:38 PM",
					"_updated": "Sep 20, 2022, 4:57:56 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "10:45",
					"endHHMM": "10:50",
					"_id": "e7db2ce2-74a3-40e0-bf2f-8cf147ac7fa9",
					"_version": "25a9d913-364f-4992-b35f-dde3c53d49d5",
					"_created": "Feb 28, 2022, 12:11:38 PM",
					"_updated": "Sep 20, 2022, 4:57:56 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:05",
					"endHHMM": "11:10",
					"_id": "1595cef4-13de-492a-af8e-609e01f70cad",
					"_version": "bcdfe9d2-2781-4e16-a117-4616960f7413",
					"_created": "Feb 28, 2022, 12:11:38 PM",
					"_updated": "Sep 20, 2022, 4:57:56 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/20/2022",
				"status": "UPDATED",
				"_id": "4e8156e3-94b9-4b9e-8516-730c34fd9dd2",
				"_version": "d070230c-a6ed-49f8-9100-6d7110c643e5",
				"_created": "Feb 28, 2022, 12:11:38 PM",
				"_updated": "Sep 20, 2022, 4:57:56 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "Sick",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "Steve",
				  "lastName": "Adam",
				  "designation": "Dr",
				  "inHouse": false,
				  "_id": "19f1c186-37a8-46ef-a731-0a1f022be782",
				  "_version": "a1c4536d-6e5e-4779-81b0-080fe4e23a23",
				  "_updated": "Apr 8, 2022, 8:35:42 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "10:15",
					"endHHMM": "10:20",
					"_id": "5cccda4c-c309-4a73-bed5-2b4dcd320490",
					"_version": "0649e227-df6c-40be-a576-cd68874cd73d",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:00",
					"endHHMM": "11:05",
					"_id": "8d0f66d8-67e6-4c93-8c41-3e92c4a88b0e",
					"_version": "3f41f3e8-90d2-4a39-8579-cb1d11539d15",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:05",
					"endHHMM": "11:10",
					"_id": "6f64f4e2-5273-4631-b2fa-b4d6745d6062",
					"_version": "3e03ec17-50fd-4a43-9147-ca300d3025be",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:10",
					"endHHMM": "11:15",
					"_id": "646deec2-3859-405b-9b9d-25df8545efe3",
					"_version": "acbf2731-4ac6-4d9f-8606-3b2f791bbace",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:15",
					"endHHMM": "11:20",
					"_id": "9186b279-ca0c-4b1e-88f5-33be923c060b",
					"_version": "aa875054-51e1-4f81-97f2-7a077a618eae",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:20",
					"endHHMM": "11:25",
					"_id": "83a08007-4537-424d-90e2-563947d0d91c",
					"_version": "d8b7d0fe-cd95-410b-97c8-0bfc90bdf983",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:25",
					"endHHMM": "11:30",
					"_id": "1375634c-23f5-47b9-a15a-990df8752f8b",
					"_version": "9e2571a8-20f4-4426-8238-68802cf056ed",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:30",
					"endHHMM": "11:35",
					"_id": "fec3523e-a6ab-4ca1-8444-6ab463524b4e",
					"_version": "2041999e-83bb-47dd-9c6b-ca7a0dc1abfa",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:35",
					"endHHMM": "11:40",
					"_id": "4a9fa94d-2ef9-444b-bcb3-e13e4298f46e",
					"_version": "20549e02-dda6-4653-ac01-bc49b74fc27d",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "15:20",
					"endHHMM": "15:25",
					"_id": "c2ecd16d-6dd0-434f-8c79-f2eedf3cd8ad",
					"_version": "19eb2ffd-92a6-42df-b3bd-3692c4e8f047",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "16:15",
					"endHHMM": "16:20",
					"_id": "5f4ef00d-a8d1-4587-8d96-33a845f83cfe",
					"_version": "7861bfe1-ab4c-4152-b102-c5619cb881b3",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "17:15",
					"endHHMM": "17:20",
					"_id": "c30757cc-a2b9-4f2d-a53d-fb3067f0eedb",
					"_version": "7f02a502-4c2c-4cc4-8062-e397d8238a5c",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/20/2022",
				"status": "UPDATED",
				"_id": "ff788e3f-4ed2-4cf8-9d6f-ab50dcf70789",
				"_version": "7c6e09ea-9159-4bfe-aa18-395f5c30ea4b",
				"_created": "Apr 8, 2022, 8:37:38 AM",
				"_updated": "Sep 22, 2022, 10:24:08 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "Sick",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "Steve",
				  "lastName": "Adam",
				  "designation": "Dr",
				  "inHouse": false,
				  "_id": "19f1c186-37a8-46ef-a731-0a1f022be782",
				  "_version": "a1c4536d-6e5e-4779-81b0-080fe4e23a23",
				  "_updated": "Apr 8, 2022, 8:35:42 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "10:15",
					"endHHMM": "10:20",
					"_id": "5cccda4c-c309-4a73-bed5-2b4dcd320490",
					"_version": "0649e227-df6c-40be-a576-cd68874cd73d",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:00",
					"endHHMM": "11:05",
					"_id": "8d0f66d8-67e6-4c93-8c41-3e92c4a88b0e",
					"_version": "3f41f3e8-90d2-4a39-8579-cb1d11539d15",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:05",
					"endHHMM": "11:10",
					"_id": "6f64f4e2-5273-4631-b2fa-b4d6745d6062",
					"_version": "3e03ec17-50fd-4a43-9147-ca300d3025be",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:10",
					"endHHMM": "11:15",
					"_id": "646deec2-3859-405b-9b9d-25df8545efe3",
					"_version": "acbf2731-4ac6-4d9f-8606-3b2f791bbace",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:15",
					"endHHMM": "11:20",
					"_id": "9186b279-ca0c-4b1e-88f5-33be923c060b",
					"_version": "aa875054-51e1-4f81-97f2-7a077a618eae",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:20",
					"endHHMM": "11:25",
					"_id": "83a08007-4537-424d-90e2-563947d0d91c",
					"_version": "d8b7d0fe-cd95-410b-97c8-0bfc90bdf983",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:25",
					"endHHMM": "11:30",
					"_id": "1375634c-23f5-47b9-a15a-990df8752f8b",
					"_version": "9e2571a8-20f4-4426-8238-68802cf056ed",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:30",
					"endHHMM": "11:35",
					"_id": "fec3523e-a6ab-4ca1-8444-6ab463524b4e",
					"_version": "2041999e-83bb-47dd-9c6b-ca7a0dc1abfa",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:35",
					"endHHMM": "11:40",
					"_id": "4a9fa94d-2ef9-444b-bcb3-e13e4298f46e",
					"_version": "20549e02-dda6-4653-ac01-bc49b74fc27d",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "15:20",
					"endHHMM": "15:25",
					"_id": "c2ecd16d-6dd0-434f-8c79-f2eedf3cd8ad",
					"_version": "19eb2ffd-92a6-42df-b3bd-3692c4e8f047",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "16:15",
					"endHHMM": "16:20",
					"_id": "5f4ef00d-a8d1-4587-8d96-33a845f83cfe",
					"_version": "7861bfe1-ab4c-4152-b102-c5619cb881b3",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "17:15",
					"endHHMM": "17:20",
					"_id": "c30757cc-a2b9-4f2d-a53d-fb3067f0eedb",
					"_version": "7f02a502-4c2c-4cc4-8062-e397d8238a5c",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/21/2022",
				"status": "UPDATED",
				"_id": "ff788e3f-4ed2-4cf8-9d6f-ab50dcf70789",
				"_version": "7c6e09ea-9159-4bfe-aa18-395f5c30ea4b",
				"_created": "Apr 8, 2022, 8:37:38 AM",
				"_updated": "Sep 22, 2022, 10:24:08 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "OPT Dr Bellamy",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "JOHN",
				  "lastName": "WATSON",
				  "designation": "MBBS, MD",
				  "inHouse": false,
				  "_id": "c68ced42-dfad-452a-acf0-0cee3a066157",
				  "_version": "cf46e997-3ee1-48b6-895a-c55fe3493112",
				  "_updated": "Sep 28, 2022, 5:35:36 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:00",
					"endHHMM": "09:05",
					"_id": "e3554785-d90c-46fd-9da3-4e577040f18d",
					"_version": "7e63f1f9-3b0b-40c9-b5e9-21f7d1d67fbc",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "bf25db10-db28-49c5-b5a7-d17d6155fbd4",
					"_version": "b41cc5be-9845-4d9a-a105-7dbd8c077f5d",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "10:00",
					"endHHMM": "10:05",
					"_id": "58739079-324c-4c75-b567-ed1c77bf30e0",
					"_version": "6de8d152-3afb-4210-84ae-4d2254902342",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:00",
					"endHHMM": "11:05",
					"_id": "d3b1b831-0334-4739-be3b-bf0fe6caa98b",
					"_version": "f7f6e68d-5258-47ed-a4c9-a73f66bc28ec",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:05",
					"endHHMM": "11:10",
					"_id": "c088a900-e474-41ca-b979-3950297ad884",
					"_version": "81546a4b-65b1-4b2a-9cfb-7d464a715d4a",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:10",
					"endHHMM": "11:15",
					"_id": "96b31edf-1723-453e-b044-44568047d6a0",
					"_version": "ed0b9833-1bde-4188-9076-f09529d52841",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:15",
					"endHHMM": "11:20",
					"_id": "9fd493a0-c666-4203-b403-6c2fc8bfba38",
					"_version": "a0c73134-ee47-44f4-837b-08dd8bb16bee",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:20",
					"endHHMM": "11:25",
					"_id": "ea203688-d2ce-471c-a341-f301ccc822bb",
					"_version": "c52fabdd-ed77-4e14-ab5a-69f0c64a713c",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:25",
					"endHHMM": "11:30",
					"_id": "16f51651-e7fe-4fce-ad36-53259cfe71f6",
					"_version": "6f224cd7-83cf-40ac-aec6-823eafeb47be",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:30",
					"endHHMM": "11:35",
					"_id": "fcbf1cb5-e07b-475e-aa16-03ca00682cd6",
					"_version": "5a330f64-8648-49f7-b35b-7c4ddac74f8b",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:35",
					"endHHMM": "11:40",
					"_id": "1b5cda56-04f0-4f7e-850c-54a5e9ddd670",
					"_version": "5a4a233c-ea88-483d-b5a1-a56e480c715e",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/21/2022",
				"status": "UPDATED",
				"_id": "33121e46-dc04-408f-97b4-a6d3ec5b66f7",
				"_version": "320be71c-b832-4039-b332-593a4cbd4a3e",
				"_created": "Feb 15, 2022, 6:57:45 AM",
				"_updated": "Sep 22, 2022, 10:25:06 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "OPT Dr Bellamy",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "JOHN",
				  "lastName": "WATSON",
				  "designation": "MBBS, MD",
				  "inHouse": false,
				  "_id": "c68ced42-dfad-452a-acf0-0cee3a066157",
				  "_version": "cf46e997-3ee1-48b6-895a-c55fe3493112",
				  "_updated": "Sep 28, 2022, 5:35:36 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:00",
					"endHHMM": "09:05",
					"_id": "e3554785-d90c-46fd-9da3-4e577040f18d",
					"_version": "7e63f1f9-3b0b-40c9-b5e9-21f7d1d67fbc",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "bf25db10-db28-49c5-b5a7-d17d6155fbd4",
					"_version": "b41cc5be-9845-4d9a-a105-7dbd8c077f5d",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "10:00",
					"endHHMM": "10:05",
					"_id": "58739079-324c-4c75-b567-ed1c77bf30e0",
					"_version": "6de8d152-3afb-4210-84ae-4d2254902342",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "12:00",
					"endHHMM": "12:05",
					"_id": "2d82d198-6026-4581-b82d-6f7761553ddc",
					"_version": "faab96e4-0046-4adc-8c4f-5bc2d2ca5f3d",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/22/2022",
				"status": "UPDATED",
				"_id": "33121e46-dc04-408f-97b4-a6d3ec5b66f7",
				"_version": "320be71c-b832-4039-b332-593a4cbd4a3e",
				"_created": "Feb 15, 2022, 6:57:45 AM",
				"_updated": "Sep 22, 2022, 10:25:06 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "Sick",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "Steve",
				  "lastName": "Adam",
				  "designation": "Dr",
				  "inHouse": false,
				  "_id": "19f1c186-37a8-46ef-a731-0a1f022be782",
				  "_version": "a1c4536d-6e5e-4779-81b0-080fe4e23a23",
				  "_updated": "Apr 8, 2022, 8:35:42 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "10:15",
					"endHHMM": "10:20",
					"_id": "5cccda4c-c309-4a73-bed5-2b4dcd320490",
					"_version": "0649e227-df6c-40be-a576-cd68874cd73d",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "12:00",
					"endHHMM": "12:05",
					"_id": "a22b8152-8acf-46cc-a8e4-05af824fb6fe",
					"_version": "6c9070a1-6f3f-4488-84a5-577a41a38692",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "15:20",
					"endHHMM": "15:25",
					"_id": "c2ecd16d-6dd0-434f-8c79-f2eedf3cd8ad",
					"_version": "19eb2ffd-92a6-42df-b3bd-3692c4e8f047",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "16:15",
					"endHHMM": "16:20",
					"_id": "5f4ef00d-a8d1-4587-8d96-33a845f83cfe",
					"_version": "7861bfe1-ab4c-4152-b102-c5619cb881b3",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "17:15",
					"endHHMM": "17:20",
					"_id": "c30757cc-a2b9-4f2d-a53d-fb3067f0eedb",
					"_version": "7f02a502-4c2c-4cc4-8062-e397d8238a5c",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/22/2022",
				"status": "UPDATED",
				"_id": "ff788e3f-4ed2-4cf8-9d6f-ab50dcf70789",
				"_version": "7c6e09ea-9159-4bfe-aa18-395f5c30ea4b",
				"_created": "Apr 8, 2022, 8:37:38 AM",
				"_updated": "Sep 22, 2022, 10:24:08 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "OPD",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "parker",
				  "lastName": "emma",
				  "designation": "Mr",
				  "inHouse": false,
				  "_id": "3c49b82e-4ed0-4f4f-9948-7b092feadc6a",
				  "_version": "2aa3a9bc-e7b2-407b-a24f-9088eea4309f",
				  "_updated": "May 18, 2022, 7:25:21 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:00",
					"endHHMM": "09:05",
					"_id": "f305e156-b0c7-47af-b287-06dc82f2f5c0",
					"_version": "478805d9-eec7-40d4-8311-a833a19494cb",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "12:00",
					"endHHMM": "12:05",
					"_id": "f7cc2cc0-a4bd-478a-b732-c835708b077e",
					"_version": "e1d3431d-92fd-4b58-8633-35769009ef8a",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/22/2022",
				"status": "UPDATED",
				"_id": "5dbdd9db-c254-4a92-b8cb-13947411366e",
				"_version": "08dd32bf-8363-4f87-9bc4-48019d9ec90f",
				"_created": "May 18, 2022, 7:25:46 AM",
				"_updated": "Sep 22, 2022, 10:26:06 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "OPD",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "parker",
				  "lastName": "emma",
				  "designation": "Mr",
				  "inHouse": false,
				  "_id": "3c49b82e-4ed0-4f4f-9948-7b092feadc6a",
				  "_version": "2aa3a9bc-e7b2-407b-a24f-9088eea4309f",
				  "_updated": "May 18, 2022, 7:25:21 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "11:00",
					"endHHMM": "11:05",
					"_id": "10a5ed12-ba53-49ef-b2e6-02aa26739d47",
					"_version": "54638d53-e3c0-4a18-95d7-faf200c51d5a",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:05",
					"endHHMM": "11:10",
					"_id": "2f94bae0-6d28-4711-a6ce-1a8d5e70095c",
					"_version": "07750b01-fd16-4036-a1e5-1841645a3fef",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:10",
					"endHHMM": "11:15",
					"_id": "0c9416ae-eb44-41b5-ad78-530816928b0c",
					"_version": "e6acb598-47c9-4b0d-975a-48c26a2055e8",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:15",
					"endHHMM": "11:20",
					"_id": "de01d1e8-30ee-4646-85f5-fd1e309951df",
					"_version": "6b010e5d-2e4a-4516-900c-5290eb747454",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:20",
					"endHHMM": "11:25",
					"_id": "aa314fed-6954-4e80-8619-a256de847959",
					"_version": "df77b51a-1007-4972-baf3-73717845720e",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:25",
					"endHHMM": "11:30",
					"_id": "abc288a6-5e2c-4c46-86be-bad7895360fb",
					"_version": "e74110f9-2627-4025-8e1e-de8047e27489",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:30",
					"endHHMM": "11:35",
					"_id": "db040d5d-f630-49f6-8188-973e6e7cb682",
					"_version": "72ff535f-edf2-4e1c-88ab-b441adf7b88b",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:35",
					"endHHMM": "11:40",
					"_id": "a5a77c54-4d86-4587-bbbb-c75a220ae021",
					"_version": "bdcb4c43-5ca2-463f-8199-8c9e513b4830",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/23/2022",
				"status": "UPDATED",
				"_id": "5dbdd9db-c254-4a92-b8cb-13947411366e",
				"_version": "08dd32bf-8363-4f87-9bc4-48019d9ec90f",
				"_created": "May 18, 2022, 7:25:46 AM",
				"_updated": "Sep 22, 2022, 10:26:06 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "OPT Dr Bellamy",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "JOHN",
				  "lastName": "WATSON",
				  "designation": "MBBS, MD",
				  "inHouse": false,
				  "_id": "c68ced42-dfad-452a-acf0-0cee3a066157",
				  "_version": "cf46e997-3ee1-48b6-895a-c55fe3493112",
				  "_updated": "Sep 28, 2022, 5:35:36 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "bf25db10-db28-49c5-b5a7-d17d6155fbd4",
					"_version": "b41cc5be-9845-4d9a-a105-7dbd8c077f5d",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "10:00",
					"endHHMM": "10:05",
					"_id": "58739079-324c-4c75-b567-ed1c77bf30e0",
					"_version": "6de8d152-3afb-4210-84ae-4d2254902342",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "12:00",
					"endHHMM": "12:05",
					"_id": "2d82d198-6026-4581-b82d-6f7761553ddc",
					"_version": "faab96e4-0046-4adc-8c4f-5bc2d2ca5f3d",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/23/2022",
				"status": "UPDATED",
				"_id": "33121e46-dc04-408f-97b4-a6d3ec5b66f7",
				"_version": "320be71c-b832-4039-b332-593a4cbd4a3e",
				"_created": "Feb 15, 2022, 6:57:45 AM",
				"_updated": "Sep 22, 2022, 10:25:06 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "Sick",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "Steve",
				  "lastName": "Adam",
				  "designation": "Dr",
				  "inHouse": false,
				  "_id": "19f1c186-37a8-46ef-a731-0a1f022be782",
				  "_version": "a1c4536d-6e5e-4779-81b0-080fe4e23a23",
				  "_updated": "Apr 8, 2022, 8:35:42 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "10:15",
					"endHHMM": "10:20",
					"_id": "5cccda4c-c309-4a73-bed5-2b4dcd320490",
					"_version": "0649e227-df6c-40be-a576-cd68874cd73d",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "12:00",
					"endHHMM": "12:05",
					"_id": "a22b8152-8acf-46cc-a8e4-05af824fb6fe",
					"_version": "6c9070a1-6f3f-4488-84a5-577a41a38692",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "15:20",
					"endHHMM": "15:25",
					"_id": "c2ecd16d-6dd0-434f-8c79-f2eedf3cd8ad",
					"_version": "19eb2ffd-92a6-42df-b3bd-3692c4e8f047",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "16:15",
					"endHHMM": "16:20",
					"_id": "5f4ef00d-a8d1-4587-8d96-33a845f83cfe",
					"_version": "7861bfe1-ab4c-4152-b102-c5619cb881b3",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "17:15",
					"endHHMM": "17:20",
					"_id": "c30757cc-a2b9-4f2d-a53d-fb3067f0eedb",
					"_version": "7f02a502-4c2c-4cc4-8062-e397d8238a5c",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/23/2022",
				"status": "UPDATED",
				"_id": "ff788e3f-4ed2-4cf8-9d6f-ab50dcf70789",
				"_version": "7c6e09ea-9159-4bfe-aa18-395f5c30ea4b",
				"_created": "Apr 8, 2022, 8:37:38 AM",
				"_updated": "Sep 22, 2022, 10:24:08 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "OPD",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "parker",
				  "lastName": "emma",
				  "designation": "Mr",
				  "inHouse": false,
				  "_id": "3c49b82e-4ed0-4f4f-9948-7b092feadc6a",
				  "_version": "2aa3a9bc-e7b2-407b-a24f-9088eea4309f",
				  "_updated": "May 18, 2022, 7:25:21 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:00",
					"endHHMM": "09:05",
					"_id": "f305e156-b0c7-47af-b287-06dc82f2f5c0",
					"_version": "478805d9-eec7-40d4-8311-a833a19494cb",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:00",
					"endHHMM": "11:05",
					"_id": "10a5ed12-ba53-49ef-b2e6-02aa26739d47",
					"_version": "54638d53-e3c0-4a18-95d7-faf200c51d5a",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:05",
					"endHHMM": "11:10",
					"_id": "2f94bae0-6d28-4711-a6ce-1a8d5e70095c",
					"_version": "07750b01-fd16-4036-a1e5-1841645a3fef",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:10",
					"endHHMM": "11:15",
					"_id": "0c9416ae-eb44-41b5-ad78-530816928b0c",
					"_version": "e6acb598-47c9-4b0d-975a-48c26a2055e8",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:15",
					"endHHMM": "11:20",
					"_id": "de01d1e8-30ee-4646-85f5-fd1e309951df",
					"_version": "6b010e5d-2e4a-4516-900c-5290eb747454",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:20",
					"endHHMM": "11:25",
					"_id": "aa314fed-6954-4e80-8619-a256de847959",
					"_version": "df77b51a-1007-4972-baf3-73717845720e",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:25",
					"endHHMM": "11:30",
					"_id": "abc288a6-5e2c-4c46-86be-bad7895360fb",
					"_version": "e74110f9-2627-4025-8e1e-de8047e27489",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:30",
					"endHHMM": "11:35",
					"_id": "db040d5d-f630-49f6-8188-973e6e7cb682",
					"_version": "72ff535f-edf2-4e1c-88ab-b441adf7b88b",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "11:35",
					"endHHMM": "11:40",
					"_id": "a5a77c54-4d86-4587-bbbb-c75a220ae021",
					"_version": "bdcb4c43-5ca2-463f-8199-8c9e513b4830",
					"_created": "May 18, 2022, 7:25:46 AM",
					"_updated": "Sep 22, 2022, 10:26:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/24/2022",
				"status": "UPDATED",
				"_id": "5dbdd9db-c254-4a92-b8cb-13947411366e",
				"_version": "08dd32bf-8363-4f87-9bc4-48019d9ec90f",
				"_created": "May 18, 2022, 7:25:46 AM",
				"_updated": "Sep 22, 2022, 10:26:06 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "OPT Dr Bellamy",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "JOHN",
				  "lastName": "WATSON",
				  "designation": "MBBS, MD",
				  "inHouse": false,
				  "_id": "c68ced42-dfad-452a-acf0-0cee3a066157",
				  "_version": "cf46e997-3ee1-48b6-895a-c55fe3493112",
				  "_updated": "Sep 28, 2022, 5:35:36 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:00",
					"endHHMM": "09:05",
					"_id": "e3554785-d90c-46fd-9da3-4e577040f18d",
					"_version": "7e63f1f9-3b0b-40c9-b5e9-21f7d1d67fbc",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "bf25db10-db28-49c5-b5a7-d17d6155fbd4",
					"_version": "b41cc5be-9845-4d9a-a105-7dbd8c077f5d",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "10:00",
					"endHHMM": "10:05",
					"_id": "58739079-324c-4c75-b567-ed1c77bf30e0",
					"_version": "6de8d152-3afb-4210-84ae-4d2254902342",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "12:00",
					"endHHMM": "12:05",
					"_id": "2d82d198-6026-4581-b82d-6f7761553ddc",
					"_version": "faab96e4-0046-4adc-8c4f-5bc2d2ca5f3d",
					"_created": "Feb 15, 2022, 6:57:45 AM",
					"_updated": "Sep 22, 2022, 10:25:06 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/24/2022",
				"status": "UPDATED",
				"_id": "33121e46-dc04-408f-97b4-a6d3ec5b66f7",
				"_version": "320be71c-b832-4039-b332-593a4cbd4a3e",
				"_created": "Feb 15, 2022, 6:57:45 AM",
				"_updated": "Sep 22, 2022, 10:25:06 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "Sick",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "Steve",
				  "lastName": "Adam",
				  "designation": "Dr",
				  "inHouse": false,
				  "_id": "19f1c186-37a8-46ef-a731-0a1f022be782",
				  "_version": "a1c4536d-6e5e-4779-81b0-080fe4e23a23",
				  "_updated": "Apr 8, 2022, 8:35:42 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "10:15",
					"endHHMM": "10:20",
					"_id": "5cccda4c-c309-4a73-bed5-2b4dcd320490",
					"_version": "0649e227-df6c-40be-a576-cd68874cd73d",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "12:00",
					"endHHMM": "12:05",
					"_id": "a22b8152-8acf-46cc-a8e4-05af824fb6fe",
					"_version": "6c9070a1-6f3f-4488-84a5-577a41a38692",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "15:20",
					"endHHMM": "15:25",
					"_id": "c2ecd16d-6dd0-434f-8c79-f2eedf3cd8ad",
					"_version": "19eb2ffd-92a6-42df-b3bd-3692c4e8f047",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "16:15",
					"endHHMM": "16:20",
					"_id": "5f4ef00d-a8d1-4587-8d96-33a845f83cfe",
					"_version": "7861bfe1-ab4c-4152-b102-c5619cb881b3",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "17:15",
					"endHHMM": "17:20",
					"_id": "c30757cc-a2b9-4f2d-a53d-fb3067f0eedb",
					"_version": "7f02a502-4c2c-4cc4-8062-e397d8238a5c",
					"_created": "Apr 8, 2022, 8:37:38 AM",
					"_updated": "Sep 22, 2022, 10:24:08 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/24/2022",
				"status": "UPDATED",
				"_id": "ff788e3f-4ed2-4cf8-9d6f-ab50dcf70789",
				"_version": "7c6e09ea-9159-4bfe-aa18-395f5c30ea4b",
				"_created": "Apr 8, 2022, 8:37:38 AM",
				"_updated": "Sep 22, 2022, 10:24:08 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
		  },
		  {
			"office": {
			  "name": "Boston",
			  "_id": "6e645215-b932-48ca-8467-4d0751346697",
			  "_version": "6762e85b-1b61-4ddb-a151-11b5f1f1b4c5",
			  "_updated": "Feb 7, 2022, 12:09:00 PM",
			  "_links": {
				"self": {
				  "href": "/v1/offices/6e645215-b932-48ca-8467-4d0751346697"
				}
			  }
			},
			"providerTemplate": [
			  {
				"name": "MOHANOPD",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "Mohan",
				  "lastName": "Daisy",
				  "designation": "MBBS, MD",
				  "inHouse": false,
				  "_id": "deed9f49-b0a0-4440-844d-c378ece32429",
				  "_version": "33e71666-2a89-445b-bf29-503af6410fea",
				  "_updated": "Feb 7, 2022, 12:36:47 PM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:00",
					"endHHMM": "09:05",
					"_id": "086963c4-1fa8-47ff-a268-84368f5a4c24",
					"_version": "00f7a252-f523-4db3-b598-faebafa5540c",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:05",
					"endHHMM": "09:10",
					"_id": "dc145d0e-5bcb-43fb-91b5-b827ebce9ffc",
					"_version": "8b8cff9f-2f91-4738-a509-1130d89091b1",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:10",
					"endHHMM": "09:15",
					"_id": "9f85d6b3-6a2a-495c-a273-0fae31942951",
					"_version": "2fda86b9-ac2c-456a-8839-961769cd3b59",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "84b6eda1-a7e3-4a45-a0b6-3020e24cd466",
					"_version": "5b4838b9-07e5-4279-9954-6a82188638a4",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:20",
					"endHHMM": "09:25",
					"_id": "1d645393-bcfc-430f-b43a-4203f8422890",
					"_version": "3085cbb6-0c67-406d-9aff-07ebee0a78a6",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/20/2022",
				"status": "UPDATED",
				"_id": "7e70027d-b842-4bdc-8366-ebdc2773e13c",
				"_version": "a66f50c8-6373-4f1b-908d-505bb255d55d",
				"_created": "Jun 3, 2022, 9:15:07 AM",
				"_updated": "Sep 20, 2022, 6:49:57 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "REGULAR",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "Mohan",
				  "lastName": "Daisy",
				  "designation": "MBBS, MD",
				  "inHouse": false,
				  "_id": "deed9f49-b0a0-4440-844d-c378ece32429",
				  "_version": "33e71666-2a89-445b-bf29-503af6410fea",
				  "_updated": "Feb 7, 2022, 12:36:47 PM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:05",
					"endHHMM": "09:10",
					"_id": "5950ac09-03ee-4c7c-afdb-13f498240156",
					"_version": "b80add0b-2cf9-444c-91c2-be444af55bfa",
					"_created": "Aug 22, 2022, 7:23:34 PM",
					"_updated": "Sep 20, 2022, 6:50:47 AM",
					"_createdBy": {
					  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
					  "_links": {
						"self": {
						  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
					  "notes": ""
					},
					"startHHMM": "09:10",
					"endHHMM": "09:15",
					"_id": "98af9574-848a-4cb4-a5c8-1c88202e13fa",
					"_version": "8337e9f7-e78d-4ea6-878d-57110da8d379",
					"_created": "Aug 22, 2022, 7:23:34 PM",
					"_updated": "Sep 20, 2022, 6:50:47 AM",
					"_createdBy": {
					  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
					  "_links": {
						"self": {
						  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "4b337178-b635-4f34-893c-f06d47df2975",
					"_version": "6ca96ed5-74d4-48d7-8664-53021bcefbfc",
					"_created": "Aug 22, 2022, 7:23:34 PM",
					"_updated": "Sep 20, 2022, 6:50:47 AM",
					"_createdBy": {
					  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
					  "_links": {
						"self": {
						  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
				"scheduleDate": "09/20/2022",
				"status": "UPDATED",
				"_id": "2338551a-d602-46df-8269-08eb9451ade6",
				"_version": "cef390b5-625e-45bf-8c51-6d9e426e1abd",
				"_created": "Aug 22, 2022, 7:23:34 PM",
				"_updated": "Sep 20, 2022, 6:50:47 AM",
				"_createdBy": {
				  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
				  "_links": {
					"self": {
					  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
				"name": "OPD",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "indraku",
				  "lastName": "kumar",
				  "designation": "Mr",
				  "inHouse": false,
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_version": "2c7ce0e4-8bf4-4f6e-8afa-a7285c83d51a",
				  "_updated": "Sep 20, 2022, 11:19:29 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:00",
					"endHHMM": "09:05",
					"_id": "c0539d82-293c-44ff-904a-47810afab1a5",
					"_version": "b164e0c4-ad03-4ecd-b392-ddddbfa861e0",
					"_created": "Feb 7, 2022, 12:30:53 PM",
					"_updated": "Mar 21, 2022, 12:51:21 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "cd313aa8-7c2f-4413-8e16-31c7c522efb9",
					"_version": "85dd0c90-a5e6-4b2f-9e29-1b52ba0305bd",
					"_created": "Feb 7, 2022, 12:30:53 PM",
					"_updated": "Mar 21, 2022, 12:51:21 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					}
				  }
				],
				"scheduleDate": "09/20/2022",
				"status": "UPDATED",
				"_id": "42248991-3385-4164-9d75-eec7945cb6a9",
				"_version": "f48ceb6a-3048-4c30-b931-ac90ec2956e1",
				"_created": "Feb 7, 2022, 12:30:53 PM",
				"_updated": "Mar 21, 2022, 12:51:21 PM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
					}
				  }
				},
				"_updatedBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
					}
				  }
				}
			  },
			  {
				"name": "MOHANOPD",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "Mohan",
				  "lastName": "Daisy",
				  "designation": "MBBS, MD",
				  "inHouse": false,
				  "_id": "deed9f49-b0a0-4440-844d-c378ece32429",
				  "_version": "33e71666-2a89-445b-bf29-503af6410fea",
				  "_updated": "Feb 7, 2022, 12:36:47 PM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:00",
					"endHHMM": "09:05",
					"_id": "086963c4-1fa8-47ff-a268-84368f5a4c24",
					"_version": "00f7a252-f523-4db3-b598-faebafa5540c",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:05",
					"endHHMM": "09:10",
					"_id": "dc145d0e-5bcb-43fb-91b5-b827ebce9ffc",
					"_version": "8b8cff9f-2f91-4738-a509-1130d89091b1",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:10",
					"endHHMM": "09:15",
					"_id": "9f85d6b3-6a2a-495c-a273-0fae31942951",
					"_version": "2fda86b9-ac2c-456a-8839-961769cd3b59",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "84b6eda1-a7e3-4a45-a0b6-3020e24cd466",
					"_version": "5b4838b9-07e5-4279-9954-6a82188638a4",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:20",
					"endHHMM": "09:25",
					"_id": "1d645393-bcfc-430f-b43a-4203f8422890",
					"_version": "3085cbb6-0c67-406d-9aff-07ebee0a78a6",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/21/2022",
				"status": "UPDATED",
				"_id": "7e70027d-b842-4bdc-8366-ebdc2773e13c",
				"_version": "a66f50c8-6373-4f1b-908d-505bb255d55d",
				"_created": "Jun 3, 2022, 9:15:07 AM",
				"_updated": "Sep 20, 2022, 6:49:57 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "REGULAR",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "Mohan",
				  "lastName": "Daisy",
				  "designation": "MBBS, MD",
				  "inHouse": false,
				  "_id": "deed9f49-b0a0-4440-844d-c378ece32429",
				  "_version": "33e71666-2a89-445b-bf29-503af6410fea",
				  "_updated": "Feb 7, 2022, 12:36:47 PM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:00",
					"endHHMM": "09:05",
					"_id": "603950b6-493b-46a1-b279-3fae8b2e7002",
					"_version": "2915cc06-998c-4a55-befb-7473c5bc091e",
					"_created": "Aug 22, 2022, 7:23:34 PM",
					"_updated": "Sep 20, 2022, 6:50:47 AM",
					"_createdBy": {
					  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
					  "_links": {
						"self": {
						  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
					  "notes": ""
					},
					"startHHMM": "09:05",
					"endHHMM": "09:10",
					"_id": "5950ac09-03ee-4c7c-afdb-13f498240156",
					"_version": "b80add0b-2cf9-444c-91c2-be444af55bfa",
					"_created": "Aug 22, 2022, 7:23:34 PM",
					"_updated": "Sep 20, 2022, 6:50:47 AM",
					"_createdBy": {
					  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
					  "_links": {
						"self": {
						  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
					  "notes": ""
					},
					"startHHMM": "09:10",
					"endHHMM": "09:15",
					"_id": "98af9574-848a-4cb4-a5c8-1c88202e13fa",
					"_version": "8337e9f7-e78d-4ea6-878d-57110da8d379",
					"_created": "Aug 22, 2022, 7:23:34 PM",
					"_updated": "Sep 20, 2022, 6:50:47 AM",
					"_createdBy": {
					  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
					  "_links": {
						"self": {
						  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "4b337178-b635-4f34-893c-f06d47df2975",
					"_version": "6ca96ed5-74d4-48d7-8664-53021bcefbfc",
					"_created": "Aug 22, 2022, 7:23:34 PM",
					"_updated": "Sep 20, 2022, 6:50:47 AM",
					"_createdBy": {
					  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
					  "_links": {
						"self": {
						  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
				"scheduleDate": "09/21/2022",
				"status": "UPDATED",
				"_id": "2338551a-d602-46df-8269-08eb9451ade6",
				"_version": "cef390b5-625e-45bf-8c51-6d9e426e1abd",
				"_created": "Aug 22, 2022, 7:23:34 PM",
				"_updated": "Sep 20, 2022, 6:50:47 AM",
				"_createdBy": {
				  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
				  "_links": {
					"self": {
					  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
				"name": "OPD",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "indraku",
				  "lastName": "kumar",
				  "designation": "Mr",
				  "inHouse": false,
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_version": "2c7ce0e4-8bf4-4f6e-8afa-a7285c83d51a",
				  "_updated": "Sep 20, 2022, 11:19:29 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:00",
					"endHHMM": "09:05",
					"_id": "c0539d82-293c-44ff-904a-47810afab1a5",
					"_version": "b164e0c4-ad03-4ecd-b392-ddddbfa861e0",
					"_created": "Feb 7, 2022, 12:30:53 PM",
					"_updated": "Mar 21, 2022, 12:51:21 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "cd313aa8-7c2f-4413-8e16-31c7c522efb9",
					"_version": "85dd0c90-a5e6-4b2f-9e29-1b52ba0305bd",
					"_created": "Feb 7, 2022, 12:30:53 PM",
					"_updated": "Mar 21, 2022, 12:51:21 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					}
				  }
				],
				"scheduleDate": "09/21/2022",
				"status": "UPDATED",
				"_id": "42248991-3385-4164-9d75-eec7945cb6a9",
				"_version": "f48ceb6a-3048-4c30-b931-ac90ec2956e1",
				"_created": "Feb 7, 2022, 12:30:53 PM",
				"_updated": "Mar 21, 2022, 12:51:21 PM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
					}
				  }
				},
				"_updatedBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
					}
				  }
				}
			  },
			  {
				"name": "MOHANOPD",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "Mohan",
				  "lastName": "Daisy",
				  "designation": "MBBS, MD",
				  "inHouse": false,
				  "_id": "deed9f49-b0a0-4440-844d-c378ece32429",
				  "_version": "33e71666-2a89-445b-bf29-503af6410fea",
				  "_updated": "Feb 7, 2022, 12:36:47 PM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:00",
					"endHHMM": "09:05",
					"_id": "086963c4-1fa8-47ff-a268-84368f5a4c24",
					"_version": "00f7a252-f523-4db3-b598-faebafa5540c",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:05",
					"endHHMM": "09:10",
					"_id": "dc145d0e-5bcb-43fb-91b5-b827ebce9ffc",
					"_version": "8b8cff9f-2f91-4738-a509-1130d89091b1",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:10",
					"endHHMM": "09:15",
					"_id": "9f85d6b3-6a2a-495c-a273-0fae31942951",
					"_version": "2fda86b9-ac2c-456a-8839-961769cd3b59",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "84b6eda1-a7e3-4a45-a0b6-3020e24cd466",
					"_version": "5b4838b9-07e5-4279-9954-6a82188638a4",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:20",
					"endHHMM": "09:25",
					"_id": "1d645393-bcfc-430f-b43a-4203f8422890",
					"_version": "3085cbb6-0c67-406d-9aff-07ebee0a78a6",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/22/2022",
				"status": "UPDATED",
				"_id": "7e70027d-b842-4bdc-8366-ebdc2773e13c",
				"_version": "a66f50c8-6373-4f1b-908d-505bb255d55d",
				"_created": "Jun 3, 2022, 9:15:07 AM",
				"_updated": "Sep 20, 2022, 6:49:57 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "REGULAR",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "Mohan",
				  "lastName": "Daisy",
				  "designation": "MBBS, MD",
				  "inHouse": false,
				  "_id": "deed9f49-b0a0-4440-844d-c378ece32429",
				  "_version": "33e71666-2a89-445b-bf29-503af6410fea",
				  "_updated": "Feb 7, 2022, 12:36:47 PM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:00",
					"endHHMM": "09:05",
					"_id": "603950b6-493b-46a1-b279-3fae8b2e7002",
					"_version": "2915cc06-998c-4a55-befb-7473c5bc091e",
					"_created": "Aug 22, 2022, 7:23:34 PM",
					"_updated": "Sep 20, 2022, 6:50:47 AM",
					"_createdBy": {
					  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
					  "_links": {
						"self": {
						  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
					  "notes": ""
					},
					"startHHMM": "09:05",
					"endHHMM": "09:10",
					"_id": "5950ac09-03ee-4c7c-afdb-13f498240156",
					"_version": "b80add0b-2cf9-444c-91c2-be444af55bfa",
					"_created": "Aug 22, 2022, 7:23:34 PM",
					"_updated": "Sep 20, 2022, 6:50:47 AM",
					"_createdBy": {
					  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
					  "_links": {
						"self": {
						  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
					  "notes": ""
					},
					"startHHMM": "09:10",
					"endHHMM": "09:15",
					"_id": "98af9574-848a-4cb4-a5c8-1c88202e13fa",
					"_version": "8337e9f7-e78d-4ea6-878d-57110da8d379",
					"_created": "Aug 22, 2022, 7:23:34 PM",
					"_updated": "Sep 20, 2022, 6:50:47 AM",
					"_createdBy": {
					  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
					  "_links": {
						"self": {
						  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "4b337178-b635-4f34-893c-f06d47df2975",
					"_version": "6ca96ed5-74d4-48d7-8664-53021bcefbfc",
					"_created": "Aug 22, 2022, 7:23:34 PM",
					"_updated": "Sep 20, 2022, 6:50:47 AM",
					"_createdBy": {
					  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
					  "_links": {
						"self": {
						  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
				"scheduleDate": "09/22/2022",
				"status": "UPDATED",
				"_id": "2338551a-d602-46df-8269-08eb9451ade6",
				"_version": "cef390b5-625e-45bf-8c51-6d9e426e1abd",
				"_created": "Aug 22, 2022, 7:23:34 PM",
				"_updated": "Sep 20, 2022, 6:50:47 AM",
				"_createdBy": {
				  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
				  "_links": {
					"self": {
					  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
				"name": "OPD",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "indraku",
				  "lastName": "kumar",
				  "designation": "Mr",
				  "inHouse": false,
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_version": "2c7ce0e4-8bf4-4f6e-8afa-a7285c83d51a",
				  "_updated": "Sep 20, 2022, 11:19:29 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:00",
					"endHHMM": "09:05",
					"_id": "c0539d82-293c-44ff-904a-47810afab1a5",
					"_version": "b164e0c4-ad03-4ecd-b392-ddddbfa861e0",
					"_created": "Feb 7, 2022, 12:30:53 PM",
					"_updated": "Mar 21, 2022, 12:51:21 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "cd313aa8-7c2f-4413-8e16-31c7c522efb9",
					"_version": "85dd0c90-a5e6-4b2f-9e29-1b52ba0305bd",
					"_created": "Feb 7, 2022, 12:30:53 PM",
					"_updated": "Mar 21, 2022, 12:51:21 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					}
				  }
				],
				"scheduleDate": "09/22/2022",
				"status": "UPDATED",
				"_id": "42248991-3385-4164-9d75-eec7945cb6a9",
				"_version": "f48ceb6a-3048-4c30-b931-ac90ec2956e1",
				"_created": "Feb 7, 2022, 12:30:53 PM",
				"_updated": "Mar 21, 2022, 12:51:21 PM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
					}
				  }
				},
				"_updatedBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
					}
				  }
				}
			  },
			  {
				"name": "OPD",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "indraku",
				  "lastName": "kumar",
				  "designation": "Mr",
				  "inHouse": false,
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_version": "2c7ce0e4-8bf4-4f6e-8afa-a7285c83d51a",
				  "_updated": "Sep 20, 2022, 11:19:29 AM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:00",
					"endHHMM": "09:05",
					"_id": "c0539d82-293c-44ff-904a-47810afab1a5",
					"_version": "b164e0c4-ad03-4ecd-b392-ddddbfa861e0",
					"_created": "Feb 7, 2022, 12:30:53 PM",
					"_updated": "Mar 21, 2022, 12:51:21 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "cd313aa8-7c2f-4413-8e16-31c7c522efb9",
					"_version": "85dd0c90-a5e6-4b2f-9e29-1b52ba0305bd",
					"_created": "Feb 7, 2022, 12:30:53 PM",
					"_updated": "Mar 21, 2022, 12:51:21 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					}
				  }
				],
				"scheduleDate": "09/23/2022",
				"status": "UPDATED",
				"_id": "42248991-3385-4164-9d75-eec7945cb6a9",
				"_version": "f48ceb6a-3048-4c30-b931-ac90ec2956e1",
				"_created": "Feb 7, 2022, 12:30:53 PM",
				"_updated": "Mar 21, 2022, 12:51:21 PM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
					}
				  }
				},
				"_updatedBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
					}
				  }
				}
			  },
			  {
				"name": "MOHANTEMP",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "Mohan",
				  "lastName": "Daisy",
				  "designation": "MBBS, MD",
				  "inHouse": false,
				  "_id": "deed9f49-b0a0-4440-844d-c378ece32429",
				  "_version": "33e71666-2a89-445b-bf29-503af6410fea",
				  "_updated": "Feb 7, 2022, 12:36:47 PM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:00",
					"endHHMM": "09:05",
					"_id": "482d8622-b51b-4458-ae7b-d8bf5c720d68",
					"_version": "ecd433d1-a31f-43e7-91a4-8c1832e7d9b7",
					"_created": "Jun 3, 2022, 9:19:34 AM",
					"_updated": "Jul 27, 2022, 5:11:59 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
					  "_links": {
						"self": {
						  "href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:05",
					"endHHMM": "09:10",
					"_id": "ccdb0e37-6dd0-42dd-a4fe-e5b36051f2a4",
					"_version": "e92bd079-22b7-43db-b80a-bd2cefa58a8c",
					"_created": "Jun 3, 2022, 9:19:34 AM",
					"_updated": "Jul 27, 2022, 5:11:59 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
					  "_links": {
						"self": {
						  "href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:10",
					"endHHMM": "09:15",
					"_id": "7e3950a8-7512-442f-b7ec-4132c1115c62",
					"_version": "9cdb67b6-3f5a-4952-b5a7-35e52dabf632",
					"_created": "Jun 3, 2022, 9:19:34 AM",
					"_updated": "Jul 27, 2022, 5:11:59 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
					  "_links": {
						"self": {
						  "href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "3e84b810-ab73-447c-b035-105b7f85cc0d",
					"_version": "db1d3fe0-ce81-48bf-a7f1-2e78a9bd263b",
					"_created": "Jun 3, 2022, 9:19:34 AM",
					"_updated": "Jul 27, 2022, 5:11:59 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
					  "_links": {
						"self": {
						  "href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:20",
					"endHHMM": "09:25",
					"_id": "e6b7eda8-3407-4440-ab1f-689a4bf1c755",
					"_version": "d3718852-4d20-4382-b47e-c75c237b86ac",
					"_created": "Jun 3, 2022, 9:19:34 AM",
					"_updated": "Jul 27, 2022, 5:11:59 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
					  "_links": {
						"self": {
						  "href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:25",
					"endHHMM": "09:30",
					"_id": "e7c3f5dd-7b81-4d66-8216-aaf662f1508c",
					"_version": "8b90c155-0ea7-4a4b-bc51-c087f5f8d657",
					"_created": "Jun 3, 2022, 9:19:34 AM",
					"_updated": "Jul 27, 2022, 5:11:59 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
					  "_links": {
						"self": {
						  "href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:30",
					"endHHMM": "09:35",
					"_id": "99813d16-6ce8-4412-a9c4-8ddaca927af7",
					"_version": "d1993d91-2b9d-463c-a8a7-acb08ca91752",
					"_created": "Jun 3, 2022, 9:19:34 AM",
					"_updated": "Jul 27, 2022, 5:11:59 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
					  "_links": {
						"self": {
						  "href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "11:15",
					"endHHMM": "11:20",
					"_id": "9011ce30-fa70-4ac4-b0a3-b6263df7ff61",
					"_version": "5dc38070-ab5e-440d-9d08-6c9443523ac8",
					"_created": "Jun 3, 2022, 9:19:34 AM",
					"_updated": "Jul 27, 2022, 5:11:59 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
					  "_links": {
						"self": {
						  "href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "11:55",
					"endHHMM": "12:00",
					"_id": "54944214-594e-497e-84b1-f33335d49807",
					"_version": "fac1d8e1-8dea-4cde-947a-e9721ccaebdd",
					"_created": "Jun 3, 2022, 9:19:34 AM",
					"_updated": "Jul 27, 2022, 5:11:59 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
					  "_links": {
						"self": {
						  "href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "12:45",
					"endHHMM": "12:50",
					"_id": "0cd73736-b687-4b01-8be5-4501422f7ab3",
					"_version": "48c1e814-8284-49ef-ac66-0867d927ef23",
					"_created": "Jun 3, 2022, 9:19:34 AM",
					"_updated": "Jul 27, 2022, 5:11:59 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
					  "_links": {
						"self": {
						  "href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "13:35",
					"endHHMM": "13:40",
					"_id": "65365608-bee7-4aee-8606-c7d47b3b4177",
					"_version": "0615048d-ed4c-426f-a17f-195069ed6de2",
					"_created": "Jun 3, 2022, 9:19:34 AM",
					"_updated": "Jul 27, 2022, 5:11:59 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
					  "_links": {
						"self": {
						  "href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "14:40",
					"endHHMM": "14:45",
					"_id": "cb76d718-b353-4c97-8dff-6978a937b5bd",
					"_version": "082683d2-eb25-401e-a1ba-0c00fc0367a9",
					"_created": "Jun 3, 2022, 9:19:34 AM",
					"_updated": "Jul 27, 2022, 5:11:59 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
					  "_links": {
						"self": {
						  "href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "15:35",
					"endHHMM": "15:40",
					"_id": "8375505e-ffeb-4bfc-97c3-7d4285b7c9b2",
					"_version": "75004c47-e5d0-4989-88f1-64cbfc11545f",
					"_created": "Jun 3, 2022, 9:19:34 AM",
					"_updated": "Jul 27, 2022, 5:11:59 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
					  "_links": {
						"self": {
						  "href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
						}
					  }
					}
				  },
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "16:35",
					"endHHMM": "16:40",
					"_id": "e0561e73-bb81-4761-8b59-48fd8b4ce14a",
					"_version": "ee54b4c0-5021-4951-b33c-068afd1be70f",
					"_created": "Jun 3, 2022, 9:19:34 AM",
					"_updated": "Jul 27, 2022, 5:11:59 PM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
						}
					  }
					},
					"_updatedBy": {
					  "_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
					  "_links": {
						"self": {
						  "href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
						}
					  }
					}
				  }
				],
				"scheduleDate": "09/23/2022",
				"status": "UPDATED",
				"_id": "8e8b857b-0c89-4578-b86f-af7aa9172714",
				"_version": "3276508a-18b2-42da-a5b8-04c2e92e582b",
				"_created": "Jun 3, 2022, 9:19:34 AM",
				"_updated": "Jul 27, 2022, 5:11:59 PM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
					}
				  }
				},
				"_updatedBy": {
				  "_id": "d9724501-1226-4b42-b9d5-f26faae03d6c",
				  "_links": {
					"self": {
					  "href": "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c"
					}
				  }
				}
			  },
			  {
				"name": "MOHANOPD",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "Mohan",
				  "lastName": "Daisy",
				  "designation": "MBBS, MD",
				  "inHouse": false,
				  "_id": "deed9f49-b0a0-4440-844d-c378ece32429",
				  "_version": "33e71666-2a89-445b-bf29-503af6410fea",
				  "_updated": "Feb 7, 2022, 12:36:47 PM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:00",
					"endHHMM": "09:05",
					"_id": "086963c4-1fa8-47ff-a268-84368f5a4c24",
					"_version": "00f7a252-f523-4db3-b598-faebafa5540c",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:05",
					"endHHMM": "09:10",
					"_id": "dc145d0e-5bcb-43fb-91b5-b827ebce9ffc",
					"_version": "8b8cff9f-2f91-4738-a509-1130d89091b1",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:10",
					"endHHMM": "09:15",
					"_id": "9f85d6b3-6a2a-495c-a273-0fae31942951",
					"_version": "2fda86b9-ac2c-456a-8839-961769cd3b59",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "84b6eda1-a7e3-4a45-a0b6-3020e24cd466",
					"_version": "5b4838b9-07e5-4279-9954-6a82188638a4",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
					  "notes": ""
					},
					"startHHMM": "09:20",
					"endHHMM": "09:25",
					"_id": "1d645393-bcfc-430f-b43a-4203f8422890",
					"_version": "3085cbb6-0c67-406d-9aff-07ebee0a78a6",
					"_created": "Jun 3, 2022, 9:15:07 AM",
					"_updated": "Sep 20, 2022, 6:49:57 AM",
					"_createdBy": {
					  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
					  "_links": {
						"self": {
						  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"scheduleDate": "09/23/2022",
				"status": "UPDATED",
				"_id": "7e70027d-b842-4bdc-8366-ebdc2773e13c",
				"_version": "a66f50c8-6373-4f1b-908d-505bb255d55d",
				"_created": "Jun 3, 2022, 9:15:07 AM",
				"_updated": "Sep 20, 2022, 6:49:57 AM",
				"_createdBy": {
				  "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
				  "_links": {
					"self": {
					  "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
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
				"name": "REGULAR",
				"templateType": {
				  "code": "USER",
				  "description": "User template type"
				},
				"provider": {
				  "firstName": "Mohan",
				  "lastName": "Daisy",
				  "designation": "MBBS, MD",
				  "inHouse": false,
				  "_id": "deed9f49-b0a0-4440-844d-c378ece32429",
				  "_version": "33e71666-2a89-445b-bf29-503af6410fea",
				  "_updated": "Feb 7, 2022, 12:36:47 PM"
				},
				"slots": [
				  {
					"appointmentType": {
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
					  "notes": ""
					},
					"startHHMM": "09:00",
					"endHHMM": "09:05",
					"_id": "603950b6-493b-46a1-b279-3fae8b2e7002",
					"_version": "2915cc06-998c-4a55-befb-7473c5bc091e",
					"_created": "Aug 22, 2022, 7:23:34 PM",
					"_updated": "Sep 20, 2022, 6:50:47 AM",
					"_createdBy": {
					  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
					  "_links": {
						"self": {
						  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
					  "notes": ""
					},
					"startHHMM": "09:05",
					"endHHMM": "09:10",
					"_id": "5950ac09-03ee-4c7c-afdb-13f498240156",
					"_version": "b80add0b-2cf9-444c-91c2-be444af55bfa",
					"_created": "Aug 22, 2022, 7:23:34 PM",
					"_updated": "Sep 20, 2022, 6:50:47 AM",
					"_createdBy": {
					  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
					  "_links": {
						"self": {
						  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
					  "notes": ""
					},
					"startHHMM": "09:10",
					"endHHMM": "09:15",
					"_id": "98af9574-848a-4cb4-a5c8-1c88202e13fa",
					"_version": "8337e9f7-e78d-4ea6-878d-57110da8d379",
					"_created": "Aug 22, 2022, 7:23:34 PM",
					"_updated": "Sep 20, 2022, 6:50:47 AM",
					"_createdBy": {
					  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
					  "_links": {
						"self": {
						  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
					  "notes": ""
					},
					"startHHMM": "09:15",
					"endHHMM": "09:20",
					"_id": "4b337178-b635-4f34-893c-f06d47df2975",
					"_version": "6ca96ed5-74d4-48d7-8664-53021bcefbfc",
					"_created": "Aug 22, 2022, 7:23:34 PM",
					"_updated": "Sep 20, 2022, 6:50:47 AM",
					"_createdBy": {
					  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
					  "_links": {
						"self": {
						  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
				"scheduleDate": "09/23/2022",
				"status": "UPDATED",
				"_id": "2338551a-d602-46df-8269-08eb9451ade6",
				"_version": "cef390b5-625e-45bf-8c51-6d9e426e1abd",
				"_created": "Aug 22, 2022, 7:23:34 PM",
				"_updated": "Sep 20, 2022, 6:50:47 AM",
				"_createdBy": {
				  "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
				  "_links": {
					"self": {
					  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
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
        fireEvent.click(done);
        await waitFor(() => {
          container.getByText("Available Today");
          expect(container.getByText("Available Today")).toBeInTheDocument();
        });
      }
    );

    then("user should see Filtered Available Today (Provider)", () => {
      expect(container.getByText("Available Today")).toBeInTheDocument();
    });

    and("user should see an option to clear the applied filter", () => {
      expect(container.queryAllByTestId("CloseIcon")[0]).toBeInTheDocument();
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
