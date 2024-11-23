"use client";

import { Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex flex-col items-center justify-center space-y-2 text-center text-sm sm:flex-row sm:space-y-0 sm:space-x-2">
          <span className="text-muted-foreground">
            © {currentYear} Protitos. All rights reserved.
          </span>
          <span className="hidden text-muted-foreground sm:inline">•</span>
          <span className="flex items-center space-x-1 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 fill-current text-red-500" />
            <span>by</span>
            <Link
              href="/contact"
              className="font-medium text-primary hover:underline"
            >
              Koushik Maratha
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}