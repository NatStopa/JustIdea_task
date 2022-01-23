document.querySelectorAll(".icon").forEach(function () {
  const icons = document.querySelectorAll(".icon");
  const image = document.querySelector(".gearwheel");
  const circle = 1;
  let radius = image.clientHeight / 2;
  const start = 0;
  const iconsNr = icons.length;
  let angle = (360 * circle) / iconsNr;
  for (let i = 0; i < iconsNr; ++i) {
    let icon = icons[i];
    let rotate = angle * i + start;
    let rotateReverse = rotate * -1;
    icon.style.transform = `rotate(${rotate}deg) translate(${radius}px) rotate(${rotateReverse}deg) `;
  }
});
