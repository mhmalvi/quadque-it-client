export const links = [
    {
      name: "Courses",
      submenu: false,
    },
    {
      name: "About",
      submenu: false,
    },
    {
      name: "More",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "Blogs", link: "/" },
            { name: "Gallery", link: "/" },
            { name: "Stories", link: "/" },
          ],
        },
      ],
    },
    {
        name: "Contact Us",
        submenu: false,
      },
  ];