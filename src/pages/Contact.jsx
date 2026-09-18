import { useSEO } from '../hooks/useSEO';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  useSEO({ 
    title: 'Contact Us', 
    description: 'Book your session with Sai Krishna Photography. Contact our studio to begin crafting your timeless story.' 
  });

  return (
    <main className="bg-brand-dark min-h-screen pb-32">
      <PageHero 
        heading="Let's Create Something Timeless"
        subheading="Visit or Book Us"
        minHeight="min-h-[78vh]"
        image="/photos/studio/3.jpg"
      />
      
      <section className="max-w-7xl mx-auto px-6 pt-24">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Form Side */}
          <div>
            <h2 className="text-3xl font-serif text-brand-ivory font-light mb-8">Send an Inquiry</h2>
            <ContactForm />
          </div>

          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h3 className="text-brand-gold text-xs font-sans tracking-widest uppercase mb-4">Our Studio</h3>
              <p className="text-brand-ivory/80 font-sans leading-relaxed text-sm">
                123 Studio Avenue<br />
                Hyderabad, Telangana 500033<br />
                India
              </p>
            </div>
            
            <div>
              <h3 className="text-brand-gold text-xs font-sans tracking-widest uppercase mb-4">Direct Contact</h3>
              <p className="text-brand-ivory/80 font-sans leading-relaxed text-sm mb-2">
                <a href="mailto:hello@saikrishnaphotography.com" className="hover:text-brand-gold transition-colors">hello@saikrishnaphotography.com</a>
              </p>
              <p className="text-brand-ivory/80 font-sans leading-relaxed text-sm">
                <a href="tel:+919876543210" className="hover:text-brand-gold transition-colors">+91 98765 43210</a>
              </p>
            </div>

            <div className="aspect-video bg-brand-charcoal/40 border border-brand-charcoal overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Saikrishna%20Digital%20Photo%20Studio%20Ibrahimpatnam%20Hyderabad&output=embed"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="Studio Location"
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
