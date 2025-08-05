import { Link, useLocation } from 'react-router-dom';

const menuItems = [
    { label: "Welcome", to: "/" },
    { label: "Start Here", to: "/what-is-yoga/beginners-guide" },
    { label: "What Is Yoga?", to: "/what-is-yoga/overview" },
    { label: "The 8-Limbed Path", to: "/what-is-yoga/eight-limbed-path" },
    { label: "List of Poses", to: "/poses" },
    { label: "Resources", to: "/resources" },
];

const PageNav = ({ customPrev, customNext }) => {
    const location = useLocation();
    const decodedPathname = decodeURIComponent(location.pathname);
    const isDynamicPoseRoute = ["/poses/type", "/poses/benefit", "/poses/chakra", "/poses/part"]
      .some(prefix => decodedPathname.startsWith(prefix));
    let currentIndex = menuItems.findIndex(item => decodedPathname === item.to);

    if (isDynamicPoseRoute) {
      currentIndex = menuItems.findIndex(item => item.to === "/poses");
    }

    if (currentIndex === -1) return null; 

    let prevPage = customPrev || menuItems[(currentIndex - 1 + menuItems.length) % menuItems.length];
    let nextPage = customNext || menuItems[(currentIndex + 1) % menuItems.length];


  return (
    <div className="flex justify-between items-center my-6 lg:my-0">
      {prevPage && (
        <Link to={prevPage.to} className="fixed top-1/2 left-0 -translate-y-1/2 group flex items-center gap-1 z-40">
          <div className="flex items-center justify-center w-6 h-12 md:w-8 md:h-16 bg-moss/20 hover:bg-moss/30 rounded-r-full pr-2 transition-all duration-300 ease-in-out group-hover:scale-[103%] group-hover:shadow-md">
            <svg className="text-gray-400 group-hover:text-moss transition-colors duration-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>
          <div className="block absolute left-16 top-1/2 -translate-y-1/2 bg-white rounded-md px-3 py-1 border border-moss/20 opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
            <span className="text-sm">{prevPage.label}</span>
          </div>
        </Link>
      )}
      {nextPage && (
        <Link to={nextPage.to} className="fixed top-1/2 right-0 -translate-y-1/2 group flex items-center gap-1 z-40">
          <div className="block absolute right-16 top-1/2 -translate-y-1/2 bg-white rounded-md px-3 py-1 border border-moss/20 opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
            <span className="text-sm">{nextPage.label}</span>
          </div>
          <div className="flex items-center justify-center w-6 h-12 md:w-8 md:h-16 bg-moss/20 hover:bg-moss/30 rounded-l-full pl-2 transition-all duration-300 ease-in-out group-hover:scale-[103%] group-hover:shadow-md">
            <svg className="text-gray-400 group-hover:text-moss transition-colors duration-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PageNav;
