'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Visionary leader with 15+ years of industry experience",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "john@example.com"
      }
    },
    {
      name: "Jane Smith",
      role: "Lead Consultant",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Strategic thinker specializing in business transformation",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "jane@example.com"
      }
    },
    {
      name: "Alex Johnson",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Creative professional with exceptional attention to detail",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@example.com"
      }
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4"
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Our team is composed of passionate professionals with diverse expertise, working together 
            to bring exceptional outcomes for each client.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setHoveredMember(index)}
              onHoverEnd={() => setHoveredMember(null)}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-6 
                            border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300
                            transform hover:-translate-y-2">
                <div className="relative mb-6 w-48 h-48 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse" 
                       style={{ transform: 'scale(1.02)' }} />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative rounded-full w-full h-full object-cover border-4 border-gray-800"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 mb-4">{member.bio}</p>

                <div className={`flex justify-center space-x-4 transition-opacity duration-300 
                              ${hoveredMember === index ? 'opacity-100' : 'opacity-0'}`}>
                  <a href={member.social.linkedin} className="p-2 rounded-full bg-gray-700 hover:bg-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a href={member.social.twitter} className="p-2 rounded-full bg-gray-700 hover:bg-blue-400 transition-colors">
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="p-2 rounded-full bg-gray-700 hover:bg-purple-600 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;