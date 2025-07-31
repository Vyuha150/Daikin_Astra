import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    requirement: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.requirement) {
      toast({
        title: "Please fill required fields",
        description: "Name, phone, and requirement are mandatory",
        variant: "destructive"
      });
      return;
    }

    // Construct WhatsApp message
    const message = `Hi ASTRA! I'm interested in your AC services.
    
Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location || 'Not specified'}
Requirement: ${formData.requirement}`;

    const whatsappUrl = `https://wa.me/919247041999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your inquiry will be sent via WhatsApp",
    });

    // Reset form
    setFormData({ name: '', phone: '', location: '', requirement: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
            <MessageCircle className="w-5 h-5 mr-2 text-primary" />
            <span className="font-semibold text-primary">CONTACT US</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Get in Touch with ASTRA
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert consultation, free quotes, and professional installation services across Vijayawada
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                ASTRA AIR CONDITIONING & ENGINEERING WORKS
              </h3>
              <p className="text-muted-foreground mb-8">
                Your trusted Daikin authorized dealer with 15+ years of experience in HVAC solutions. 
                We provide complete AC services from consultation to installation and maintenance.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    #59A-17/4, Plot no.98A, Teachers Colony<br />
                    Funtimes Club Road, Near Sree Prakash Plaza<br />
                    4th Line, Vijayawada-03
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <a 
                    href="tel:9247041999" 
                    className="text-primary hover:text-primary-dark font-medium text-lg"
                  >
                    9247041999
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a 
                    href="mailto:astra.acew@gmail.com" 
                    className="text-primary hover:text-primary-dark"
                  >
                    astra.acew@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Mon - Sat: 9:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button 
                className="btn-hero w-full"
                onClick={() => window.open('tel:9247041999')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button 
                className="btn-whatsapp w-full"
                onClick={() => window.open('https://wa.me/919247041999', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            {/* Service Areas */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3">Service Areas</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <span>• Vijayawada</span>
                <span>• Guntur</span>
                <span>• Machilipatnam</span>
                <span>• Tenali</span>
                <span>• Mangalagiri</span>
                <span>• Amaravati</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-glass p-8">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              Get Free Quote
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your contact number"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Area/Location
                </label>
                <Input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Your area or location"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Requirement / AC Type *
                </label>
                <Textarea
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleInputChange}
                  placeholder="Describe your AC requirement (type, capacity, rooms, etc.)"
                  required
                  className="w-full min-h-[100px]"
                />
              </div>

              <Button type="submit" className="btn-hero w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Inquiry via WhatsApp
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                * Required fields. Your inquiry will be sent via WhatsApp for quick response.
              </p>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="card-glass p-2 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.6!2d80.6413!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzIyLjMiTiA4MMKwMzgnMjguNyJF!5e0!3m2!1sen!2sin!4v1623456789"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
              title="ASTRA Air Conditioning Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;