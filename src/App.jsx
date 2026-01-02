export default function App() {
  return (
    <div className="">
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <p>
          <label>
            Full Name: <input type="text" name="fullname" required />
          </label>
        </p>
        <p>
          <label>
            Email: <input type="email" name="email" required />
          </label>
        </p>
        <p>
          <label>
            Phone Number: <input type="tel" name="phone" required />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" required></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send Message</button>
        </p>
      </form>
    </div>
  );
}
