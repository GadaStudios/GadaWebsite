import React from "react";
import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/site.config";
import { Container } from "./container";

export const Header = () => {
  return (
    <header className="pointer-events-none fixed top-0 left-0 z-50 w-full mix-blend-difference">
      <nav className="flex h-16 w-full items-center md:h-[85px]">
        <Container className="relative flex h-5 items-center justify-between gap-6">
          <Link href="/" className="pointer-events-auto">
            <Image
              src="/svg/logo-white.svg"
              alt={siteConfig.title}
              width={83}
              height={18.3}
              priority
              quality={100}
              className="size-full object-contain"
            />
          </Link>

          <div
            role="button"
            className="min-w-[400px]:gap-3 pointer-events-auto flex h-5 cursor-pointer items-center justify-end gap-2"
          >
            <div className="mr-2 h-10 w-[2px] rounded-full bg-[radial-gradient(white_10%,black_50%,transparent_40%)]" />

            <p className="text-xs font-medium uppercase md:text-[13px]">MENU</p>

            <svg
              className="h-4 w-5"
              viewBox="0 0 28 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1.5H28" stroke="white" strokeWidth="3" />
              <path d="M0 10.5H18.5" stroke="white" strokeWidth="3" />
            </svg>
          </div>
        </Container>
      </nav>
    </header>
  );
};
