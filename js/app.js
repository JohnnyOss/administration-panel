import {select, classNames, templates} from './settings.js';

const app = {
  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);

        window.location.hash= '#/' + id;

      });
    }
  },

  activatePage: function(pageId){
    const thisApp = this;

    for (let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    for (let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }

  },

  payoutList: function(){
    let generatedHTML = '';

    const payoutContainer = document.querySelector(select.content.payoutList);
    const tplPayoutList = templates.payoutList;

    const payoutListData = {
      row: {
        'transaction-1': {
          date: '15/08/02 (12:58)',
          moneyValue: '34,432.00',
          deal: 'cpl(200)',
          account: 'bank'
        },
        'transaction-2': {
          date: '16/08/02 (17:21)',
          moneyValue: '22,456.00',
          deal: 'cpl(200)',
          account: 'bank'
        },
        'transaction-3': {
          date: '16/08/02 (19:23)',
          moneyValue: '73,123.00',
          deal: 'cpl(200)',
          account: 'bank'
        },
      }
    };

    generatedHTML = tplPayoutList(payoutListData);
    payoutContainer.insertAdjacentHTML('beforeend', generatedHTML);
  },

  sidebarShow: function(){

    function toggleMenu() {
      document.querySelector(select.sidebar.content).classList.toggle(classNames.sidebar.show);
    }

    document.querySelector(select.sidebar.menu).addEventListener('click', function(e) {
      e.preventDefault();
      toggleMenu();
    });
  },

  init: function(){
    const thisApp = this;

    thisApp.initPages();
    thisApp.payoutList();
    thisApp.sidebarShow();
  },
};

app.init();


