import React from "react";
import { Table } from "react-bootstrap";

function formatDate(date) {
  let d = new Date(date);
  let newDate = d.getDate() + " - " + d.getMonth() + " - " + d.getFullYear();
  return newDate;
}

const ChannelsTable = ({ channels }) => (
  <Table
  responsive
  hover
  striped
  bordered
  >
    <thead>
      <tr>
        <th>#</th>
        <th>Tag</th>
        <th>Name</th>
        <th>Status</th>
        <th>CreateDate</th>
      </tr>
    </thead>
    <tbody>
      {channels.map(channel => (
        <tr key={channel.id}>
          <td>{channel.id}</td>
          <td>{channel.tag}</td>
          <td>{channel.name}</td>
          <td>{channel.status}</td>
          <td>{formatDate(channel.createdDate)}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default ChannelsTable;
