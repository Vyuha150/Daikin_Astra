import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SnowflakeAnimation from '@/components/SnowflakeAnimation';
import LoadingScreen from '@/components/LoadingScreen';

const Contact = () => {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-background relative">
        <SnowflakeAnimation />
        <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
              <Phone className="w-5 h-5 mr-2 text-primary" />
              <span className="font-semibold text-primary">CONTACT US</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Get in Touch with Our Experts
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Need help choosing the right Daikin AC? Our certified technicians are here to help 
              with consultation, installation, and service support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card-glass p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+91 9247041999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">info@astraac.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">Guntur, Andhra Pradesh</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Button 
                  className="w-full btn-hero"
                  onClick={() => window.open('tel:9247041999')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now - 9247041999
                </Button>
                
                <Button 
                  className="w-full btn-whatsapp"
                  onClick={() => window.open('https://wa.me/919247041999?text=Hi! I need help with Daikin AC', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-glass p-8">
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                Send us a Message
              </h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input placeholder="Your phone number" type="tel" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input placeholder="Your email address" type="email" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    AC Type Interested In
                  </label>
                  <Input placeholder="e.g., Split AC, Cassette AC, VRV System" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your requirements..."
                    rows={4}
                  />
                </div>
                
                <Button className="w-full btn-hero">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Contact;