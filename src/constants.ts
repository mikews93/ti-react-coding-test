export enum REQUEST_STATUSES {
  NOT_FETCHED = 'notFetched',
  FETCHING = 'fetching',
  SUCCESSFUL = 'successful',
  FAILED = 'failed'
};

export enum STATE_ACTIONS {
  SET_STATE = 'setState',
  MAKE_REQUEST = 'makeRequest'
};

export const GENERAL_ROUTES = {
  home: '/',
  products: '/products',
  clients: '/clients',
  contact: '/contact'
};

export const PRODUCTS_ROUTES = {
  all: `${GENERAL_ROUTES.products}`,
  tech: `${GENERAL_ROUTES.products}/tech`,
  services: `${GENERAL_ROUTES.products}/services`,
  office: `${GENERAL_ROUTES.products}/office`
};

export const NAV_TABS = [
  {
    title: 'Home',
    linkTo: GENERAL_ROUTES.home
  },
  {
    title: 'Products',
    linkTo: GENERAL_ROUTES.products
  },
  {
    title: 'Clients',
    linkTo: GENERAL_ROUTES.clients
  },
  {
    title: 'Contact',
    linkTo: GENERAL_ROUTES.contact
  }
];

export const CATEGORY_NAMES = {
  all: 'All',
  tech: 'Tech',
  services: 'Services',
  office: 'Office'
};

export const CATEGORIES = [
  {
    icon: 'menu',
    name: CATEGORY_NAMES.all,
    linkTo: PRODUCTS_ROUTES.all
  },
  {
    icon: 'computer',
    name: CATEGORY_NAMES.tech,
    linkTo: PRODUCTS_ROUTES.tech
  },
  {
    icon: 'build',
    name: CATEGORY_NAMES.services,
    linkTo: PRODUCTS_ROUTES.services
  },
  {
    icon: 'folder',
    name: CATEGORY_NAMES.office,
    linkTo: PRODUCTS_ROUTES.office
  }
];
