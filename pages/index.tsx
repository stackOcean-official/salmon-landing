import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Salmon - A better way to deploy R &amp; Python Models</title>
        <meta
          name="description"
          content="With our framework we enable data scientist to focus on what they do best and take care of the deployment hassle."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <div className="relative">
          <div className="absolute w-5/6 m-auto rounded-full -inset-1 bg-gradient-to-r from-ocean-600 to-slate-700 opacity-20 filter blur-3xl h-2/3" />
          <div className="relative">
            <Navigation />
            <Hero />
          </div>
        </div>
        <Features />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
