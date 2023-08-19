let container = document.createElement('div');
const ROW = "Ряд_";
const readyscheme = document.querySelector('.readyscheme');
container.classList = 'container';

let value = document.querySelector('textarea').value;


function getText0() {
  return document.querySelector('textarea').value;
}




window.addEventListener("input", function() {
  document.body.append(container);
  container.insertAdjacentHTML("afterbegin", getText0());
  const paths = document.querySelectorAll('path');
  // paths.forEach(path => path.id.includes("Ряд") ? console.log(path.getAttribute('d')) : console.log("КОнтур"));
  const circles = document.querySelectorAll('circle');
  let circleR = '';
  circles.forEach(circle => {
    if (circle.id.includes("Ряд")&&!circleR) {
      circleR = circle.getAttribute('r')
      console.log('Радиус ' + circleR)
      return circleR;
    }
  });
  paths.forEach((path) => {
    if (path.id.includes("Ряд")) {
      let d = path.getAttribute('d');
      d.slice(d.indexOf('M')+1,d.indexOf('c'))
      const result = d.slice(d.indexOf('M')+1,d.indexOf('c')).split(',');
      let cx = result[0];
      let cy = result[1];
      let id = path.id
      console.log(cx);
      let circle = document.createElement('circle');
      circle.setAttribute('id', id);
      circle.setAttribute('class',"st1");
      circle.setAttribute('cx', cx);
      circle.setAttribute('cy', cy);
      circle.setAttribute('r', circleR);
      // circle = circle.toString();
      path.insertAdjacentHTML("afterend", circle);
      path.parentNode.replaceChild(circle, path);
      console.log(typeof circle);
    }
  });
  readyscheme.value = document.querySelector('svg').innerHTML;
  });
