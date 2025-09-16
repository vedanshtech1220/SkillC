import React from 'react';

function Navbar() {
  // 1. Create an array of objects to hold both the link text and its destination (href)
  const navLinks = [
    { text: "Services", href: "#services" },
    { text: "Our Work", href: "#our-work" },
    { text: "About Us", href: "#about-us" },
    { text: "Insights", href: "#insights" },
    { text: "Contact Us", href: "#contact-us" },
  ];

  return (
    <div className='fixed top-0 left-0 w-full px-10 py-1 font-["Neue_Montreal"] flex justify-between items-center bg-zinc-800/30 backdrop-blur-lg '>
      <div className="SkillC">
        <h1 className="text-3xl font-semibold border-2 border-zinc-500 rounded-2xl px-5 py-1 bg-zinc-800/30 backdrop-blur-lg">SkillC</h1>
      </div>
      <div className="links flex gap-10 border-2 border-zinc-500 rounded-2xl px-8 py-3">
        {/* Map over the new navLinks array */}
        {navLinks.map((link, index) => (
          <a 
            key={index}
            // 2. Add the href attribute to the <a> tag
            href={link.href}
            className={`text-lg font-light capitalize ${index === 4 ? "ml-32" : ""}`}
          >
            {/* Display the link's text */}
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;