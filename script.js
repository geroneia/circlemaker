let container = document.createElement('div');
const ROW = "Ряд_";
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

  paths.forEach((path) => {
    if (path.id.includes("Ряд")) {
      let d = path.getAttribute('d');
      d.slice(d.indexOf('M')+1,d.indexOf('c'))
      const result = d.split(',');
      let cx = result[0];
      let cy = result[1];
      let substr = d.slice(d.indexOf('M')+1,d.indexOf('s')).split(',');
      let arr = substr[substr.length-1].split('-');
      let r = arr[arr.length-1];
      console.log(r);
      console.log(path);
    }
  });
  });
