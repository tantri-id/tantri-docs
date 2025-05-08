import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <Image
          src="/images/logo/tantri-logo.png"
          alt="Logo"
          width={90}
          height={120}
          className="-mt-1 dark:hidden"
        />
        <Image
          src="/images/logo/tantri-logo-white.png"
          alt="Logo"
          width={90}
          height={120}
          className="-mt-1 hidden dark:inline-block"
        />
      </div>
    ),
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
  ],
};
