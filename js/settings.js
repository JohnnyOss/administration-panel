/* global Handlebars */

export const select = {
  templateOf: {
    bannersList: '#template-banners-list',
    detailsList: '#template-details-list',
    linksList: '#template-links-list',
    payoutList: '#template-payout-list',
    sidebarList: '#template-sidebar-list',
  },
  containerOf: {
    pages: '#pages',
    overlay: '#overlay',
  },
  sidebar: {
    menu: '.sidebar-menu',
    content: '.sidebar-content',
  },
  nav: {
    links: '.nav-list a',
  },
  content: {
    bannersList: '.banners-list',
    detailsList: '.details-list',
    linksList: '.links-list',
    payoutList: '.payout-list',
    sidebarList: '.sidebar-list',
  },
  modal: {
    button: {
      banner: '.btn-banner',
      link: '.btn-link',
    },
    closeButton: '.close-modal',
    overlay: 'overlay',
    type : {
      login: '.modal-log-in',
      logout: '.modal-log-out',
      message: '.modal-message',
    }
  },
};

export const classNames = {
  sidebar: {
    show: 'show',
  },
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
  modal: {
    show: 'show',
  },
};

export const settings = {
};

export const templates = {
  bannersList: Handlebars.compile(document.querySelector(select.templateOf.bannersList).innerHTML),
  detailsList: Handlebars.compile(document.querySelector(select.templateOf.detailsList).innerHTML),
  linksList: Handlebars.compile(document.querySelector(select.templateOf.linksList).innerHTML),
  payoutList: Handlebars.compile(document.querySelector(select.templateOf.payoutList).innerHTML),
  sidebarList: Handlebars.compile(document.querySelector(select.templateOf.sidebarList).innerHTML),
};
