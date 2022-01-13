// Something strange is happening
const cow = document.querySelector('.cow');
const hill = document.querySelector('.hill');
const tree = document.querySelector('.tree');

// Our Story begins
setTimeout(() => itBegins(), 3000);

// Everything is fine when you have a tree.
tree.addEventListener('click', () => {
  resetItAll();
});

// Someone is coming...
['mouseenter','click'].forEach( evt => {
  hill.addEventListener(evt, itBegins);
});

// You can save him if you'd like!
['mouseenter','click'].forEach( evt => {
  cow.addEventListener(evt, function(){
    if (this.classList.contains('abduct')) {
      this.classList.remove('abduct', 'start-beam');
      this.classList.add('leave-this-planet');
      hill.classList.add('leave-this-planet');
      const reset = setInterval(resetItAll, 150);
      setTimeout(()=> {
        clearInterval(reset);
      }, 6000);
    }
  });
});

function itBegins() {
  if(!hill.classList.contains('invade')) {
    hill.classList.add('invade');
    setTimeout(() => {
      cow.classList.add('start-beam');
      setTimeout(() => {
        cow.classList.add('abduct');
        setTimeout(() => {
          hill.classList.add('laterz');
        }, 2850);
      }, 1000);
    }, 1000);
  }
}

function resetItAll() {
  hill.classList.remove('invade', 'laterz', 'leave-this-planet');
  cow.classList.remove('start-beam', 'abduct', 'leave-this-planet');
}