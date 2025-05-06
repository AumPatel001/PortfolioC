import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Backend & Machine Learning Developer",
      company: "Cloud Concierge",
      period: "May 2025 – Present",
      location: "Ontario, Canada",
      points: [
        "Engineered a predictive forecasting engine using TensorFlow & Python, analyzing historical and meteorological data to project weekly restaurant metrics (sales, customers).",
        "Architected and implemented the core backend infrastructure (Node.js, Express.js) handling authentication, data processing, and database (MongoDB Atlas) interactions.",
        "Seamlessly integrated the ML model into the backend, enabling automated forecast generation and delivery to the user interface.",
        "Orchestrated data pipelines connecting the React frontend, Node.js backend, MongoDB, and external weather APIs for efficient information flow."
      ]
    },
    {
      title: 'AI-Enhanced Cloud Security Monitoring & Threat Detection System',
      company: 'Academic Project',
      period: 'Apr 2025',
      points: [
        'Architected a cloud-based security system using AWS and Wazuh for real-time threat detection.',
        'Developed machine learning models with Python and TensorFlow to detect anomalies in logs.',
        'Simulated attacks with Atomic Red Team and automated responses to mitigate threats.',
        'Ensured compliance with NIST and ISO 27001 standards through detailed documentation.'
      ]
    },
    {
      title: 'Secure Microservices Deployment via DevSecOps Pipeline',
      company: 'Academic Project',
      period: 'Mar 2025',
      points: [
        'Deployed microservices using Docker and Kubernetes, orchestrated via GitHub Actions CI/CD.',
        'Integrated security scanners like Bandit (SAST), Trivy (container), and OWASP ZAP (DAST).',
        'Managed secrets with HashiCorp Vault and enforced policies using Open Policy Agent (OPA).',
        'Conducted STRIDE threat modeling to mitigate potential security vulnerabilities.'
      ]
    },
    {
      title: 'Cybersecurity Incident Response Simulation Tool',
      company: 'Academic Project',
      period: 'Feb 2025',
      points: [
        'Built a virtual lab with VirtualBox to simulate cyber incidents and test response strategies.',
        'Deployed Wazuh for SIEM to monitor and analyze system logs in real-time.',
        'Simulated attacks using Atomic Red Team and automated responses with Python scripts.',
        'Developed NIST 800-61-compliant incident response playbooks for effective threat handling.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-primary/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-text-primary mb-12 text-center"
        >
          Work Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-secondary/30 p-8 rounded-lg backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">{exp.title}</h3>
                  <p className="text-accent">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-accent">{exp.period}</p>
                  <p className="text-text-secondary">{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                {exp.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 