import { X } from "lucide-react";

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* backdrop */}
      <button
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-label="Close modal backdrop"
      />

      {/* panel */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-card/80 border border-border/60 shadow-xl backdrop-blur-xl p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>

          <button
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full p-2 border border-border/60 bg-card/60 hover:bg-card/80 transition"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
