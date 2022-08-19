export const MESSAGES = {
  3000: {
    title: "Success",
    content: "Thank you for your registration",
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
    title: null,
    content: "You have successfully set your password",
  },
  3500: {
    title: "Error",
  },
};

export default MESSAGES;
