const Func = (email_text) => {
  const sendEmail = () => {
    // Define the recipient, subject, and body of the email
    var recipient = 'xkickai@gmail.com';
    var subject = 'Call Topic';
    var body = { email_text };

    // Construct the email link
    var link =
      'mailto:' +
      recipient +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body);

    // Open the link in a new window
    window.open(link, '_blank');
  };
  return (
    <div className="footer">
      <button className="btn btn-primary" onClick={sendEmail}>
        Draft a post-call email
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          window.open('http://www.google.com');
        }}
      >
        Open transcript
      </button>
    </div>
  );
};

export default Func;
