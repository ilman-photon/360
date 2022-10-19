import { defineFeature, loadFeature } from "jest-cucumber";
import { act, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import Cookies from "universal-cookie";
import mediaQuery from "css-mediaquery";
import HomePage from "../../src/pages/patient";

import { getServerSideProps } from "../../src/pages/patient/mfa";

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
      "appointmentDate": "10/19/2023",
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

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get() {
      return MockCookies.result;
    }
    remove() {
      return jest.fn();
    }
  }
  return MockCookies;
});

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint5/EPP-1605.feature"
);

defineFeature(feature, (test) => {
  let container;
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test("EPIC_EPP-3_STORY_EPP-1605-Verify User should not be able to see the option to cancel an optometry appointment 4 hours before the time of appointment", ({}) => {
    defaultValidation();
  });

  test('"EPIC_EPP-3_STORY_EPP-1605-Verify User should not be able to see the option to cancel an optometry appointment 4 hours before the time of appointment"', ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the  Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      defaultValidation();
    });

    and("User clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("User lands on “Appointments” screen", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock
      .onGet(
        `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
      )
      .reply(200, upcoming);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
      window.matchMedia = createMatchMedia("700px");
      const response = await getServerSideProps({
        req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
        res: jest.fn(),
      });
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      global.navigator.geolocation = mockGeolocation;
      Cookies.result = { authorized: true };
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByText("Patient Information"));
      expect(response).toEqual({
        props: {
          isStepTwo: false,
        },
      });
    });

    and(
      /^User should not be able to see the option to cancel an optometry appointment (\d+) hours before the time of appointment$/,
      (arg0) => {
        const cancelButton = container.getByRole("button", {
          name: "Cancel",
        });
        expect(cancelButton).toBeInTheDocument();
        expect(cancelButton).toBeVisible();
      }
    );
  });

  test("EPIC_EPP-3_STORY_EPP-1605-Verify User should not be able to see the option to cancel an optometry appointment 4 /24 hours before the time of appointment when user clicks F12 on the console", ({}) => {
    defaultValidation();
  });
});
