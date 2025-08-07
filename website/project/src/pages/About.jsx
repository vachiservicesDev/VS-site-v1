import { motion } from 'framer-motion'
import { 
  Users, 
  Award, 
  Shield, 
  Brain, 
  Target, 
  Heart, 
  Globe, 
  TrendingUp,
  CheckCircle,
  Star,
  MapPin,
  Calendar
} from 'lucide-react'

function About() {
  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-First Innovation",
      description: "We embed artificial intelligence into every solution, ensuring our clients stay ahead of the curve with cutting-edge technology."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Compliance-first approach with enterprise-grade security standards that protect your data and ensure regulatory adherence."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Boutique Excellence",
      description: "White-glove service with dedicated teams that become an extension of your organization, not just another vendor."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Every project is measured against clear KPIs and business outcomes, ensuring tangible ROI for your investment."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client Partnership",
      description: "We build long-term relationships based on trust, transparency, and mutual success rather than transactional engagements."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Perspective",
      description: "US-based team with global best practices, delivering world-class solutions with American business standards."
    }
  ]

  const differentiators = [
    {
      title: "US-Based Team",
      description: "All our consultants are based in the United States, ensuring seamless communication, cultural alignment, and adherence to American business practices.",
      icon: <MapPin className="w-12 h-12" />
    },
    {
      title: "AI-Embedded Delivery",
      description: "Unlike traditional consultancies, we integrate AI into every aspect of our delivery methodology, from project planning to solution optimization.",
      icon: <Brain className="w-12 h-12" />
    },
    {
      title: "Boutique Execution",
      description: "We provide the personalized attention of a boutique firm with the expertise and resources typically found only at large enterprises.",
      icon: <Award className="w-12 h-12" />
    }
  ]

  const trustMetrics = [
    { number: "2022", label: "Founded", icon: <Calendar className="w-6 h-6" /> },
    { number: "100%", label: "US-Based", icon: <Shield className="w-6 h-6" /> },
    { number: "2×", label: "Faster ROI", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "80%", label: "User Adoption", icon: <Users className="w-6 h-6" /> }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B4B8F] via-[#1B4B8F]/95 to-[#2563eb] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="max-w-4xl mx-auto text-center" variants={fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About Vachi Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              AI-First Consulting. Enterprise-Grade Delivery. Boutique Excellence.
            </p>
            
            {/* Trust Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {trustMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex justify-center mb-2 text-[#4CAF50]">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold mb-1">{metric.number}</div>
                  <div className="text-gray-200 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-20 bg-white">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B4B8F] mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Founded in 2022, Vachi Services was born from a simple belief: businesses deserve technology solutions that deliver measurable results, not just impressive demos.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our founders, seasoned technology executives with decades of experience at Fortune 500 companies, recognized a gap in the market. Traditional consulting firms were either too large and impersonal, or too small and limited in capabilities.
              </p>
              
              <div className="bg-gradient-to-r from-[#1B4B8F]/5 to-[#4CAF50]/5 p-6 rounded-2xl border-l-4 border-[#4CAF50]">
                <p className="text-lg font-medium text-gray-800 italic">
                  "We set out to create the consulting firm we always wished we could hire – one that combines the personal attention of a boutique with the expertise and AI-powered efficiency of a technology leader."
                </p>
                <p className="text-sm text-gray-600 mt-4">— Vachi Services Founders</p>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              variants={scaleIn}
            >
              <div className="bg-gradient-to-br from-[#1B4B8F] to-[#2563eb] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why We're Different</h3>
                <div className="space-y-4">
                  {[
                    "100% US-based team with deep industry expertise",
                    "AI-embedded delivery methodology for faster results", 
                    "Boutique execution with enterprise-grade capabilities",
                    "Compliance-first approach for regulated industries",
                    "Transparent pricing with guaranteed outcomes"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#4CAF50] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-gray-50">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4B8F] mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've reimagined consulting for the AI era, combining human expertise with intelligent automation to deliver unprecedented value.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
                whileHover={{ y: -8 }}
              >
                <div className="text-[#1B4B8F] mb-6 flex justify-center group-hover:text-[#4CAF50] transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4B8F] mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="text-[#1B4B8F] mb-4 group-hover:text-[#4CAF50] transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-20 bg-gradient-to-r from-[#1B4B8F] to-[#2563eb] text-white">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our certifications, partnerships, and track record speak to our commitment to excellence.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {[
              { icon: <Award className="w-12 h-12" />, title: "Salesforce Certified", desc: "Premier consulting partner" },
              { icon: <Shield className="w-12 h-12" />, title: "SOC 2 Compliant", desc: "Enterprise security standards" },
              { icon: <Star className="w-12 h-12" />, title: "5-Star Rated", desc: "Client satisfaction guarantee" },
              { icon: <Globe className="w-12 h-12" />, title: "Global Reach", desc: "US-based, worldwide impact" }
            ].map((badge, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-[#4CAF50] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {badge.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{badge.title}</h3>
                <p className="text-gray-200">{badge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#1B4B8F] mb-6"
            variants={fadeInUp}
          >
            Ready to Experience the Vachi Difference?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Join the growing number of companies that have transformed their business with our AI-powered consulting approach.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <a
              href="/contact"
              className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule Free Strategy Session
            </a>
            <a
              href="/careers"
              className="border-2 border-[#1B4B8F] text-[#1B4B8F] hover:bg-[#1B4B8F] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Join Our Team
            </a>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default About