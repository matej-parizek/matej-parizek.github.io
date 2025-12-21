import React, { useEffect } from "react";

export default function RightsModal({ isOpen, owner, projectName, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rights-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-transparent backdrop-blur-[1px]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-[min(520px,92vw)] rounded-xl bg-[var(--color-background)] p-5 shadow-xl">
        <h2 id="rights-modal-title" className="text-lg font-semibold">
          Rights & Ownership Notice
        </h2>

        <p className="mt-3 text-sm text-neutral-700">
          {projectName ? (
            <>
              The rights to the project <span className="font-medium">{projectName}</span> are
              owned by <span className="font-medium">{owner}</span>.
            </>
          ) : (
            <>
              The rights to this project are owned by <span className="font-medium">{owner}</span>.
            </>
          )}
        </p>

        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            className="rounded-lg border px-3 py-2 text-sm hover:bg-[var(--color-background-hover)]"
            onClick={onClose}
          >
            Close
          </button>
          <button
            type="button"
            className="rounded-lg bg-[var(--color-primary)] px-3 py-2 text-sm text-white hover:bg-[var(--color-primary-hover)]"
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
