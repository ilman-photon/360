export const mockResponse = [
  {
    id: 0,
    name: "Adam",
    patientId: "1001",
    phone: "1234123412",
    dob: new Date("01/01/1990").toISOString(),
    email: "email@mail.com",
    username: "email@mail.com",
    status: "locked",
    verified: true,
    lockedDate: "12/01/2022  12:30PM",
  },
  {
    id: 1,
    name: "Eve",
    patientId: "1002",
    phone: "1234123412",
    dob: new Date("01/01/1990").toISOString(),
    email: "email@mail.com",
    username: "email@mail.com",
    status: "unlocked",
    verified: true,
  },
  {
    id: 2,
    name: "Patient1",
    patientId: "1003",
    phone: "1234123412",
    dob: new Date("01/01/1990").toISOString(),
    email: "email@mail.com",
    username: "email@mail.com",
    status: "unlocked",
    verified: false,
  },
  {
    id: 3,
    name: "Patient2",
    patientId: "1004",
    phone: "1234123412",
    dob: new Date("01/01/1990").toISOString(),
    email: "email1@mail.com",
    username: "email1@mail.com",
    status: "locked",
    verified: true,
    lockedDate: "12/01/2022  12:30PM",
  },
  {
    id: 4,
    name: "Patient3",
    patientId: "1005",
    phone: "1234123412",
    dob: new Date("01/01/1990").toISOString(),
    email: "email2@mail.com",
    username: "email2@mail.com",
    status: "locked",
    verified: true,
    lockedDate: "12/01/2022  12:30PM",
  },
  {
    id: 5,
    name: "Patient4",
    patientId: "1006",
    phone: "1234123412",
    dob: new Date("01/01/1990").toISOString(),
    email: "email3@mail.com",
    username: "email3@mail.com",
    status: "locked",
    verified: true,
    lockedDate: "12/01/2022  12:30PM",
  },
  {
    id: 6,
    name: "Patient5",
    patientId: "1007",
    phone: "1234123412",
    dob: new Date("01/01/1990").toISOString(),
    email: "email4@mail.com",
    username: "email4@mail.com",
    status: "locked",
    verified: true,
    lockedDate: "12/01/2022  12:30PM",
  },
  {
    id: 7,
    name: "Patient6",
    patientId: "1008",
    phone: "1234123412",
    dob: new Date("01/01/1990").toISOString(),
    email: "email5@mail.com",
    username: "email5@mail.com",
    status: "locked",
    verified: true,
    lockedDate: "12/01/2022  12:30PM",
  },
];

export default async function getPatientAccount(req, res) {
  const searchData = async (searchText) => {
    if (searchText === "all") {
      return mockResponse;
    } else {
      const response = mockResponse;
      const regex = new RegExp(`^(.*?)${searchText}`, "gi"); // note it's ouside the filter.
      // Recursion.
      const found = (data) =>
        Array.isArray(data) ? data.find(found) : data.match(regex);
      let matches = response.filter(
        (data) => found(data.name) || found(data.email) || found(data.phone)
      );
      return matches;
    }
  };

  if (req.method === "GET") {
    // simulate some test data
    const { keyword } = req.query;
    const searchResult = await searchData(keyword);

    setTimeout(() => {
      res.status(200).json(searchResult);
    }, 3000);
  } else {
    res.status(404).json("Route not found");
  }
}
