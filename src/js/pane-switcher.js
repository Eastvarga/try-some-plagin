const refs = {
  controls: document.querySelector(`#tabs-1 [data-controls]`),
  panes: document.querySelector(`#tabs-1 [data-panes]`),
};
// console.log(refs);
refs.controls.addEventListener("click", onControlsClick);

function onControlsClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "A") {
    return;
  }

  const currentActiveControlItem = refs.controls.querySelector(
    ".controls__item--active"
  );
  if (currentActiveControlItem) {
    currentActiveControlItem.classList.remove("controls__item--active");
    // console.log(currentActiveControlItem);

    const paneId = getPaneId(currentActiveControlItem);
    const pane = getPaneById(paneId);
    pane.classList.remove("pane--active");
    // console.log(paneId);
  }

  const controlItem = event.target;
  controlItem.classList.add("controls__item--active");

  const paneId = getPaneId(controlItem);
  const pane = getPaneById(paneId);
  pane.classList.add("pane--active");
  //   console.log(paneId);
  //   console.log(pane);
}

function getPaneId(controls) {
  return controls.getAttribute("href").slice(1);
}
function getPaneById(id) {
  return refs.panes.querySelector(`#${id}`);
}
