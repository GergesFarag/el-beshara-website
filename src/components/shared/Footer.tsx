import Link from "next/link";

 const Footer =()=> {
  return (
    <footer className="relative bg-dark text-dark-foreground overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
      </div>

      <div className="relative container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-primary">
              YourBrand
            </h3>
            <p className="text-gray-400 text-sm">
              Creating amazing musical experiences for the world.
            </p>
            <div className="flex gap-4 text-secondary-foreground">
              {/* Social Icons */}
              <Link href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/50 hover:text-light hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </Link>
              <Link href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/50 hover:text-light hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
              <Link href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/50 hover:text-light hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Projects', 'Contact'].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-light/80 hover:text-primary/50 hover:translate-x-2 inline-block transition-all duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-2">
              {['Blog', 'Documentation', 'Support', 'FAQ'].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-light/80 hover:text-primary/50 hover:translate-x-2 inline-block transition-all duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-gray-400 text-sm">Subscribe to our newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-purple-400 transition-colors"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div> */}
        </div>

        {/* Divider with animation */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary animate-pulse opacity-50"></div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 YourBrand. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-light/80 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-light/80 hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="text-light/80 hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full top-20 left-1/4 animate-ping"></div>
        <div className="absolute w-2 h-2 bg-pink-400 rounded-full bottom-20 right-1/3 animate-ping delay-500"></div>
        <div className="absolute w-1 h-1 bg-blue-400 rounded-full top-1/2 right-1/4 animate-ping delay-1000"></div>
      </div> */}

      {/* <style jsx>{`
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style> */}
    </footer>
  );
}

export default Footer