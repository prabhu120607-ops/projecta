import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/button";
import { 
  Dumbbell, 
  Flame, 
  HeartPulse, 
  BicepsFlexed, 
  Users, 
  Activity,
  Star,
  CheckCircle2,
  Trophy,
  MapPin
} from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* gym hero dark gritty workout landscape */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070')] bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="h-1 w-10 bg-primary"></span>
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Fitlife Gym Guntur</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold text-white uppercase leading-[0.9] mb-6 text-shadow-lg">
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Body.</span><br/>
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Life.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed border-l-4 border-primary pl-4">
              Join one of the highest-rated gyms in Guntur. Top-tier equipment, expert guidance, and an unstoppable community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-16 px-10 text-lg font-display uppercase tracking-widest rounded-none bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]" onClick={scrollToContact}>
                Join Now
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-display uppercase tracking-widest rounded-none border-2 border-white text-white hover:bg-white hover:text-black bg-transparent" onClick={scrollToContact}>
                Book Free Trial
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT US */}
      <section id="about" className="py-24 bg-card relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Who We Are</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                MORE THAN A GYM. <br/> WE ARE A <span className="text-primary">MOVEMENT.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-8 leading-relaxed">
                Located in the heart of Lakshmipuram, Fitlife Gym Guntur is dedicated to helping you achieve your ultimate fitness goals. Whether you focus on strength training, weight loss, or total personal transformation, our facility provides everything you need to succeed.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex gap-8 mb-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-display font-bold text-white flex items-center gap-1">
                    4.9 <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                  </span>
                  <span className="text-sm text-gray-400 uppercase tracking-wider">Rating in Guntur</span>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-display font-bold text-white flex items-center gap-1">
                    1,443<span className="text-primary">+</span>
                  </span>
                  <span className="text-sm text-gray-400 uppercase tracking-wider">Happy Members</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div variants={fadeInUp} className="relative">
              {/* gym heavy workout deadlift intense */}
              <div className="aspect-[4/5] relative">
                <img 
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070" 
                  alt="Fitlife Gym Workout" 
                  className="object-cover w-full h-full rounded-tr-[100px] rounded-bl-[100px] shadow-2xl shadow-black"
                />
                <div className="absolute inset-0 border-2 border-primary rounded-tr-[100px] rounded-bl-[100px] translate-x-4 translate-y-4 -z-10"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-black p-6 border-l-4 border-primary shadow-xl">
                <p className="font-display text-2xl font-bold text-white mb-1">100%</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Results Guaranteed</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section id="services" className="py-24 bg-background border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">OUR <span className="text-primary">SERVICES</span></h2>
            <p className="text-gray-400 text-lg">Comprehensive fitness programs designed to push your limits and maximize your potential.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: Dumbbell, title: "Strength Training", desc: "Build pure power with our free weights, racks, and premium resistance machines." },
              { icon: Flame, title: "Weight Loss", desc: "High-intensity fat burning programs tailored to shed weight and reveal definition." },
              { icon: Users, title: "Personal Training", desc: "1-on-1 expert coaching to correct form, motivate, and accelerate your results." },
              { icon: HeartPulse, title: "Cardio & Functional", desc: "State-of-the-art treadmills, ellipticals, and functional training zones." },
              { icon: BicepsFlexed, title: "Muscle Building", desc: "Hypertrophy specific routines designed to maximize muscle mass and volume." },
              { icon: Activity, title: "Group Workouts", desc: "High-energy group classes that combine fitness, music, and an incredible community." },
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="bg-card p-8 group hover:-translate-y-2 transition-all duration-300 border-b-2 border-transparent hover:border-primary shadow-lg"
              >
                <div className="h-16 w-16 bg-background rounded-none flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-24 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                WHY FITLIFE <br/><span className="text-primary">IS THE BEST</span>
              </motion.h2>
              
              <div className="space-y-6">
                {[
                  { title: "4.9 Star Rated Gym in Guntur", icon: Star },
                  { title: "Modern & Premium Equipment", icon: Dumbbell },
                  { title: "Experienced Certified Trainers", icon: Trophy },
                  { title: "Friendly, Motivating Environment", icon: HeartPulse },
                  { title: "Prime Location in Lakshmipuram", icon: MapPin },
                ].map((item, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-background border border-white/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-xl font-display font-bold text-gray-200 tracking-wide">{item.title}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* gym crossfit ropes action training */}
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070" 
                alt="Fitlife Gym Action" 
                className="rounded-xl shadow-2xl relative z-10 w-full object-cover aspect-square md:aspect-auto"
              />
              <div className="absolute -inset-4 border border-white/20 rounded-xl z-0 hidden md:block"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. MEMBERSHIP PLANS */}
      <section id="pricing" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">MEMBERSHIP <span className="text-primary">PLANS</span></h2>
            <p className="text-gray-400 text-lg">No hidden fees. Flexible options. Choose the plan that fits your ambition.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Basic Plan */}
            <motion.div variants={fadeInUp} className="bg-card p-8 border border-white/10 flex flex-col hover:border-white/30 transition-colors">
              <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase">Basic Plan</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">₹1,500</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Full Gym Access', 'Standard Equipment', 'Locker Room Access', 'Open Hours Access'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full h-12 rounded-none border-white/20 text-white font-display uppercase hover:bg-white hover:text-black" onClick={scrollToContact}>Select Basic</Button>
            </motion.div>

            {/* Premium Plan - Highlighted */}
            <motion.div variants={fadeInUp} className="bg-black p-8 border-2 border-primary relative flex flex-col transform md:-translate-y-4 shadow-[0_0_30px_rgba(220,38,38,0.15)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white font-display uppercase tracking-widest px-4 py-1 text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase mt-2">Premium Plan</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold text-primary">₹4,000</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['All Basic Features', 'Personal Trainer (3x/wk)', 'Diet & Nutrition Plan', 'Group Classes Included', 'Free InBody Scan'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full h-12 rounded-none bg-primary hover:bg-primary/90 text-white font-display uppercase shadow-lg" onClick={scrollToContact}>Select Premium</Button>
            </motion.div>

            {/* Standard Plan */}
            <motion.div variants={fadeInUp} className="bg-card p-8 border border-white/10 flex flex-col hover:border-white/30 transition-colors">
              <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase">Standard Plan</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">₹2,500</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['All Basic Features', 'Advanced Machine Access', '1 Free PT Session/mo', 'Diet Consultation'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full h-12 rounded-none border-white/20 text-white font-display uppercase hover:bg-white hover:text-black" onClick={scrollToContact}>Select Standard</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 bg-card border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">SUCCESS <span className="text-primary">STORIES</span></h2>
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white">
              <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
              4.9/5 Average Rating
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rahul V.", review: "Hands down the best gym in Guntur. The trainers actually care about your progress and the equipment is top notch. Lost 8kg in 3 months!", rating: 5 },
              { name: "Sneha Reddy", review: "Very safe and friendly environment for women. The Lakshmipuram location is super convenient, and the hygiene standards are incredible.", rating: 5 },
              { name: "Karthik M.", review: "Joined for the strength training. The vibe here makes you want to lift heavier. 10/10 recommend to anyone serious about fitness.", rating: 4.5 },
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-background p-8 border border-white/5 relative"
              >
                <div className="text-primary text-6xl font-display leading-none absolute top-4 right-6 opacity-20">"</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(testimonial.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-yellow-500/30'}`} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed z-10 relative">"{testimonial.review}"</p>
                <h4 className="text-white font-bold uppercase tracking-wider font-display">{testimonial.name}</h4>
                <p className="text-primary text-sm">Member</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GALLERY */}
      <section id="gallery" className="py-1">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {/* fitness gym weight plates rack rack focus */}
          <div className="aspect-square relative group overflow-hidden bg-black">
            <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" alt="Gym weights" />
          </div>
          {/* gym treadmill running cardio intense */}
          <div className="aspect-square relative group overflow-hidden bg-black">
            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" alt="Cardio section" />
          </div>
          {/* gym crossfit class intense row workout */}
          <div className="aspect-square relative group overflow-hidden bg-black">
            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" alt="Crossfit workout" />
          </div>
          {/* gym boxing bag punch workout */}
          <div className="aspect-square relative group overflow-hidden bg-black">
            <img src="https://pixabay.com/get/g19314c3077331b866c3ba7223bd5926db169f7ea63633afdda908e71d4c69ef033f603768ee6df30acf4c375beadc1836d983fdb3e3815ab091d4429fe2d57dc_1280.jpg" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" alt="Boxing area" />
          </div>
        </div>
      </section>

      {/* 8. CONTACT */}
      <section id="contact" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase">
                GET IN <span className="text-primary">TOUCH</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10">
                Ready to transform your life? Visit us at the PUMA Store Building or drop a message below. Your fitness journey starts today.
              </motion.p>

              <div className="space-y-8 mb-12">
                <motion.div variants={fadeInUp} className="flex gap-6 items-start">
                  <div className="h-14 w-14 bg-card border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-white mb-2 uppercase">Location</h4>
                    <p className="text-gray-400 leading-relaxed">
                      3rd Floor, Pheonix Padmavathi,<br/>
                      4th Lane, Lakshmipuram,<br/>
                      Guntur, Andhra Pradesh 522007<br/>
                      <span className="text-primary block mt-1">(Located in PUMA Store Building)</span>
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex gap-6 items-start">
                  <div className="h-14 w-14 bg-card border border-white/10 flex items-center justify-center shrink-0">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-white mb-2 uppercase">Timings</h4>
                    <p className="text-gray-400 leading-relaxed">
                      <span className="block text-white">Morning:</span> 5:00 AM – 12:00 PM<br/>
                      <span className="block text-white mt-1">Evening:</span> 4:00 PM – 10:00 PM<br/>
                      <span className="text-sm mt-1 block">(Open Monday to Saturday)</span>
                    </p>
                  </div>
                </motion.div>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
