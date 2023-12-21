type NavigationMenu = {
  id: number;
  title: string;
  link: string;
};

export const navigationMenu: NavigationMenu[] = [
  {
    id: 1,
    title: 'Log in',
    link: '/login',
  },
  {
    id: 2,
    title: 'Upload Gif',
    link: '/upload',
  },
  {
    id: 3,
    title: 'View Uploads',
    link: '/uploads',
  },
  {
    id: 4,
    title: 'About Us',
    link: '/about',
  },
];
