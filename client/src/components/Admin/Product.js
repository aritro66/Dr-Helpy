import React from "react";

export default function Product({ index, product, handleDelete }) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>
        <img
          src={`data:image/${product.mimetype};base64, ${product.img}`}
          width="100px"
          height="100px"
        />
      </td>
      <td>{product.name}</td>
      <td style={{ textTransform: "none" }}>₹{product.price}</td>
      <td>
        <button
          className="block"
          style={{ color: "red" }}
          onClick={() => handleDelete(product._id)}
        >
          <i class="fa-sharp fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  );
}
