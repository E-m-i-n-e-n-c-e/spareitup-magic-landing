import { useState } from 'react';
import { Search, MapPin, Clock, Car, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const heroImage = "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=800&fit=crop";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const trustStats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "2.5K+", label: "Partner Stores" },
    { number: "1M+", label: "Parts Found" },
    { number: "4.9★", label: "App Rating" }
  ];

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SpareItUp</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link>
              <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How it Works</Link>
              <Link to="/reviews" className="text-muted-foreground hover:text-primary transition-colors">Reviews</Link>
              <Link to="/login">
                <Button variant="outline" size="sm">Sign In</Button>
              </Link>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">Download App</Button>
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
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="space-y-6 mb-8">
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none px-4 py-2">
                🚀 Now serving 2,500+ auto shops nationwide
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Find Any Auto Part in{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Minutes,</span>
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
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 h-12 px-8">
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
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/search">
              <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                <Search className="w-6 h-6" />
                <span>Search Parts</span>
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                <MapPin className="w-6 h-6" />
                <span>Find Stores</span>
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                <Clock className="w-6 h-6" />
                <span>How it Works</span>
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                <Car className="w-6 h-6" />
                <span>My Account</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;