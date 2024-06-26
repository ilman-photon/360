import { colors } from "../../../styles/theme";

export const styles = {
  boxContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: "15px",
    alignItems: "center",
  },
  successTextColor: {
    marginLeft: 10,
    color: colors.green,
    fontFamily: "Museo Sans",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "18px",
  },
  errorTextStyle: {
    marginLeft: 10,
    color: colors.grey75,
    fontFamily: "Museo Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "18px",
  },
  primaryTextStyle: {
    marginLeft: 10,
    color: "#316A70",
    fontFamily: "Museo Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "18px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  errorColor: {
    color: colors.grey75,
  },
  successColor: {
    color: colors.green,
  },
  primaryColor: {
    color: "#316A70",
  },
};
