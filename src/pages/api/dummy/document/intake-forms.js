export default function IntakeForms(req, res) {
  const createData = (id, name, modifiedAt, source, digitalId) => {
    return {
      id,
      name,
      modifiedAt,
      source,
      digitalId,
    };
  };

  const dummyIntakeForms = [
    createData(
      1,
      "Consent to Treat - Patient Financial Responsibility - Assigment of Benefits",
      "09/09/2022 12:00PM",
      "/doctor.png",
      "test-id-123"
    ),
    createData(
      2,
      "Notice of Privacy Practices.pdf",
      "09/09/2022 12:00PM",
      "/doctor.png",
      "test-id-123"
    ),
    createData(
      3,
      "Medical/Vision Exams - Refractions - Prescription Release",
      "09/09/2022 12:00PM",
      "/doctor.png",
      "test-id-123"
    ),
    createData(
      4,
      "Authorization to Disclose Information to Those Involved in My Care",
      "08/08/2022 12:00PM",
      "/doctor.png",
      "test-id-123"
    ),
  ];

  if (req.method === "GET") {
    res.status(200).json(dummyIntakeForms);
  }
}

export const mockData = [
  {
    title: "Insurance Communication",
  },
  {
    title: "Consent to Use and Disclosure",
  },
  {
    title: "Consent to Treat Minor",
  },
  {
    title: "Authorization to Disclose Information about my Care",
  },
  {
    title: "Medical vs Vision Refractions Prescription Release",
  },
  {
    title: "Notice of Privacy Practices",
  },
  {
    title: "Consent to Treat Patient Fin Responsibility Assignment of Benefits",
  },
  {
    title: "Contact Lens Prescription Release",
    description:
      "Lörem ipsum märk-dna oktig, teng. Tening prerat dekanitäl att astrologi tetrevan. Plaren ladörade tuledes därför att simp. Nibel kolegt kagt tukass. On intraskade.",
    formDocument: [
      {
        textValue:
          "I acknowledge that I have received a copy of my final contact lens prescription.",
      },
    ],
  },
];

export const dummyDocument = [
  {
    title: "Insurance Communication",
    description:
      "Insurace claim on behalf of ECP and communication with insurance company.",
    documentUrl: {
      digitalAsset: {},
    },
    formDocument: [
      {
        textValue: `We are happy to file today's visit with your insurance company. There are two forms of insurance our practice accepts:

Vision Insurance
Covers routine vision exam.
Your plan may also have a benefit for eyeglasses and/or contact lenses.
      
Medical Insurance
Filed if a medical condition is diagnosed by the doctor or if you have any systemic health conditions that could have ocular complications (Ex: Glaucoma, cataracts, eye infections, dry eye,eye injuries, diabetes, etc.).
A medical diagnosis often requires additional diagnostic testing.
*We will request a copy of your medical card to keep on file in your chart.
      
I understand I am responsible for all co-pays, co-insurances and deductibles as dictated by my insurance company. Verification of insurance benefits is not a guarantee of payment. We will file all insurance forms on your behalf. Each patient is held financially responsible for payment of all services rendered by your eye doctor and products purchased at this office.
      
I agree to pay an additional collection fee up to the maximum state allowable for all accounts not paid in the time stated on the final monthly statement.`,
      },
      {
        textValue: `The following circumstances would require that full payment will be due at the time of service:

(1)	You do not have insurance or request that we do not file an insurance claim on your behalf.
    
(2)	We were unable to verify your insurance benefits ahead of your appointment today.
    
Why isn't my insurance covering today's visit?
There are two reasons this may have happened:
We were unable to receive eligibility or authorization from your insurance provider; this can happen when we have inaccurate or incomplete information. You were not eligible for services at the time of your appointment
    
I think I do have insurance. How do I get reimbursed? Insurance claim filing may vary by carrier, but in general:
    
●	Contact us within 48 hours of your exam and provide your insurance information and we can process the claim for you.
●	If a refund is due, we will mail this to you once your insurance has been processed and the claim has been	paid
●	Visit your insurance company's website and follow the instructions for submitting a claim.
●	If you require more detail to complete your claim please contact us, we're here to help!
    
What will I need to pay today? You are responsible for payment in full for all services performed and products purchased. Our staff will explain the charges related to any exam fees or ancillary testing performed during your exam.
    
I agree to pay an additional collection fee up to the maximum state allowable for all accounts not paid in the time stated on the final monthly statement.`,
      },
    ],
    isFilled: true,
  },
  {
    title: "Contact Lens Prescription Release",

    description:
      "Lörem ipsum märk-dna oktig, teng. Tening prerat dekanitäl att astrologi tetrevan. Plaren ladörade tuledes därför att simp. Nibel kolegt kagt tukass. On intraskade.",
    documentUrl: {
      digitalAsset: {},
    },
    formDocument: [
      {
        textValue: `I acknowledge that I have received a copy of my final contact lens prescription.`,
      },
    ],
  },
  {
    title: "Consent to Use and Disclosure",
    description:
      "Lörem ipsum exopugt planesamma, minis. Anamil. Mikrol suprabel halalturism reamall. Tåment eska som kanade fast tarende ifall klimatflykting. Giktiga jinas.",
    documentUrl: {
      digitalAsset: {},
    },
    formDocument: [
      {
        textValue: `All patients must sign consent to the use and disclosure of protected health information (PHI) for the purpose of treatment, payment and conducting the dayto-day operations of Clarkson Eyecare. Consent for Purposes of Treatment, Payment and Healthcare Operations My PHI means protected health information, including demographics information collected from me and created or received by my physician, another health care provider, a health plan, my employer or a health care clearinghouse. This PHI relates to my past, present or future physical or mental health or condition and identifies me, or there is reasonable basis to believe it identifies me.

I consent to the use or disclosure of my PHI by Clarkson Eyecare for the purpose of diagnosing or providing treatment to me, obtaining payment for my healthcare bills or to conduct health care operations of Clarkson Eyecare. I understand I have the right to request a restriction as to how my PHI is used or disclosed to carry out treatment, payment or healthcare operations of the practice. Clarkson Eyecare is not required to agree to these restrictions that I may request. However, if Clarkson Eyecare agrees to a restriction that I request, the restriction is binding on Clarkson Eyecare and my physician.
      
I have the right to revoke this consent, in writing, at any time, except to the extent that my physician or Clarkson Eyecare has taken action in reliance on this consent.
I request that payment of Authorized Medicare allowable benefits be made to Clarkson Eyecare for any services furnished to me by Clarkson Eyecare. I also authorize claims to be filed electronically. I authorize payment of my insurance benefits to Clarkson Eyecare. I authorize Clarkson Eyecare to release medical information concerning my illness and treatment to my insurance company. I also authorize release of my personal information to any doctor to whom I may be referred.
      
I understand that I am responsible for payment for all services and products. I must pay co-pays and deductibles as well as services and materials not covered by my insurance plan. Iunderstand there is a returned check fee applied to every returned check. I agree to pay an additional collection fee for all accounts not paid in the time stated on the final monthly statement. I understand verification of eligibility is not a guarantee of payment as stated by my insurance company. Clarkson Eyecare will file all insurance forms if we are a participating provider for your plan; or, will supply you with an itemized statement which you may submit to your insurance carrier. PAYMENT IN FULL IS REQUIRED AT TIME OF SERVICE.
      
I understand I have a right to review Clarkson Eyecare's Notice of Privacy Practices prior to signing this document. Clarkson Eyecare's Notice of Privacy Practice is available upon request at any Clarkson Eyecare office and at www.clarksoneyecare.com. The Notice of Privacy Practices describes the types of use and disclosures of my PHI that will occur in my testament, payment of my bills or in the performance of health care operations of Clarkson Eyecare. The Notice of Privacy Practices also describes my rights and Clarkson Eyecare's duties with respect to my PHI.`,
      },
      {
        textValue: `Electronic Communications

By signing below, I agree and authorize Clarkson Eyecare (and entities or individuals working on Clarkson Eyecare’s behalf) to deliver or cause to be delivered calls, text messages, and/or emails using an automatic telephone dialing system or an artificial or prerecorded voice at the number(s) and/or email address(s) I have provided to schedule an appointment, remind me I am due for an appointment, remind me of an upcoming appointment, contact me that my eyewear or contact lenses are ready, contact me regarding outstanding payments or bills due, contact me about my account, and/or provide me messages containing advertisements or telemarketing. I understand that I may be charged by my phone provider or a third party for such communications and that I can revoke my consent at any time. I understand that I am not required to provide such authorization as a condition of purchasing any property, goods, or services from Clarkson Eyecare.`,
      },
      {
        textValue: `Clarkson Eyecare

Privacy Compliance Official`,
      },
      {
        textValue: `I hereby authorize`,
      },
      {
        textValue: `to act as my agent. My agent has my consent to access medical and/or billingrecords`,
      },
      {
        textValue: `I understand that in the event I may want to remove this person as my agent, I must submit a written request to Clarkson Eyecare.`,
      },
    ],
  },
  {
    title: "Authorization to Disclose Information to Those Involved in My Care",
    description:
      "Lörem ipsum autokår lagisk tevaktig. Mikroras semitet koka böcker i usperat: i kror. Trevuktiga megall, om nibelt och sevoling. Predenera bevadirat jolavingen mar täloktig. Teten nirade otorat, neret och virel.",
    documentUrl: {
      digitalAsset: {},
    },
    formDocument: [
      {
        textValue: `I authorize EyeCare Partners, LLP to disclose or provide my Protected Health Information including, but not limited to:
●	Health and Billing Information
●	Appointment times & Dates
●	Information regarding behavioral and mental health services, substance use disorder treatments, and communicable diseases such as sexually transmitted diseases and human immunodeficiency virus (HIV infection, Acquired Immune Deficiency Syndrome or AIDS related complex) may be shared unless written exclusion is on file.

To the following people: (please print full name)`,
      },
      {
        textValue: `Is there any protected health information you would like to exclude from disclosure to the parties listed above? If yes, fill in here:`,
      },
      {
        textValue: `This authorization has No Expiration unless revoked or terminated—in writing—by the patient or patient’s personal representative`,
      },
    ],
  },
  {
    title:
      "Consent to Treatment of a Minor When Parent/Guardiansare Temporarily Unavailable",
    description:
      "Lörem ipsum dekadertad jin prev. Trollfilter elektropol pseudor eller best. Ott diskapet fastän repän asugon äbonas. Bloggare sar uskap. Kvasining teleling smygflyga pol eftersom trengen.",
    documentUrl: {
      digitalAsset: {},
    },
    formDocument: [],
  },
  {
    title: "MEDICAL/ VISION EXAMS • REFRACTIONS • PRESCRIPTION RELEASE",
    description:
      "Lörem ipsum ansiktsspårning soleliga dessade krov. Homokompetens vangar, hexar bada dekanas. Nunat jåvosonat men usat, även om bioll krons. Pogoling nuvoligen bäsa epityska plarad. San pulverbrev monoserade.",
    documentUrl: {
      digitalAsset: {},
    },
    formDocument: [
      {
        textValue: `The type of care you need will determine if medical or vision insurance is billed
 1. Medical insurance covers medical eye exams relating to any health issues affecting your eyes.
 2. Vision insurance covers routine eye exams specific to how your eyes see with glasses and/or contact lenses.
        
Only one type of insurance may be billed at each visit. It may be necessary to separate services into different visits if you wish for your insurance to cover medical as well as vision services.
        
Refraction The refraction is the testing completed to obtain an eyeglass prescription, or to determine if eyeglasses are needed. Please be advised that the majority of medical insurance companies do not cover refractions, it is billed to the patient in addition to the exam charge and the fee of $50.00 is payable at the time of service. If you have questions or concerns regarding the need for a refraction, please address them with the technician at the beginning of your exam.
        
I understand that my eye doctor is required by the Federal Trade Commission to provide me with a copy of my prescription at the conclusion of my exam or contact lens fitting process, whether or not I desire it or ask for it.
        
Once a final prescription has been determined I will receive either a digital or a paper copy. If possible a digital copy will be made available in the patient portal.  I acknowledge that I have previously accessed the patient portal, or if that is not the case, then I understand that I can register for the patient portal using the Patient Portal link found in the Resources page at   *Enter Practice Email [link?]l*.  
        
I may also receive a paper copy of my final contact lens prescription upon request and I understand that this may involve an additional visit to the office if my prescription is finalized over the phone. `,
      },
    ],
  },
  {
    title: "Notice of Privacy Policies",
    description:
      "Lörem ipsum denade kärlekslås vaktig utan vahet. Vahylig emplastisk fäsm. Mirogisk pross. Ent trerörtad pretes. Krotyck diktig om kanide.",
    documentUrl: {
      digitalAsset: {},
    },
    formDocument: [],
  },
  {
    title:
      "Consent to Treat • Patient Financial Responsibility • Assignment of Benefits",
    description:
      "Lörem ipsum hingen deska. Vagt dodade, spett, dåseren. Ponar kågt eftersom mänas kaföliga. Dare mir. Besm krosukaska.",
    documentUrl: {
      digitalAsset: {},
    },
    formDocument: [
      {
        textValue: `Thank you for trusting us with your eye care needs.  Our team is committed to providing you with expert, compassionate medical and vision care. Please read through this document, ask us any questions you may have, and sign at the bottom.  Please understand that payment of your bills is considered part of your treatment.  We are happy to provide you with a copy of this document upon request.  
HIPAA Privacy Policy   I acknowledge that my EyeCare Partners, LLC practice has made available to me the “Notice of Privacy Practices” in compliance with current HIPAA regulations.  
                          
General Consent to Care  I, the undersigned, for myself, a minor child, or another person for whom I have authority to sign, hereby consent to medical and vision care and treatment, as ordered by a provider, which such medical or vision care and treatment is provided through EyeCare Partners, LLC. This consent includes my consent for all medical and vision services rendered under the general or specific instructions of the provider. I agree and acknowledge that EyeCare Partners, LLC is not liable for the actions or omissions of, or the instructions given by the physicians/providers who treat me while I am a patient.  I am aware that the practice of medicine is not an exact science, and I acknowledge that no guarantees have been made to me as to the result of treatments or examinations.
                          
You have the right to discuss the treatment plan with your physician about the purpose, potential risks, and benefits of any tests ordered for you. If you have concerns regarding any test or treatment recommended by your provider, we encourage you to ask questions.
                          
Insurance   We participate with most insurance plans, including Medicare. If you are insured by a plan we accept, but you do not have an up-to-date insurance card, payment in full for each visit is required until your coverage can be verified. A quote of benefits is not a guarantee of benefits or payment. Charges not covered by your insurance company or benefit plan, as well as any co-payments, deductibles, and co-insurance amounts, are your responsibility. If you have questions about what your insurance or benefit plan will cover, please contact them directly. Ultimately, it is your responsibility to understand your individual coverage. Therefore, we strongly encourage you to check with your insurance company prior to any office visit or procedure.
                          
Referrals Some insurance plans require the patient to obtain a referral for services. Please review your insurance policy to see if a referral is required prior to the office visit.  If a required referral is not on file at the time of the visit, the appointment could be rescheduled or the patient will be responsible for all charges incurred on this date. 
                          
Assignment of Benefits   
I request that payment of authorized insurance benefits for Medicare, Medicaid, and other health insurance and vision benefit plans be paid directly to EyeCare Partners, LLC for all medical, vision, surgical, medication, diagnostic testing, laboratory services, supplies, and equipment provided to me during all courses of treatment and care provided by EyeCare Partners, LLC. I also understand and agree this Assignment of Benefits will continue for as long as I am being treated or cared for by the organization and will constitute a continuing authorization, maintained on file, which will authorize and allow for direct payment to the organization of all applicable and eligible coverage benefits for all subsequent and continuing treatment, services, supplies, and/or care provided. I also realize that I am responsible for paying any non-covered services, co-payments, deductibles, or co-insurance amounts due.
                            
Patient Financial Responsibility   
I understand that I am financially responsible to the organization for any charges not covered by health care or vision plan benefits. It is my responsibility to notify the organization of any changes in my health care or vision coverage. In some cases, exact insurance benefits cannot be determined until the insurance company receives the claim. I am responsible for the entire bill or balance of the bill as determined by the organization and/or my health care insurer or vision benefit plan if the submitted claims or any part of them are denied for payment. All copays and non-covered services are expected to be paid at the time of service. In some cases deductibles and co-insurance will be collected prior to service.
                  
I understand that by signing this form, I am accepting financial responsibility as explained above for payment for all services and products received.
                          
Consent to Call, Email & Text   
I understand and agree that EyeCare Partners, LLC may contact me using automated calls, emails, and/or text messaging. These communications may notify me of appointment reminders, preventative care, test results, treatment recommendations, outstanding balances, or any other communications from EyeCare Partners, LLC. I understand that I may opt out of receiving such communications by informing my provider’s front desk staff.  
                          
This consent and authorization will remain fully effective until it is revoked in writing. You have the right at any time to discontinue services. I certify that I have read and understand the above statements.  
                          
Our practice is committed to providing the best treatment to our patients. 
A comprehensive Financial policy can be provided upon request.`,
      },
    ],
  },
];
