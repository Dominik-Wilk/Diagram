// function animationCircles() {
// const path1 = anime.path('.container .svg .path1');
// const path2 = anime.path('.container .svg .path2');
// const path3 = anime.path('.container .svg .path3');
// const path4 = anime.path('.container .svg .path4');
// const path5 = anime.path('.container .svg .path5');
// const path7 = anime.path('.container .svg .path7');
// const path8 = anime.path('.container .svg .path8');
// const path10 = anime.path('.container .svg .path10');
// const path11 = anime.path('.container .svg .path11');
// const path12 = anime.path('.container .svg .path12');
// const path13 = anime.path('.container .svg .path13');
// const path14 = anime.path('.container .svg .path14');
// const path15 = anime.path('.container .svg .path15');
// const path16 = anime.path('.container .svg .path16');
// const path17 = anime.path('.container .svg .path17');

// anime({
//   targets: '.circle1',
//   translateX: path1('x'),
//   translateY: path1('y'),
//   easing: 'linear',
//   duration: 1000,
// });
// anime({
//   targets: '.circle2',
//   translateX: [path1('x'), path2('x')],
//   translateY: [path1('y'), path2('y')],
//   easing: 'linear',
//   duration: 2000,
// });
// anime({
//   targets: '.circle3',
//   translateX: [path1('x'), path2('x'), path15('x')],
//   translateY: [path1('y'), path2('y'), path15('y')],
//   easing: 'linear',
//   duration: 2500,
// });
// anime({
//   targets: '.circle4',
//   translateX: [path1('x'), path2('x'), path15('x'), path16('x')],
//   translateY: [path1('y'), path2('y'), path15('y'), path16('y')],
//   easing: 'linear',
//   duration: 3000,
// });
// anime({
//   targets: '.circle8',
//   translateX: [path1('x'), path2('x'), path15('x'), path16('x'), path14('x')],
//   translateY: [path1('y'), path2('y'), path15('y'), path16('y'), path14('y')],
//   easing: 'linear',
//   duration: 3500,
// });
// anime({
//   targets: '.circle9',
//   translateX: [path1('x'), path2('x'), path15('x'), path16('x'), path17('x')],
//   translateY: [path1('y'), path2('y'), path15('y'), path16('y'), path17('y')],
//   easing: 'linear',
//   duration: 3500,
// });
// anime({
//   targets: '.circle5',
//   translateX: path3('x'),
//   translateY: path3('y'),
//   easing: 'linear',
//   duration: 1000,
// });
// anime({
//   targets: '.circle6',
//   translateX: [path3('x'), path4('x')],
//   translateY: [path3('y'), path4('y')],
//   easing: 'linear',
//   duration: 1500,
// });
// anime({
//   targets: '.circle14',
//   translateX: [path3('x'), path4('x'), path7('x')],
//   translateY: [path3('y'), path4('y'), path7('y')],
//   easing: 'linear',
//   duration: 2000,
// });
// anime({
//   targets: '.circle15',
//   translateX: [path3('x'), path4('x'), path7('x'), path8('x')],
//   translateY: [path3('y'), path4('y'), path7('y'), path8('y')],
//   easing: 'linear',
//   duration: 2500,
// });
// anime({
//   targets: '.circle7',
//   translateX: [path3('x'), path4('x'), path5('x')],
//   translateY: [path3('y'), path4('y'), path5('y')],
//   easing: 'linear',
//   duration: 2000,
// });
// anime({
//   targets: '.circle10',
//   translateX: [path3('x'), path10('x')],
//   translateY: [path3('y'), path10('y')],
//   easing: 'linear',
//   duration: 2000,
// });
// anime({
//   targets: '.circle11',
//   translateX: [path3('x'), path10('x'), path11('x')],
//   translateY: [path3('y'), path10('y'), path11('y')],
//   easing: 'linear',
//   duration: 3000,
// });
// anime({
//   targets: '.circle12',
//   translateX: [path3('x'), path10('x'), path11('x'), path12('x')],
//   translateY: [path3('y'), path10('y'), path11('y'), path12('y')],
//   easing: 'linear',
//   duration: 4000,
// });
// anime({
//   targets: '.circle13',
//   translateX: [path3('x'), path10('x'), path11('x'), path12('x'), path13('x')],
//   translateY: [path3('y'), path10('y'), path11('y'), path12('y'), path13('y')],
//   easing: 'linear',
//   duration: 5000,
// });
// }
// animationCircles();

const container = document.querySelector('.container');
let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
container.appendChild(svg);

const createPaths = () => {
  for (let i = 0; i <= 17; i++) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.classList.add(`path${i}`);
    let dValue;
    switch (i) {
      case 0:
        dValue = 'M 46 50 L 390 50';
        break;
      case 1:
        dValue = 'M 390 50 L 850 50';
        break;
      case 2:
        dValue = 'M 50 50 C 180 40 60 172 150 170';
        break;
      case 3:
        dValue = 'M 150 170 L 220 170';
        break;
      case 4:
        dValue = 'M 220 170 L 400 170';
        break;
      case 5:
        dValue = 'M 400 170 L 610 170';
        break;
      case 6:
        dValue = 'M 610 170 L 950 170';
        break;
      case 7:
        dValue = 'M 230 170 C 388 163 217 274 400 270';
        break;
      case 8:
        dValue = 'M 400 270 L 460 270';
        break;
      case 9:
        dValue = 'M 460 270 C 584 276 462 159 610 170';
        break;
      case 10:
        dValue = 'M 150 170 L 150 370';
        break;
      case 11:
        dValue = 'M 150 370 L 300 370';
        break;
      case 12:
        dValue = 'M 300 370 L 400 370';
        break;
      case 13:
        dValue = 'M 400 370 L 440 370';
        break;
      case 14:
        dValue = 'M 750 113 C 636 114 721 179 610 170';
        break;
      case 15:
        dValue = 'M 850 50 L 850 113';
        break;
      case 16:
        dValue = 'M 850 113 L 750 113';
        break;
      case 17:
        dValue = 'M 850 113 C 926 115 872 167 953 170';
        break;
    }

    path.setAttribute('d', dValue);
    path.setAttribute('stroke', 'white');
    path.setAttribute('fill', 'transparent');

    svg.appendChild(path);
  }
  createCircles();
};

const createCircles = () => {
  for (let i = 0; i <= 16; i++) {
    const circle = document.createElement('div');
    circle.classList.add(`circle`);
    circle.classList.add(`circle${i}`);
    container.appendChild(circle);
  }
  animationPaths();
};

function animationPaths() {
  let line = anime({
    targets: 'path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: function (el, i) {
      return i * 250;
    },
    direction: 'normal',
    loop: false,
    complete: function (anime) {
      document.querySelectorAll('.circle').forEach(function (el) {
        el.style.display = 'block';
      });
    },
  });
}

createPaths();
