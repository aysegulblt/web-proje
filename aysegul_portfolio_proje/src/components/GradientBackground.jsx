
// src/components/GradientBackground.jsx

export const GradientBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-10 w-[32rem] h-[32rem] bg-[#91BADB]/20 rounded-full blur-3xl animate-slow-move" />
      <div className="absolute -bottom-40 right-[-5rem] w-[36rem] h-[36rem] bg-[#91BADB]/15 rounded-full blur-3xl animate-slow-move-delayed" />
    </div>
  );
};

