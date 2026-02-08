import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Linkedin, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  AlertCircle,
  EyeOff
} from 'lucide-react';

// Firebase Imports
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';

// --- Firebase Initialization with Safeguards for Vercel ---
let app, auth, db;
const appId = typeof __app_id !== 'undefined' ? __app_id : 'scrollbet-alpha';

try {
  // Check if configuration exists before parsing to prevent white-screen crashes
  if (typeof __firebase_config !== 'undefined') {
    const firebaseConfig = JSON.parse(__firebase_config);
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  } else {
    console.warn("Firebase configuration (__firebase_config) is missing. Backend features will be disabled.");
  }
} catch (error) {
  console.error("Firebase initialization failed:", error);
}

const App = () => {
  const [user, setUser] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    currentScreenTime: '',
    targetGoal: '-15% Efficiency'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Auth Logic - Guarded to prevent crashes if auth is undefined
  useEffect(() => {
    if (!auth) return;

    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (err) {
        console.error("Auth initialization error:", err);
      }
    };
    initAuth();
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!db || !user) {
      // Fallback for visual feedback if database is not configured
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 1000);
      return;
    }

    setIsSubmitting(true);
    try {
      const waitlistRef = collection(db, 'artifacts', appId, 'public', 'data', 'waitlist');
      await addDoc(waitlistRef, {
        ...formState,
        userId: user.uid,
        timestamp: serverTimestamp(),
        entryType: 'early_access_waitlist'
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const founders = [
    {
      name: "Luke Phillips",
      role: "Chief Technology Officer",
      bio: "UC Berkeley Materials Science & Engineering. Former SpaceX Engineering Intern, owns full stack development.",
      education: "Berkeley / SpaceX",
      img: "https://media.licdn.com/dms/image/v2/D4E03AQEp6vMXYZRwIg/profile-displayphoto-crop_800_800/B4EZoFj9EwHMAI-/0/1761029903207?e=1772064000&v=beta&t=9OoMRDpWtgkAfYT5KJ8v0zKXpKSiN4xxWiMtCDxy4YQ",
      linkedin: "https://www.linkedin.com/in/lukephillipseng/"
    },
    {
      name: "Leo Levitt",
      role: "Chief Executive Officer",
      bio: "Yale University Econ. Owns app mechanics and scaling.",
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
          <div className="w-8 h-8 bg-emerald-500 rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
             <TrendingDown size={20} className="text-slate-950 stroke-[3px]" />
          </div>
          <span className="text-2xl font-bold tracking-tighter uppercase italic">Scrollbet</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
          <a href="#mechanics" className="hover:text-emerald-400 transition-colors">Mechanics</a>
          <a href="#anti-social" className="hover:text-emerald-400 transition-colors">Anti-Social</a>
          <a href="#team" className="hover:text-emerald-400 transition-colors">Founders</a>
          <a href="#join" className="hover:text-emerald-400 transition-colors text-emerald-500">Waitlist</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-6 pt-20 pb-12 md:pt-32 md:pb-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase mb-6">
            <Zap size={14} /> Reclaiming Human Attention
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Get Paid to <br />
            <span className="text-emerald-500 italic underline decoration-slate-800">Exit the Glass.</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed italic">
            Scrollbet is the anti-social media. Monetize your discipline by betting against your own dopamine loops. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#join" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-sm flex items-center justify-center gap-2 transition-all uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              Join the Waitlist <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full"></div>
          <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-sm shadow-2xl">
            <div className="flex justify-between items-start mb-12 border-b border-slate-800 pb-8">
              <Clock className="text-emerald-500" size={48} />
              <div className="text-right">
                <div className="flex flex-col">
                  <span className="block text-4xl font-mono font-bold tracking-tighter italic text-emerald-500">1.25x</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold mt-1 tracking-widest">Target Focus Multiplier</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between text-xs font-mono uppercase tracking-widest font-bold">
                <span className="text-slate-500">System Mode: Disconnect</span>
                <span className="text-emerald-400">Status: Optimized</span>
              </div>
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[20%]"></div>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-500 uppercase font-bold tracking-widest">
                <span>Proof of Omission</span>
                <span className="text-white font-black italic">Active</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mechanics Section */}
      <section id="mechanics" className="bg-slate-900/40 pt-12 pb-24 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 italic uppercase tracking-tight">Focus Mechanics</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">Engineered for users who want to spend as little time in the app as possible.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <TrendingDown className="text-emerald-500" size={32} />, 
                title: "Asymmetric Betting", 
                desc: "Predict a reduction of 10-20% from your current baseline. Stake capital on your own willpower." 
              },
              { 
                icon: <DollarSign className="text-emerald-500" size={32} />, 
                title: "Capital Yield", 
                desc: "Win from the pool of failed discipline. Your offline hours are transformed into a tangible financial asset." 
              },
              { 
                icon: <EyeOff className="text-emerald-500" size={32} />, 
                title: "Zero-Interface", 
                desc: "The app only requests your attention to verify your absence and pay out your winnings." 
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-slate-950 border border-slate-800 rounded-sm hover:border-emerald-500/50 transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-lg font-bold mb-3 uppercase tracking-wider">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anti-Social Section */}
      <section id="anti-social" className="py-24 max-w-7xl mx-auto px-6 border-b border-slate-800/50">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm shadow-xl relative">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-sm">Absence Network</h3>
                    <p className="text-[10px] text-slate-500 font-mono">Status: Collective Accountability</p>
                  </div>
               </div>
               <div className="space-y-4 font-mono text-[10px] uppercase tracking-widest">
                  <div className="flex justify-between p-4 bg-slate-950 border border-slate-800 opacity-40">
                    <span>Peer 01 Alpha</span>
                    <span>Last Seen: 12h ago</span>
                  </div>
                  <div className="flex justify-between p-4 bg-slate-950 border border-emerald-500/30">
                    <span>Peer 02 Beta</span>
                    <span className="text-emerald-400">Focused (Yield +$18)</span>
                  </div>
               </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-6">The <span className="text-emerald-500 italic">Anti-Social</span> Social Media.</h2>
            <p className="text-slate-400 leading-relaxed mb-8 font-medium">
              We replace addictive feeds with social omission. No likes, no comments. The ultimate status symbol in Scrollbet is staying away.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1"><ShieldCheck size={20} className="text-emerald-500" /></div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest mb-1">Status via Absence</h4>
                  <p className="text-xs text-slate-500">See your friends' screen times and compete to be the most focused member of your network.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><ShieldCheck size={20} className="text-emerald-500" /></div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest mb-1">Peer Stakes</h4>
                  <p className="text-xs text-slate-500">A community-driven incentive where you win money if you go under, but lose it to your friends if you go over.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="team" className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter italic">Founders</h2>
          <div className="h-0.5 w-20 bg-emerald-500"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((person, idx) => (
            <div key={idx} className="group">
              <div className="relative mb-6 overflow-hidden rounded-sm bg-slate-900 aspect-[4/5] grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl border border-slate-800">
                <img 
                  src={person.img} 
                  alt={person.name} 
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 to-transparent">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em]">{person.education}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1 tracking-tight uppercase">{person.name}</h3>
              <p className="text-emerald-500 text-[10px] font-black uppercase mb-4 tracking-[0.2em]">{person.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium italic opacity-90">{person.bio}</p>
              <div className="flex gap-4">
                <a 
                  href={person.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-600 hover:text-emerald-400 transition-colors border border-slate-800 p-2 rounded-sm"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="join" className="bg-emerald-500 text-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-[0.9] tracking-tighter">Exit the Loop.</h2>
            <p className="text-xl font-medium mb-8 text-slate-900/80 max-w-md italic">
              "Attention is the new oil. Scrollbet is the refinery."
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-900 font-bold">
                <div className="w-10 h-10 bg-slate-950 flex items-center justify-center text-emerald-500 rounded-sm shadow-xl"><TrendingDown size={18} /></div>
                <span className="uppercase tracking-widest text-xs">Join Early Access Waitlist</span>
              </div>
              <div className="flex items-center gap-4 text-slate-900 font-bold">
                <div className="w-10 h-10 bg-slate-950 flex items-center justify-center text-emerald-500 rounded-sm shadow-xl"><DollarSign size={18} /></div>
                <span className="uppercase tracking-widest text-xs">Verify Your Baseline</span>
              </div>
              <div className="flex items-center gap-4 text-slate-900 font-bold">
                <div className="w-10 h-10 bg-slate-950 flex items-center justify-center text-emerald-500 rounded-sm shadow-xl"><ShieldCheck size={18} /></div>
                <span className="uppercase tracking-widest text-xs">Secure Alpha Access</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 p-8 rounded-sm shadow-2xl text-slate-100 border border-slate-800/50">
            {submitted ? (
              <div className="h-[460px] flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-slate-950">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-emerald-500 font-mono">Waitlist Secured</h3>
                <p className="text-slate-400 font-medium">Your request for early access has been logged. We are onboarding peers in batches.</p>
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-sm mt-4">
                  <p className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest">Verification Status: Pending</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 mb-4">
                   <h3 className="text-xl font-bold uppercase tracking-tight text-emerald-500">Alpha Waitlist</h3>
                   <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Register for limited early access enrollment</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-900 border border-slate-800 p-3 rounded-sm focus:outline-none focus:border-emerald-500 transition-colors" 
                      placeholder="John Galt"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-slate-900 border border-slate-800 p-3 rounded-sm focus:outline-none focus:border-emerald-500 transition-colors" 
                      placeholder="focus@scrollbet.app"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest text-emerald-500">Current Average Screen Time</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-slate-900 border border-slate-800 p-3 rounded-sm focus:outline-none focus:border-emerald-500 transition-colors font-mono" 
                    placeholder="e.g. 5h 30m"
                    value={formState.currentScreenTime}
                    onChange={(e) => setFormState({...formState, currentScreenTime: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Target Reduction Goal</label>
                  <select 
                    value={formState.targetGoal}
                    onChange={(e) => setFormState({...formState, targetGoal: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-800 p-3 rounded-sm focus:outline-none focus:border-emerald-500 transition-colors font-mono text-xs uppercase tracking-widest"
                  >
                    <option>-10% Initial Target</option>
                    <option>-15% Standard Goal</option>
                    <option>-20% Aggressive Efficiency</option>
                  </select>
                </div>
                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black uppercase tracking-[0.2em] rounded-sm transition-all text-xs shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Syncing...' : 'Request Early Access'}
                </button>
                <div className="flex gap-2 items-center justify-center text-[10px] uppercase text-slate-600 font-bold">
                  <AlertCircle size={10} />
                  Privacy-first enrollment. Join the attention refinery.
                </div>
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
          <span className="text-lg font-bold tracking-tighter uppercase italic">Scrollbet</span>
        </div>
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] text-center font-bold">© 2026 Scrollbet Inc — Reclaiming Life Outside the Glass</p>
      </footer>
    </div>
  );
};

export default App;
