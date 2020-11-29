/* global Handlebars */

export const select = {
  templateOf: {
    payoutList: '#template-payout-list',
  },
  containerOf: {
    pages: '#pages',
  },
  sidebar: {
    menu: '.sidebar-menu',
    content: '.sidebar-content',
  },
  nav: {
    links: '.nav-list a',
  },
  content: {
    payoutList: '.payout-list',
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
};

export const settings = {
};

export const templates = {
  payoutList: Handlebars.compile(document.querySelector(select.templateOf.payoutList).innerHTML),
};
