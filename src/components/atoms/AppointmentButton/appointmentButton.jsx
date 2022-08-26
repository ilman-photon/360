import { Button } from "@mui/material";
import styles from "./appointmentButton.module.scss";

export default function AppointmentButton({ icon, children, onClick }) {
  return (
    <Button
      variant="outlined"
      startIcon={icon}
      onClick={onClick}
      className={styles.appointmentButton}
    >
      {children}
    </Button>
  );
}
