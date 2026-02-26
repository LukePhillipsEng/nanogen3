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
  CheckCircle2,
  User,
  Smartphone,
  ChevronRight
} from 'lucide-react';

/**
 * Scrollbet Production Landing Page
 * UI/UX Redesign: Glassmorphism + Asymmetrical Grid Structure
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

  const [imageErrors, setImageErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleImageError = (name) => {
    setImageErrors(prev => ({ ...prev, [name]: true }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, succeeded: false, error: null });

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
      img: "/leo_levitt.jpg",
      linkedin: "https://www.linkedin.com/in/leo-levitt-11411b177/"
    },
    {
      name: "Luke Phillips",
      role: "Chief Technology Officer",
      bio: "UC Berkeley Materials Science & Engineering. Former SpaceX Engineering Intern, owns full stack development.",
      education: "Berkeley / SpaceX",
      img: "/luke_phillips.jpg",
      linkedin: "https://www.linkedin.com/in/lukephillipseng/"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-[#0F3D2E]/20 relative overflow-hidden">
      {/* Background Gradients for Glass Effect */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-slate-200/50 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] right-[10%] w-[20%] h-[20%] bg-emerald-50/60 rounded-full blur-[80px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/40 backdrop-blur-xl border border-white/40 rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-[#0F3D2E] rounded-xl flex items-center justify-center shadow-lg shadow-[#0F3D2E]/20">
                 <ClockAlert size={22} className="text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-[#0F3D2E]">Scrollbet</span>
            </div>
            <div className="hidden md:flex gap-10 text-sm font-bold uppercase tracking-widest text-slate-500">
              <a href="#how-it-works" className="hover:text-[#0F3D2E] transition-all">Protocol</a>
              <a href="#outcomes" className="hover:text-[#0F3D2E] transition-all">Impact</a>
              <a href="#founders" className="hover:text-[#0F3D2E] transition-all">Founders</a>
            </div>
            <a href="#join" className="px-6 py-2.5 bg-[#0F3D2E] text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-[#0A2B20] transition-all shadow-md active:scale-95">
              Begin Commitment
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Asymmetrical 60/40 Grid */}
      <header className="px-6 pt-12 pb-24 md:pt-24 md:pb-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 lg:gap-24 items-start">
          {/* Main Content (60%) */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/60 text-[#0F3D2E] text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
              <ShieldCheck size={14} strokeWidth={3} /> Verified Accountability Systems
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] text-[#0F3D2E] tracking-tighter">
              Take Back <br />
              <span className="text-slate-300 italic">Your Hours.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-xl leading-relaxed font-medium">
              We bridge the gap between intent and action. Set a goal, put a stake on the line, and <span className="text-[#0F3D2E] font-bold">get paid to stop scrolling.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a href="#join" className="group px-10 py-5 bg-[#0F3D2E] text-white font-black uppercase tracking-widest text-xs rounded-2xl flex items-center justify-center gap-3 hover:bg-[#0A2B20] transition-all shadow-2xl shadow-[#0F3D2E]/20">
                Start My Commitment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#how-it-works" className="px-10 py-5 bg-white/40 backdrop-blur-md text-slate-600 font-black uppercase tracking-widest text-xs rounded-2xl border border-white/60 flex items-center justify-center hover:bg-white/60 transition-all">
                The Science
              </a>
            </div>
          </div>

          {/* Contextual Column (40%) */}
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            <div className="bg-white/40 backdrop-blur-2xl border border-white/60 p-8 rounded-[2.5rem] shadow-xl border-t-white/80">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/10 text-emerald-700 rounded-2xl">
                    <Timer size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Stake</p>
                    <p className="text-2xl font-black text-[#0F3D2E] tracking-tight">$50.00</p>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 animate-spin" />
              </div>
              
              <div className="space-y-8">
                <div className="p-6 bg-white/60 rounded-3xl border border-white/80 shadow-sm">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3 text-slate-400">
                    <span>Focus Progress</span>
                    <span className="text-emerald-600">82% Recovery</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100/50 rounded-full overflow-hidden p-0.5 border border-slate-100">
                    <div className="h-full bg-gradient-to-r from-[#0F3D2E] to-emerald-500 w-[82%] rounded-full shadow-lg"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white/60 rounded-3xl border border-white/80">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Lifetime</p>
                    <p className="text-xl font-black text-slate-700 tracking-tight">145 hrs</p>
                  </div>
                  <div className="p-5 bg-white/60 rounded-3xl border border-white/80">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Efficiency</p>
                    <p className="text-xl font-black text-slate-700 tracking-tight">+32%</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-8 py-6 bg-[#0F3D2E]/5 backdrop-blur-md rounded-[2rem] border border-[#0F3D2E]/10 flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0F3D2E]">System Status: Optimization Active</span>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
            </div>
          </div>
        </div>
      </header>

      {/* Protocol Section - Asymmetrical Grid */}
      <section id="how-it-works" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-[#0F3D2E] tracking-tighter leading-none">The Discipline <br />Protocol.</h2>
            <p className="text-slate-500 font-medium leading-relaxed">Accountability is not about willpower; it is about architecture. We build the infrastructure for your success.</p>
            <div className="pt-4 flex flex-col gap-4">
              {['Baseline Audit', 'Stake Commitment', 'Automated Verification'].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[10px]">{i+1}</div>
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { 
                icon: <Timer className="text-[#0F3D2E]" size={32} />, 
                title: "Set Target", 
                desc: "Choose your reduction goal based on verified baseline data." 
              },
              { 
                icon: <Lock className="text-[#0F3D2E]" size={32} />, 
                title: "Commit Stake", 
                desc: "Place a financial stake to align your future actions with present intent." 
              },
              { 
                icon: <Smartphone className="text-[#0F3D2E]" size={32} />, 
                title: "Verify Absence", 
                desc: "Our system audits your uptime. Your metrics are the only source of truth." 
              },
              { 
                icon: <CheckCircle2 className="text-[#0F3D2E]" size={32} />, 
                title: "Reclaim Asset", 
                desc: "Maintain your streak, keep your money, and earn from the failed peer pool." 
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] hover:translate-y-[-4px] transition-all duration-300 shadow-sm group">
                <div className="mb-6 p-4 bg-white/60 rounded-2xl w-fit group-hover:bg-[#0F3D2E] group-hover:text-white transition-colors">{item.icon}</div>
                <h3 className="text-lg font-black mb-2 text-[#0F3D2E] uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section id="outcomes" className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-[#0F3D2E] rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="grid md:grid-cols-[1fr_0.8fr] gap-16 items-center relative z-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-emerald-400 text-xs font-black uppercase tracking-[0.3em]">Behavioral Metrics</p>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">Intentional <br /> Living.</h2>
              </div>
              <p className="text-emerald-100/60 text-xl leading-relaxed max-w-md font-medium italic">
                "Scrollbet is the refinery for human attention. We convert wasted minutes into focused hours."
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <Moon size={24} />, label: "Better Sleep", sub: "Restorative habits" },
                  { icon: <Brain size={24} />, label: "Deep Focus", sub: "Extended flow states" },
                  { icon: <TrendingDown size={24} />, label: "Less Anxiety", sub: "Freedom from scrolling" },
                  { icon: <Users size={24} />, label: "Presence", sub: "Physical connection" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="p-3 bg-white/10 rounded-2xl text-emerald-400">{item.icon}</div>
                    <div>
                      <p className="font-black text-lg tracking-tight leading-tight uppercase">{item.label}</p>
                      <p className="text-xs text-emerald-100/40 font-bold uppercase tracking-widest">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[3rem] space-y-8 shadow-2xl">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-emerald-400">
                <Zap size={32} fill="currentColor" />
              </div>
              <h3 className="text-3xl font-black tracking-tighter leading-snug">Loss motivation is the strongest behavioral lever.</h3>
              <p className="text-emerald-100/70 text-sm leading-relaxed font-medium">
                Research shows that the psychological pain of losing is twice as powerful as the joy of gaining. We leverage this bias to protect your most valuable asset: time.
              </p>
              <div className="flex items-center gap-3 py-4 border-t border-white/10">
                <ShieldCheck className="text-emerald-400" size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-200">Non-Custodial Escrow System</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24">
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-[#0F3D2E] tracking-tighter uppercase leading-none">The <br />Architects.</h2>
            <div className="h-1 w-12 bg-[#0F3D2E] rounded-full"></div>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">Combining backgrounds in Economics and Materials Science to solve the digital attention crisis.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
            {founders.map((person, idx) => (
              <div key={idx} className="group bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative mb-8 aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100 shadow-inner">
                  {imageErrors[person.name] ? (
                    <div className="w-full h-full flex flex-col items-center justify-center text-[#0F3D2E]/10">
                      <User size={80} strokeWidth={1} />
                    </div>
                  ) : (
                    <img 
                      src={person.img} 
                      alt={person.name} 
                      onError={() => handleImageError(person.name)}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" 
                    />
                  )}
                  <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm">
                    <span className="text-[9px] font-black text-[#0F3D2E] uppercase tracking-[0.2em]">{person.education}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-[#0F3D2E] tracking-tighter uppercase">{person.name}</h3>
                <p className="text-emerald-600 text-[10px] font-black uppercase mb-4 tracking-[0.3em]">{person.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium italic italic opacity-80">{person.bio}</p>
                <a 
                  href={person.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#0F3D2E] transition-colors"
                >
                  View Profile <ChevronRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Form - Split Column Grid */}
      <section id="join" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24">
          <div className="bg-[#0F3D2E] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-6xl font-black tracking-tighter leading-[0.9]">Secure Your <br />Focus.</h2>
              <p className="text-xl text-emerald-100/60 font-medium leading-relaxed max-w-md">
                Join the final cohort for Alpha release. We are onboarding peers in batches of 50 to maintain network stability.
              </p>
            </div>
            <div className="space-y-6 mt-12">
               {[
                 { icon: <ShieldCheck />, title: "Bank-Grade Encryption" },
                 { icon: <Timer />, title: "Automated Usage Sync" },
                 { icon: <Lock />, title: "Privacy-First Auditing" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400">
                      {item.icon}
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-100">{item.title}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-white/40 backdrop-blur-3xl border border-white/60 p-10 rounded-[3rem] shadow-2xl border-t-white/80">
            {status.succeeded ? (
              <div className="h-[500px] flex flex-col items-center justify-center text-center space-y-8 p-4 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center shadow-inner">
                  <CheckCircle2 size={56} strokeWidth={3} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-black text-[#0F3D2E] tracking-tighter uppercase">Commitment Logged</h3>
                  <p className="text-slate-500 font-bold leading-relaxed px-4">
                    Welcome to the attention refinery. A system architect will reach out shortly.
                  </p>
                </div>
                <button 
                   onClick={() => setStatus({ ...status, succeeded: false })}
                   className="text-[10px] font-black uppercase tracking-widest text-[#0F3D2E] border-b-2 border-[#0F3D2E]/20 hover:border-[#0F3D2E] transition-all py-1"
                >
                  Return to Dashboard
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-7">
                <div className="space-y-2 text-left">
                   <h3 className="text-2xl font-black text-[#0F3D2E] tracking-tight uppercase">Alpha Waitlist</h3>
                   <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.25em]">Secure Enrollment Portal</p>
                </div>
                
                {status.error && (
                  <div className="p-4 bg-rose-50 border border-rose-100 rounded-2xl text-rose-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                    <AlertCircle size={16} /> {status.error}
                  </div>
                )}
                
                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Identity</label>
                    <input 
                      required id="name" name="name" type="text" value={formState.name} onChange={handleInputChange}
                      className="w-full bg-white/60 border border-white/80 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#0F3D2E]/5 focus:bg-white transition-all placeholder:text-slate-300 font-bold text-slate-700" 
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Neural Node (Email)</label>
                    <input 
                      required id="email" name="email" type="email" value={formState.email} onChange={handleInputChange}
                      className="w-full bg-white/60 border border-white/80 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#0F3D2E]/5 focus:bg-white transition-all placeholder:text-slate-300 font-bold text-slate-700" 
                      placeholder="jane@focus.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="screenTime" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Daily Usage Baseline</label>
                    <input 
                      required id="screenTime" name="currentScreenTime" type="text" value={formState.currentScreenTime} onChange={handleInputChange}
                      className="w-full bg-white/60 border border-white/80 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#0F3D2E]/5 focus:bg-white transition-all font-mono placeholder:text-slate-300 text-sm font-bold" 
                      placeholder="e.g. 5h 30m"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="targetGoal" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Reduction Protocol</label>
                    <select 
                      id="targetGoal" name="targetGoal" value={formState.targetGoal} onChange={handleInputChange}
                      className="w-full bg-white/60 border border-white/80 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#0F3D2E]/5 focus:bg-white transition-all font-black text-slate-700 text-xs uppercase tracking-widest cursor-pointer appearance-none"
                    >
                      <option>-10% Minimal Commitment</option>
                      <option>-15% Standard Accountability</option>
                      <option>-20% Aggressive Optimization</option>
                    </select>
                  </div>
                </div>

                <button 
                  disabled={status.submitting}
                  type="submit" 
                  className="w-full py-5 bg-[#0F3D2E] text-white font-black uppercase tracking-[0.3em] rounded-2xl transition-all text-xs shadow-2xl shadow-[#0F3D2E]/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                  {status.submitting ? 'Transmitting Data...' : 'Begin My Commitment'}
                </button>
                <p className="text-[9px] text-slate-400 text-center uppercase tracking-[0.2em] font-black">
                   Skill-based accountability integration. 100% secure.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6">
        <div className="max-w-7xl mx-auto bg-white/20 backdrop-blur-md border border-white/40 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0F3D2E] rounded-xl flex items-center justify-center">
               <ClockAlert size={20} className="text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-[#0F3D2E] uppercase italic leading-none">Scrollbet</span>
          </div>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] text-center md:text-left">
            © 2026 Scrollbet Inc — Reclaiming Life Outside the Glass
          </p>
          <div className="flex gap-8 text-slate-400 text-[10px] font-black uppercase tracking-widest">
            <a href="#" className="hover:text-[#0F3D2E] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#0F3D2E] transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
