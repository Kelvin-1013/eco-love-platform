import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Footer = () => {
  const { toast } = useToast();
  const [showSponsorDialog, setShowSponsorDialog] = useState(false);
  const [sponsorType, setSponsorType] = useState<'individual' | 'corporate' | null>(null);
  const [sponsorFormData, setSponsorFormData] = useState({
    name: '',
    email: '',
    amount: '',
    organization: '',
  });

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    console.log('Subscription email:', email);
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    (e.target as HTMLFormElement).reset();
  };

  const handleSponsorClick = (type: 'individual' | 'corporate') => {
    setSponsorType(type);
    setShowSponsorDialog(true);
    console.log(`Opening ${type} sponsor dialog`);
  };

  const handleSponsorSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sponsor submission:', { ...sponsorFormData, type: sponsorType });
    
    toast({
      title: "Thank you for your interest!",
      description: "Our team will contact you soon to discuss sponsorship details.",
    });
    
    setShowSponsorDialog(false);
    setSponsorFormData({
      name: '',
      email: '',
      amount: '',
      organization: '',
    });
  };

  return (
    <footer className="bg-earth-blue bg-opacity-90 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Subscribe Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300">
              Subscribe to our newsletter for the latest environmental updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="bg-white bg-opacity-20 border-none text-white placeholder:text-gray-300"
              />
              <Button type="submit" className="w-full bg-accent-primary hover:bg-opacity-90">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Sponsor Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Become a Sponsor</h3>
            <p className="text-gray-300">
              Support our mission to protect and preserve our planet.
            </p>
            <div className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full border-white text-white hover:bg-white hover:text-earth-blue"
                onClick={() => handleSponsorClick('individual')}
              >
                Individual Sponsor
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-white text-white hover:bg-white hover:text-earth-blue"
                onClick={() => handleSponsorClick('corporate')}
              >
                Corporate Sponsor
              </Button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              Have questions or suggestions? We'd love to hear from you.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">Email: contact@saveearth.org</p>
              <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
              <div className="flex gap-4 mt-4">
                <Link to="#" className="text-white hover:text-accent-primary">Twitter</Link>
                <Link to="#" className="text-white hover:text-accent-primary">Facebook</Link>
                <Link to="#" className="text-white hover:text-accent-primary">Instagram</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white border-opacity-20 text-center">
          <p className="text-gray-300">
            © 2024 Save Earth Initiative. All rights reserved.
          </p>
        </div>
      </div>

      {/* Sponsor Dialog */}
      <Dialog open={showSponsorDialog} onOpenChange={setShowSponsorDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {sponsorType === 'individual' ? 'Individual Sponsorship' : 'Corporate Sponsorship'}
            </DialogTitle>
            <DialogDescription>
              Fill out the form below to become a {sponsorType} sponsor.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSponsorSubmit} className="space-y-4">
            <div className="space-y-4">
              <Input
                placeholder="Name"
                value={sponsorFormData.name}
                onChange={(e) => setSponsorFormData({ ...sponsorFormData, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={sponsorFormData.email}
                onChange={(e) => setSponsorFormData({ ...sponsorFormData, email: e.target.value })}
                required
              />
              {sponsorType === 'corporate' && (
                <Input
                  placeholder="Organization Name"
                  value={sponsorFormData.organization}
                  onChange={(e) => setSponsorFormData({ ...sponsorFormData, organization: e.target.value })}
                  required
                />
              )}
              <Input
                type="number"
                placeholder="Sponsorship Amount ($)"
                value={sponsorFormData.amount}
                onChange={(e) => setSponsorFormData({ ...sponsorFormData, amount: e.target.value })}
                required
                min="1"
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full">Submit Sponsorship</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </footer>
  );
};