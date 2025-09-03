import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SnowflakeAnimation from "@/components/SnowflakeAnimation";
import LoadingScreen from "@/components/LoadingScreen";
import { useState } from "react";

const Contact = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  return (
    <>
      {!isLoadingComplete ? (
        <LoadingScreen onLoadingComplete={() => setIsLoadingComplete(true)} />
      ) : (
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
                  Need help choosing the right Daikin AC? Our certified
                  technicians are here to help with consultation, installation,
                  and service support.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                    <h3 className="text-xl font-heading font-bold text-white mb-6">
                      Contact Information
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-500/20 rounded-full p-3">
                          <Phone className="w-5 h-5 text-blue-300" />
                        </div>
                        <div>
                          <p className="font-medium text-white">Phone</p>
                          <p className="text-blue-200">+91 9247041999</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="bg-green-500/20 rounded-full p-3">
                          <Mail className="w-5 h-5 text-green-300" />
                        </div>
                        <div>
                          <p className="font-medium text-white">Email</p>
                          <p className="text-green-200">info@astraac.com</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="bg-purple-500/20 rounded-full p-3">
                          <MapPin className="w-5 h-5 text-purple-300" />
                        </div>
                        <div>
                          <p className="font-medium text-white">Address</p>
                          <p className="text-purple-200">
                            Vijayawada, Andhra Pradesh
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="bg-orange-500/20 rounded-full p-3">
                          <Clock className="w-5 h-5 text-orange-300" />
                        </div>
                        <div>
                          <p className="font-medium text-white">
                            Business Hours
                          </p>
                          <p className="text-orange-200">
                            Mon - Sat: 9:00 AM - 6:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-4">
                    <Button
                      className="w-full btn-hero"
                      onClick={() => window.open("tel:9247041999")}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now - 9247041999
                    </Button>

                    <Button
                      className="w-full btn-whatsapp"
                      onClick={() =>
                        window.open(
                          "https://wa.me/919247041999?text=Hi! I need help with Daikin AC",
                          "_blank"
                        )
                      }
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Chat
                    </Button>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm border border-white/20 rounded-xl p-8">
                  <h3 className="text-xl font-heading font-bold text-white mb-6">
                    Send us a Message
                  </h3>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          First Name
                        </label>
                        <Input
                          placeholder="Your first name"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Last Name
                        </label>
                        <Input
                          placeholder="Your last name"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <Input
                        placeholder="Your phone number"
                        type="tel"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email Address
                      </label>
                      <Input
                        placeholder="Your email address"
                        type="email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        AC Type Interested In
                      </label>
                      <Input
                        placeholder="e.g., Split AC, Cassette AC, VRV System"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Message
                      </label>
                      <Textarea
                        placeholder="Tell us about your requirements..."
                        rows={4}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                      />
                    </div>

                    <Button className="w-full btn-hero">Send Message</Button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 mb-16">
            <div className="card-glass p-2 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=16.500333,80.663694&z=17&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen
                loading="lazy"
                title="ASTRA Air Conditioning Location"
              ></iframe>
            </div>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default Contact;
