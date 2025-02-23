const KeyApplications = ({ applications }) => {
  return (
    <ul>
      {applications?.map((application) => (
        <li
          key={application.key}
          className="d-flex flex-column flex-md-row mb-4"
        >
          <strong>{application.key} &nbsp;</strong>
          <p> {application.value}</p>
        </li>
      ))}
    </ul>
  );
};
export default KeyApplications;
