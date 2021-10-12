import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => (
  <div>
    Page Not Found: 404 <Link to="/">Go Home</Link>
  </div>
);

export default NotFoundPage;
