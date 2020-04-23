import * as Cookies from "js-cookie";
const log = (prefix, color, info) => {
  console.log(`%c ${prefix}: ${info}`, `color: ${color}`);
};

const logger = {
  init(prefix, color) {
    return info => log(prefix, color, info);
  }
};

const isHasValue = data => {
  if (
    data !== null &&
    data !== undefined &&
    data !== "" &&
    data !== "undefined"
  ) {
    return true;
  }
  return false;
};

const logOut = () => {
  Cookies.remove("Token");
  Cookies.remove("channel");
  Cookies.remove("userId");
  Cookies.remove("videoProfile");
  Cookies.remove("cameraId");
  Cookies.remove("APP_ID");
  Cookies.remove("videoProfileLow");
  Cookies.remove("transcode");
  Cookies.remove("microphoneId");
  Cookies.remove("attendeeMode");
  Cookies.remove("baseMode");
  Cookies.remove("user_name");
  window.location.href = "index.html";
};

export { logger, log, isHasValue, logOut };
