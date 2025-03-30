import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export const PageLayout = ({
  children,
  title,
  description = "Zeios - Enterprise Solutions",
}: PageLayoutProps) => {
  return (
    <>
      <Head>
        <title>{`${title} | Zeios`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col p-20">
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
};
