export default function Contact() {
  return (
    <section className="px-6 md:px-20 py-20 text-center" id="contact">
      <h2 className="text-3xl font-semibold mb-6 text-white">Get In Touch</h2>
      <p className="text-gray-300 max-w-xl mx-auto">
        I'm currently looking for new opportunities. Feel free to reach out for
        collaborations or questions.
      </p>
      <a
        href="mailto:shehryarkhan@example.com"
        className="mt-6 inline-block px-6 py-3 bg-green-400 text-black rounded hover:bg-green-300 transition"
      >
        Say Hello
      </a>
    </section>
  );
}
