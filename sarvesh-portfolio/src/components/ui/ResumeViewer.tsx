"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

type ResumeViewerProps = {
  open: boolean;
  onClose: () => void;
};

export function ResumeViewer({ open, onClose }: ResumeViewerProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex flex-col bg-neutral-900">
      {/* Viewer header */}
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-background px-4 sm:px-6">
        <div>
          <p className="text-sm font-medium text-foreground">
            Sarvesh Karthik — Resume
          </p>
          <p className="text-xs text-muted">
            Click × or press Escape to close
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close resume"
          className="flex size-10 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent/40 hover:text-foreground"
        >
          <X size={20} strokeWidth={1.75} />
        </button>
      </div>

      {/* PDF viewer */}
      <div className="min-h-0 flex-1 overflow-hidden">
        <object
          data="/Sarvesh-Karthik-Resume.pdf"
          type="application/pdf"
          className="h-full w-full"
          aria-label="Sarvesh Karthik Resume"
        >
          <div className="flex h-full items-center justify-center p-6 text-center">
            <div>
              <p className="text-sm text-white">
                Your browser cannot display this PDF here.
              </p>

              <a
                href="/Sarvesh-Karthik-Resume.pdf"
                className="mt-4 inline-flex rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground"
              >
                Open Resume
              </a>
            </div>
          </div>
        </object>
      </div>
    </div>,
    document.body,
  );
}