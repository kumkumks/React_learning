// sidebarData.js
import {
  faHome,
  faChartLine,
  faCalendar,
  faUsers,
  faGear,
  faCircleQuestion,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export const sidebarSections = [
  {
    title: "MENU",
    items: [
      { id: 1, name: "Dashboard", icon: faHome },
      { id: 2, name: "Tasks", icon: faChartLine, badge: 12 },
      { id: 3, name: "Calendar", icon: faCalendar },
      { id: 4, name: "Analytics", icon: faChartLine },
      { id: 5, name: "Team", icon: faUsers },
    ],
  },
  {
    title: "GENERAL",
    items: [
      { id: 6, name: "Settings", icon: faGear },
      { id: 7, name: "Help", icon: faCircleQuestion },
      { id: 8, name: "Logout", icon: faRightFromBracket },
    ],
  },
];
