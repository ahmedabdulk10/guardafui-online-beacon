import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import logo from "@/assets/guardafui-logo-transparent.png.asset.json";
import { SITE_URL } from "@/lib/site-config";

const OG_IMAGE = `${SITE_URL}${logo.url}`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex items-center justify-center bg-sand px-4 py-16">
        <div className="max-w-lg text-center">
          <img src={logo.url} alt="Guardafui Works" width={1254} height={1254} className="h-20 w-auto mx-auto mb-8 opacity-90" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-3">Lost at sea</p>
          <h1 className="text-7xl md:text-8xl font-serif text-navy leading-none">404</h1>
          <h2 className="mt-5 text-2xl md:text-3xl font-serif text-charcoal">This page doesn't exist.</h2>
          <p className="mt-3 text-charcoal/70">
            The page you're looking for has moved or never existed. Let's get you back on course.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-amber px-6 py-3 text-sm font-semibold text-navy-deep transition-all hover:shadow-amber hover:-translate-y-0.5"
            >
              Go home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-sand px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-navy">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-navy-deep"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-navy px-5 py-2.5 text-sm font-medium text-navy">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Guardafui Works — Get Your Small Business Online" },
      {
        name: "description",
        content:
          "A premium remote tech studio building custom websites, business email, hosting, and Google Business profiles for small businesses. Done in about a week.",
      },
      { name: "author", content: "Guardafui Works" },
      { property: "og:title", content: "Guardafui Works — Get Your Small Business Online" },
      {
        property: "og:description",
        content:
          "Custom websites, business email setup, and everything you need to look established from day one.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Guardafui Works" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Guardafui Works lighthouse logo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Guardafui Works — Get Your Small Business Online" },
      {
        name: "twitter:description",
        content: "Custom websites, business email, and full online setup for small businesses.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: logo.url },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
