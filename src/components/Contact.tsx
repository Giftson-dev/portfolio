"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  MapPin,
  Mail,
  Phone,
  Instagram
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_f6k19sg",        // ← replace this
        "template_1krduwa",       // ← replace this
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        "PzJiZb-TZ7lSRO-ip"         // ← replace this
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll respond soon!"
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Oops! Something went wrong.",
        description: "Please try again or contact us via WhatsApp.",
        variant: "destructive"
      });
      console.error("EmailJS error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in your services at The Giftson.";
    const url = `https://wa.me/254702117666?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/thegiftson", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">
            Let's bring your ideas to life. Get in touch with The Giftson!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Ready to start your next project? The Giftson is here to help bring your vision to life.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">thegiftson13@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+254702117666</p>
                </div>
              </div>

              {/* Socials */}
              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Connect with The Giftson</h4>
                <div className="flex space-x-4">
                  <Button
                    onClick={handleWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2"
                  >
                    <span>WhatsApp</span>
                  </Button>

                  <Button
                    onClick={handleInstagram}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>Instagram</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-lg text-white">
              <h4 className="font-bold text-xl mb-2">Ready to innovate with TG?</h4>
              <p className="mb-4">Let's create something extraordinary together at The Giftson.</p>
              <Button
                variant="outline"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={handleWhatsApp}
              >
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
