import Link from "next/link";

export default function Navigation() {
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-background border-b">
      <Link href="/" className="text-lg font-bold" prefetch={false}>
        BPF
      </Link>
      <nav className="flex items-center gap-4 md:gap-6">
        <Link
          href="/"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/learner-modules"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          prefetch={false}
        >
          Modules
        </Link>
        <Link
          href="/chat"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          prefetch={false}
        >
          Chat
        </Link>
        <Link
          href="/FAQ"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          prefetch={false}
        >
          FAQ
        </Link>
      </nav>
    </header>
  );
}
