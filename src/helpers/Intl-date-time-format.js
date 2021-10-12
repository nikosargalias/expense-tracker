const locale = navigator.languages[0];
const options = {
  timeStyle: "medium",
  dateStyle: "short",
};
export default new Intl.DateTimeFormat(locale, options);
