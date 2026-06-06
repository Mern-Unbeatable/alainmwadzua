import { 
  ShieldCheck, 
  BookOpen, 
  Settings, 
  BadgeCheck, 
  MessageCircle, 
  Smile 
} from 'lucide-react';

const features = [
  {
    title: 'Confidential Services',
    description: 'Your privacy is our top priority. We utilize strict protocols and secure systems to ensure your identity and academic records remain completely protected.',
    icon: <ShieldCheck className="w-5 h-5 text-[#FF6B00]" />
  },
  {
    title: 'Broad Subject Coverage',
    description: 'From nursing prerequisites and advanced engineering practices to complex business case studies, we cover over 28 major subjects to meet your specific needs.',
    icon: <BookOpen className="w-5 h-5 text-[#FF6B00]" />
  },
  {
    title: 'Flexible Help Options',
    description: 'Whether you need support for a single challenging assignment, a midterm exam, or full-semester class management, our solutions adapt to you.',
    icon: <Settings className="w-5 h-5 text-primary" />
  },
  {
    title: 'Qualified Tutors',
    description: 'We never outsource your education. Our experts hold advanced degrees, are native English speakers, and have proven track records of academic excellence.',
    icon: <BadgeCheck className="w-5 h-5 text-[#FF6B00]" />
  },
  {
    title: 'Clear Communication',
    description: 'Stay informed every step of the way with transparent updates, direct feedback loops, and a responsive support team available when you need them.',
    icon: <MessageCircle className="w-5 h-5 text-[#FF6B00]" />
  },
  {
    title: 'Student Focus',
    description: 'Our entire process is structured around eliminating your academic stress, giving you the breathing room to balance work, family, and studies.',
    icon: <Smile className="w-5 h-5 text-[#FF6B00]" />
  }
];



const AboutFeaturesSection = () => {
  return (
    <section className=" py-14 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-4xl font-semibold text-black mb-4">
            What makes Online Class Writers different?
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-4xl">
            We don't just complete assignments; we partner with you to secure your degree, here is how we stand out from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-[#00000033] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded bg-[#FFF0E6] flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-[#1a2b4c] mb-3">{feature.title}</h4>
              <p className="text-gray-500 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFeaturesSection;