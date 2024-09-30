import { createBrowserRouter } from "react-router-dom";

import App from "./components/App/App";
import ArticleContent from "./components/ArticleContent/ArticleContent";
import ArticlesList from "./components/ArticlesList/ArticlesList";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Profile from "./components/Profile/Profile";
import CreateArticle from "./components/CreateArticle/CreateArticle";
import EditArticle from "./components/EditArticle/EditArticle";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const ROOT = "/";
const ARTICLES = "/articles";
const ARTICLE_SLUG = "/articles/:slug";
const EDIT_ARTICLE = "/articles/:slug/edit";
const NEW_ARTICLE = "/new-article";
const SIGN_UP = "/sign-up";
const SIGN_IN = "/sign-in";
const PROFILE = "/profile";

const router = createBrowserRouter([
  {
    path: ROOT,
    element: <App />,
    children: [
      {
        index: true,
        element: <ArticlesList />,
      },
      {
        path: ARTICLES,
        element: <ArticlesList />,
      },
      {
        path: ARTICLE_SLUG,
        element: <ArticleContent />,
      },
      {
        path: EDIT_ARTICLE,
        element: (
          <PrivateRoute>
            <EditArticle />
          </PrivateRoute>
        ),
      },
      {
        path: NEW_ARTICLE,
        element: (
          <PrivateRoute>
            <CreateArticle />
          </PrivateRoute>
        ),
      },
      {
        path: SIGN_UP,
        element: <SignUp />,
      },
      {
        path: SIGN_IN,
        element: <SignIn />,
      },
      {
        path: PROFILE,
        element: <Profile />,
      },
    ],
  },
]);

export default router;
