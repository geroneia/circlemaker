let container = document.createElement('div');
const ROW = "Ряд_";
const readyscheme = document.querySelector('.readyscheme');
const initialscheme = document.querySelector('.initialscheme');
const clearButton = document.querySelector('clearButton');
container.classList = 'container';

let value = document.querySelector('textarea').value;
initialscheme.value = '';
readyscheme.value = '';



function groupToCircles () {
  const groups = document.querySelectorAll('g');
  groups.forEach((group) => {
    let id = group.id
    if (id.includes(ROW)) {

      if (group.querySelector('circle')) {
        let circle = group.querySelector('circle');
        circle.setAttribute('id', id);
        console.log(circle);

        group.parentNode.replaceChild(circle, group)
      } else if (group.querySelector('ellipse')) {
        let ellipse = group.querySelector('ellipse');
        ellipse.setAttribute('id', id);
        console.log(ellipse);

        group.parentNode.replaceChild(ellipse, group)

      }
    }
    });
};

function transformMarkup () {
  getMarkup = () => initialscheme.value;
  document.body.append(container);
  container.insertAdjacentHTML("afterbegin", getMarkup());
  if (initialscheme.value&&document.querySelector('svg')) {
    groupToCircles();
    readyscheme.value = container.innerHTML;
  } else {
    alert ("Только схему зала, пожалуйста");
  }

}


initialscheme.addEventListener("input", transformMarkup);
clearButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  initialscheme.value = '';
  readyscheme.value = '';
})

