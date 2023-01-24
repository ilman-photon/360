export default function PrintDocumentForm({
  title = "",
  defaultDataValue = {},
}) {
  const defaultStyle = { whiteSpace: "pre-line", fontSize: "12px" };
  function renderDocumentComponent() {
    //Add condition to show component for each document
    if (title?.indexOf("Assignment of Benefits") > -1) {
      return (
        <>
          <div>
            <p>
              Consent to Treat • Patient Financial Responsibility • Assignment
              of Benefits<br></br>
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                fontSize: "12px",
              }}
            >
              <div style={{ width: "50%" }}>
                <p style={{ ...defaultStyle }}>
                  Patient Name: {defaultDataValue?.patientName || ""}
                  <br></br>
                </p>
              </div>
              <div style={{ width: "50%" }}>
                <p style={{ ...defaultStyle }}>
                  Date of Birth: {defaultDataValue?.dob || ""}
                  <br></br>
                </p>
              </div>
            </div>
            <br></br>
            <p style={{ whiteSpace: "pre-line", fontSize: "12px" }}>
              {defaultDataValue?.textInfo || ""}
              <br></br>
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                fontSize: "12px",
              }}
            >
              <div style={{ width: "50%" }}>
                <p style={{ ...defaultStyle }}>
                  Patient/Legal Representative Signature:{" "}
                  {defaultDataValue?.patientName || ""}
                  <br></br>
                </p>
              </div>
              <div style={{ width: "50%" }}>
                <p style={{ ...defaultStyle }}>
                  Date: {defaultDataValue?.signDate || ""}
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </>
      );
    } else if (
      title?.indexOf("Medical vs Vision") > -1 ||
      title?.indexOf("VISION EXAM") > -1
    ) {
      return (
        <>
          <div>
            <p>
              MEDICAL/ VISION EXAMS • REFRACTIONS • PRESCRIPTION RELEASE
              <br></br>
            </p>
            <p style={{ ...defaultStyle }}>
              {defaultDataValue?.textInfo || ""}
              <br></br>
            </p>
            <p></p>
            {/* Signed */}
          </div>
        </>
      );
    } else if (title?.indexOf("Insurance Communication") > -1) {
      return (
        <>
          <div>
            <p>
              Insurance Communication<br></br>
            </p>
            <p style={{ ...defaultStyle }}>
              {defaultDataValue?.textInfo || ""}
              <br></br>
            </p>
            <p></p>
            {/* Signed */}
            <p>
              Private Pay Communication<br></br>
            </p>
            <p style={{ ...defaultStyle }}>
              {defaultDataValue?.textInfo2 || ""}
              <br></br>
            </p>
            {/* Signed */}
          </div>
        </>
      );
    } else if (title?.indexOf("Contact Lens Prescription") > -1) {
      return (
        <>
          <div>
            <p>
              CONTACT LENS PRESCRIPTION RELEASE<br></br>
            </p>
            <p style={{ ...defaultStyle }}>
              {defaultDataValue?.textInfo || ""}
              <br></br>
            </p>
            <p></p>
            <p style={{ ...defaultStyle }}>
              Patient Signature: Date: {defaultDataValue?.signDate || ""}
            </p>
          </div>
        </>
      );
    } else if (title?.indexOf("Authorization to Disclose") > -1) {
      return (
        <>
          <div>
            <p>
              Authorization to Disclose Information to Those Involved in My Care
              <br></br>
            </p>
            <p style={{ ...defaultStyle }}>
              {defaultDataValue?.textInfo || ""}
              <br></br>
            </p>
            <p></p>
            <p style={{ ...defaultStyle }}>
              Name: {defaultDataValue?.patient1?.name || ""}
              <br></br>
            </p>
            <p style={{ ...defaultStyle }}>
              Relationship: {defaultDataValue?.patient1?.relationship || ""}{" "}
              Phone number: {defaultDataValue?.patient1?.phoneNumber || ""}
              <br></br>
            </p>
            <p style={{ ...defaultStyle }}>
              Name: {defaultDataValue?.patient2?.name || ""}
              <br></br>
            </p>
            <p style={{ ...defaultStyle }}>
              Relationship: {defaultDataValue?.patient2?.relationship} Phone
              number: {defaultDataValue?.patient2?.phoneNumber || ""}
              <br></br>
            </p>
            <p style={{ ...defaultStyle }}>
              Name: {defaultDataValue?.patient3?.name || ""}
              <br></br>
            </p>
            <p style={{ ...defaultStyle }}>
              Relationship: {defaultDataValue?.patient3?.relationship || ""}{" "}
              Phone number: {defaultDataValue?.patient3?.phoneNumber || ""}
              <br></br>
            </p>
            <p>
              Is there any protected health information you would like to
              exclude from disclosure to the parties listed above? If yes, fill
              in here: {defaultDataValue?.protectionHealth || ""}
              <br></br>
            </p>
            <p>
              This authorization has No Expiration unless revoked or
              terminated—in writing—by the patient or patient’s personal
              representative.
            </p>
            {/* Signed */}

            <p style={{ ...defaultStyle }}>
              This form replaces all prior disclosure authorizations as of the
              date above.
            </p>
          </div>
        </>
      );
    } else if (title?.indexOf("Consent to Use") > -1) {
      return (
        <>
          <div>
            <p>
              Consent to Use and Disclosure<br></br>
            </p>
            <p style={{ ...defaultStyle }}>
              {defaultDataValue?.textInfo || ""}
              <br></br>
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                fontSize: "12px",
              }}
            >
              <div style={{ width: "40%" }}>
                <p style={{ ...defaultStyle }}>
                  Signature of Patient, Parent or LegallyAuthorized
                  Representative<br></br>
                </p>
              </div>
              <div style={{ width: "30%" }}>
                <p style={{ ...defaultStyle }}>
                  Relationship: {defaultDataValue?.signRelationship || ""}
                  <br></br>
                </p>
              </div>
              <div style={{ width: "30%" }}>
                <p style={{ ...defaultStyle }}>
                  Date: {defaultDataValue?.signDate || ""}
                  <br></br>
                </p>
              </div>
            </div>
            <p></p>
            <p style={{ ...defaultStyle }}>
              {defaultDataValue?.textInfo2 || ""}
              <br></br>
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                fontSize: "12px",
              }}
            >
              <div style={{ width: "40%" }}>
                <p style={{ ...defaultStyle }}>
                  Signature of Patient, Parent or LegallyAuthorized
                  Representative<br></br>
                </p>
              </div>
              <div style={{ width: "30%" }}>
                <p style={{ ...defaultStyle }}>
                  Relationship:{" "}
                  {defaultDataValue?.signCommunicationRelationship || ""}
                  <br></br>
                </p>
              </div>
              <div style={{ width: "30%" }}>
                <p style={{ ...defaultStyle }}>
                  Date: {defaultDataValue?.signCommunicationDate || ""}
                  <br></br>
                </p>
              </div>
            </div>
            <p style={{ ...defaultStyle }}>
              {defaultDataValue?.textInfo3 || ""}
              <br></br>
            </p>
            <p style={{ ...defaultStyle }}>
              Optional<br></br>
            </p>
            <p style={{ ...defaultStyle }}>
              {defaultDataValue?.textInfo4 || ""}{" "}
              {defaultDataValue?.agentName || ""} {defaultDataValue?.textInfo5}
              <br></br>
            </p>
            <p style={{ ...defaultStyle }}>
              for {defaultDataValue?.patientName || ""} date of birth{" "}
              {defaultDataValue?.patientDOB || ""}
              <br></br>
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                fontSize: "12px",
              }}
            >
              <div style={{ width: "40%" }}>
                <p style={{ ...defaultStyle }}>
                  Signature of Patient, Parent or LegallyAuthorized
                  Representative<br></br>
                </p>
              </div>
              <div style={{ width: "30%" }}>
                <p style={{ ...defaultStyle }}>
                  Relationship:{" "}
                  {defaultDataValue?.signOptionalRelationship || ""}
                  <br></br>
                </p>
              </div>
              <div style={{ width: "30%" }}>
                <p style={{ ...defaultStyle }}>
                  Date: {defaultDataValue?.signOptionalDate || ""}
                  <br></br>
                </p>
              </div>
            </div>
            <p style={{ ...defaultStyle }}>
              {defaultDataValue?.textInfo6 || ""}
              <br></br>
            </p>
          </div>
        </>
      );
    } else if (title?.indexOf("Minor") > -1) {
      return (
        <>
          <div>
            <p style={{ ...defaultStyle }}>
              The undersigned parent(s) or guardian(s) of{" "}
              {defaultDataValue?.patientName || ""}, a minor, authorizes{" "}
              {defaultDataValue?.guardian || ""} to consent to treatment of
              minor {defaultDataValue?.patientName2 || ""} including, but not
              limited to, instilling drops, testing, or minor procedures, when I
              am not available in person, or immediately by a telephone call, to{" "}
              {defaultDataValue.phoneNumber}
              <br></br>
            </p>
            <ol style={{ ...defaultStyle }}>
              <li>Persons to contact in an emergency:</li>
              <ol type="a">
                <li>
                  {defaultDataValue?.emergency1 || ""}, Phone:
                  {defaultDataValue?.contactEmergency1 || ""}
                </li>
                <li>
                  {defaultDataValue?.emergency2 || ""}, Phone:
                  {defaultDataValue?.contactEmergency2 || ""}
                </li>
              </ol>
              <li>
                Medical concerns or any learning disabilities:{" "}
                {defaultDataValue?.medicalConcern || ""}
              </li>
              <li>Known allergies: {defaultDataValue?.knownAlergies || ""}</li>
              <li>
                Health Insurance Plan (name and number):{" "}
                {defaultDataValue?.insurancePlan || ""}
              </li>
            </ol>
            <p></p>
            <p style={{ ...defaultStyle }}>Parent(s) Name:</p>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                fontSize: "12px",
              }}
            >
              <div style={{ width: "50%" }}>
                <p style={{ ...defaultStyle, margin: "6px 0px" }}>
                  Father: {defaultDataValue?.faterName || ""}
                </p>
                <p style={{ ...defaultStyle, margin: "6px 0px" }}>
                  Business Phone: {defaultDataValue?.fatherBusinessPhone || ""}
                </p>
                <p style={{ ...defaultStyle, margin: "6px 0px" }}>
                  Home Phone: {defaultDataValue?.fatherHomePhone || ""}
                </p>
                <p style={{ ...defaultStyle, margin: "6px 0px" }}>
                  Address: {defaultDataValue?.fatherAddress || ""}
                </p>
                <p style={{ ...defaultStyle, margin: "6px 0px" }}>
                  City/State/Zip: {defaultDataValue?.fatherCity || ""}
                </p>
              </div>
              <div style={{ width: "50%" }}>
                <p style={{ ...defaultStyle, margin: "6px 0px" }}>
                  Mother: {defaultDataValue?.motherName || ""}
                </p>
                <p style={{ ...defaultStyle, margin: "6px 0px" }}>
                  Business Phone: {defaultDataValue?.motherBusinessPhone || ""}
                </p>
                <p style={{ ...defaultStyle, margin: "6px 0px" }}>
                  Home Phone: {defaultDataValue?.motherHomePhone || ""}
                </p>
                <p style={{ ...defaultStyle, margin: "6px 0px" }}>
                  Address: {defaultDataValue?.motherAddress || ""}
                </p>
                <p style={{ ...defaultStyle, margin: "6px 0px" }}>
                  City/State/Zip: {defaultDataValue?.motherCity || ""}
                </p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                fontSize: "12px",
              }}
            >
              <div style={{ width: "50%" }}>
                <p style={{ ...defaultStyle }}>
                  Signature: <br></br>
                </p>
              </div>
              <div style={{ width: "50%" }}>
                <p style={{ ...defaultStyle }}>
                  Date: {defaultDataValue?.signDate || ""}
                  <br></br>
                </p>
              </div>
            </div>
            <p style={{ ...defaultStyle }}>
              This Consent shall remain effective until written revocation,
              signed by the minor’s parent(s), of the Consent is received by the
              physician/clinic.
            </p>
          </div>
        </>
      );
    }
    return <></>;
  }
  return <>{renderDocumentComponent()}</>;
}
