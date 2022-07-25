import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { StyledInput } from "../../atoms/Input/input";
import { Divider, Typography } from "@mui/material";
import styles from "./Style.module.scss";
import globalStyles from "../../../styles/Global.module.scss";
import { Api } from "../../../pages/api/api";
import { useRouter } from "next/router";

import { StyledButton } from "../../atoms/Button/button";

export default function Login({
  OnLoginClicked,
  OnGuestClicked,
  OnCreateAccountClicked,
  OnForgotPasswordClicked,
}) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  return (
    <Box className={globalStyles.container}>
      <Stack spacing={3}>
        <Typography variant="h1" className={styles.title}>
          Patient Login
        </Typography>
        <StyledInput
          id="username"
          label="Username"
          size="small"
          style={{ backgroundColor: "white" }}
          variant="filled"
          type={"text"}
          error={false}
          helperText={"Enter your registered email or phone number"}
          onChange={(event) => setUsername(event.target.value)}
          //  helperText={userpassword === " " ?  'Enter Your Registered email or phone number' : 'This field required (Enter email or phone number)' }
          //  error={userpassword === "" ? true  : false}
        />
        <StyledInput
          id="password"
          label="Password"
          type="password"
          size="small"
          style={{ backgroundColor: "white" }}
          //  variant="filled"
          onChange={(event) => setPassword(event.target.value)}
          //  helperText={username === "" ?  'Enter Your Registered email or phone number' : 'This field required (Enter email or phone number)' }
          //  error={username === "" ? true  : false}
        />
        <Grid container justifyContent={"flex-end"}>
          <Link
            color={"#2095a9"}
            onClick={function () {
              OnForgotPasswordClicked(router);
            }}
          >
            Forgot Password
          </Link>
        </Grid>
        <StyledButton
          theme="patient"
          type="primary"
          size="large"
          gradient={false}
          onClick={function () {
            OnLoginClicked({ username, password }, router);
          }}
        >
          Login
        </StyledButton>
        <StyledButton
          theme="patient"
          type="secondary"
          size="large"
          gradient={false}
          onClick={OnGuestClicked}
        >
          Continue as a guest
        </StyledButton>
        <Divider variant="middle" />
        <Grid container justifyContent={"center"}>
          <Typography variant="bodyRegular">
            Don&apos;t have an account?
          </Typography>
        </Grid>

        <StyledButton
          theme="patient"
          type="secondary"
          size="large"
          gradient={false}
          onClick={function () {
            OnCreateAccountClicked(router);
          }}
        >
          Create Account
        </StyledButton>
      </Stack>
    </Box>
  );
}
