import classes from "./contact-form.module.css";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const recaptchaRef = useRef();

  async function sendMessageHandler(event) {
    event.preventDefault();
    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset(); // this line for reset token if server have issue
    // add client validation here
    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
        token: token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
       console.log(data.message);
      })
      .catch((err) => console.error(err));
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="name"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          />
        </div>
        <div className={classes.control}>
          <ReCAPTCHA
            sitekey="6LdPnBcbAAAAAN2vV95mxil8_kDHcd0RVM-dd7wN"
            size="invisible"
            ref={recaptchaRef}
          />
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
