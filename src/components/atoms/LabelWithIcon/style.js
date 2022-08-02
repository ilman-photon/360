import { colors } from "../../../styles/theme";

export const styles = {
  boxContainer: { display: "flex", flexDirection: "row", marginTop: "15px" },
  successTextColor: {
    marginLeft: 10,
    color: colors.green,
    fontFamily: "Libre Franklin",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "18px",
  },
  errorTextStyle: {
    marginLeft: 10,
    color: colors.grey75,
    fontFamily: "Libre Franklin",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "18px",
  },
  errorColor: {
    color: colors.grey75,
  },
  successColor: {
    color: colors.green,
  },
};
