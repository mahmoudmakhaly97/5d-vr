const KeyApplications = ({ applications }) => {
    const containsHTML = (str) => {
    return /<[a-z][\s\S]*>/i.test(str);
  }
  return (
    <ul>
      {applications?.map((application) => (
        <li
          key={application.key}
          className="d-flex flex-column flex-md-row mb-4"
        >
          <strong>{application.key} &nbsp;</strong>
          {containsHTML(application.value) ? (
            <p dangerouslySetInnerHTML={{ __html: application.value }} />
          ) : (
            <p>{application.value}</p>
          )}{" "}
        </li>
      ))}
    </ul>
  );
};
export default KeyApplications;
