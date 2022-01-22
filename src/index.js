document.querySelectorAll(".icon").forEach(function () {
  const icons = document.querySelectorAll(".icon");
  const circle = 1;
  let radius = "300px";
  const start = 0;
  const iconsNr = icons.length;
  let angle = (360 * circle) / iconsNr;
  for (let i = 0; i < iconsNr; ++i) {
    let icon = icons[i];
    let rotate = angle * i + start;
    let rotateReverse = rotate * -1;
    icon.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg) `;
  }
});
