export default function getProviderDetails(req, res) {
  if (req.method === "POST") {
    res.status(200).json({
      providerId: "1",
      image: "/doctor.png",
      name: "Paul Wagner, Md",
      rating: "5",
      phoneNumber: "8572999989",
      specialties: ["Opthometry", "Opthalmology", "Catarac", "Glaucoma"],
      about:
        "Dr. Esfandiari’s current areas of emphasis include primary eye care, specialty contact lenses, refractive surgery consultation, surgical co-management. Dr. Esfandiari’s knowledge and experience in ophthalmic optics has continually helped patients obtain optimal and healthy vision.show more",
      gender: "Male",
      address: [
        {
          addressLine1: "51 West 51st Street",
          addressLine2: "Floor 3, Suite 320 Midtown",
          city: "Florida",
          state: "FR",
          zipcode: "54231",
        },
        {
          addressLine1: "5755 Burke Centre Parkway",
          addressLine2: "Burke, VA 22015-2264 Midtown",
          city: "New York",
          state: "NY",
          zipcode: "10019",
        },
      ],
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
      education: [
        "New England College of Optometry, Doctor of Optometry",
        "University of California, San Diego (Bachelor’s)",
      ],
      membershipsAffiliation: [
        "New England College of Optometry, Doctor of Optometry",
        "University of California, San Diego (Bachelor’s)",
      ],
    });
  }
}
