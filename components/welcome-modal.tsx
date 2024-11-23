"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />

      <div className="relative z-50 w-full max-w-lg rounded-lg bg-white p-4 shadow-xl dark:bg-gray-800 sm:p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold sm:text-2xl">Share Your App Idea!</h2>
          <button
            onClick={closeModal}
            className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
            Got a brilliant app concept? Submit your idea here, and we’ll review it to bring your vision to life. Let’s collaborate and turn your innovation into the next big thing in the app world!
          </p>

          <div className="flex justify-end space-x-3">
            <button
              onClick={closeModal}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 sm:px-4 sm:py-2"
            >
              Cancel
            </button>
            <button
              onClick={closeModal}
              className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 sm:px-4 sm:py-2"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}