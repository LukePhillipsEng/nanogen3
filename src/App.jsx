import React, { useState } from 'react';
import { 
  Factory, 
  Leaf, 
  Microscope, 
  ArrowRight, 
  Linkedin, 
  ShieldCheck, 
  Zap
} from 'lucide';

const App = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', company: '', message: '' });
  };

  const founders = [
    {
      name: "Luke Phillips",
      role: "Chief Executive Officer",
      bio: "UC Berkeley MatSci. Former SpaceX Materials Engineering intern, owns reactor design, validation, and manufacturing.",
      education: "Berkeley / SpaceX",
      img: "https://media.licdn.com/dms/image/v2/D4E03AQEp6vMXYZRwIg/profile-displayphoto-crop_800_800/B4EZoFj9EwHMAI-/0/1761029903207?e=1772064000&v=beta&t=9OoMRDpWtgkAfYT5KJ8v0zKXpKSiN4xxWiMtCDxy4YQ",
      linkedin: "https://www.linkedin.com/in/lukephillipseng/"
    },
    {
      name: "Leo Levitt",
      role: "Chief Operating Officer",
      bio: "Yale University Econ. Owns industrial operations and scaling hardware-as-a-service.",
      education: "Yale",
      img: "https://media.licdn.com/dms/image/v2/D5603AQEMNrKzSCY-Cw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730323194682?e=1772064000&v=beta&t=S-cKv0FJF4MMS2Jl9ah0WVYe_BOGklcJdVUj3RQyeTg",
      linkedin: "https://www.linkedin.com/in/leo-levitt-11411b177/"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-8 max-w-7xl mx-auto border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-sm rotate-45 flex items-center justify-center">
            <div className="w-4 h-4 bg-slate-950 rounded-full"></div>
          </div>
          <span className="text-2xl font-bold tracking-tighter uppercase italic">Nanogen</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
          <a href="#mission" className="hover:text-emerald-400 transition-colors">Mission</a>
          <a href="#leasing" className="hover:text-emerald-400 transition-colors">Leasing</a>
          <a href="#team" className="hover:text-emerald-400 transition-colors">Team</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-6 pt-20 pb-12 md:pt-32 md:pb-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase mb-6">
            <Zap size={14} /> The Future of Carbon Utilization
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Turn Carbon Liabilities into <span className="text-emerald-500">Industrial Assets.</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
            Nanogen provides modular hardware for industrial emitters to convert <strong className="text-white font-bold underline decoration-emerald-500/50">CO₂</strong> into high-purity Carbon Nanotubes. Zero CAPEX. Full integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-sm flex items-center justify-center gap-2 transition-all uppercase tracking-widest text-sm">
              Inquire for Leasing <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full"></div>
          <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-sm shadow-2xl">
            <div className="flex justify-between items-start mb-12">
              <Factory className="text-emerald-500" size={48} />
              <div className="text-right">
                <div className="flex flex-col">
                  <span className="block text-4xl font-mono font-bold tracking-tighter italic">100t</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold mt-1 tracking-widest">CO₂ Captured/Year</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-3/4 animate-pulse"></div>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-500 uppercase font-bold tracking-widest">
                <span>Any Carbon Source</span>
                <span>High Purity</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Leasing Model Section */}
      <section id="leasing" className="bg-slate-900/40 pt-12 pb-24 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 italic uppercase tracking-tight">Hardware-as-a-Service</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">Infrastructure-level carbon capture with zero upfront costs. Eliminate your footprint and share in the materials upside.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <ShieldCheck className="text-emerald-500" size={32} />, 
                title: "Zero CAPEX Barrier", 
                desc: "No upfront capital expenditure for industrial emitters. We deploy modular units directly to your site under a lease agreement." 
              },
              { 
                icon: <Leaf className="text-emerald-500" size={32} />, 
                title: "Carbon Circularity", 
                desc: "Turn smoke stacks into profit centers. Our process captures flue gas and locks carbon into physical structures stronger than steel." 
              },
              { 
                icon: <Microscope className="text-emerald-500" size={32} />, 
                title: "End-to-End Operation", 
                desc: "Nanogen handles maintenance, byproduct logistics, and nanotube extraction. It's a plug-and-play solution for your facility." 
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-slate-950 border border-slate-800 rounded-sm hover:border-emerald-500/50 transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-lg font-bold mb-3 uppercase tracking-wider">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter">The Founders</h2>
          <div className="h-1 w-20 bg-emerald-500"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((person, idx) => (
            <div key={idx} className="group">
              <div className="relative mb-6 overflow-hidden rounded-sm bg-slate-900 aspect-[4/5] grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl">
                <img 
                  src={person.img} 
                  alt={person.name} 
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 to-transparent">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em]">{person.education}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1 tracking-tight">{person.name}</h3>
              <p className="text-emerald-500 text-[10px] font-black uppercase mb-4 tracking-[0.2em]">{person.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium italic opacity-90">{person.bio}</p>
              <div className="flex gap-4">
                <a 
                  href={person.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-600 hover:text-emerald-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-emerald-500 text-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-[0.9] tracking-tighter">Partner with Nanogen.</h2>
            <p className="text-xl font-medium mb-8 text-slate-900/80 max-w-md">
              Transform your facility into a 21st-century material refinery. Inquire for Q4 2026 deployment.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-900 font-bold">
                <div className="w-10 h-10 bg-slate-950 flex items-center justify-center text-emerald-500 rounded-sm">01</div>
                <span className="uppercase tracking-widest text-xs">Feasibility Assessment</span>
              </div>
              <div className="flex items-center gap-4 text-slate-900 font-bold">
                <div className="w-10 h-10 bg-slate-950 flex items-center justify-center text-emerald-500 rounded-sm">02</div>
                <span className="uppercase tracking-widest text-xs">Modular Unit Delivery</span>
              </div>
              <div className="flex items-center gap-4 text-slate-900 font-bold">
                <div className="w-10 h-10 bg-slate-950 flex items-center justify-center text-emerald-500 rounded-sm">03</div>
                <span className="uppercase tracking-widest text-xs">Active Carbon Conversion</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 p-8 rounded-sm shadow-2xl text-slate-100 border border-slate-800/50">
            {submitted ? (
              <div className="h-[460px] flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-slate-950">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">Inquiry Received</h3>
                <p className="text-slate-400">Our logistics team will contact your facility lead within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-900 border border-slate-800 p-3 rounded-sm focus:outline-none focus:border-emerald-500 transition-colors" 
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Work Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-slate-900 border border-slate-800 p-3 rounded-sm focus:outline-none focus:border-emerald-500 transition-colors" 
                      placeholder="jane@industrial.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Company / Facility Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-slate-900 border border-slate-800 p-3 rounded-sm focus:outline-none focus:border-emerald-500 transition-colors" 
                    placeholder="Global Steel Corp"
                    value={formState.company}
                    onChange={(e) => setFormState({...formState, company: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Emission Profile</label>
                  <textarea 
                    className="w-full bg-slate-900 border border-slate-800 p-3 rounded-sm h-32 focus:outline-none focus:border-emerald-500 transition-colors resize-none" 
                    placeholder="Describe your current CO2 output..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black uppercase tracking-[0.2em] rounded-sm transition-all text-xs">
                  Request Leasing Proposal
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 grayscale opacity-50">
          <div className="w-6 h-6 bg-slate-500 rounded-sm rotate-45 flex items-center justify-center">
            <div className="w-3 h-3 bg-slate-950 rounded-full"></div>
          </div>
          <span className="text-lg font-bold tracking-tighter uppercase italic">Nanogen</span>
        </div>
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] text-center font-bold">© 2026 Nanogen Technologies — Decarbonizing Industry with Material Science</p>
      </footer>
    </div>
  );
};

export default App;
