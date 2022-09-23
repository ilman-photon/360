//By default environment variables are only available in the Node.js environment, meaning they won't be exposed to the browser.
HOSTNAME = "0.0.0.0";
PORT = "3000";
HOST = "http://$HOSTNAME:$PORT";

NEXT_PUBLIC_API_URL =
  "http://internal-a09166de44a0a4f48b742547332da7e5-1970730926.us-east-1.elb.amazonaws.com";
MAPBOX_API_TOKEN =
  "pk.eyJ1Ijoia3VydWt1cnVydXUiLCJhIjoiY2w2dWdteXhlMDM4eTNkczh3ZnA4c2N6NSJ9.ilTZ5K51DsrAXlnJBuD_tw";
GOOGLE_API_KEY = "AIzaSyBIUDjY57Y2582Cytem10tATiBJAC_a00Y";
ENV_NAME = "develop";

//expose a variable to the browser
NEXT_PUBLIC_HOST = "http://$HOSTNAME:$PORT";
