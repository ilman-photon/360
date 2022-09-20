import { Button } from "@mui/material";
import styles from "./appointmentButton.module.scss";

export default function AppointmentButton({ icon, children, onClick, testId }) {
  return (
    <Button
      variant="outlined"
      data-testid={testId}
      tabIndex={0}
      aria-label={"Collapse All option"}
      aria-live={"Collapse All option"}
      startIcon={icon}
      onClick={onClick}
      className={styles.appointmentButton}
    >
      {children}
    </Button>
  );
}
