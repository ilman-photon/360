import { Card, CardContent, CardHeader, useMediaQuery } from "@mui/material";
import styles from "./accountCard.module.scss";

export const AccountCard = ({
  title,
  titleIcon,
  children,
  isEditing,
  actionContent,
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
            action={!isEditing ? actionContent : ""}
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
