import React from "react";

export default function Disease({ disease }) {
  return (
    <a href={`/disease/${disease._id}`}>
      <li>{disease.name}</li>
    </a>
  );
}
