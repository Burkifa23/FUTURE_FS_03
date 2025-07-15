import { motion } from 'framer-motion';
import { HiLightningBolt, HiShield, HiSparkles } from 'react-icons/hi';

const Features = () => {
  const features = [
    {
      icon: <HiLightningBolt className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Experience unprecedented speed with our advanced processing technology."
    },
    {
      icon: <HiShield className="w-8 h-8" />,
      title: "Ultra Secure",
      description: "Military-grade encryption keeps your data safe and protected."
    },
    {
      icon: <HiSparkles className="w-8 h-8" />,
      title: "AI Powered",
      description: "Smart features that adapt to your workflow and preferences."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Why Choose Nexus Pro
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Discover the features that make Nexus Pro the ultimate choice for professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-light rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-xl mb-6 group-hover:bg-blue-600 transition-colors duration-300"
              >
                {feature.icon}
              </motion.div>
              
              <h3 className="text-2xl font-semibold text-dark mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;