import { HeaderPage } from "../components/HeaderPage";
import "./NotFoundPage.css";

export function NotFoundPage({ cart }) {
  return (
    <>
      <title>404 Page Not Found</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <HeaderPage cart={cart} />
      <div className="not-found-message">Page not found</div>
    </>
  );
}

