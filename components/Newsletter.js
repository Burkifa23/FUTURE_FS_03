import { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(""); // 'loading', 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            await addDoc(collection(db, "newsletter"), {
                email: email,
                timestamp: new Date(),
            });
            setStatus("success");
            setEmail("");
        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus("error");
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-primary to-purple-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Stay Updated
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Be the first to know about new features, updates, and exclusive
                        offers
                    </p>

                    <motion.form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="flex-1 px-6 py-4 rounded-xl border-0 text-dark placeholder-gray focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                        <motion.button
                            type="submit"
                            disabled={status === "loading"}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50"
                        >
                            {status === "loading" ? "Subscribing..." : "Subscribe"}
                        </motion.button>
                    </motion.form>

                    {status === "success" && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 text-white/90"
                        >
                            Thank you for subscribing! 🎉
                        </motion.p>
                    )}

                    {status === "error" && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 text-red-200"
                        >
                            Something went wrong. Please try again.
                        </motion.p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
