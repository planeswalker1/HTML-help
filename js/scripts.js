//Business (or back-end) logic:
let elements = ['body', 'div', 'h1', 'p', 'img'];
// user interface (or front-end) logic
elements.forEach(function(element) {
  $(element).click(function(event) {
    event.stopPropagation();
    alert('This is a ' + element + ' tag!');
  });
});
