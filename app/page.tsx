import { FeatureRequestForm } from "@/components/feature-form";
import { WelcomeModal } from "@/components/welcome-modal";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="container mx-auto flex-1 px-4 py-8 sm:py-12 md:py-16">
        <WelcomeModal />
        <FeatureRequestForm />
      </main>
      <Footer />
    </div>
  );
}