import React from "react";

interface IListing {
  [key: string]: string;
}

export default function Notes(props: { data: IListing[] }) {
  return (
    <>
      <h1>Notes</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Position</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((posting) =>
            posting.other ? (
              <tr key={posting.id}>
                <td>{parseInt(posting.id)}</td>
                <td>
                  <a href={posting.url}>{posting.position}</a>
                </td>
                <td>{posting.other}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </>
  );
  /*
  const data = localStorage.getItem('postings');
  return (
    <>
      <h1>Notes</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Position</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data !== null && data.length > 4 ? JSON.parse(data).map((posting: IListing) =>
            posting.other ? (
              <tr key={posting.id}>
                <td>{parseInt(posting.id)}</td>
                <td>
                  <a href={posting.url}>{posting.position}</a>
                </td>
                <td>{posting.other}</td>
              </tr>
            ) : null
          ): null}
        </tbody>
      </table>
    </>
  );
  */
}
