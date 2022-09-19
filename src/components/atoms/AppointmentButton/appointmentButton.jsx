import { Button } from "@mui/material";
import styles from "./appointmentButton.module.scss";

export default function AppointmentButton({ icon, children, onClick, testId }) {
  return (
    <Button
      variant="outlined"
      data-testid={testId}
      startIcon={icon}
      onClick={onClick}
      className={styles.appointmentButton}
    >
      {children}
    </Button>
  );
}
