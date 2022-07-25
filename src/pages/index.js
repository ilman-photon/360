import { Box, Divider, Skeleton, Stack } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/templates/default";
import { increment } from "../store";
import { fetchUser } from "../store/user";
import Cookies from "universal-cookie";
import { StyledButton } from "../components/atoms/Button/button";
import { Api } from "./api/api";
import { useRouter } from "next/router";

export async function getServerSideProps({ req, res }) {
  const cookies = new Cookies(req.headers.cookie);

  if (!cookies.get("authorized")) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  const api = new Api();
  const router = useRouter();
  const dispatch = useDispatch();

  const indexStatus = useSelector((state) => state.index.status);
  const counter = useSelector((state) => state.index.counter);

  const userStatus = useSelector((state) => state.user.status);
  const userData = useSelector((state) => state.user.userData);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleAction = () => {
    dispatch(increment());
  };

  const handleFetchUser = () => {
    dispatch(fetchUser());
  };

  return (
    <>
      <Box sx={{ backgroundColor: "white" }}>
        <Stack spacing={2} padding={4}>
          <div>This is Homepage</div>

          <div>Example normal action with redux:</div>
          <div style={{ display: "flex" }}>
            <button onClick={handleAction}>Increase counter</button>
            <div>
              {!!indexStatus === "loading" ? (
                <>
                  <Skeleton variant="rectangular" width={"50%"} height={118} />
                </>
              ) : (
                <>
                  <div style={{ marginLeft: 4 }}>{JSON.stringify(counter)}</div>
                </>
              )}
            </div>
          </div>

          <Divider></Divider>

          <div style={{ display: "flex" }}>
            <div>Example fetch API call with redux:</div>
            <button onClick={handleFetchUser} style={{ marginLeft: 4 }}>
              Fetch User
            </button>
          </div>
          <div>
            {!!userStatus === "loading" ? (
              <>
                <Skeleton variant="rectangular" width={"50%"} height={118} />
                <Skeleton variant="rectangular" width={210} height={118} />
              </>
            ) : (
              <>
                <div>User Data:</div>
                <div>{JSON.stringify(userData)}</div>
              </>
            )}
          </div>
        </Stack>
      </Box>

      <StyledButton
        primary={"true"}
        size="large"
        gradient={false}
        onClick={function () {
          api.client
            .post("https://patientlogout.mocklab.io/user/logout", {
              username: "user1",
            })
            .then(function (response) {
              console.log(response);
              if (response && response.status === 200) {
                const cookies = new Cookies();
                cookies.remove("authorized", "true", { path: "/" });
                router.push("/");
                console.log("success logout");
              }
            })
            .catch(function () {
              console.log("failed logout");
            });
        }}
      >
        Logout
      </StyledButton>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
