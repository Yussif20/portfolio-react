import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="text-center mb-8">
        <p className="text-lg">
          Feel free to reach out! I prefer email due to potential time zone
          differences.
        </p>
        <a
          href="mailto:yousefayman2000500@gmail.com"
          className="text-blue-500 hover:underline"
        >
          yousefayman2000500@gmail.com
        </a>
      </div>
      <form
        action="results.html"
        className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-md"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 border rounded-md"
            required
          />
          <input
            type="tel"
            placeholder="Phone No."
            className="p-2 border rounded-md"
            required
          />
        </div>
        <textarea
          placeholder="Your Message"
          className="p-2 w-full border rounded-md mt-4"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="mt-4 w-full bg-black text-white py-2 rounded-md"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
