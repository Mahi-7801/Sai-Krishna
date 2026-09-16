export default function ContactForm() {
  return (
    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="name" className="text-brand-ivory/70 text-xs font-sans tracking-widest uppercase">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full bg-transparent border-b border-brand-charcoal py-3 text-brand-ivory font-sans focus:outline-none focus:border-brand-gold transition-colors"
            placeholder="Jane Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-brand-ivory/70 text-xs font-sans tracking-widest uppercase">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full bg-transparent border-b border-brand-charcoal py-3 text-brand-ivory font-sans focus:outline-none focus:border-brand-gold transition-colors"
            placeholder="jane@example.com"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="inquiryType" className="text-brand-ivory/70 text-xs font-sans tracking-widest uppercase">Inquiry Type</label>
        <select 
          id="inquiryType" 
          className="w-full bg-transparent border-b border-brand-charcoal py-3 text-brand-ivory font-sans focus:outline-none focus:border-brand-gold transition-colors appearance-none"
        >
          <option value="" className="bg-brand-dark">Select a service...</option>
          <option value="wedding" className="bg-brand-dark">Wedding Photography</option>
          <option value="maternity" className="bg-brand-dark">Maternity Photography</option>
          <option value="commercial" className="bg-brand-dark">Commercial</option>
          <option value="other" className="bg-brand-dark">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-brand-ivory/70 text-xs font-sans tracking-widest uppercase">Your Story</label>
        <textarea 
          id="message" 
          rows="4"
          className="w-full bg-transparent border-b border-brand-charcoal py-3 text-brand-ivory font-sans focus:outline-none focus:border-brand-gold transition-colors resize-none"
          placeholder="Tell us a little about your event or session..."
        ></textarea>
      </div>

      <button className="border border-brand-gold hover:bg-brand-gold hover:text-brand-dark px-10 py-4 text-brand-gold tracking-widest text-sm uppercase transition-all duration-500 ease-custom w-full">
        Send Inquiry
      </button>
    </form>
  );
}
