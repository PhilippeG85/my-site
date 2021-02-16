import React from "react";

function Form() {
  return (
    <div>
      <iframe title="hidden_iframe" name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }} />
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSdzMG6QMX9tU73rX7_2FavBw9A9eOs-V1LGUOT2wZPFhFWdtw/formResponse"
        method="post"
        target="hidden_iframe"
        className="form"
      >
        <div className="form-name">
          <input className="name-input style-input" name="entry.576915509" type="text" title="name" placeholder="Name" />
          <input className="email-input style-input" name="entry.1190585177" type="text" title="email" placeholder="Email" />
        </div>
        <input className="form-subject style-input" name="entry.1097150983" type="text" title="sujet" placeholder="Subject" />
        <textarea className="form-msg" name="entry.197993009" title="message" placeholder="Message" />
        <input className="form-btn" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Form;
// https://docs.google.com/forms/d/e/1FAIpQLSdzMG6QMX9tU73rX7_2FavBw9A9eOs-V1LGUOT2wZPFhFWdtw/viewform?usp=pp_url&entry.576915509=name&entry.1190585177=email&entry.1097150983=subject&entry.197993009=message
