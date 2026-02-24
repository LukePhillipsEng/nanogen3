import React, { useState } from 'react';
import { 
  Clock, 
  TrendingDown, 
  Users, 
  Linkedin, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  AlertCircle,
  ClockAlert,
  Moon,
  Brain,
  Timer,
  Lock,
  CheckCircle2
} from 'lucide-react';

/**
 * Scrollbet Production Landing Page
 * UI/UX Redesign: Behavioral Accountability Framing
 * Backend: Formspree Native Fetch Integration (xpqjwapv)
 */
const App = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    currentScreenTime: '',
    targetGoal: '-15% Efficiency'
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    succeeded: false,
    error: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, succeeded: false, error: null });

    // Using the provided Formspree endpoint ID: xpqjwapv
    const endpoint = "https://formspree.io/f/xpqjwapv";

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus({ submitting: false, succeeded: true, error: null });
        setFormState({ name: '', email: '', currentScreenTime: '', targetGoal: '-15% Efficiency' });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Submission failed');
      }
    } catch (err) {
      setStatus({ submitting: false, succeeded: false, error: err.message });
    }
  };

  const founders = [
    {
      name: "Leo Levitt",
      role: "Chief Executive Officer",
      bio: "Yale University Econ. Owns app mechanics and scaling.",
      education: "Yale",
      img: "https://media.licdn.com/dms/image/v2/D5603AQEMNrKzSCY-Cw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730323194682?e=1772064000&v=beta&t=S-cKv0FJF4MMS2Jl9ah0WVYe_BOGklcJdVUj3RQyeTg",
      linkedin: "https://www.linkedin.com/in/leo-levitt-11411b177/"
    },
    {
      name: "Luke Phillips",
      role: "Chief Technology Officer",
      bio: "UC Berkeley Materials Science & Engineering. Former SpaceX Engineering Intern, owns full stack development.",
      education: "Berkeley / SpaceX",
      img: "https://media.licdn.com/dms/image/v2/D4E03AQEp6vMXYZRwIg/profile-displayphoto-crop_800_800/B4EZoFj9EwHMAI-/0/1761029903207?e=1772064000&v=beta&t=9OoMRDpWtgkAfYT5KJ8v0zKXpKSiN4xxWiMtCDxy4YQ",
      linkedin: "https://www.linkedin.com/in/lukephillipseng/"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0F3D2E]/10">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[#0F3D2E] rounded-lg flex items-center justify-center shadow-sm">
               <ClockAlert size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#0F3D2E]">Scrollbet</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#how-it-works" className="hover:text-[#0F3D2E] transition-colors">How It Works</a>
            <a href="#outcomes" className="hover:text-[#0F3D2E] transition-colors">Outcomes</a>
            <a href="#founders" className="hover:text-[#0F3D2E] transition-colors">Founders</a>
          </div>
          <a href="#join" className="px-5 py-2 bg-[#0F3D2E] text-white text-sm font-semibold rounded-full hover:bg-[#0A2B20] transition-all shadow-sm">
            Start Commitment
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-6 pt-16 pb-24 md:pt-28 md:pb-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F3D2E]/5 border border-[#0F3D2E]/10 text-[#0F3D2E] text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck size={14} /> Behavioral Accountability Tool
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] text-[#0F3D2E] mb-6">
            Take Back <br />
            <span className="text-slate-400">Your Hours.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Real accountability for screen habits. Set your goal, put a stake on the line, and keep your money when you succeed. Willpower is finite—incentives are not.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#join" className="px-8 py-4 bg-[#0F3D2E] text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-[#0A2B20] transition-all shadow-lg shadow-[#0F3D2E]/20">
              Start Commitment <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className="px-8 py-4 bg-white text-slate-600 font-bold rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all">
              How It Works
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-slate-50 rounded-[2.5rem] -z-10"></div>
          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xl">
            <div className="flex items-center justify-between mb-8 border-b border-slate-50 pb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <Timer size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Today's Focus</p>
                  <p className="text-xl font-bold text-[#0F3D2E]">2h 12m Saved</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-md">
                   <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div> On Track
                </span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm font-bold mb-2 text-slate-700">
                  <span>Weekly Commitment</span>
                  <span className="text-[#0F3D2E]">82% Complete</span>
                </div>
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0F3D2E] w-[82%] rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Enforcement Stake</p>
                  <p className="text-lg font-bold text-slate-700">$50.00</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Time Reclaimed</p>
                  <p className="text-lg font-bold text-slate-700">14.5 hrs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0F3D2E] mb-4">A Simple Framework for Discipline</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">Using behavioral psychology to bridge the gap between intent and action.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                step: "01",
                icon: <Timer className="text-[#0F3D2E]" size={32} />, 
                title: "Set Your Target", 
                desc: "Choose a screen-time reduction goal (e.g. -20%). We audit your baseline usage to ensure the goal is measurable." 
              },
              { 
                step: "02",
                icon: <Lock className="text-[#0F3D2E]" size={32} />, 
                title: "Commit a Stake", 
                desc: "Put money on the line as a commitment device. This creates an immediate psychological incentive to stay focused." 
              },
              { 
                step: "03",
                icon: <CheckCircle2 className="text-[#0F3D2E]" size={32} />, 
                title: "Maintain Success", 
                desc: "Hit your goals and keep your money. Fail, and your stake is distributed to the peer pool who maintained their discipline." 
              }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
                <span className="absolute top-4 right-6 text-4xl font-black text-slate-50">{item.step}</span>
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-[#0F3D2E]">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section id="outcomes" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-[#0F3D2E]">Measurable Life Improvements.</h2>
            <p className="text-slate-500 leading-relaxed text-lg">
              Scrollbet isn't just about using your phone less—it's about intentional living. Our framework facilitates permanent shifts in habit and focus.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Moon size={20} />, label: "Better Sleep", sub: "Restorative nightly habits" },
                { icon: <Brain size={20} />, label: "Deep Focus", sub: "Extended concentration periods" },
                { icon: <TrendingDown size={20} />, label: "Less Anxiety", sub: "Freedom from the scroll" },
                { icon: <Users size={20} />, label: "Presence", sub: "Meaningful connection" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1 p-1.5 bg-[#0F3D2E]/5 text-[#0F3D2E] rounded-md">{item.icon}</div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{item.label}</p>
                    <p className="text-xs text-slate-400 font-medium">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0F3D2E] rounded-[2rem] p-10 text-white space-y-10 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-10">
                <Zap size={200} />
             </div>
             <div>
                <p className="text-emerald-300 text-sm font-bold uppercase tracking-widest mb-2">The Science</p>
                <h3 className="text-2xl font-bold leading-snug">Accountability beats willpower every time.</h3>
             </div>
             <p className="text-emerald-50/70 leading-relaxed italic">
               "Commitment devices work by making the cost of failure immediate. By putting a stake on your screen time, you align your future self's actions with your current self's intentions."
             </p>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                   <ShieldCheck size={24} />
                </div>
                <p className="text-sm font-bold">100% Transparent. Skill-Based Accountability.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-[#0F3D2E] mb-4 tracking-tight uppercase">Founders</h2>
            <div className="h-1 w-12 bg-[#0F3D2E] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            {founders.map((person, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative mb-8 mx-auto w-64 h-80 overflow-hidden rounded-2xl bg-slate-100 grayscale hover:grayscale-0 transition-all duration-500 shadow-lg border border-slate-100">
                  <img 
                    src={person.img} 
                    alt={person.name} 
                    className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 transition-opacity" 
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white to-transparent">
                    <span className="text-[10px] font-bold text-[#0F3D2E] uppercase tracking-[0.2em]">{person.education}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-1">{person.name}</h3>
                <p className="text-[#0F3D2E] text-xs font-black uppercase mb-4 tracking-[0.2em]">{person.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium max-w-xs mx-auto italic">{person.bio}</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href={person.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-slate-50 text-slate-400 hover:text-[#0F3D2E] hover:bg-[#0F3D2E]/5 rounded-lg transition-all border border-slate-100"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Commitment Section */}
      <section id="join" className="bg-[#0F3D2E] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold leading-tight">Commit. Reclaim. Keep Your Money.</h2>
            <p className="text-xl font-medium text-emerald-100/70 italic">
              "Attention is the new currency. Scrollbet is where you protect it."
            </p>
            <div className="space-y-5">
              {[
                { icon: <Lock />, text: "Secure Infrastructure" },
                { icon: <ShieldCheck />, text: "Transparent Peer Accountability" },
                { icon: <Clock />, text: "Automated Usage Auditing" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 font-bold text-emerald-100">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-lg">{item.icon}</div>
                  <span className="text-sm uppercase tracking-wider">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl text-slate-900">
            {status.succeeded ? (
              <div className="h-[460px] flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
                  <CheckCircle2 size={48} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">Commitment Logged</h3>
                  <p className="text-slate-500 font-medium px-4 leading-relaxed">
                    You have joined the attention refinery. We will contact you shortly to verify your usage baseline.
                  </p>
                </div>
                <button 
                   onClick={() => setStatus({ ...status, succeeded: false })}
                   className="mt-6 text-xs uppercase font-bold text-[#0F3D2E] border-b-2 border-[#0F3D2E]/20 hover:border-[#0F3D2E] transition-all"
                >
                  Register another account
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="space-y-2 mb-6 text-center">
                   <h3 className="text-2xl font-bold text-[#0F3D2E]">Alpha Waitlist</h3>
                   <p className="text-xs text-slate-400 uppercase font-black tracking-[0.2em]">Secure Early Access Enrollment</p>
                </div>
                
                {status.error && (
                  <div className="p-3 bg-rose-50 border border-rose-100 rounded-lg text-rose-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <AlertCircle size={14} /> {status.error}
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      required
                      id="name"
                      name="name"
                      type="text" 
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]/10 focus:bg-white transition-all placeholder:text-slate-300" 
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                    <input 
                      required
                      id="email"
                      name="email"
                      type="email" 
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]/10 focus:bg-white transition-all placeholder:text-slate-300" 
                      placeholder="jane@focus.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="screenTime" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Current Usage (Avg/Day)</label>
                  <input 
                    required
                    id="screenTime"
                    name="currentScreenTime"
                    type="text" 
                    value={formState.currentScreenTime}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]/10 focus:bg-white transition-all font-mono placeholder:text-slate-300 text-sm" 
                    placeholder="e.g. 5h 30m"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="targetGoal" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Accountability Goal</label>
                  <select 
                    id="targetGoal"
                    name="targetGoal"
                    value={formState.targetGoal}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]/10 focus:bg-white transition-all font-bold text-slate-700 text-sm cursor-pointer"
                  >
                    <option>-10% Commitment</option>
                    <option>-15% Standard Accountability</option>
                    <option>-20% Aggressive Refocus</option>
                  </select>
                </div>

                <button 
                  disabled={status.submitting}
                  type="submit" 
                  className="w-full py-5 bg-[#0F3D2E] text-white font-bold uppercase tracking-[0.2em] rounded-xl transition-all text-xs shadow-xl shadow-[#0F3D2E]/20 hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.submitting ? 'Connecting...' : 'Join the Attention Refinery'}
                </button>
                <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-medium">
                   Secure verification. Zero hidden fees.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#0F3D2E] rounded-lg flex items-center justify-center">
               <ClockAlert size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-[#0F3D2E]">Scrollbet</span>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
            © 2026 Scrollbet Inc — Behavioral Accountability Systems
          </p>
          <div className="flex gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-[#0F3D2E]">Privacy</a>
            <a href="#" className="hover:text-[#0F3D2E]">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
