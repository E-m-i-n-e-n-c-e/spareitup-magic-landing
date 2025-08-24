import { useState } from 'react';
import { Search, MapPin, Clock, Shield, Star, Download, Play, ArrowRight, Check, Car, Wrench, Smartphone, Users, Zap, Heart, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Temporary placeholder images while debugging
const heroImage = "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=800&fit=crop";
const aiFeatureImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop";
const mobileAppImage = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop";

const Index = () => {
  console.log('Index component is rendering');
  const [searchQuery, setSearchQuery] = useState('');

  const features = [
    {
      icon: Zap,
      title: "AI-Powered Search",
      description: "Search by image, text, or voice - our AI understands what you need instantly",
      image: aiFeatureImage
    },
    {
      icon: MapPin,
      title: "Local Store Network",
      description: "Connect with verified local stores for instant pickup or fast delivery",
      highlight: "2,500+ stores"
    },
    {
      icon: Clock,
      title: "Real-Time Inventory",
      description: "Live stock updates so you never waste time on out-of-stock parts",
      highlight: "95% accuracy"
    },
    {
      icon: Shield,
      title: "Trusted & Verified",
      description: "Only genuine parts from certified dealers and mechanics",
      highlight: "100% authentic"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Search Smart",
      description: "Take a photo, describe what you need, or use our voice search",
      icon: Search
    },
    {
      step: 2,
      title: "Find Locally",
      description: "See real-time inventory from nearby stores with pricing",
      icon: MapPin
    },
    {
      step: 3,
      title: "Order Easy",
      description: "Choose pickup or delivery, pay securely, and get notifications",
      icon: Car
    },
    {
      step: 4,
      title: "Get Fixed",
      description: "Receive your parts fast and get back on the road",
      icon: Wrench
    }
  ];

  const testimonials = [
    {
      name: "Mike Rodriguez",
      role: "Independent Mechanic",
      content: "SpareItUp cut my parts sourcing time from hours to minutes. My customers love the faster service!",
      rating: 5,
      highlight: "Saved 3+ hours daily"
    },
    {
      name: "Sarah Chen",
      role: "Car Owner",
      content: "Finally found my rare 2003 Honda part in 15 minutes! The AI search is like magic.",
      rating: 5,
      highlight: "Found rare part quickly"
    },
    {
      name: "AutoParts Plus",
      role: "Local Store Partner",
      content: "Our online orders increased 300% since joining SpareItUp. Best decision we made!",
      rating: 5,
      highlight: "300% more orders"
    }
  ];

  const trustStats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "2.5K+", label: "Partner Stores" },
    { number: "1M+", label: "Parts Found" },
    { number: "4.9★", label: "App Rating" }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container-spacing py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient-hero">SpareItUp</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How it Works</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Reviews</a>
              <Button variant="outline" size="sm">Sign In</Button>
              <Button className="btn-cta">Download App</Button>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Professional automotive garage scene"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        </div>
        
        <div className="relative z-10 container-spacing">
          <div className="max-w-4xl">
            <div className="space-y-6 mb-8">
              <Badge className="bg-gradient-cta text-white border-none px-4 py-2">
                🚀 Now serving 2,500+ auto shops nationwide
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Find Any Auto Part in{' '}
                <span className="text-gradient-hero">Minutes,</span>
                <br />Not Hours
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                AI-powered search meets local inventory. Get the exact parts you need from verified nearby stores - instantly.
              </p>
            </div>

            {/* Hero Search */}
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border max-w-2xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search by part name, car model, or take a photo..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12 text-lg"
                  />
                </div>
                <Button className="btn-hero h-12 px-8">
                  <Search className="w-5 h-5 mr-2" />
                  Find Parts Now
                </Button>
              </div>
              
              <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Camera className="w-4 h-4" />
                  Photo Search
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Local Stores
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Real-time Stock
                </div>
              </div>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {trustStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient-hero">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-spacing">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stop Wasting Time on{' '}
                <span className="text-destructive">Endless Parts Hunts</span>
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-destructive rounded-full" />
                  </div>
                  <p className="text-lg">Calling 20+ stores to check stock</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-destructive rounded-full" />
                  </div>
                  <p className="text-lg">Driving across town for wrong parts</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-destructive rounded-full" />
                  </div>
                  <p className="text-lg">Customers waiting days for repairs</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-hero">SpareItUp</span> Makes It{' '}
                <span className="text-success">Simple</span>
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <p className="text-lg">AI finds exact parts in seconds</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <p className="text-lg">Real-time inventory from local stores</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <p className="text-lg">Same-day pickup or fast delivery</p>
                </div>
              </div>

              <Button className="btn-cta text-lg px-8 py-4">
                Start Finding Parts Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding">
        <div className="container-spacing">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              From Search to Fixed in{' '}
              <span className="text-gradient-cta">4 Simple Steps</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform makes finding and getting auto parts as easy as ordering food
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <Card key={index} className="card-hover border-2 hover:border-primary/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gradient-cta text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-hero text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Watch 2-Minute Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-muted/30">
        <div className="container-spacing">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Mechanics & Car Owners{' '}
              <span className="text-gradient-hero">Love SpareItUp</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced technology meets automotive expertise for the ultimate parts-finding experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-2 hover:border-primary/20 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      {feature.highlight && (
                        <Badge className="bg-gradient-success text-white border-none">
                          {feature.highlight}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-lg">{feature.description}</p>
                  </div>
                  {feature.image && (
                    <div className="md:w-1/2">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="section-padding">
        <div className="container-spacing">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-success">Real Stories</span> from Real Users
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of mechanics and car owners who've transformed their parts-finding experience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover border-2 hover:border-success/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge className="bg-gradient-success text-white border-none">
                      {testimonial.highlight}
                    </Badge>
                  </div>
                  <p className="text-lg italic mb-4">"{testimonial.content}"</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-spacing">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Take SpareItUp{' '}
                <span className="text-secondary">Everywhere</span>
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Download our mobile app and find parts on-the-go. Perfect for mechanics in the field or car owners on the road.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-secondary" />
                  <span className="text-lg">Photo search with your camera</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-secondary" />
                  <span className="text-lg">GPS-powered local store finder</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-secondary" />
                  <span className="text-lg">Push notifications for order updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-secondary" />
                  <span className="text-lg">Offline mode for saved searches</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-cta bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                  <Download className="w-5 h-5 mr-2" />
                  Download for iOS
                </Button>
                <Button className="btn-cta bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                  <Download className="w-5 h-5 mr-2" />
                  Download for Android
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <img 
                src={mobileAppImage} 
                alt="SpareItUp mobile app interface"
                className="max-w-xs md:max-w-sm rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding">
        <div className="container-spacing">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to{' '}
              <span className="text-gradient-cta">Transform</span>{' '}
              Your Parts Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of satisfied customers who've ditched the parts hunt headache for good.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="btn-hero text-xl px-12 py-6">
                <Search className="w-6 h-6 mr-2" />
                Start Searching Now
              </Button>
              <Button variant="outline" className="text-xl px-12 py-6 border-2">
                <Heart className="w-6 h-6 mr-2" />
                Join as Store Partner
              </Button>
            </div>

            <p className="text-muted-foreground">
              No credit card required • Free to search • Instant results
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background section-padding">
        <div className="container-spacing">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-cta rounded-lg flex items-center justify-center">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SpareItUp</span>
              </div>
              <p className="text-background/70 mb-4">
                AI-powered auto parts marketplace connecting mechanics and car owners with local inventory.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">AI Search</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Store Network</a></li>
                <li><a href="#" className="hover:text-background transition-colors">API Access</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Partners</h3>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Join as Store</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Mechanic Program</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Wholesale Access</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Integration</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
            <p>&copy; 2024 SpareItUp. All rights reserved. Made with ❤️ for the automotive community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;