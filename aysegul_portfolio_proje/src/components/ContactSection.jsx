import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import profile from "../data/profile.json";
import { CheckCircle, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const email = profile.email || "aysegul.bulut@stu.rumeli.edu.tr";
  const linkedIn = profile.social?.linkedin || "";
  const github = profile.social?.github || "";

  const validateForm = (form) => {
    const newErrors = {};
    const name = form.get("name")?.toString().trim();
    const mail = form.get("email")?.toString().trim();
    const message = form.get("message")?.toString().trim();

    if (!name) newErrors.name = t("contact.requiredField");
    if (!mail) {
      newErrors.email = t("contact.requiredField");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      newErrors.email = t("contact.invalidEmail");
    }
    if (!message) newErrors.message = t("contact.requiredField");

    return newErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    // Validasyon
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // Başarı mesajı göster
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);

    // Formu temizle
    e.currentTarget.reset();
  };

  const inputBaseClass = `bg-transparent border rounded-lg px-4 py-3 text-sm outline-none
    focus:ring-2 focus:ring-[#91BADB]/50 focus:border-[#91BADB]/70 transition-colors`;

  return (
    <section id="contact" className="container py-24 space-y-10">
      {/* Başlık */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          {t("contact.title")}
        </h2>
        <div className="mx-auto w-20 h-[2px] bg-[#91BADB] rounded-full" />
      </div>

      <p className="text-center text-sm sm:text-base text-foreground/70 max-w-2xl mx-auto leading-relaxed">
        {t("contact.subtitle")}
      </p>

      {/* Başarı Mesajı */}
      {submitted && (
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm">{t("contact.successMessage")}</p>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto space-y-6">
        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="grid gap-4 md:grid-cols-2 bg-card/60 border border-border/60 rounded-2xl p-6 card-hover"
          noValidate
        >
          {/* İsim */}
          <div className="space-y-1">
            <input
              name="name"
              type="text"
              placeholder={t("contact.name")}
              className={`${inputBaseClass} w-full ${
                errors.name ? "border-red-500/70" : "border-border/60"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          {/* E-posta */}
          <div className="space-y-1">
            <input
              name="email"
              type="email"
              placeholder={t("contact.email")}
              className={`${inputBaseClass} w-full ${
                errors.email ? "border-red-500/70" : "border-border/60"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Konu - tam genişlik */}
          <input
            name="subject"
            type="text"
            placeholder={t("contact.subject")}
            className={`${inputBaseClass} border-border/60 md:col-span-2`}
          />

          {/* Mesaj */}
          <div className="md:col-span-2 space-y-1">
            <textarea
              name="message"
              placeholder={t("contact.projectDetails")}
              className={`${inputBaseClass} w-full min-h-[140px] resize-none ${
                errors.message ? "border-red-500/70" : "border-border/60"
              }`}
            />
            {errors.message && (
              <p className="text-xs text-red-500">{errors.message}</p>
            )}
          </div>

          <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Sosyal linkler */}
            <div className="flex items-center gap-2 text-xs">
              {linkedIn && (
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded-full border border-border/60 hover:bg-card/80 text-foreground/80 transition-colors inline-flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
              )}

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded-full border border-border/60 hover:bg-card/80 text-foreground/80 transition-colors inline-flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              )}
            </div>

            <button
              type="submit"
              className="cosmic-button bg-[#91BADB] text-slate-900 hover:shadow-[0_0_18px_rgba(145,186,219,0.8)]"
            >
              {t("contact.send")}
            </button>
          </div>
        </form>

        {/* Email satırı */}
        <p className="text-center text-xs text-foreground/60">
          {t("contact.emailLabel")}{" "}
          <a
            className="text-[#91BADB] hover:underline"
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
