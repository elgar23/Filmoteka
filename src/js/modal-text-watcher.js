const bodyRef = document.querySelector('body');

function modalWatcher() {
    const modalTextBoxRef = document.querySelector('.modal__text-about-box');
    const modalTextAboutRef = document.querySelector('.modal__text-about');
    const modalMoreRef = document.querySelector('.modal__more');

    modalMoreRef.addEventListener('click', () => {
      if (modalTextBoxRef.dataset.size === 'min') {
        modalTextBoxRef.dataset.size = 'max';
      } else {
        modalTextBoxRef.dataset.size = 'min';
      }

      if (modalTextBoxRef.dataset.size === 'max') {
        modalTextAboutRef.style.height = 'auto';
      } else {
        modalTextAboutRef.style.height = '40px';
      }
      
    })
  
    window.addEventListener('resize', () => {
      if ((bodyRef.clientWidth + 18) > 768) {
        modalTextAboutRef.style.height = 'auto';
      } else {
        modalTextAboutRef.style.height = '40px';
        modalTextBoxRef.dataset.size = 'min';
      }
    })
}

function noScrollBody() {
  bodyRef.style.overflow = 'hidden';
}

function scrollBody() {
  bodyRef.style.overflow = 'visible';
}

export { modalWatcher, scrollBody, noScrollBody };