const container = document.querySelector('.container');

let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
container.appendChild(svg);

for (let i = 0; i <= 16; i++) {
  const node = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  node.classList.add(`circle${i}`);
  node.setAttribute('r', 20);
  node.setAttribute('cx', 50);
  node.setAttribute('cy', 50);
  svg.appendChild(node);
}
function animationCircle() {
  var path = anime.path('.container svg path');
  var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750,
  });
  tl.add({
    targets: '.circle0',
    translateX: 0,
  })
    .add(
      {
        targets: '.circle1',
        translateX: 350,
      },
      '+=250'
    )
    .add(
      {
        targets: '.circle2',
        translateX: 800,
      },
      '+=250'
    )
    .add(
      {
        targets: '.circle3',
        keyframes: [{ translateX: 800 }, { translateY: 60 }],
      },
      '+=250'
    )
    .add(
      {
        targets: '.circle4',
        keyframes: [
          { translateX: 800 },
          { translateY: 60 },
          { translateX: 700 },
        ],
      },
      '+=250'
    )
    .add(
      {
        targets: '.circle5',
        keyframes: [{ translateY: 120 }, { translateX: 100 }],
      },
      '+=250'
    )
    .add(
      {
        targets: '.circle6',
        keyframes: [{ translateY: 120 }, { translateX: 180 }],
      },
      '+=250'
    )
    .add(
      {
        targets: '.circle7',
        keyframes: [{ translateY: 120 }, { translateX: 350 }],
      },
      '+=250'
    )
    .add(
      {
        targets: '.circle8',
        keyframes: [{ translateY: 120 }, { translateX: 550 }],
      },
      '+=250'
    )
    .add(
      {
        targets: '.circle9',
        keyframes: [{ translateY: 120 }, { translateX: 900 }],
      },
      '+=250'
    )
    .add(
      {
        targets: '.circle10',
        keyframes: [
          { translateY: 120 },
          { translateX: 100 },
          { translateY: 320 },
        ],
      },
      '+=250'
    )
    .add(
      {
        targets: '.circle11',
        keyframes: [
          { translateY: 120 },
          { translateX: 100 },
          { translateY: 320 },
          { translateX: 250 },
        ],
      },
      '+=250'
    )
    .add(
      {
        targets: '.circle12',
        keyframes: [
          { translateY: 120 },
          { translateX: 100 },
          { translateY: 320 },
          { translateX: 350 },
        ],
      },
      '+=250'
    )
    .add(
      {
        targets: '.circle13',
        keyframes: [
          { translateY: 120 },
          { translateX: 100 },
          { translateY: 320 },
          { translateX: 250 },
          { translateX: 400 },
        ],
      },
      '+=250'
    )
    .add(
      {
        targets: '.circle14',
        keyframes: [
          { translateY: 120 },
          { translateX: 180 },
          { translateY: 220 },
          { translateX: 350 },
        ],
      },
      '-=2000'
    )
    .add(
      {
        targets: '.circle15',
        keyframes: [
          { translateY: 120 },
          { translateX: 180 },
          { translateY: 220 },
          { translateX: 400 },
        ],
      },
      '-=250'
    );
}
animationCircle();
