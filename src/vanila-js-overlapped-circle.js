
  const msg = document.createElement('div')
  document.body.appendChild(msg);

  let currentCircles = [];

  function createCircle(event) {
    var newDiv = document.createElement('div');
    // Apply CSS styles

    const diameter = Math.random() * 100;
    newDiv.style.width = diameter + 'px';
    newDiv.style.height = diameter + 'px';
    newDiv.style.border = '3px solid red';
    newDiv.style.borderRadius = '50%'; // Makes it a circle
    newDiv.style.position = 'fixed';
    newDiv.style.left = event.clientX - diameter / 2 + 'px';
    newDiv.style.top = event.clientY - diameter / 2 + 'px';

    return newDiv;
  }

  const getCenterCoordinate = (circle) => {
    const computedStyle = window.getComputedStyle(circle);
    // Access specific style properties
    const width = computedStyle.width.replace('px', '');
    const left = computedStyle.left.replace('px', '');
    const top = computedStyle.top.replace('px', '');
    const radius = Number(width / 2)
    return {
      x: Number(left) + radius,
      y: Number(top) + radius,
      radius
    };

  }

  function checkOverLap() {
    if (currentCircles.length < 2) {
      return;
    }

    const [firstCircle, secondCircle] = currentCircles;


    const {
      x: x1,
      y: y1,
      radius: r1
    } = getCenterCoordinate(firstCircle);
    
    const {
      x: x2,
      y: y2,
      radius: r2
    } = getCenterCoordinate(secondCircle);

    // console.log(x1, y1, x2, y2, r1, r2);
    const dx = x1 - x2;
    const dy = y1 - y2;

    const distanceBetweenRadius = Math.sqrt(dx * dx + dy * dy);
   console.log(distanceBetweenRadius, Math.abs(r1 + r2))
    return distanceBetweenRadius < Math.abs(r1 + r2)


  }

  document.addEventListener('click', (event) => {

    msg.textContent = ''
    const circle = createCircle(event);
    // Append the element to the document body
    document.body.appendChild(circle);

    if (currentCircles.length == 2) {
      currentCircles.forEach(circle => circle.remove());
      currentCircles.length = 0;

    }

    currentCircles.push(circle);
    console.log(checkOverLap())
    if (!!checkOverLap()) {
      msg.textContent = 'Circle is overlapped'
    } else {
      msg.textContent = 'Circle is not overlapped'
    }

    // console.log(currentCircles.length);
  })
