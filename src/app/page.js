import Head from "next/head";
import dynamic from "next/dynamic";
import HeroSection from "../components/HeroSection";
import CategoryCard from "../components/CategoryCard";
const IngredientsSection = dynamic(() =>
  import("../components/IngredientsSection")
);
// import IngredientsSection from '../components/IngredientsSection';
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elbrit Landing Page</title>
        <meta
          name="description"
          content="Your trusted platform for vitamins and wellness products."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <HeroSection />

      <div className="max-w-7xl mx-auto sm:p-4">
        {/* Ingredients Section */}
        <IngredientsSection />

        {/* Blog Section */}
        <BlogSection />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
