import type { Menu } from './../../../types/menu';

const menu: Menu[] = [
  {
    "id": "preDonation",
    "localeKey": "doctorMenu.preDonation",
    "icon": "mdi-hand-coin",
    "route": "/doctor/pre-donations"
  },
  {
    "id": "donation",
    "localeKey": "doctorMenu.donations",
    "icon": "mdi-hand-heart-outline",
    "route": "/doctor/donations"
  },
]

export default menu;