import CoursePage from "../pages/CoursePage";
import Favories from "../pages/FavoriesPage";
import HistoryPage from "../pages/HistoryPage";
import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/ProductDetail";
import TeacherPages from "../pages/TeacherPages";

export const routers = [
  {
    path: "/",
    page: HomePage,
  },
  {
    path: "/ProductDetail/:id",
    page: ProductDetail,
  },
   {
    path: "/teacher",
    page: TeacherPages,
  },
  {
    path: "/course",
    page: CoursePage,
  },
   {
    path: "/favories",
    page: Favories,
  },
  {
    path: "/history",
    page: HistoryPage,
  },
];
