import './sass/main.scss';
import './js/openLibrary.js';
import refs from './js/refs.js';
import apiService from './js/apiSearchFetch.js';
import lightbox from './js/modalFilmMarkup';
//import lightBoxTeam from './js/team-modal'
import { processingSpinner, deleteSpinner } from './js/spinner-loader';
import './js/pagination.min';
import optionsPagination from './js/paginationOptions';
import './js/team-modal';
const container = $('#pagination-container');
import './js/button-up.js';

// processingSpinner();
///поиск по инпуту
refs.inputForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (form.elements.query.value < 1) {
    return;
  }
  apiService.query = form.elements.query.value;
  // console.log(apiService.searchUrl);
  refs.movieGrid.innerHTML = '';
  //form.reset(); //чистим форму

  container.pagination({
    ...optionsPagination, //деструктуризация базовых настроек пагинатора (default options) рендер страницы зашит в дефолтных опциях!!!
    dataSource: apiService.searchUrl, //передача корня ссылки на сайт в данном случае ссылка поиска
    ajax: apiService.ajaxDataForSearch, // настройки запросов аякса под каждый сайт-сервер (apiKey,page,query)
  });
});

//запускается при отрисовке страницы первым
container.pagination({
  ...optionsPagination, //деструктуризация базовых настроек пагинатора (default options) рендер страницы зашит в дефолтных опциях!!!
  dataSource: apiService.popularUrl, //передача корня ссылки на сайт в данном случае ссылка популярных фильмов
  ajax: apiService.ajaxDataForPopular, // настройки запросов аякса под каждый сайт-сервер (apiKey,page,query)
});
// deleteSpinner();
lightbox();
//lightBoxTeam()

refs.filmoteka.addEventListener('click', event => {
  event.preventDefault();
  refs.inputForm.reset();
  container.pagination({
    ...optionsPagination, //деструктуризация базовых настроек пагинатора (default options) рендер страницы зашит в дефолтных опциях!!!
    dataSource: apiService.popularUrl, //передача корня ссылки на сайт в данном случае ссылка популярных фильмов
    ajax: apiService.ajaxDataForPopular, // настройки запросов аякса под каждый сайт-сервер (apiKey,page,query)
  });
});
