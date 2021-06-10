const galleryContainer = document.querySelector('.footer-link');
const openTeamModalBtn = document.querySelector('.js-open-modal');
const backdropTeamModal = document.querySelector('.js-backdrop');
const body = document.querySelector('body');
const closeBtn = document.querySelector('.js-team-close');
// import teamTpl from '../templates/modalTeam.hbs'
// import * as basicLightbox from 'basiclightbox';

galleryContainer.addEventListener('click', onOpenModal);
// console.log(5667677, galleryContainer);
function onOpenModal(evt) {
  evt.preventDefault();

  window.addEventListener('keydown', onEscKeyPress);

  closeBtn.addEventListener('click', onCloseModal);
  body.classList.add('show-modal');
}

function onCloseModal() {
  document.body.classList.remove('show-modal');
  closeBtn.removeEventListener('click', onCloseModal);
}
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

// const lightBoxTeam = () => { 

//   galleryContainer.addEventListener('click', openModalTeam)
//   function openModalTeam(evt) {
//     evt.preventDefault();
    
//     const modalTeam = basicLightbox.create(teamTpl())
//     modalTeam.show();
        
  
//     window.addEventListener('keydown', closeModalByEscape);
//     function closeModalByEscape(event) {
//       if (event.code === 'Escape') {
//         modalTeam.close();
//         window.removeEventListener('keydown', closeModalByEscape);
//       }
//     }
//     const closeRef = document.querySelector('.icon-close');
//     closeRef.addEventListener('click', btnClosedModal);
//     function btnClosedModal() {
//       modalTeam.close();
//       closeRef.removeEventListener('click', btnClosedModal);
//     }
//   }
// }
    
// export default  
//  lightBoxTeam

 