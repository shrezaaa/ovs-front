import { NavbarItem } from '../models/navbar-item.model';

export const NAVBAR_CONFIG: NavbarConfig = {
  public: [
    {
      title:'Home',
      route:''
    },
    {
      title: "Today's Deals",
      route: 'Todays-Deals',
      id: '',
    },
    {
      title: 'Electronics',
      route: 'Electronics',
      id: ''
    },
    {
      title: 'Fashion',
      route: 'Fashion',
      id: ''
    },
    {
      title: 'Health & Beauty',
      route: 'Health & Beauty',
      id: ''
    },
    {
      title: 'Home & Garden',
      route: 'Home & Garden',
      id: ''
    },
    {
      title: 'Sports',
      route: 'Sports',
      id: ''
    },
    {
      title: 'Products',
      id: 'Products',
      subItem: [
        {
          title: 'Electronics',
          route: 'Electronics',
        },
        {
          title: 'Fashion',
          route: 'Fashion',
        },
        {
          title: 'Health & Beauty',
          route: 'Health & Beauty',
        },
        {
          title: 'Home & Garden',
          route: 'Home & Garden',
        },
        {
          title: 'Sports',
          route: 'Sports',
        },
      ],
    },
    {
      title: 'Sell',
      id: 'sell',
      subItem: [
        {
          title: 'Census Data',
          route: 'research/census',
        },
        {
          title: 'Population Report',
          route: 'research/population-report',
        },
      ],
    },
    {
      title: 'About Us',
      id: '',
      subItem: [
        {
          title: 'People',
        },
        {
          title: 'Firm’s History',
        },
      ],
    },
  ],
  customer: [
    {
      title: 'Lot List',
      route: '/seller/lot-status',
    },
    {
      title: 'Invoices',
      route: '/seller/customer/customer-invoice-list',
    },
    {
      title: 'Extensions',
      route: '/seller/customer/customer-extension-list',
    },
    {
      title: 'Returns',
      route: '/seller/customer/customer-return-list',
    },
  ],
};

type NavbarConfig = { public: NavbarItem[]; customer: NavbarItem[] };
