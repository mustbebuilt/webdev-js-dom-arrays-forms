(()=>{
const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', (ev)=> {
      const accordionContent = ev.target.nextElementSibling;

      if (accordionContent.classList.contains("active")) {
        accordionContent.style.maxHeight = null;
        accordionContent.classList.remove('active');
      } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        accordionContent.classList.add('active');
      }
    });
  });
})()