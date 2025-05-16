import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const contactInfo = [
  {
    type: "Email",
    value: "nigel.ong00@gmail.com",
    link: "mailto:nigel.ong00@gmail.com",
    icon: <FaEnvelope className="text-2xl" />,
    display: "nigel.ong00@gmail.com"
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/in/niong",
    link: "https://linkedin.com/in/niong",
    icon: <FaLinkedin className="text-2xl" />,
    display: "linkedin.com/in/niong"
  },
  {
    type: "GitHub",
    value: "github.com/nigel-ong",
    link: "https://github.com/nigel-ong",
    icon: <FaGithub className="text-2xl" />,
    display: "github.com/nigel-ong"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center section-enter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <motion.div
          className="max-w-2xl mx-auto bg-card text-card-foreground rounded-xl shadow-lg p-8 section-enter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-center mb-8">
            I'm currently open to opportunities in IT Support and Development. Feel free to reach out through any of the channels below:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                target={contact.type !== "Email" ? "_blank" : undefined}
                rel={contact.type !== "Email" ? "noopener noreferrer" : undefined}
                className="group p-6 rounded-lg hover:bg-muted transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary bg-opacity-20 text-primary mb-4 group-hover:bg-opacity-40 transition-colors">
                  {contact.icon}
                </div>
                <h3 className="font-semibold mb-2">{contact.type}</h3>
                <p className="text-sm text-muted-foreground break-all">{contact.display}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
