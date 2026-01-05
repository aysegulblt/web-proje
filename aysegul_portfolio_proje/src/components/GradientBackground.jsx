// src/components/GradientBackground.jsx
export const GradientBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Açık tema zemini (çok hafif mavimsi) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(145,186,219,0.10),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(145,186,219,0.08),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(145,186,219,0.10),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(60,110,160,0.10),_transparent_60%)]" />

      {/* Blur oval 1 */}
      <div className="absolute -top-48 -left-20 w-[36rem] h-[36rem] rounded-full blur-3xl animate-slow-move
        bg-[#91BADB]/25
        dark:bg-[#2b5b86]/25
      " />

      {/* Blur oval 2 */}
      <div className="absolute -bottom-48 right-[-6rem] w-[40rem] h-[40rem] rounded-full blur-3xl animate-slow-move-delayed
        bg-[#91BADB]/18
        dark:bg-[#1b3f63]/22
      " />

      {/* Blur oval 3 (denge için küçük) */}
      <div className="absolute top-1/3 right-10 w-[18rem] h-[18rem] rounded-full blur-3xl animate-slow-move
        bg-[#91BADB]/10
        dark:bg-[#91BADB]/12
      " />
    </div>
  );
};

export default GradientBackground;
