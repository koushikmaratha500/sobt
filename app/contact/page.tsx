"use client";

import Link from "next/link";
import { Mail, Phone, Linkedin, Instagram, Facebook, ArrowLeft, Briefcase, Github } from "lucide-react";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="container mx-auto flex-1 px-4 py-8 sm:py-12 md:py-16">
        <Link 
          href="/" 
          className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-primary sm:mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="mx-auto max-w-2xl rounded-lg border bg-card p-6 shadow-lg sm:p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Koushik Maratha</h1>
            <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
              Full Stack Developer & Tech Enthusiast
            </p>
          </div>

          <div className="mt-6 space-y-4 sm:mt-8">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground sm:text-sm">India</p>
                <a 
                  href="tel:+919398407516" 
                  className="text-sm text-foreground hover:text-primary sm:text-base"
                >
                  +91 9398407516
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground sm:text-sm">Malaysia</p>
                <a 
                  href="tel:+601126145482" 
                  className="text-sm text-foreground hover:text-primary sm:text-base"
                >
                  +60 1126145482
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
              <a 
                href="mailto:Koushik.maratha@gmail.com" 
                className="text-sm text-foreground hover:text-primary sm:text-base"
              >
                koushik.maratha@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <Briefcase className="h-5 w-5 flex-shrink-0 text-primary" />
              <p className="text-sm text-foreground sm:text-base">
                Have a new project or product in mind? Feel free to contact me!
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-6 sm:mt-8">
            <a
              href="https://github.com/koushikmaratha500"
              target="_blank"
              rel="noopener noreferrer"
              className="transform text-muted-foreground transition-all duration-200 hover:scale-110 hover:text-[#0077B5]"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/koushikmaratha"
              target="_blank"
              rel="noopener noreferrer"
              className="transform text-muted-foreground transition-all duration-200 hover:scale-110 hover:text-[#0077B5]"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}