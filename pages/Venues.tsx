import React, { useState } from 'react';
import { MapPin, Users, Wifi, Car, Coffee, Star, Filter, Plus, Search } from 'lucide-react';
import { Button, Badge } from '../components/UI';
import { GlassCard } from '../components/ui/glass-card';
import { Venue } from '../types';
import VenueDetailPanel from '../components/VenueDetailPanel';

const MOCK_VENUES: Venue[] = [
  {
    id: 1,
    name: "Le Petit Château",
    location: "Paris, 75016",
    capacity: "40-60",
    price: 150,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=400",
    amenities: ['wifi', 'parking', 'catering'],
    status: 'available'
  },
  {
    id: 2,
    name: "Kids Wonderland Lyon",
    location: "Lyon, 69002",
    capacity: "20-30",
    price: 80,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1596464716127-f9a0859b4eff?auto=format&fit=crop&q=80&w=400",
    amenities: ['wifi', 'parking'],
    status: 'booked'
  },
  {
    id: 3,
    name: "Sunny Garden Loft",
    location: "Marseille, 13008",
    capacity: "30-50",
    price: 120,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1587271407850-8d438918826a?auto=format&fit=crop&q=80&w=400",
    amenities: ['wifi', 'catering'],
    status: 'available'
  },
  {
    id: 4,
    name: "Magic Theater",
    location: "Bordeaux, 33000",
    capacity: "100+",
    price: 250,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1503095392237-fa344d2802d4?auto=format&fit=crop&q=80&w=400",
    amenities: ['parking', 'catering'],
    status: 'maintenance'
  },
  {
    id: 5,
    name: "Forest Cabin",
    location: "Nice, 06000",
    capacity: "15-20",
    price: 90,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?auto=format&fit=crop&q=80&w=400",
    amenities: ['parking'],
    status: 'available'
  },
  {
    id: 6,
    name: "Urban Play Zone",
    location: "Paris, 75011",
    capacity: "50-80",
    price: 180,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&q=80&w=400",
    amenities: ['wifi', 'coffee'],
    status: 'available'
  }
];

const AmenityIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'wifi': return <Wifi size={14} className="text-gray-500" />;
    case 'parking': return <Car size={14} className="text-gray-500" />;
    case 'catering': return <Coffee size={14} className="text-gray-500" />;
    default: return null;
  }
};

const Venues = () => {
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white font-poppins">Venues</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage partner locations and event spaces.</p>
        </div>
        <Button variant="primary"><Plus size={18} /> Add Venue</Button>
      </div>

      {/* Filters */}
      {/* Filters */}
      <GlassCard className="p-3">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search venues..."
              className="pl-10 pr-4 py-2 w-full bg-gray-50/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-[#7C4DFF] dark:text-white outline-none"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <select className="bg-gray-50/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm outline-none text-gray-700 dark:text-white">
              <option>All Cities</option>
              <option>Paris</option>
              <option>Lyon</option>
              <option>Marseille</option>
            </select>
            <select className="bg-gray-50/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm outline-none text-gray-700 dark:text-white">
              <option>Any Capacity</option>
              <option>10-30</option>
              <option>30-50</option>
              <option>50+</option>
            </select>
            <Button variant="secondary" className="!px-3"><Filter size={18} /></Button>
          </div>
        </div>
      </GlassCard>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_VENUES.map(venue => (
          <GlassCard
            key={venue.id}
            className="!p-0 overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            onClick={() => setSelectedVenue(venue)}
          >
            <div className="h-40 relative">
              <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
              <div className="absolute top-3 right-3">
                <Badge status={venue.status as any} className="shadow-sm backdrop-blur-md bg-white/90 dark:bg-gray-800/90" />
              </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-gray-800 dark:text-white line-clamp-1">{venue.name}</h3>
                <div className="flex items-center gap-1 text-sm font-medium text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 px-1.5 py-0.5 rounded">
                  <Star size={12} fill="currentColor" /> {venue.rating}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <MapPin size={14} /> {venue.location}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-2 rounded text-center">
                  <Users size={16} className="mx-auto mb-1 text-gray-400 dark:text-gray-500" />
                  <span className="font-medium text-gray-900 dark:text-white">{venue.capacity}</span>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-2 rounded text-center">
                  <div className="font-bold text-[#7C4DFF] dark:text-violet-400">€{venue.price}</div>
                  <span className="text-xs text-gray-400 dark:text-gray-500">/hour</span>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex gap-2">
                  {venue.amenities.map(a => <AmenityIcon key={a} type={a} />)}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="!p-0 hover:bg-transparent"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVenue(venue);
                  }}
                >
                  Details →
                </Button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <VenueDetailPanel venue={selectedVenue} onClose={() => setSelectedVenue(null)} />
    </div>
  );
};

export default Venues;