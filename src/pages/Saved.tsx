import { Heart, MapPin, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Saved = () => {
  const savedParts = [
    {
      name: 'BMW Brake Pads Set',
      partNumber: 'BP-BMW-2019-X3',
      price: '$89.99',
      store: 'AutoParts Central',
      distance: '2.3 miles',
      rating: 4.8,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=200&fit=crop'
    },
    {
      name: 'Honda Oil Filter',
      partNumber: 'OF-HON-2020-CRV',
      price: '$24.99',
      store: 'QuickFix Auto',
      distance: '1.8 miles',
      rating: 4.9,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=200&fit=crop'
    },
    {
      name: 'Toyota Headlight Assembly',
      partNumber: 'HL-TOY-2018-CAM',
      price: '$156.00',
      store: 'Metro Parts Plus',
      distance: '4.1 miles',
      rating: 4.7,
      inStock: false,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=200&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen pb-20 md:pb-0 pt-20">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Saved Parts</h1>
            <Button variant="outline" size="sm">
              Clear All
            </Button>
          </div>

          {savedParts.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold mb-2">No saved parts yet</h2>
              <p className="text-muted-foreground mb-4">
                Start searching and save parts you're interested in
              </p>
              <Button>Start Searching</Button>
            </div>
          ) : (
            <div className="grid gap-6">
              {savedParts.map((part, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-48 h-48 md:h-auto">
                      <img 
                        src={part.image} 
                        alt={part.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{part.name}</h3>
                          <p className="text-muted-foreground text-sm mb-2">
                            Part #: {part.partNumber}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {part.store} • {part.distance}
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              {part.rating}
                            </div>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-red-500 hover:text-red-600"
                        >
                          <Heart className="w-5 h-5 fill-current" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold text-primary">
                            {part.price}
                          </span>
                          <Badge 
                            variant={part.inStock ? "default" : "secondary"}
                            className={part.inStock ? "bg-green-100 text-green-800" : ""}
                          >
                            {part.inStock ? "In Stock" : "Out of Stock"}
                          </Badge>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button 
                            size="sm" 
                            disabled={!part.inStock}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
                          >
                            {part.inStock ? "Order Now" : "Notify When Available"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Saved;