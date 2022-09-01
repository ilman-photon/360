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
          image: "http//:img-url",
          name: "Paul Wagner Md",
          rating: "5",
          phoneNumber: "857299998",
          specialties: ["Opthometry", "Opthalmology", "Catarac", "Glaucoma"],
          about:
            "Dr. Esfandiari’s current areas of emphasis include primary eye care, specialty contact lenses, refractive surgery consultation, surgical co-management. Dr. Esfandiari’s knowledge and experience in ophthalmic optics has continually helped patients obtain optimal and healthy vision.show more",
          gender: "Male",
          address:
            "51 West 51st Street, Floor 3, Suite 320 Midtown, New York, NY, 10019",
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
          education:
            "New England College of Optometry, Doctor of Optometry University of California, San Diego (Bachelor’s) ",
          membershipsAffiliation:
            "New England College of Optometry, Doctor of Optometry University of California, San Diego (Bachelor’s)",
        },
      ],
    });
  }
}
