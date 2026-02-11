import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-primary px-6">
      <div className="text-center">
        <p className="text-6xl font-light md:text-8xl text-accent">404</p>
        <h1 className="mt-4 text-[22px] font-normal text-white">
          Seite nicht gefunden
        </h1>
        <p className="mt-4 text-white/60">
          Die gewünschte Seite existiert leider nicht.
        </p>
        <div className="mt-8">
          <Button href="/" variant="ghost">
            Zur Startseite
          </Button>
        </div>
      </div>
    </section>
  );
}
