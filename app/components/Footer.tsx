export const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Enterprise', href: '#enterprise' },
        { name: 'Security', href: '#security' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Blog', href: '#blog' },
        { name: 'Careers', href: '#careers' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'Help Center', href: '#help' },
        { name: 'Partners', href: '#partners' },
        { name: 'Status', href: '#status' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '#privacy' },
        { name: 'Terms', href: '#terms' },
        { name: 'Security', href: '#security' },
        { name: 'Compliance', href: '#compliance' },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Bracquets
              </span>
              <span className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Bracquets. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#twitter" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#linkedin" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#github" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 