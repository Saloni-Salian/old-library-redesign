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

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-emerald-deep px-4">
      <div className="max-w-md text-center">
        <h1 className="display text-8xl text-gold">404</h1>
        <h2 className="mt-4 text-xl text-cream">This page is not in our library</h2>
        <p className="mt-2 text-sm text-cream/60">
          The chapter you're looking for may have been moved or never written.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-emerald-deep text-xs tracking-[0.2em] uppercase transition-colors"
          >
            Return home
          </Link>
        </div>
      </div>
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
    <div className="flex min-h-screen items-center justify-center bg-emerald-deep px-4">
      <div className="max-w-md text-center">
        <h1 className="display text-3xl text-cream">Something went dim</h1>
        <p className="mt-3 text-sm text-cream/60">
          Please try again — or head back to the entrance.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-emerald-deep text-xs tracking-[0.2em] uppercase transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="px-6 py-3 border border-cream/30 text-cream hover:border-cream text-xs tracking-[0.2em] uppercase transition-colors"
          >
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
      { title: "The Old Library — Literary Cocktail Salon, Dubai" },
      { name: "description", content: "A dim-lit sanctuary in Dubai where every cocktail begins with a story. Award-winning bar, kitchen, and live music." },
      { property: "og:title", content: "The Old Library — Literary Cocktail Salon, Dubai" },
      { property: "og:description", content: "A dim-lit sanctuary in Dubai where every cocktail begins with a story." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
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
      <Outlet />
    </QueryClientProvider>
  );
}
