import "../components/HelpDesk/css/style.css";
import HelpDesk from "../components/HelpDesk/classes/HelpDesk";

document.addEventListener("DOMContentLoaded", () => {
  const parentNodeElem = document.querySelector(".Frontend");

  if (parentNodeElem) {
    const helpDesk = new HelpDesk(parentNodeElem);
  }
});
