import React from "react";

export default function FileName({ name, type }) {
  return (
    <>
      <td className="file-icon">{type}</td>
      <td className="file-name">{name}</td>
    </>
  );
}
