import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Security Tools & Technologies',
      skills: [
        'SIEM (Wazuh)',
        'Docker',
        'Kubernetes',
        'AWS',
        'Vulnerability Assessment (Nmap, Nessus/OpenVAS)',
        'Penetration Testing (Metasploit)',
        'Network Analysis (Wireshark)',
        'Security Scanners (Bandit, Trivy, OWASP ZAP)',
        'Secret Management (HashiCorp Vault)',
        'Policy Enforcement (Open Policy Agent)'
      ]
    },
    {
      title: 'Programming & Development',
      skills: [
        'Python',
        'JavaScript',
        'Node.js',
        'Express',
        'REST API',
        'SpringBoot',
        'SQL',
        'PowerShell',
        'Machine Learning (TensorFlow)',
        'Anomaly Detection'
      ]
    },
    {
      title: 'Security Frameworks & Standards',
      skills: [
        'OWASP Top 10',
        'NIST Cybersecurity Framework',
        'ISO 27001',
        'NIST 800-61',
        'STRIDE Threat Modeling',
        'Risk Management',
        'Blockchain Security Concepts',
        'Adversarial AI'
      ]
    },
    {
      title: 'Operating Systems',
      skills: [
        'Linux',
        'Windows',
        'macOS'
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-secondary p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-accent mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-primary px-3 py-1 rounded-full text-sm text-text-secondary"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 