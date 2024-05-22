function getUrlParameter(string) {
  string = string.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp("[\\?&]" + string + "=([^&#]*)");
  const results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const pointsString = getUrlParameter("points");

const nextPageButton = document.querySelector(".next-button");

nextPageButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = `trangloikhuyen.html?points=${pointsString}`;
});
