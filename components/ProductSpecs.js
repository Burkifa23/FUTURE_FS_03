import { motion } from 'framer-motion';
import Image from 'next/image';

const ProductSpecs = () => {
    const specs = [
        { label: "Display", value: "6.1″ Super Retina XDR" },
        { label: "Processor", value: "A17 Pro Chip" },
        { label: "Storage", value: "128GB - 1TB" },
        { label: "Camera", value: "Triple 48MP System" },
        { label: "Battery", value: "Up to 29 hours video" },
        { label: "Connectivity", value: "5G, Wi-Fi 6E, Bluetooth 5.3" }
    ];

    return (
        <section id="specs" className="py-20 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Specs */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8">
                            Technical Specifications
                        </h2>

                        <div className="space-y-6">
                            {specs.map((spec, index) => (
                                <motion.div
                                    key={spec.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex justify-between items-center py-4 border-b border-gray-200"
                                >
                                    <span className="text-gray font-medium">{spec.label}</span>
                                    <span className="text-dark font-semibold">{spec.value}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-10"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 transition-colors duration-200 shadow-lg"
                            >
                                View Full Specs
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Product Images */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-6">
                            <motion.div
                                whileHover={{ scale: 1.05, rotateY: 5 }}
                                className="relative overflow-hidden rounded-2xl"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=500&fit=crop"
                                    alt="Nexus Pro Front View"
                                    width={400}
                                    height={500}
                                    className="object-cover"
                                />
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05, rotateY: -5 }}
                                className="relative overflow-hidden rounded-2xl mt-8"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=500&fit=crop"
                                    alt="Nexus Pro Side View"
                                    width={400}
                                    height={500}
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-full blur-xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductSpecs;