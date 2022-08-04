import { textAlign } from "@mui/system";

export const styles = {
  container: {
    width: 350,
    padding: "1rem 1rem ",
    backgroundColor: "white",
    alignSelf: "center",
    margin: "auto",
    borderRadius: "5px",
  },
  gridItem: {
    paddingTop: 0,
  },
  dateGenderItems: {
    paddingTop: "5px",
  },
  form: {
    display: "grid",
    marginTop: "8px",
  },
  backToLogin: {
    color: "#003b4a",
    textAlign: "center",
    marginTop: "20px",
    cursor: "pointer",
    fontSize: "0.9rem"
  },
  backToPage: {
    color: "#003b4a",
    fontSize: "0.9rem",
    cursor: "pointer",
  },
  titleStyles: {
    color: "#000",
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginTop: "18px !important",
  },
  subtitleStyles: {
    color: "#000",
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "18px !important",
    marginBottom: "10px",
  },
  specializationStyles: {
    color: "#000",
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "18px !important",
    marginBottom: "20px",
  },
  textField: {
    width: "100%",
    marginTop: "8px",
  },
  classificationTextField: {
    width: "100%",
    marginTop: "15px",
  },
  addPractice: {
    marginTop: "15px",
    color: "#003b4a",
    float: "left",
    cursor: "pointer",
  },
  removePractice: {
    marginTop: "15px",
    color: "#003b4a",
    float: "right",
    marginBottom: "20px",
    cursor: "pointer",
  },
  addPracticeTitle: {
    fontSize: "16px",
    marginLeft: "6px",
  },
  removePracticeTitle: {
    fontSize: "16px",
    marginLeft: "6px",
  },
  responseTitle: {
    fontSize: "1.2rem",
    padding: "15px",
    color: "#003b4a",
  },
  containedButton: {
    marginTop: "25px",
    paddingTop: "5px",
    paddingBottom: "5px",
    backgroundColor: "#003b4a",
    borderRadius: 46,
    fontSize: "1rem",
    color: "white",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#1c8696",
    },
  },
  dataResult: {
    marginTop: "5px",
    width: "300px",
    height: "200px",
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    overflow: "auto",
  },
  dataItem: {
    width: "100%",
    height: "40px",
    display: "flex",
    alignItems: "center",
    color: "#1976d2",
    paddingLeft: "15px",
    borderBottom: "1px solid #1976d2",
    cursor: "pointer",
  },
};
