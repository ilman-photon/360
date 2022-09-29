export const MESSAGES = {
  3000: {
    title: "Success",
  },
  3001: {
    title: "Existing User",
    content: (
      <>
        <span>
          You are already a registered user. Please login to the application
          using your username and password.
        </span>
      </>
    ),
    isBackToLogin: true,
  },
  3002: {
    title: "Error",
    content: "Internal server error",
  },
  3500: {
    title: "Error",
    content: "Bad Request",
  },
};

export default MESSAGES;
