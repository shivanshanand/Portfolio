/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      // toast.success("Mail sent successfully!");
      toast("Thanks for reaching out!", {
        description: "I'll get back to you as soon as possible.",
        action: {
          label: "Close",
          onClick: () => console.log("Toast closed"),
        },
      });
      form.current.reset();
    } catch (error) {
      toast.error("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-base-100 text-base-content px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10 drop-shadow-sm">
        Get in Touch
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto card bg-base-200 shadow-md p-8 space-y-6 border border-primary/10"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="input input-bordered w-full"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="title"
          placeholder="Subject / Title"
          required
          className="input input-bordered w-full"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="textarea textarea-bordered w-full"
        ></textarea>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
