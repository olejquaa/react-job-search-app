import { ROUTE } from "router";
import { EmptyPage, FavoritesPage, HomePage, VacancyPage } from "pages";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { MainTemplate, PageTemplate } from "ui";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainTemplate />}>
        <Route path={ROUTE.HOME} element={<HomePage />} />
      </Route>
      <Route element={<PageTemplate />}>
        <Route path={ROUTE.VACANCY} element={<VacancyPage />} />
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.EMPTY} element={<EmptyPage />} />
      </Route>
    </>,
  ),
);
