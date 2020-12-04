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

  initLists: function (){

    function sidebarList(){
      let generatedHTML = '';

      const sidebarContainer = document.querySelector(select.content.sidebarList);
      const tplSidebarList = templates.sidebarList;

      const sidebarListData = {
        row: {
          'general': {
            link: 'general',
            imageSrc: 'images/icons/general.svg',
            imageAlt: 'general',
            name: 'General'
          },
          'details': {
            link: 'details',
            imageSrc: 'images/icons/details.svg',
            imageAlt: 'details',
            name: 'Details'
          },
          'links': {
            link: 'links',
            imageSrc: 'images/icons/links.svg',
            imageAlt: 'links',
            name: 'Links'
          },
          'banners': {
            link: 'banners',
            imageSrc: 'images/icons/banners.svg',
            imageAlt: 'banners',
            name: 'Banners'
          },
          'personaldata': {
            link: 'personaldata',
            imageSrc: 'images/icons/personaldata.svg',
            imageAlt: 'personaldata',
            name: 'Personal Data'
          },
          'payout': {
            link: 'payout',
            imageSrc: 'images/icons/payout.svg',
            imageAlt: 'payout',
            name: 'Payout'
          },
          'postback': {
            link: 'postback',
            imageSrc: 'images/icons/postback.svg',
            imageAlt: 'postback',
            name: 'Postback'
          },
        }
      };

      generatedHTML = tplSidebarList(sidebarListData);
      sidebarContainer.insertAdjacentHTML('beforeend', generatedHTML);
    }

    function linksList(){
      let generatedHTML = '';

      const linksContainer = document.querySelector(select.content.linksList);
      const tplLinksList = templates.linksList;

      const linksListData = {
        row: {
          'link-1': {
            name: 'Home Page',
            link: 'http://www.homepage.com'
          },
          'link-2': {
            name: 'Currently offer',
            link: 'http://www.currently.com'
          },
          'link-3': {
            name: 'Blurpix',
            link: 'http://www.blurpix.com'
          },
          'link-4': {
            name: 'Your site',
            link: 'http://www.yoursite.com'
          },
          'link-5': {
            name: 'Google',
            link: 'http://www.google.com'
          },
          'link-6': {
            name: 'Facebook',
            link: 'http://www.facebook.com'
          },
          'link-7': {
            name: 'Dashboard',
            link: 'http://www.dashboard.com'
          },
          'link-8': {
            name: 'Blurax',
            link: 'http://www.blurax.com'
          },
          'link-9': {
            name: 'Piece of Wine',
            link: 'http://www.pieceofwine.com'
          },
          'link-10': {
            name: 'Twitter',
            link: 'http://www.twitter.com'
          },
        }
      };

      generatedHTML = tplLinksList(linksListData);
      linksContainer.insertAdjacentHTML('beforeend', generatedHTML);
    }

    function bannersList(){
      let generatedHTML = '';

      const bannersContainer = document.querySelector(select.content.bannersList);
      const tplBannersList = templates.bannersList;

      const bannersListData = {
        row: {
          'banner-1': {
            name: 'Banner main',
            link: 'http://www.webiste.com/bannermain.gif'
          },
          'banner-2': {
            name: 'Sing up banner',
            link: 'http://www.webiste.com/singup.gif'
          },
          'banner-3': {
            name: 'Banner left side',
            link: 'http://www.webiste.com/lefside.gif'
          },
          'banner-4': {
            name: 'Vertical banner',
            link: 'http://www.webiste.com/vert.gif'
          },
          'banner-5': {
            name: 'Front banner',
            link: 'http://www.webiste.com/front.gif'
          },
          'banner-6': {
            name: 'Horizont banner',
            link: 'http://www.webiste.com/horizontal.gif'
          },
        }
      };

      generatedHTML = tplBannersList(bannersListData);
      bannersContainer.insertAdjacentHTML('beforeend', generatedHTML);
    }

    function detailsList(){
      let generatedHTML = '';

      const detailsContainer = document.querySelector(select.content.detailsList);
      const tplDetailsList = templates.detailsList;

      const detailsListData = {
        row: {
          'details-1': {
            name: 'aff/sam_test',
            date: '17/08/02 (12:58)',
            visits: '323',
            unique: '114',
            singups: '12',
            ftd: '6',
            depositors: '3',
            deposits: '2222,22',
            payout: '234',
            turnover: '12222,22',
            deal: 'cpl(200)'
          },
          'details-2': {
            name: 'aff/leo_test',
            date: '15/08/02 (12:58)',
            visits: '447',
            unique: '211',
            singups: '43',
            ftd: '7',
            depositors: '6',
            deposits: '4224,22',
            payout: '334',
            turnover: '31222,22',
            deal: 'cpl(200)'
          },
          'details-3': {
            name: 'aff/sam_test',
            date: '17/08/02 (12:58)',
            visits: '323',
            unique: '114',
            singups: '12',
            ftd: '6',
            depositors: '3',
            deposits: '2222,22',
            payout: '234',
            turnover: '12222,22',
            deal: 'cpl(200)'
          },
          'details-4': {
            name: 'aff/leo_test',
            date: '15/08/02 (12:58)',
            visits: '447',
            unique: '211',
            singups: '43',
            ftd: '7',
            depositors: '6',
            deposits: '4224,22',
            payout: '334',
            turnover: '31222,22',
            deal: 'cpl(200)'
          },
        }
      };

      generatedHTML = tplDetailsList(detailsListData);
      detailsContainer.insertAdjacentHTML('beforeend', generatedHTML);
    }

    function payoutList(){
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
    }

    sidebarList();
    linksList();
    bannersList();
    detailsList();
    payoutList();
  },

  initGraph: function(){
    const thisApp = this;
    const graphContainer = document.getElementById('myChart').getContext('2d');
    // eslint-disable-next-line no-undef
    thisApp.graph = new Chart(graphContainer, {
      type: 'bar',
      data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        datasets: [{
          label: 'Signups',
          backgroundColor: '#8DBEC8',
          borderColor: '#8DBEC8',
          data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
          label: 'FTD',
          backgroundColor: '#F29E4E',
          borderColor: '#F29E4E',
          data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
          label: 'Earned',
          backgroundColor: '#71B374',
          borderColor: '#71B374',
          data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
          hidden: true,
        }]
      },
    });
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

  popups: function(){
    function closeModal() {
      document.getElementById(select.modal.overlay).classList.remove(classNames.modal.show);
    }

    document.querySelectorAll(select.modal.closeButton).forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
      });
    });

    document.querySelector(select.containerOf.overlay).addEventListener('click', function(e) {
      if(e.target === this) {
        closeModal();
      }
    });

    document.addEventListener('keyup', function(e) {
      if(e.keyCode === 27) {
        closeModal();
      }
    });

    function openModal(modal) {
      document.querySelectorAll('#overlay > *').forEach(function(modal) {
        modal.classList.remove(classNames.modal.show);
      });
      document.querySelector(select.containerOf.overlay).classList.add(classNames.modal.show);
      document.querySelector(modal).classList.add(classNames.modal.show);
    }

    const loginButtons = document.querySelectorAll(select.modal.type.login);
    for (let login of loginButtons) {
      login.addEventListener('click', function(e) {
        e.preventDefault();
        openModal('#modalLogIn');
      });
    }

    const logoutButtons = document.querySelectorAll(select.modal.type.logout);
    for (let logout of logoutButtons) {
      logout.addEventListener('click', function(e) {
        e.preventDefault();
        openModal('#modalLogOut');
      });
    }

    const messageButtons = document.querySelectorAll(select.modal.type.message);
    for (let message of messageButtons) {
      message.addEventListener('click', function(e) {
        e.preventDefault();
        openModal('#modalMessage');
      });
    }
  },

  init: function(){
    const thisApp = this;

    thisApp.initLists();
    thisApp.initPages();
    thisApp.initGraph();
    thisApp.sidebarShow();
    thisApp.popups();
  },
};

app.init();


