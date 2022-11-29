import { Button } from "@mui/material";
import styles from "./appointmentButton.module.scss";

export default function AppointmentButton({
  icon,
  children,
  onClick,
  testId,
  className,
}) {
  return (
    <Button
      variant="outlined"
      data-testid={testId}
      tabIndex={0}
      aria-label={children}
      startIcon={icon}
      onClick={onClick}
      className={[styles.appointmentButton, className].join(" ")}
    >
      {children}
    </Button>
  );
}
