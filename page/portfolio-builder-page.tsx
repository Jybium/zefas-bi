import { NextPage } from "next";
import Head from "next/head";
import { PortfolioBuilderForm } from "@/components/forms/portfolio-builder-form";

const PortfolioBuilderPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Power BI Portfolio Builder | Zefas</title>
        <meta
          name="description"
          content="Build your professional Power BI portfolio with our expert-led training program"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PortfolioBuilderForm />
      </main>
    </>
  );
};

export default PortfolioBuilderPage;
