import React from "react";
import { Link } from "react-router-dom";

export default function Disease({ disease }) {
  return (
    <Link to={`/disease/${disease._id}`}>
      <li>{disease.name}</li>
    </Link>
  );
}
