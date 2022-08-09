import { Button, Card, CardContent, CardHeader } from "@mui/material";
import Link from "next/link";
import { colors } from "../../../styles/theme";
import styles from "./accountCard.module.scss";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export const AccountCard = ({ title, titleIcon, children, ...props }) => {
  return (
    <Card variant="outlined" className={styles.card}>
      <CardHeader
        className={styles.cardHeader}
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
          <div className={styles.editButton}>
            <EditOutlinedIcon />
            <div type="link" style={{ marginLeft: 4 }}>
              Edit
            </div>
          </div>
        }
      />
      <CardContent sx={{ p: 4 }}>{children}</CardContent>
    </Card>
  );
};

export default AccountCard;
