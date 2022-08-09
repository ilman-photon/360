import { Button, Card, CardContent, CardHeader } from "@mui/material";
import Link from "next/link";
import { colors } from "../../../styles/theme";
import styles from "./accountCard.module.scss";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export const AccountCard = ({
  title,
  titleIcon,
  children,
  OnEditClicked,
  ...props
}) => {
  return (
    <Card variant="outlined" className={styles.card}>
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
              style={{ marginRight: 8, display: "flex", alignItems: "center" }}
            >
              {titleIcon}
            </span>
            <div className={styles.title}>{title}</div>
          </div>
        }
        action={
          <Button
            onClick={OnEditClicked}
            variant="text"
            className={styles.editButton}
          >
            <EditOutlinedIcon sx={{ width: 20, height: 20 }} />
            <div type="link" style={{ marginLeft: 4 }}>
              Edit
            </div>
          </Button>
        }
      />
      <CardContent sx={{ p: 4 }}>{children}</CardContent>
    </Card>
  );
};

export default AccountCard;
