import {
  Button,
  Card,
  CardContent,
  CardHeader,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { colors } from "../../../styles/theme";
import styles from "./accountCard.module.scss";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddIcon from "@mui/icons-material/Add";

export const AccountCard = ({
  title,
  titleIcon,
  children,
  isEditing,
  actionContent,
  OnEditClicked,
  OnAddInsurance,
  ...props
}) => {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  return (
    <>
      <Card variant="outlined" className={styles.card}>
        {isDesktop && (
          <CardHeader
            className={styles.cardHeader}
            sx={{
              ".MuiCardHeader-action": {
                margin: 0,
              },
            }}
            title={
              <div>
                <span
                  style={{
                    marginRight: 8,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {titleIcon}
                </span>
                <div className={styles.title}>{title}</div>
              </div>
            }
            action={
              !isEditing ? (
                { actionContent }
              ) : OnAddInsurance ? (
                <Button
                  // onClick={OnEditClicked}
                  variant="text"
                  className={styles.addInsuranceButton}
                >
                  <AddIcon sx={{ width: 20, height: 20 }} />
                  Add Insurance
                </Button>
              ) : (
                ""
              )
            }
          />
        )}
        <CardContent sx={{ px: { xs: 3, md: 4 }, py: { xs: 4, md: 4 } }}>
          {children}
        </CardContent>
      </Card>
      {!isDesktop && !isEditing ? (
        <div style={{ position: "fixed", bottom: 16, right: 16 }}>
          {actionContent}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AccountCard;
