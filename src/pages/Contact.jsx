import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/layout/SectionHeader';
import Button from '../components/ui/Button';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-navy text-white flex flex-col">
      <Navbar />
      <main className="pt-32 pb-24 flex-grow">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader 
            eyebrow="Contact Us"
            title="We're here to help."
            subtitle="Have questions about which agent is right for you? Reach out to us."
          />
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div>
              <div className="bg-navy-mid border border-navy-soft rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">Fastest way to reach us</h3>
                <p className="text-muted mb-6">Our SupportAgent is online right now on WhatsApp.</p>
                <a href="#" className="block w-full">
                  <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none flex items-center justify-center gap-2">
                    Message us on WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-navy-mid border border-navy-soft rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-green text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2 text-white/80">Name</label>
                    <input {...register("name", { required: true })} className="w-full bg-navy border border-navy-soft rounded-lg px-4 py-3 focus:outline-none focus:border-cyan text-white" />
                    {errors.name && <span className="text-red text-xs mt-1">This field is required</span>}
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-white/80">Email</label>
                    <input type="email" {...register("email", { required: true })} className="w-full bg-navy border border-navy-soft rounded-lg px-4 py-3 focus:outline-none focus:border-cyan text-white" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-white/80">Message</label>
                    <textarea {...register("message", { required: true })} rows={4} className="w-full bg-navy border border-navy-soft rounded-lg px-4 py-3 focus:outline-none focus:border-cyan text-white" />
                  </div>
                  <Button type="submit" className="w-full mt-4">Send Message</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
