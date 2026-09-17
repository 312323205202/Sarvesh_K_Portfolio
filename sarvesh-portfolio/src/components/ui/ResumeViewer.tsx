"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-background">
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

      <div className="min-h-0 flex-1 bg-neutral-900">
        <iframe
          src="/Sarvesh-Karthik-Resume.pdf"
          title="Sarvesh Karthik Resume"
          className="h-full w-full border-0"
        />
      </div>
    </div>
  );
}