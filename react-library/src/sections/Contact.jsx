export default function Contact() {
  return (
    <section id="contact" className="bg-transparent py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-accent">// contact</p>
        <h2 className="text-4xl font-semibold text-white">Get in Touch</h2>
        <p className="mt-6 max-w-3xl text-zinc-400 leading-8">
          Interested in working together? Send a message and I’ll get back to you soon.
        </p>
        <a
          href="mailto:hello@example.com"
          className="mt-10 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
