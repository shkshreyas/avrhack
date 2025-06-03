
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";
import ParticleTypography from "@/components/ui/interactive-particle-typography-1";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { Clock, Calendar, Users, Trophy, Target, Zap, Coffee, Utensils, Code, CheckCircle, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Add refs for each section
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    themes: useRef(null),
    timeline: useRef(null),
    prizes: useRef(null),
    sponsors: useRef(null),
    contact: useRef(null)
  };

  // Function to scroll to section
  const scrollToSection = (section) => {
    setActiveSection(section);
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Check which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      // Check each section's position
      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const element = ref.current;
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prizes = [
    { place: "🥇 1st Place", amount: "₹1,50,000", icon: "🏆", description: "The ultimate champion", color: "from-yellow-400 to-yellow-600" },
    { place: "🥈 2nd Place", amount: "₹75,000", icon: "🥈", description: "Outstanding achievement", color: "from-gray-300 to-gray-500" },
    { place: "🥉 3rd Place", amount: "₹50,000", icon: "🥉", description: "Excellent performance", color: "from-orange-400 to-orange-600" },
    { place: "🌟 Best Innovation", amount: "₹25,000", icon: "💡", description: "Most innovative solution", color: "from-purple-400 to-purple-600" },
    { place: "🎨 Best Design", amount: "₹25,000", icon: "🎨", description: "Outstanding UI/UX", color: "from-pink-400 to-pink-600" },
    { place: "⚡ Best Tech Stack", amount: "₹15,000", icon: "🔧", description: "Technical excellence", color: "from-blue-400 to-blue-600" },
    { place: "👥 People's Choice", amount: "₹10,000", icon: "❤️", description: "Crowd favorite", color: "from-red-400 to-red-600" },
    { place: "🚀 Best Startup Idea", amount: "₹10,000", icon: "🚀", description: "Most viable startup", color: "from-green-400 to-green-600" }
  ];

  const themes = [
    { name: "FinTech Revolution", icon: "💰", description: "Digital payment solutions, blockchain, cryptocurrency, financial inclusion", color: "bg-green-500/20 border-green-500" },
    { name: "Sustainability & Climate", icon: "🌱", description: "Environmental solutions, renewable energy, carbon tracking, green tech", color: "bg-emerald-500/20 border-emerald-500" },
    { name: "Women Empowerment", icon: "👩‍💼", description: "Safety apps, career platforms, health tech, equality solutions", color: "bg-pink-500/20 border-pink-500" },
    { name: "EdTech Innovation", icon: "📚", description: "Learning platforms, AR/VR education, skill development, accessibility", color: "bg-blue-500/20 border-blue-500" },
    { name: "HealthTech Solutions", icon: "🏥", description: "Telemedicine, mental health, fitness tracking, medical AI", color: "bg-red-500/20 border-red-500" },
    { name: "AgriTech", icon: "🌾", description: "Smart farming, crop monitoring, supply chain, farmer welfare", color: "bg-yellow-500/20 border-yellow-500" },
    { name: "Smart Cities", icon: "🏙️", description: "IoT solutions, traffic management, waste management, urban planning", color: "bg-purple-500/20 border-purple-500" },
    { name: "Social Impact", icon: "🤝", description: "Community platforms, disaster management, accessibility, social welfare", color: "bg-orange-500/20 border-orange-500" }
  ];

  const sponsors = [
    { name: "Microsoft", tier: "Title Sponsor", logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=200&h=100&fit=crop", amount: "₹5L+" },
    { name: "Google", tier: "Platinum", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop", amount: "₹3L+" },
    { name: "Amazon Web Services", tier: "Platinum", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop", amount: "₹3L+" },
    { name: "Meta", tier: "Gold", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop", amount: "₹2L+" },
    { name: "OpenAI", tier: "Gold", logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=100&fit=crop", amount: "₹2L+" },
    { name: "GitHub", tier: "Silver", logo: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=200&h=100&fit=crop", amount: "₹1L+" },
    { name: "Vercel", tier: "Silver", logo: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=100&fit=crop", amount: "₹1L+" },
    { name: "MongoDB", tier: "Bronze", logo: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=200&h=100&fit=crop", amount: "₹50K+" }
  ];

  const coordinators = [
    { 
      name: "Priya Sharma", 
      role: "Event Director", 
      email: "priya.sharma@hackhub.com", 
      phone: "+91-9876543210", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop",
      speciality: "Overall Event Management"
    },
    { 
      name: "Rahul Verma", 
      role: "Technical Lead", 
      email: "rahul.verma@hackhub.com", 
      phone: "+91-9876543211", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      speciality: "Tech Infrastructure & Judging"
    },
    { 
      name: "Anita Singh", 
      role: "Operations Head", 
      email: "anita.singh@hackhub.com", 
      phone: "+91-9876543212", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      speciality: "Logistics & Participant Support"
    },
    { 
      name: "Dev Patel", 
      role: "Sponsorship Manager", 
      email: "dev.patel@hackhub.com", 
      phone: "+91-9876543213", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      speciality: "Partnerships & Prizes"
    },
    { 
      name: "Kavya Reddy", 
      role: "Community Manager", 
      email: "kavya.reddy@hackhub.com", 
      phone: "+91-9876543214", 
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      speciality: "Social Media & Outreach"
    }
  ];

  const detailedTimeline = [
    { id: 1, title: "Registration & Check-in", date: "09:00 AM", content: "Participant registration, badge collection, welcome kit distribution, team formation assistance", category: "Registration", icon: Users, relatedIds: [2], status: "pending" as const, energy: 100 },
    { id: 2, title: "Opening Ceremony", date: "10:00 AM", content: "Welcome address, theme announcement, rules explanation, sponsor introductions", category: "Ceremony", icon: Zap, relatedIds: [1, 3], status: "pending" as const, energy: 95 },
    { id: 3, title: "Hacking Begins!", date: "11:00 AM", content: "36-hour coding marathon starts! Teams begin working on their projects", category: "Development", icon: Code, relatedIds: [2, 4], status: "pending" as const, energy: 100 },
    { id: 4, title: "Lunch Break", date: "12:30 PM", content: "Catered lunch, networking opportunities, mentor introductions", category: "Break", icon: Utensils, relatedIds: [3, 5], status: "pending" as const, energy: 80 },
    { id: 5, title: "Tech Talks & Workshops", date: "02:00 PM", content: "Industry expert sessions on AI, blockchain, cloud computing, and design thinking", category: "Learning", icon: Target, relatedIds: [4, 6], status: "pending" as const, energy: 85 },
    { id: 6, title: "Mentor Sessions", date: "04:00 PM", content: "One-on-one mentoring sessions with industry professionals", category: "Mentoring", icon: Users, relatedIds: [5, 7], status: "pending" as const, energy: 90 },
    { id: 7, title: "Evening Snacks", date: "06:00 PM", content: "Tea, coffee, and healthy snacks to keep energy levels high", category: "Break", icon: Coffee, relatedIds: [6, 8], status: "pending" as const, energy: 75 },
    { id: 8, title: "Dinner & Entertainment", date: "08:00 PM", content: "Catered dinner with live music and networking activities", category: "Break", icon: Utensils, relatedIds: [7, 9], status: "pending" as const, energy: 70 },
    { id: 9, title: "Midnight Fuel", date: "12:00 AM", content: "Late night snacks, energy drinks, and midnight motivational session", category: "Break", icon: Coffee, relatedIds: [8, 10], status: "pending" as const, energy: 60 },
    { id: 10, title: "Review Checkpoint 1", date: "02:00 AM", content: "First progress review with mentors, guidance and feedback session", category: "Review", icon: CheckCircle, relatedIds: [9, 11], status: "pending" as const, energy: 50 },
    { id: 11, title: "Early Morning Boost", date: "06:00 AM", content: "Fresh breakfast and morning exercise session to rejuvenate teams", category: "Break", icon: Coffee, relatedIds: [10, 12], status: "pending" as const, energy: 65 },
    { id: 12, title: "Review Checkpoint 2", date: "12:00 PM", content: "Midway progress assessment, final push motivation, last-minute guidance", category: "Review", icon: CheckCircle, relatedIds: [11, 13], status: "pending" as const, energy: 70 },
    { id: 13, title: "Final Sprint Lunch", date: "01:00 PM", content: "Power lunch before the final coding sprint to finish projects", category: "Break", icon: Utensils, relatedIds: [12, 14], status: "pending" as const, energy: 80 },
    { id: 14, title: "Submission Deadline", date: "10:00 PM", content: "Final project submission, demo video upload, presentation preparation", category: "Submission", icon: Trophy, relatedIds: [13, 15], status: "pending" as const, energy: 95 },
    { id: 15, title: "Final Presentations", date: "11:00 PM", content: "Team presentations to judges, 5-minute pitches per team", category: "Presentation", icon: Users, relatedIds: [14, 16], status: "pending" as const, energy: 90 },
    { id: 16, title: "Closing & Awards", date: "01:00 AM", content: "Results announcement, prize distribution, closing ceremony, networking", category: "Ceremony", icon: Trophy, relatedIds: [15], status: "pending" as const, energy: 100 }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section with Particle Effect */}
      <section ref={sectionRefs.hero} id="hero" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParticleTypography />
        </div>
        
        {/* Overlay Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center bg-black/30">
          <div className="text-center space-y-8 px-4">
            <div className="h-32 flex items-center justify-center">
              <VaporizeTextCycle
                texts={["HACKHUB", "2025", "INNOVATE"]}
                font={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "80px",
                  fontWeight: 700
                }}
                color="rgb(66, 133, 244)"
                spread={6}
                density={7}
                animation={{
                  vaporizeDuration: 2.5,
                  fadeInDuration: 1.2,
                  waitDuration: 1
                }}
                direction="left-to-right"
                alignment="center"
                tag={Tag.H1}
              />
            </div>
            
            <div className="space-y-4 animate-fade-in">
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                <Badge variant="outline" className="px-4 py-2 text-blue-400 border-blue-400 bg-blue-400/10 animate-pulse">
                  📅 July 1-3, 2025
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-purple-400 border-purple-400 bg-purple-400/10 animate-pulse">
                  ⏰ 36 Hours
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-green-400 border-green-400 bg-green-400/10 animate-pulse">
                  💰 ₹3.5L+ Prizes
                </Badge>
              </div>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in">
                Join the ultimate hackathon experience organized by 
                <span className="text-blue-400 font-semibold"> Augment</span> and 
                <span className="text-purple-400 font-semibold"> Virtual Reality Club</span>
              </p>
              
              <div className="pt-8 flex gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl animate-glow"
                  onClick={() => window.open('https://forms.google.com/register-hackhub', '_blank')}
                >
                  🚀 Register Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-6 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover-scale"
                  onClick={() => window.open('https://chat.whatsapp.com/hackhub2025', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            {['About', 'Themes', 'Timeline', 'Prizes', 'Sponsors', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-gray-300 hover:text-white transition-colors duration-300 font-medium hover-scale ${activeSection === item.toLowerCase() ? 'text-white border-b-2 border-blue-500' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section ref={sectionRefs.about} id="about" className="py-20 px-4 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-24 flex items-center justify-center mb-6">
              <GooeyText
                texts={["ABOUT", "HACKHUB", "2025"]}
                morphTime={1.5}
                cooldownTime={0.8}
                className="font-bold"
                textClassName="text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The most innovative hackathon of the year, bringing together brilliant minds to solve real-world problems 
              using cutting-edge technology including AI, VR, Blockchain, and IoT.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-gray-900/50 border-gray-700 hover:bg-gray-800/50 transition-all duration-300 hover-scale animate-fade-in">
              <CardHeader>
                <CardTitle className="text-blue-400 text-xl flex items-center">
                  <Calendar className="mr-2 h-6 w-6" />
                  Duration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">36 Hours of Non-stop Innovation</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-700 hover:bg-gray-800/50 transition-all duration-300 hover-scale animate-fade-in">
              <CardHeader>
                <CardTitle className="text-purple-400 text-xl flex items-center">
                  <Users className="mr-2 h-6 w-6" />
                  Teams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">2-4 Members per Team, 150+ Teams Expected</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-700 hover:bg-gray-800/50 transition-all duration-300 hover-scale animate-fade-in">
              <CardHeader>
                <CardTitle className="text-green-400 text-xl flex items-center">
                  <MapPin className="mr-2 h-6 w-6" />
                  Venue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Innovation Center, Tech Campus, Noida</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-700 hover:bg-gray-800/50 transition-all duration-300 hover-scale animate-fade-in">
              <CardHeader>
                <CardTitle className="text-orange-400 text-xl flex items-center">
                  <Trophy className="mr-2 h-6 w-6" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">8 Themes, Multiple Prize Categories</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section ref={sectionRefs.themes} id="themes" className="py-20 px-4 bg-gray-900/30 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-glow">
              Hackathon Themes
            </h2>
            <p className="text-xl text-gray-300">Choose your track and build the future</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((theme, index) => (
              <Card key={index} className={`${theme.color} border-2 hover-scale transition-all duration-300 bg-black/50 backdrop-blur-lg animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2 animate-float">{theme.icon}</div>
                  <CardTitle className="text-white text-lg">{theme.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-sm">{theme.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={sectionRefs.timeline} id="timeline" className="py-20 px-4 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-glow">
              Event Timeline
            </h2>
            <p className="text-xl text-gray-300">Interactive 36-hour journey</p>
          </div>
          
          <div className="h-screen">
            <RadialOrbitalTimeline timelineData={detailedTimeline} />
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section ref={sectionRefs.prizes} id="prizes" className="py-20 px-4 bg-gray-900/30 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-glow">
              Prize Pool: ₹3.5 Lakhs+
            </h2>
            <p className="text-xl text-gray-300">Compete for amazing prizes and recognition</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prizes.map((prize, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:from-gray-800 hover:to-gray-700 transition-all duration-300 hover-scale hover:shadow-xl relative overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-10`}></div>
                <CardHeader className="text-center relative z-10">
                  <div className="text-4xl mb-2 animate-pulse">{prize.icon}</div>
                  <CardTitle className="text-yellow-400 text-lg">{prize.place}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-white">{prize.amount}</CardDescription>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <p className="text-gray-300">{prize.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section ref={sectionRefs.sponsors} id="sponsors" className="py-20 px-4 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-glow">
              Our Sponsors
            </h2>
            <p className="text-xl text-gray-300">Powered by industry leaders</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="bg-white/5 border-gray-700 hover:bg-white/10 transition-all duration-300 hover-scale group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="w-full h-20 object-contain mb-4 rounded group-hover:scale-110 transition-transform duration-300"
                  />
                  <CardTitle className="text-white text-lg">{sponsor.name}</CardTitle>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {sponsor.tier}
                  </Badge>
                  <p className="text-sm text-gray-400 mt-2">{sponsor.amount}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} id="contact" className="py-20 px-4 bg-gray-900/30 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-glow">
              Contact Our Team
            </h2>
            <p className="text-xl text-gray-300">Get in touch with our coordinators</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {coordinators.map((coordinator, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:bg-gray-800/50 transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <img 
                    src={coordinator.image} 
                    alt={coordinator.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-blue-500 animate-pulse"
                  />
                  <CardTitle className="text-white text-lg">{coordinator.name}</CardTitle>
                  <CardDescription className="text-blue-400">{coordinator.role}</CardDescription>
                  <p className="text-xs text-gray-400 mt-2">{coordinator.speciality}</p>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <div className="flex items-center justify-center text-sm text-gray-300">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href={`mailto:${coordinator.email}`} className="hover:text-blue-400 transition-colors truncate">
                      {coordinator.email.split('@')[0]}
                    </a>
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-300">
                    <Phone className="h-4 w-4 mr-2" />
                    <a href={`tel:${coordinator.phone}`} className="hover:text-blue-400 transition-colors">
                      {coordinator.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center space-y-6">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl p-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                <MapPin className="mr-2" />
                Venue Details
              </h3>
              <p className="text-xl text-gray-300">Innovation Center, Tech Campus</p>
              <p className="text-gray-400">Sector 18, Noida, Uttar Pradesh 201301</p>
              <p className="text-gray-400 mt-2">Full accommodation and meals provided for 36 hours</p>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline" 
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white hover-scale"
                onClick={() => window.open('https://discord.gg/hackhub2025', '_blank')}
              >
                💬 Join Discord
              </Button>
              <Button 
                variant="outline" 
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white hover-scale"
                onClick={() => window.open('https://chat.whatsapp.com/hackhub2025', '_blank')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Group
              </Button>
              <Button 
                variant="outline" 
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white hover-scale"
                onClick={() => window.open('https://t.me/hackhub2025', '_blank')}
              >
                📱 Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 border-t border-gray-800 animate-fade-in">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-glow">
              HACKHUB 2025
            </h3>
            <p className="text-gray-400">Organized by Augment & Virtual Reality Club</p>
            <p className="text-gray-500 mt-2">Building the future, one hack at a time</p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              © 2025 HackHub. All rights reserved. Built with ❤️ by the HackHub Team.
            </p>
            <p className="text-gray-600 text-sm mt-2">
              For sponsorship inquiries: sponsors@hackhub.com | Media: media@hackhub.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
