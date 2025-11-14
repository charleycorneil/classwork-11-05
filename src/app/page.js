import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto grid max-w-3xl gap-10">
        <div className="flex items-center gap-3">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={40}
            height={40}
            priority
          />
          <h1 className="text-3xl font-semibold tracking-tight">
            Next.js Error & Rendering Demos
          </h1>
        </div>

        <p className="text-lg leading-7 text-zinc-700 dark:text-zinc-300">
          A small playground showing{" "}
          <strong>client vs server components</strong> and{" "}
          <strong>error boundaries</strong>, customized with a cleaner layout
          and navigation.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          <Link href="/client-vs-server" className="card-link">
            <h3 className="card-title">Client vs Server</h3>
            <p className="card-body">
              Compare rendering models and interactivity.
            </p>
          </Link>

          <Link href="/client-error" className="card-link">
            <h3 className="card-title">Client Error</h3>
            <p className="card-body">
              Randomly throw to trigger route error UI.
            </p>
          </Link>

          <Link href="/server-error" className="card-link">
            <h3 className="card-title">Server Error</h3>
            <p className="card-body">
              Demonstrates server-side error handling.
            </p>
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            className="btn-primary"
            href="https://vercel.com/templates?framework=next.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Templates
          </a>
          <a
            className="btn-ghost"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </div>
    </section>
  );
}
