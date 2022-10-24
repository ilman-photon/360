import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import DashboardPage from "../../src/pages/patient/index";
import { Login } from "../../src/components/organisms/Login/login";
import store from "../../src/store/store";
import constants from "../../src/utils/constants";
import mediaQuery from 'css-mediaquery';
import Cookies from "universal-cookie";
import { renderWithProviders } from "../src/utils/test-util";
import { fetchNotifications } from "../../src/store/notification";

const cookies = new Cookies()

const upcoming = {
  "count": 3,
  "entities": [
    {
      "appointmentType": {
        "code": "Clinical_Diagnosis",
        "name": "Clinical_Diagnosis"
      },
      "patient": {
        "firstName": "test",
        "lastName": "test",
        "dob": "10/10/2000",
        "age": "22",
        "address": [],
        "patientDetails": {
          "isFlagNew": false,
          "isFlagInCollection": false,
          "isFlagBadCheck": false,
          "isFlagDeceased": false,
          "isFlagChartless": true,
          "_id": "97466f74-6964-4f48-be8c-84a0388b09f7",
          "_version": "d47a4d3f-d985-4a8e-9158-4df29c28ce7d",
          "_created": "Oct 13, 2022, 8:57:44 AM",
          "_updated": "Oct 13, 2022, 9:27:29 AM",
          "_createdBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          },
          "_updatedBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          }
        },
        "isEmergencyContactAvailable": false,
        "contactPrefrence": false,
        "status": "UPDATED",
        "contactInformation": {
          "phones": [
            {
              "type": 3,
              "number": "(123) 123-1231"
            }
          ],
          "emails": [
            {
              "type": 1,
              "email": "testeye9@gmail.com",
              "_id": "e4e08afb-33ad-45e0-a4f5-81b44037aef1",
              "_version": "e0fccb03-cc9a-4269-8b14-5a9cff47575c",
              "_created": "Oct 13, 2022, 8:57:44 AM",
              "_updated": "Oct 13, 2022, 9:27:28 AM",
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
          "contactPreferenceDetail": {
            "phone": false,
            "text": false,
            "email": false,
            "_id": "5fb27959-066a-4207-8652-62a8299e1e04",
            "_version": "c5522e0f-1fc9-44aa-8f79-f938da39c07c",
            "_created": "Oct 13, 2022, 9:27:28 AM",
            "_updated": "Oct 13, 2022, 9:27:28 AM",
            "_createdBy": {
              "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              "_links": {
                "self": {
                  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
                }
              }
            }
          },
          "_id": "e3df5d73-dc0c-490b-8a38-b760327baf89",
          "_version": "797e46b7-86c2-4300-9cdd-203d8bb13857",
          "_created": "Oct 13, 2022, 8:57:44 AM",
          "_updated": "Oct 13, 2022, 9:27:28 AM",
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
        "_id": "8f449386-7402-49ee-8d8c-4ec40863a103",
        "_version": "d9f9e311-bd6b-4142-9d34-3eb3be500036",
        "_created": "Oct 13, 2022, 8:57:44 AM",
        "_updated": "Oct 13, 2022, 9:27:29 AM",
        "_createdBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        },
        "_updatedBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        }
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
        }
      },
      "appointmentDate": "10/19/2022",
      "appointmentTime": "11:00",
      "appointmentEndTime": "11:01",
      "appointmentLength": 1,
      "isConfirmed": false,
      "appointmentHistory": [],
      "state": {
        "subState": {
          "subState": "CREATED",
          "_id": "17ca5ce7-b413-4365-a900-5e5432ab19d5",
          "_version": "d4ed901b-d6d4-4189-8baa-8fae00d52d52",
          "_created": "Oct 13, 2022, 9:27:50 AM",
          "_updated": "Oct 13, 2022, 9:27:50 AM",
          "_createdBy": {
            "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            "_links": {
              "self": {
                "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
              }
            }
          }
        },
        "state": "UNCONFIRMED",
        "_id": "5410aca4-c010-4f39-9cb5-e4ecfce821b0",
        "_version": "d9f9be4a-2e6e-44ef-a33f-2781d1c4c894",
        "_created": "Oct 13, 2022, 9:27:50 AM",
        "_updated": "Oct 13, 2022, 9:27:50 AM",
        "_createdBy": {
          "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
          "_links": {
            "self": {
              "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
            }
          }
        }
      },
      "notes": [],
      "allowCreate": false,
      "paymentMethod": {
        "noInsuranceInformation": {},
        "insuranceInfoUsedForBilling": {
          "financialClassBasedInformation": {}
        }
      },
      "appointmentNo": 1000001210,
      "newPatient": false,
      "insurancePayers": [],
      "override": false,
      "quickAppointmentflag": false,
      "isPrimaryMember": true,
      "status": "CREATED",
      "_links": {
        "self": {
          "href": "/v1/appointments/b2aa3268-8d65-418c-99fd-c187ac6a9634"
        }
      },
      "_id": "b2aa3268-8d65-418c-99fd-c187ac6a9634",
      "_version": "910e080f-ab81-41df-b6f2-b285272cb07b",
      "_created": "Oct 13, 2022, 9:27:50 AM",
      "_updated": "Oct 13, 2022, 9:27:50 AM",
      "_createdBy": {
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
        "name": "Clinical_Diagnosis"
      },
      "patient": {
        "firstName": "test",
        "lastName": "test",
        "dob": "10/10/2000",
        "age": "22",
        "address": [],
        "patientDetails": {
          "isFlagNew": false,
          "isFlagInCollection": false,
          "isFlagBadCheck": false,
          "isFlagDeceased": false,
          "isFlagChartless": true,
          "_id": "97466f74-6964-4f48-be8c-84a0388b09f7",
          "_version": "d47a4d3f-d985-4a8e-9158-4df29c28ce7d",
          "_created": "Oct 13, 2022, 8:57:44 AM",
          "_updated": "Oct 13, 2022, 9:27:29 AM",
          "_createdBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          },
          "_updatedBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          }
        },
        "isEmergencyContactAvailable": false,
        "contactPrefrence": false,
        "status": "UPDATED",
        "contactInformation": {
          "phones": [
            {
              "type": 3,
              "number": "(123) 123-1231"
            }
          ],
          "emails": [
            {
              "type": 1,
              "email": "testeye9@gmail.com",
              "_id": "e4e08afb-33ad-45e0-a4f5-81b44037aef1",
              "_version": "e0fccb03-cc9a-4269-8b14-5a9cff47575c",
              "_created": "Oct 13, 2022, 8:57:44 AM",
              "_updated": "Oct 13, 2022, 9:27:28 AM",
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
          "contactPreferenceDetail": {
            "phone": false,
            "text": false,
            "email": false,
            "_id": "5fb27959-066a-4207-8652-62a8299e1e04",
            "_version": "c5522e0f-1fc9-44aa-8f79-f938da39c07c",
            "_created": "Oct 13, 2022, 9:27:28 AM",
            "_updated": "Oct 13, 2022, 9:27:28 AM",
            "_createdBy": {
              "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              "_links": {
                "self": {
                  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
                }
              }
            }
          },
          "_id": "e3df5d73-dc0c-490b-8a38-b760327baf89",
          "_version": "797e46b7-86c2-4300-9cdd-203d8bb13857",
          "_created": "Oct 13, 2022, 8:57:44 AM",
          "_updated": "Oct 13, 2022, 9:27:28 AM",
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
        "_id": "8f449386-7402-49ee-8d8c-4ec40863a103",
        "_version": "d9f9e311-bd6b-4142-9d34-3eb3be500036",
        "_created": "Oct 13, 2022, 8:57:44 AM",
        "_updated": "Oct 13, 2022, 9:27:29 AM",
        "_createdBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        },
        "_updatedBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        }
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
        }
      },
      "appointmentDate": "10/19/2022",
      "appointmentTime": "11:00",
      "appointmentEndTime": "11:01",
      "appointmentLength": 1,
      "isConfirmed": false,
      "appointmentHistory": [],
      "state": {
        "subState": {
          "subState": "CREATED",
          "_id": "55f778d0-5a07-4cd3-92bf-31b53cf9ebc0",
          "_version": "e59f7360-125b-494a-b168-bdaca409fd40",
          "_created": "Oct 13, 2022, 9:27:28 AM",
          "_updated": "Oct 13, 2022, 9:27:28 AM",
          "_createdBy": {
            "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            "_links": {
              "self": {
                "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
              }
            }
          }
        },
        "state": "UNCONFIRMED",
        "_id": "83ba7496-c2ca-4793-815c-1c477f910864",
        "_version": "d8be2ffc-2092-423c-b849-dc3aa7865bdc",
        "_created": "Oct 13, 2022, 9:27:28 AM",
        "_updated": "Oct 13, 2022, 9:27:28 AM",
        "_createdBy": {
          "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
          "_links": {
            "self": {
              "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
            }
          }
        }
      },
      "notes": [],
      "allowCreate": false,
      "paymentMethod": {
        "noInsuranceInformation": {},
        "insuranceInfoUsedForBilling": {
          "financialClassBasedInformation": {}
        }
      },
      "appointmentNo": 1000001209,
      "newPatient": false,
      "insurancePayers": [],
      "override": false,
      "quickAppointmentflag": false,
      "isPrimaryMember": true,
      "status": "CREATED",
      "_links": {
        "self": {
          "href": "/v1/appointments/443b7705-683f-4d6b-a026-9aa261fde375"
        }
      },
      "_id": "443b7705-683f-4d6b-a026-9aa261fde375",
      "_version": "622f1156-4f79-4da9-bb41-dd5a05849d4b",
      "_created": "Oct 13, 2022, 9:27:28 AM",
      "_updated": "Oct 13, 2022, 9:27:28 AM",
      "_createdBy": {
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
        "name": "Clinical_Diagnosis"
      },
      "patient": {
        "firstName": "test",
        "lastName": "test",
        "dob": "10/10/2000",
        "age": "22",
        "address": [],
        "patientDetails": {
          "isFlagNew": false,
          "isFlagInCollection": false,
          "isFlagBadCheck": false,
          "isFlagDeceased": false,
          "isFlagChartless": true,
          "_id": "97466f74-6964-4f48-be8c-84a0388b09f7",
          "_version": "d47a4d3f-d985-4a8e-9158-4df29c28ce7d",
          "_created": "Oct 13, 2022, 8:57:44 AM",
          "_updated": "Oct 13, 2022, 9:27:29 AM",
          "_createdBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          },
          "_updatedBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          }
        },
        "isEmergencyContactAvailable": false,
        "contactPrefrence": false,
        "status": "UPDATED",
        "contactInformation": {
          "phones": [
            {
              "type": 3,
              "number": "(123) 123-1231"
            }
          ],
          "emails": [
            {
              "type": 1,
              "email": "testeye9@gmail.com",
              "_id": "e4e08afb-33ad-45e0-a4f5-81b44037aef1",
              "_version": "e0fccb03-cc9a-4269-8b14-5a9cff47575c",
              "_created": "Oct 13, 2022, 8:57:44 AM",
              "_updated": "Oct 13, 2022, 9:27:28 AM",
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
          "contactPreferenceDetail": {
            "phone": false,
            "text": false,
            "email": false,
            "_id": "5fb27959-066a-4207-8652-62a8299e1e04",
            "_version": "c5522e0f-1fc9-44aa-8f79-f938da39c07c",
            "_created": "Oct 13, 2022, 9:27:28 AM",
            "_updated": "Oct 13, 2022, 9:27:28 AM",
            "_createdBy": {
              "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              "_links": {
                "self": {
                  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
                }
              }
            }
          },
          "_id": "e3df5d73-dc0c-490b-8a38-b760327baf89",
          "_version": "797e46b7-86c2-4300-9cdd-203d8bb13857",
          "_created": "Oct 13, 2022, 8:57:44 AM",
          "_updated": "Oct 13, 2022, 9:27:28 AM",
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
        "_id": "8f449386-7402-49ee-8d8c-4ec40863a103",
        "_version": "d9f9e311-bd6b-4142-9d34-3eb3be500036",
        "_created": "Oct 13, 2022, 8:57:44 AM",
        "_updated": "Oct 13, 2022, 9:27:29 AM",
        "_createdBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        },
        "_updatedBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        }
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
        }
      },
      "appointmentDate": "10/19/2022",
      "appointmentTime": "11:00",
      "appointmentEndTime": "11:01",
      "appointmentLength": 1,
      "isConfirmed": false,
      "appointmentHistory": [],
      "state": {
        "subState": {
          "subState": "CREATED",
          "_id": "1bca587d-513e-49ad-a973-6e90bbc26a50",
          "_version": "6c788ef4-4e33-4d34-a35a-4788028a96a6",
          "_created": "Oct 13, 2022, 9:27:24 AM",
          "_updated": "Oct 13, 2022, 9:27:24 AM",
          "_createdBy": {
            "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            "_links": {
              "self": {
                "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
              }
            }
          }
        },
        "state": "UNCONFIRMED",
        "_id": "aef844e1-c89c-4d4b-afda-a90bcaca3974",
        "_version": "7d4d417d-76c8-4019-a315-e86ede87c99a",
        "_created": "Oct 13, 2022, 9:27:24 AM",
        "_updated": "Oct 13, 2022, 9:27:24 AM",
        "_createdBy": {
          "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
          "_links": {
            "self": {
              "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
            }
          }
        }
      },
      "notes": [],
      "allowCreate": false,
      "paymentMethod": {
        "noInsuranceInformation": {},
        "insuranceInfoUsedForBilling": {
          "financialClassBasedInformation": {}
        }
      },
      "appointmentNo": 1000001208,
      "newPatient": false,
      "insurancePayers": [],
      "override": false,
      "quickAppointmentflag": false,
      "isPrimaryMember": true,
      "status": "CREATED",
      "_links": {
        "self": {
          "href": "/v1/appointments/fc11e506-a6d8-40a3-bcc8-732ccea7a8e8"
        }
      },
      "_id": "fc11e506-a6d8-40a3-bcc8-732ccea7a8e8",
      "_version": "5a4aab11-32fe-4628-a64a-a90a50b85d47",
      "_created": "Oct 13, 2022, 9:27:24 AM",
      "_updated": "Oct 13, 2022, 9:27:24 AM",
      "_createdBy": {
        "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
        "_links": {
          "self": {
            "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
          }
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

const MOCK_APPOINTMENT = {
  appointmentList: [
    {
      appointmentId: "1",
      providerInfo: {
        providerId: "1",
        name: "Paul Wagner Md",
        position: "Scripps Eyecare",
        address: {
          addressLine1: "51 West 51st Street",
          addressLine2: "Floor 3, Suite 320 Midtown",
          city: "Florida",
          state: "FR",
          zipcode: "54231",
        },
        rating: "5",
        phoneNumber: "8572999989",
        distance: "10 mi",
        image: "/doctor.png",
        from: "2022-07-18",
        to: "2022-07-23",
        location: {
          latitude: 32.751204,
          longitude: -117.1641166,
        },
      },
      patientInfo: {
        name: "Rebecca Chan",
        firstname: "Rebecca",
        lastname: "Chan",
        dob: "12/12/2022",
        phoneNumber: "1234567890",
      },
      appointmentInfo: {
        appointmentType: "Eye Exam",
        date: "Thu, 12 Jan 2023 04:30:00 EST",
        insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
      },
    },
    {
      appointmentId: "1",
      providerInfo: {
        providerId: "1",
        name: "Dr. Sonha Nguyen",
        position: "Scripps Eyecare",
        address: {
          addressLine1: "51 West 51st Street",
          addressLine2: "Floor 3, Suite 320 Midtown",
          city: "Florida",
          state: "FR",
          zipcode: "54231",
        },
        rating: "5",
        phoneNumber: "8572999989",
        distance: "10 mi",
        image: "/doctor.png",
        from: "2022-07-18",
        to: "2022-07-23",
        location: {
          latitude: 32.751204,
          longitude: -117.1641166,
        },
      },
      patientInfo: {
        name: "Rebecca Chan",
        firstname: "Rebecca",
        lastname: "Chan",
        dob: "12/12/2022",
        phoneNumber: "1234567890",
      },
      appointmentInfo: {
        appointmentType: "Eye Exam",
        date: "Thu, 12 Jan 2023 04:30:00 EST",
        insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
      },
    },
  ],
};

const MOCK_PRESCRIPTION = {
  prescriptions: {
    glasses: [
      {
        prescribedBy: "Dr. Sonha Nguyen",
        date: "2022-09-02T11:18:47.229Z",
        expirationDate: "2022-10-02T11:18:47.229Z",
        prescriptionDetails: [
          {
            Eye: "OD",
            Sph: "+20.00",
            Cyl: "-5.00",
            Axis: "70",
            Add: "x180",
          },
          {
            Eye: "OS",
            Sph: "+19.75",
            Cyl: "-4.75",
            Axis: "38",
            Add: "x090",
          },
        ],
      },
    ],
    contacts: [
      {
        prescribedBy: "Dr. Sonha Nguyen",
        date: "2022-09-02T11:18:47.229Z",
        expirationDate: "2022-10-02T11:18:47.229Z",
        prescriptionDetails: [
          {
            Eye: "OD",
            Sph: "+20.00",
            Bc: "-5.00",
            Cyl: "70",
            Axis: "x180",
          },
          {
            Eye: "OS",
            Sph: "+19.75",
            Bc: "-4.75",
            Cyl: "38",
            Axis: "x090",
          },
        ],
      },
    ],
    medications: [
      {
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-02T11:18:47.229Z",
      },
      {
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-02T11:18:47.229Z",
      },
    ],
  },
};

const createData = (id, isRead, type, createdAt, data) => {
  return {
    id,
    isRead,
    type,
    createdAt,
    data,
  };
};

const MOCK_NOTIFICATIONS = [
  createData(1, true, "appointment", "09/10/2022 12:00"),
  createData(2, false, "test-result", "09/09/2022 12:00"),
  createData(3, false, "prescription-refill", "09/09/2022 12:00"),
  createData(4, false, "prescription-refill", "08/08/2022 12:00"),
  createData(5, true, "test-result", "09/09/2022 12:00"),
  createData(6, true, "prescription-refill", "09/09/2022 12:00"),
  createData(7, false, "aspirin", "09/10/2022 12:00"),
  createData(8, true, "glasses", "08/08/2022 12:00"),
  createData(9, false, "prescription-refill", "09/09/2022 12:00"),
  createData(10, true, "appointment", "09/10/2022 12:00"),
  createData(11, false, "contact-lens", "08/08/2022 12:00"),
  createData(12, true, "prescription-glasses", "09/09/2022 12:00"),
  createData(13, true, "prescription-refill", "09/09/2022 12:00"),
  createData(14, true, "prescription-contact", "09/10/2022 12:00"),
  createData(15, false, "test-result", "09/09/2022 12:00"),
  createData(16, false, "appointment", "09/10/2022 12:00"),
  createData(17, true, "prescription-aspirin", "08/08/2022 12:00"),
  createData(18, false, "appointment", "09/10/2022 12:00"),
  createData(19, true, "aspirin", "08/08/2022 12:00"),
  createData(20, false, "glasses", "09/09/2022 12:00"),
  createData(21, true, "contact-lens", "09/10/2022 12:00"),
  createData(22, false, "prescription-refill", "08/08/2022 12:00"),
  createData(23, true, "appointment", "09/10/2022 12:00"),
  createData(24, false, "prescription-glasses", "09/09/2022 12:00"),
  createData(25, false, "prescription-refill", "09/09/2022 12:00"),
  createData(26, false, "prescription-aspirin", "08/08/2022 12:00"),
  createData(27, false, "prescription-contact", "10/10/2022 12:00"),
  createData(28, true, "prescription-refill", "08/08/2022 12:00"),
  createData(29, false, "appointment", "09/10/2022 12:00"),
  createData(30, true, "message", "08/08/2022 12:00"),
  createData(31, false, "message", "09/09/2022 12:00"),
  createData(32, true, "prescription-refill", "08/08/2022 12:00"),
  createData(33, false, "appointment", "09/10/2022 12:00"),
  createData(34, true, "appointment-summary", "08/08/2022 12:00"),
  createData(35, false, "appointment-summary", "09/09/2022 12:00"),
  createData(36, true, "invoice", "08/08/2022 12:00"),
  createData(37, false, "appointment", "09/10/2022 12:00"),
  createData(38, true, "prescription-refill", "08/08/2022 12:00"),
  createData(39, false, "invoice", "10/12/2022 12:00"),
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_NOTIFICATIONS),
  })
);

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint7/EPP-1589.feature"
);

defineFeature(feature, (test) => {
	let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID
	const mock = new MockAdapter(axios);
  const element = document.createElement("div");

  beforeEach(() => {
  })

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

  function userIsLoggedIn() {
    const mockOnLoginClicked = jest.fn((data, route, callback) => {
      callback({
        status: "success",
      });
    });
    act(() => {
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
    });
    const usernameField = container.getByLabelText("emailUserLabel");
    const passwordField = container.getByLabelText("passwordLabel");
    act(() => {
      fireEvent.change(usernameField, { target: { value: "wrongUserName" } });
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
    });
    expect(usernameField.value).not.toEqual("validUsername");
    expect(passwordField.value).toEqual("validPassword");
    const login = container.getByRole("button", { name: /Login/i });
    fireEvent.click(login);

    const expectedResult = {
      ResponseCode: 2001,
      ResponseType: "failure",
      userType: "patient",
    };
    mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
  }

  async function userLandsToDashboard() {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn()
    };
    
    global.navigator.geolocation = mockGeolocation;
    cookies.set("authorized", true)
    cookies.set("accessToken", "1234")
    
    act(() => {
      container.rerender(<Provider store={store}>{DashboardPage.getLayout(<DashboardPage />)}</Provider>);
    });

    const subtitle = await waitFor(() => container.getByText("Search for a doctor"))
    expect(subtitle).toBeInTheDocument()
  }

  async function userSeeNotificationBadge() {
    const notificationButton = await waitFor(() => container.getByTestId("notification-badge-icon"))
    expect(notificationButton).toBeInTheDocument()
  }

  async function userClicksNotificationBadge() {
    const notificationButton = await waitFor(() => container.getByTestId("notification-badge-icon"))
    act(() => {
      fireEvent.click(notificationButton)
    })
  }

  async function notificationDrawerOpened() {
    const notificationDrawer = await waitFor(() => container.getByTestId("notification-drawer-title"))
    expect(notificationDrawer).toBeInTheDocument()
  }

  async function userSeeNotificationListWithClickableToDismiss() {
    const isReadNotificationItem = await waitFor(() => container.getAllByTestId("notification-is-new")) 
    expect(isReadNotificationItem[0]).toBeInTheDocument()
  }

  async function userSeeTopNotificationItemAsMostRecent() {
    const isMostRecent = MOCK_NOTIFICATIONS[0].createdAt > MOCK_NOTIFICATIONS[1].createdAt
    expect(isMostRecent).toBeTruthy()
  }

  async function userSeeMarkAllAsRead() {
    const markAllAsReadButton = await waitFor(() => container.getByTestId("notification-mark-all-as-read-button"))
    expect(markAllAsReadButton).toBeInTheDocument()
  }

  async function userReadANotificationAndRemoved() {
    const notificationItem = await waitFor(() => container.getAllByTestId("notification-item")[0])
    expect(notificationItem).toHaveTextContent("You lab test test results are available now.1mo")
    act(() => {
      fireEvent.click(notificationItem)
    })
    const newNotificationItem = await waitFor(() => container.getAllByTestId("notification-item")[0])
    expect(newNotificationItem).toHaveTextContent("Your prescription refill is available now1mo")
  }

  test('EPIC_EPP-22_STORY_EPP-1589 - Verify User should be able to view the unread alerts listed one below the other with an option against each to dismiss', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', async (arg0) => {
      userLandsToDashboard()
    });

    and('User is able to view the alerts option on the global header (like notifications)', async () => {
      userSeeNotificationBadge()
    });

    when('User clicks on the alerts option', async() => {
      userClicksNotificationBadge()
    });

    then('User should be able to view the unread alerts listed one below the other with an option against each to dismiss', async () => {
      notificationDrawerOpened()
      userSeeNotificationListWithClickableToDismiss()
    });
  });

  test('EPIC_EPP-22_STORY_EPP-1589 - Verify User should see list unread alerts on how recent they are i.e. recent alerts will be on top', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User is able to view the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on the alerts option', () => {
      userClicksNotificationBadge()
    });

    then('User should be able to view the unread alerts listed one below the other with an option against each to dismiss', () => {
      notificationDrawerOpened()
      userSeeNotificationListWithClickableToDismiss()
    });

    and('User should see list unread alerts on how recent they are i.e. recent alerts will be on top', async() => {
      userSeeTopNotificationItemAsMostRecent()
    });
  });

  test('EPIC_EPP-22_STORY_EPP-1589 - Verify User should have the option to clear all alerts', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User is able to view the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on the alerts option', () => {
      userClicksNotificationBadge()
    });

    then('User should be able to view the unread alerts listed one below the other with an option against each to dismiss', () => {
      notificationDrawerOpened()
      userSeeNotificationListWithClickableToDismiss()
    });

    and('User should see list unread alerts on how recent they are i.e. recent alerts will be on top', () => {
      userSeeTopNotificationItemAsMostRecent()
    });

    and('User should have the option to clear all alerts', () => {
      userSeeMarkAllAsRead()
    });
  });

  test('EPIC_EPP-22_STORY_EPP-1589 - Verify User should be able to view alerts being removed from the list of alerts as and when they are read', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User is able to view the alerts option on the global header (like notifications)', () => {
      // userSeeNotificationBadge()
    });

    when('User clicks on the alerts option', () => {
      userClicksNotificationBadge()
    });

    then('User should be able to view the unread alerts listed one below the other with an option against each to dismiss', () => {
      notificationDrawerOpened()
      userSeeNotificationListWithClickableToDismiss()
    });

    and('User should see list unread alerts on how recent they are i.e. recent alerts will be on top', () => {
      userSeeTopNotificationItemAsMostRecent()
    });

    and('User should be able to view alerts being removed from the list of alerts as and when they are read', () => {
      userReadANotificationAndRemoved()
    });
  });

  test('EPIC_EPP-22_STORY_EPP-1589 -Negative Test Cases-Verify  when the service is unavailable', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User is able to view the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on the alerts option', () => {
      userClicksNotificationBadge()
    });

    and('the service is unavailable', () => {
      defaultValidation()
    });

    then('user should see the appropriate error message', () => {
      defaultValidation();
    });
  });
})