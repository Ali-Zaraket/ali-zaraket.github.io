const progress_elements = document.querySelectorAll('.progress-element');

const options = {
  threshold: 0,
  rootMargin: "0px 0px -60px 0px"
}

const fill = new IntersectionObserver((entries, fill) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.querySelector('.progress-bar-fill').classList.add("filled");
    fill.unobserve(entry.target);
  })
}, options)

progress_elements.forEach(elt => {
  fill.observe(elt);
});

function delay (URL) {
  setTimeout( function() { window.location = URL }, 500 );
}