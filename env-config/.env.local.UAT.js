//By default environment variables are only available in the Node.js environment, meaning they won't be exposed to the browser.
HOSTNAME = "0.0.0.0";
PORT = "3000";
HOST = "http://$HOSTNAME:$PORT";

//expose a variable to the browser
NEXT_PUBLIC_HOST = "http://$HOSTNAME:$PORT";
