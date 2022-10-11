import { Card, CardContent, CardHeader, useMediaQuery } from "@mui/material";
import styles from "./accountCard.module.scss";

export const AccountCard = ({
  title,
  titleIcon,
  ariaLabel,
  children,
  isEditing,
  actionContent,
  isAppoinment,
  isDashboard,
  textStyle = {},
  ...props
}) => {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  return (
    <>
      <Card
        variant="outlined"
        className={[styles.card, props.className].join(" ")}
        sx={{
          ...props.sx,
          border: isDesktop ? 0 : "1px solidrgba(0, 0, 0, 0.12)",
          boxShadow: isDesktop
            ? "0px 1.65922px 3.31845px rgb(0 51 89 / 10%)"
            : "none",
        }}
      >
        {(isDesktop || isAppoinment) && (
          <CardHeader
            className={
              isDashboard
                ? [styles.dashboardHeader, styles.cardHeader]
                : styles.cardHeader
            }
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
                <div
                  className={styles.title}
                  style={textStyle}
                  aria-label={ariaLabel ? ariaLabel : `${title} heading`}
                  tabIndex={0}
                >
                  {title}
                </div>
              </div>
            }
            action={!isEditing ? actionContent : ""}
          />
        )}
        <CardContent sx={{ px: { xs: 2, md: 4 }, py: { xs: 2, md: 4 } }}>
          {children}
        </CardContent>
      </Card>
      {!isDesktop && !isEditing && !isAppoinment ? (
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
