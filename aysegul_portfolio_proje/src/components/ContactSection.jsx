// src/components/ContactSection.jsx
export const ContactSection = ({ lang }) => {
  const isTr = lang === "tr";

  return (
    <section id="contact" className="container py-20 space-y-8">
      <h2 className="text-3xl font-semibold text-center mb-4">
        {isTr ? "Benimle İletişime Geç" : "Contact Me"}
      </h2>

      <p className="text-center text-sm text-foreground/70 max-w-xl mx-auto">
        {isTr
          ? "Freelance projeler, staj fırsatları veya sadece tanışmak için bana mesaj gönderebilirsin."
          : "Feel free to reach out for freelance work, internship opportunities, or just to say hi."}
      </p>

      <div className="max-w-3xl mx-auto">
        <form className="grid gap-4 md:grid-cols-2 bg-card/60 border border-border/60 rounded-xl p-6 card-hover">
          <input
            type="text"
            placeholder={isTr ? "İsim" : "Name"}
            className="bg-transparent border border-border/60 rounded-md px-3 py-2 text-sm outline-none focus:border-[#91BADB]"
          />
          <input
            type="email"
            placeholder={isTr ? "E-posta" : "Email"}
            className="bg-transparent border border-border/60 rounded-md px-3 py-2 text-sm outline-none focus:border-[#91BADB]"
          />
          <input
            type="text"
            placeholder={isTr ? "Konu" : "Subject"}
            className="bg-transparent border border-border/60 rounded-md px-3 py-2 text-sm outline-none focus:border-[#91BADB]"
          />
          <input
            type="text"
            placeholder={isTr ? "Zaman çizelgesi" : "Timeline"}
            className="bg-transparent border border-border/60 rounded-md px-3 py-2 text-sm outline-none focus:border-[#91BADB]"
          />
          <textarea
            placeholder={
              isTr ? "Proje detayları..." : "Project details..."
            }
            className="md:col-span-2 bg-transparent border border-border/60 rounded-md px-3 py-2 text-sm outline-none focus:border-[#91BADB] min-h-[120px]"
          />
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="cusmic-button bg-[#91BADB] text-slate-900 hover:shadow-[0_0_18px_rgba(145,186,219,0.8)]"
            >
              {isTr ? "Gönder" : "Send"}
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-xs text-foreground/60">
          {isTr ? "E-posta:" : "Email:"}{" "}
          <span className="text-[#91BADB]">aysegul.bulut@stu.rumeli.com</span>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
