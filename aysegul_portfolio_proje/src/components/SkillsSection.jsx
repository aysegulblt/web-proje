
export const SkillsSection = () => {
  const skills = [
    "React / Vite",
    "JavaScript / TypeScript",
    "HTML / CSS / Tailwind",
    "UI / UX Design",
    "Figma & Prototyping",
    "Responsive Design",
  ];

  return (
    <section id="skills" className="container py-20">
      <h2 className="text-3xl font-semibold text-center mb-10">Skills</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="card-hover rounded-lg bg-card/60 border border-border/60 px-6 py-6 text-center"
          >
            <p className="font-medium text-foreground">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
