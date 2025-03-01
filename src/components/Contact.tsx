import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace with your Formspree or EmailJS endpoint
    const endpoint = 'https://formspree.io/f/xeoekwjv';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', phone: '', message: '' }); // Reset form
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-16 ">
      <div className="text-center mb-8">
        <p className="text-lg text-gray-700 dark:text-gray-300">
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
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white/20 dark:bg-gray-800/40 backdrop-blur-lg shadow-2xl border border-white/30 dark:border-gray-700/20 rounded-2xl p-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 bg-white/50 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone No."
            value={formData.phone}
            onChange={handleChange}
            className="p-3 bg-white/50 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 w-full bg-white/50 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600/30 rounded-lg mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          required
        ></textarea>
        <button
          type="submit"
          className="mt-6 w-full bg-greenColor text-white py-3 rounded-lg hover:bg-[#33b8a5]  transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
