import type { Menu } from './../../../types/menu';

const menu: Menu[] = [
  {
    "id": "home",
    "localeKey": "adminMenu.home",
    "icon": "mdi-home",
    "route": "/admin"
  },
  {
    "id": "doctors",
    "localeKey": "adminMenu.doctors",
    "icon": "mdi-doctor",
    "route": "/admin/doctors"
  },
  {
    "id": "nurses",
    "localeKey": "adminMenu.nurses",
    "icon": "mdi-hospital-box",
    "route": "/admin/nurses"
  },
  {
    "id": "entities",
    "localeKey": "adminMenu.entities",
    "icon": "mdi-hospital-building",
    "route": "/admin/entities"
  },
  {
    "id": "pre-donations",
    "localeKey": "adminMenu.preDonations",
    "icon": "mdi-hand-coin",
    "route": "/admin/pre-donations"
  },
]

export default menu;