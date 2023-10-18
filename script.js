const container = document.querySelector('.container');
let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
container.appendChild(svg);

// gchild1_2 === child2_1_2
// to make tree easer to read in "gchild" I cuted first number from his parent

const tree = {
  name: 'root',
  Id: '1',
  message: '',
  children: [
    {
      name: 'child1',
      Id: '2',
      message: '',
      children: [
        {
          name: 'child1_1',
          Id: '3',
          message: '',
          children: null,
        },
      ],
    },

    {
      name: 'child2',
      Id: '6',
      message: '',
      children: [
        {
          name: 'child2_1',
          Id: '13',
          message: '',
          children: [
            {
              name: 'gchild1_2',
              Id: '14',
              message: '',
              children: [
                {
                  name: 'gchild1_3',
                  Id: '15',
                  message: '',
                  children: [
                    {
                      name: 'gchild1_4',
                      Id: '16',
                      message: '',
                      children: null,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'child2_2',
          Id: '7',
          message: '',
          children: [
            {
              name: 'gchild2_1',
              Id: '11',
              message: '',
              children: null,
            },
            {
              name: 'gchild2_2',
              Id: '12',
              message: '',
              children: null,
            },
          ],
        },
        {
          name: 'child2_2_1',
          Id: '8',
          message: '',
          children: null,
        },
        {
          name: 'child2_2_2',
          Id: '9',
          message: '',
          children: [
            {
              name: 'gchild2_2_1',
              Id: '5',
              message: '',
              children: null,
            },
            {
              name: 'gchild2_2_2',
              Id: '4',
              message: '',
              children: null,
            },
          ],
        },
        {
          name: 'child2_2_3',
          Id: '10',
          message: '',
          children: null,
        },
      ],
    },
  ],
};

const createCircles = tree => {
  if (tree === null) {
    return;
  }
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.classList.add(`circle${tree.Id}`);
  circle.classList.add(`circle_${tree.name}`);
  container.appendChild(circle);

  if (tree.children !== null) {
    tree.children.forEach(child => {
      createCircles(child);
    });
  }
};
createCircles(tree);

const adjustPositionsBasedOnTree = (tree, depth, xPosition) => {
  if (tree === null) {
    return;
  }
  const styles = {
    backgroundColor: `rgb(${depth * 50}, ${depth * 50}, 200)`,
  };
  const positionX = xPosition;

  const positionY = depth * 50;

  const circle = document.querySelector(`.circle${tree.Id}`);
  if (circle) {
    circle.style.left = `${positionX}px`;
    circle.style.top = `${positionY}px`;
    Object.assign(circle.style, styles);
  }

  if (tree.children !== null) {
    tree.children.forEach((child, index) => {
      const childXPosition = xPosition + index * 80;
      adjustPositionsBasedOnTree(child, depth + 1, childXPosition);
    });
  }
};

adjustPositionsBasedOnTree(tree, 0, 0);
