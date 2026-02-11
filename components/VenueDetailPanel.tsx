import React from 'react';
import { X, MapPin, Users, Euro, Star, Check, Wifi, Car, Coffee, Music, Layout, Calendar } from 'lucide-react';
import { Venue } from '../types';
import { Button, Badge } from './UI';

interface VenueDetailPanelProps {
   venue: Venue | null;
   onClose: () => void;
}

const AmenityIcon = ({ type }: { type: string }) => {
   const iconProps = { size: 16, className: "text-[#7C4DFF]" };
   switch (type.toLowerCase()) {
      case 'wifi': return <Wifi {...iconProps} />;
      case 'parking': return <Car {...iconProps} />;
      case 'catering': return <Coffee {...iconProps} />;
      case 'music': case 'sound': return <Music {...iconProps} />;
      default: return <Check {...iconProps} />;
   }
};

const VenueDetailPanel: React.FC<VenueDetailPanelProps> = ({ venue, onClose }) => {
   if (!venue) return null;

   // Mock data specifically for the detail view
   const additionalImages = [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=200"
   ];

   return (
      <>
         {/* Backdrop */}
         <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] transition-opacity"
            onClick={onClose}
         />

         {/* Panel */}
         <div className="fixed top-0 right-0 h-full w-full sm:w-[540px] bg-white dark:bg-gray-800 z-[70] shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto border-l border-gray-200 dark:border-gray-700">

            {/* Hero Image */}
            <div className="relative h-64 w-full">
               <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
               <button
                  onClick={onClose}
                  className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"
               >
                  <X size={20} />
               </button>
               <div className="absolute bottom-4 right-4">
                  <Badge status={venue.status} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur shadow-sm dark:text-white" />
               </div>
            </div>

            <div className="p-6 space-y-8">

               {/* Header */}
               <div>
                  <div className="flex justify-between items-start mb-2">
                     <h2 className="text-2xl font-bold font-poppins text-gray-800 dark:text-white">{venue.name}</h2>
                     <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg text-yellow-600 dark:text-yellow-400 font-bold text-sm">
                        <Star size={14} fill="currentColor" /> {venue.rating}
                     </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                     <MapPin size={16} /> {venue.location}
                  </div>
               </div>

               {/* Quick Stats Grid */}
               <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl text-center border border-gray-100 dark:border-gray-600">
                     <Users size={20} className="mx-auto mb-2 text-gray-400" />
                     <div className="font-bold text-gray-800 dark:text-white">{venue.capacity}</div>
                     <div className="text-xs text-gray-500 dark:text-gray-400">Capacity</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl text-center border border-gray-100 dark:border-gray-600">
                     <Euro size={20} className="mx-auto mb-2 text-gray-400" />
                     <div className="font-bold text-gray-800 dark:text-white">{venue.price}</div>
                     <div className="text-xs text-gray-500 dark:text-gray-400">Per Hour</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl text-center border border-gray-100 dark:border-gray-600">
                     <Layout size={20} className="mx-auto mb-2 text-gray-400" />
                     <div className="font-bold text-gray-800 dark:text-white">120 m²</div>
                     <div className="text-xs text-gray-500 dark:text-gray-400">Size</div>
                  </div>
               </div>

               {/* About */}
               <section>
                  <h3 className="font-bold text-gray-800 dark:text-white mb-3 text-sm uppercase tracking-wider">About the Venue</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                     This spacious venue is perfect for children's parties and events.
                     Featuring a modern interior with safe play areas, customizable lighting, and excellent acoustic insulation.
                     Located conveniently near the city center with ample parking space for guests.
                     The layout can be easily rearranged to accommodate specific theme decorations and activities.
                  </p>
               </section>

               {/* Amenities */}
               <section>
                  <h3 className="font-bold text-gray-800 dark:text-white mb-4 text-sm uppercase tracking-wider">Amenities & Services</h3>
                  <div className="grid grid-cols-2 gap-3">
                     {venue.amenities.map(amenity => (
                        <div key={amenity} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                           <AmenityIcon type={amenity} />
                           <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">{amenity}</span>
                        </div>
                     ))}
                     <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                        <Music size={16} className="text-[#7C4DFF]" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sound System</span>
                     </div>
                  </div>
               </section>

               {/* Gallery Preview */}
               <section>
                  <div className="flex justify-between items-center mb-4">
                     <h3 className="font-bold text-gray-800 dark:text-white text-sm uppercase tracking-wider">Gallery</h3>
                     <button className="text-xs text-[#7C4DFF] dark:text-violet-400 font-medium hover:underline">View All</button>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                     {additionalImages.map((img, i) => (
                        <img key={i} src={img} alt={`Gallery ${i}`} className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" />
                     ))}
                  </div>
               </section>

               {/* Availability Preview */}
               <section className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800 border border-purple-100 dark:border-purple-900/30 p-4 rounded-xl">
                  <div className="flex items-start gap-4">
                     <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-[#7C4DFF] dark:text-violet-400">
                        <Calendar size={24} />
                     </div>
                     <div>
                        <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">Upcoming Availability</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">This venue is popular! It's booked for 12 days this month.</p>
                        <div className="flex gap-2">
                           <span className="text-xs bg-white dark:bg-gray-700 px-2 py-1 rounded border border-purple-100 dark:border-purple-900/30 text-purple-700 dark:text-purple-300 font-medium">Sat, Feb 20</span>
                           <span className="text-xs bg-white dark:bg-gray-700 px-2 py-1 rounded border border-purple-100 dark:border-purple-900/30 text-purple-700 dark:text-purple-300 font-medium">Sun, Feb 21</span>
                           <span className="text-xs bg-white dark:bg-gray-700 px-2 py-1 rounded border border-purple-100 dark:border-purple-900/30 text-purple-700 dark:text-purple-300 font-medium">+3 more</span>
                        </div>
                     </div>
                  </div>
               </section>

               <div className="h-16"></div> {/* Spacer for fixed bottom bar */}
            </div>

            {/* Footer Actions */}
            <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
               <Button variant="secondary" className="flex-1">Edit Venue</Button>
               <Button variant="primary" className="flex-1">Create Booking</Button>
            </div>
         </div>
      </>
   );
};

export default VenueDetailPanel;