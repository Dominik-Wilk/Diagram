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
