export default function getSugestion(req, res) {
  if (req.method === "POST") {
    res.status(200).json({
      AppointmentType: [
        {
          id: "1",
          name: "Eye Exam",
          description: "Test the health of your eye",
        },
        { id: "2", name: "Follow up", description: "See your doctor today" },
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
      InsuranceCarrier: [
        { id: "1", name: "I'm paying out of my pocket", category: ["general"] },
        {
          id: "2",
          name: "skip and choose insurance later",
          category: ["general"],
        },
        { id: "3", name: "Other Insurance", category: ["general"] },
        { id: "4", name: "Aetna", category: ["popular"] },
        { id: "5", name: "Aetna", category: ["popular"] },
        { id: "6", name: "Blue Cross Blue Shield", category: ["popular"] },
        { id: "7", name: "Cigna", category: ["popular"] },
        { id: "8", name: "Kaiser", category: ["general"] },
      ],
      ListOfProvider: [
        {
          providerId: "1",
          image: "/doctor.png",
          name: "Paul Wagner Md",
          rating: "5",
          phoneNumber: "857299998",
          specialties: ["Opthometry", "Opthalmology", "Catarac", "Glaucoma"],
          about:
            "Dr. Esfandiari’s current areas of emphasis include primary eye care, specialty contact lenses, refractive surgery consultation, surgical co-management. Dr. Esfandiari’s knowledge and experience in ophthalmic optics has continually helped patients obtain optimal and healthy vision.show more",
          gender: "Male",
          address: {
            addressLine1: "673 Herzog Locks",
            addressLine2: "Suite 300",
            city: "New York",
            state: "NY",
            zipcode: "53891",
          },
          distance: "10 mi",
          language: ["English", "Spanish"],
          networkInsurance: [
            "Blue Cross Blue Shield",
            "Cigna",
            "UnitedHeathcare",
            "Blue Cross Blue Shield",
            "Cigna",
            "UnitedHeathcare",
            "Blue Cross Blue Shield",
            "Cigna",
            "UnitedHeathcare",
          ],
          location: {
            latitude: 41.481832,
            longitude: -87.323177,
          },
          education:
            "New England College of Optometry, Doctor of Optometry University of California, San Diego (Bachelor’s) ",
          membershipsAffiliation:
            "New England College of Optometry, Doctor of Optometry University of California, San Diego (Bachelor’s)",
          availability: [
            {
              date: "2022-07-18",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-19",
              list: [],
            },
            {
              date: "2022-07-20",
              list: [
                {
                  time: "08:30am",
                  key: 12222,
                },
                {
                  time: "09:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-21",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-22",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-23",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
          ],
        },
        {
          providerId: "1",
          image: "/doctor.png",
          name: "Paul Wagner Md",
          rating: "5",
          phoneNumber: "857299998",
          specialties: ["Opthometry", "Opthalmology", "Catarac", "Glaucoma"],
          about:
            "Dr. Esfandiari’s current areas of emphasis include primary eye care, specialty contact lenses, refractive surgery consultation, surgical co-management. Dr. Esfandiari’s knowledge and experience in ophthalmic optics has continually helped patients obtain optimal and healthy vision.show more",
          gender: "Male",
          address: {
            addressLine1: "673 Herzog Locks",
            addressLine2: "Suite 300",
            city: "New York",
            state: "NY",
            zipcode: "53891",
          },
          distance: "10 mi",
          language: ["English", "Spanish"],
          networkInsurance: [
            "Blue Cross Blue Shield",
            "Cigna",
            "UnitedHeathcare",
            "Blue Cross Blue Shield",
            "Cigna",
            "UnitedHeathcare",
            "Blue Cross Blue Shield",
            "Cigna",
            "UnitedHeathcare",
          ],
          location: {
            latitude: 41.481832,
            longitude: -87.323177,
          },
          education:
            "New England College of Optometry, Doctor of Optometry University of California, San Diego (Bachelor’s) ",
          membershipsAffiliation:
            "New England College of Optometry, Doctor of Optometry University of California, San Diego (Bachelor’s)",
          availability: [
            {
              date: "2022-07-18",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-19",
              list: [],
            },
            {
              date: "2022-07-20",
              list: [
                {
                  time: "08:30am",
                  key: 12222,
                },
                {
                  time: "09:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-21",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-22",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-23",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
          ],
        },
        {
          providerId: "1",
          image: "/doctor.png",
          name: "Paul Wagner Md",
          rating: "5",
          phoneNumber: "857299998",
          specialties: ["Opthometry", "Opthalmology", "Catarac", "Glaucoma"],
          about:
            "Dr. Esfandiari’s current areas of emphasis include primary eye care, specialty contact lenses, refractive surgery consultation, surgical co-management. Dr. Esfandiari’s knowledge and experience in ophthalmic optics has continually helped patients obtain optimal and healthy vision.show more",
          gender: "Male",
          address: {
            addressLine1: "673 Herzog Locks",
            addressLine2: "Suite 300",
            city: "New York",
            state: "NY",
            zipcode: "53891",
          },
          distance: "10 mi",
          language: ["English", "Spanish"],
          networkInsurance: [
            "Blue Cross Blue Shield",
            "Cigna",
            "UnitedHeathcare",
            "Blue Cross Blue Shield",
            "Cigna",
            "UnitedHeathcare",
            "Blue Cross Blue Shield",
            "Cigna",
            "UnitedHeathcare",
          ],
          location: {
            latitude: 41.481832,
            longitude: -87.323177,
          },
          education:
            "New England College of Optometry, Doctor of Optometry University of California, San Diego (Bachelor’s) ",
          membershipsAffiliation:
            "New England College of Optometry, Doctor of Optometry University of California, San Diego (Bachelor’s)",
          availability: [
            {
              date: "2022-07-18",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-19",
              list: [],
            },
            {
              date: "2022-07-20",
              list: [
                {
                  time: "08:30am",
                  key: 12222,
                },
                {
                  time: "09:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-21",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-22",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-23",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
          ],
        },
      ],
      FilterbyData: [
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
              name: "Bahasa",
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
    });
  }
}
