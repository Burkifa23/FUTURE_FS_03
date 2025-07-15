import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductSpecs from '../components/ProductSpecs';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Head>
                <title>Nexus Pro - Revolutionary Technology</title>
                <meta name="description" content="Experience the future of technology with Nexus Pro. Revolutionary, powerful, and intuitive." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="overflow-x-hidden">
                <Navbar />
                <Hero />
                <Features />
                <ProductSpecs />
                <Newsletter />
                <Footer />
            </div>
        </>
    );
}