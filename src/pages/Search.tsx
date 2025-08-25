import { useState } from 'react';
import { Search, Camera, Mic, MapPin, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const recentSearches = [
    'BMW brake pads',
    'Toyota oil filter',
    'Honda headlight',
    'Ford alternator'
  ];

  const popularParts = [
    { name: 'Brake Pads', category: 'Brakes', searches: '2.5K' },
    { name: 'Oil Filters', category: 'Engine', searches: '1.8K' },
    { name: 'Air Filters', category: 'Engine', searches: '1.2K' },
    { name: 'Spark Plugs', category: 'Engine', searches: '980' }
  ];

  return (
    <div className="min-h-screen pb-20 md:pb-0 pt-20">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Find Your Parts</h1>
          
          {/* Search Bar */}
          <div className="bg-card rounded-2xl p-6 shadow-lg border mb-8">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Input
                  placeholder="Search by part name, car model, or VIN..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 text-lg pl-12"
                />
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  Photo
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Mic className="w-4 h-4" />
                  Voice
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Recent Searches */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Recent Searches</h2>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                  onClick={() => setSearchQuery(search)}
                >
                  {search}
                </Badge>
              ))}
            </div>
          </div>

          {/* Popular Parts */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Popular Parts</h2>
            <div className="grid gap-4">
              {popularParts.map((part, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{part.name}</h3>
                        <p className="text-sm text-muted-foreground">{part.category}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{part.searches} searches</Badge>
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;