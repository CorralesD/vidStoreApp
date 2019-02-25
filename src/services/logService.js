import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://4321bd6c71b74ec0938cdb047a85bd06@sentry.io/1401510"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
