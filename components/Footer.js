import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { title: 'Product', links: ['Features', 'Specifications', 'Pricing', 'Reviews'] },
        { title: 'Support', links: ['Help Center', 'Contact', 'Warranty', 'Repairs'] },
        { title: 'Company', links: ['About', 'Careers', 'Press', 'Investors'] }
    ];

    const contactInfo = [
        { icon: <HiMail className="w-5 h-5" />, text: 'hello@nexuspro.com' },
        { icon: <HiPhone className="w-5 h-5" />, text: '+1 (555) 123-4567' },
        { icon: <HiLocationMarker className="w-5 h-5" />, text: 'San Francisco, CA' }
    ];

    return (
        <footer id="contact" className="bg-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-4">Nexus Pro</h3>
                            <p className="text-gray mb-6 max-w-md">
                                Revolutionary technology designed for professionals who demand excellence in every detail.
                            </p>

                            <div className="space-y-3">
                                {contactInfo.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center space-x-3"
                                    >
                                        <div className="text-primary">{item.icon}</div>
                                        <span className="text-gray">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Footer Links */}
                    {footerLinks.map((section, sectionIndex) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <motion.a
                                            href="#"
                                            className="text-gray hover:text-white transition-colors duration-200"
                                            whileHover={{ x: 5 }}
                                        >
                                            {link}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-800 mt-12 pt-8 text-center"
                >
                    <p className="text-gray">
                        © {currentYear} Nexus Pro. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;