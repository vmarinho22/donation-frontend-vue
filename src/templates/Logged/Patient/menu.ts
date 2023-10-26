import type { Menu } from './../../../types/menu';

const menu: Menu[] = [
  {
    "id": "patient",
    "localeKey": "patientMenu.patients",
    "icon": "mdi-page-next",
    "route": "/patient"
  },
  {
    "id": "donation",
    "localeKey": "patientMenu.donations",
    "icon": "mdi-water-circle",
    "route": "/patient/donations"
  },
]

export default menu;