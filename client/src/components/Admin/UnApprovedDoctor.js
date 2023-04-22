import React from "react";

export default function UnApprovedDoctor({ index, doctor, handleApprove }) {
  return (
    <tr>
      <th scope="row" className="align-middle">
        {index + 1}
      </th>
      <td className="align-middle">
        <img src={`${doctor.url}`} width="100px" height="100px" />
      </td>

      <td className="align-middle">{doctor.name}</td>
      <td className="align-middle">
        {`${new Date(doctor.DOR).getDate()}/${
          new Date(doctor.DOR).getMonth() + 1
        }/${new Date(doctor.DOR).getFullYear()}`}
      </td>
      <td className="align-middle">{doctor.registrationno}</td>

      <td className="align-middle">
        <button
          className="block"
          style={{ color: "green" }}
          onClick={() => handleApprove(doctor._id)}
        >
          Approve
        </button>
      </td>
    </tr>
  );
}
