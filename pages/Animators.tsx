import React, { useState } from 'react';
import { MapPin, Search, Filter, SlidersHorizontal, CheckCircle } from 'lucide-react';
import { Button, Badge } from '../components/UI';
import { GlassCard } from '../components/ui/glass-card';
import { MOCK_ANIMATORS } from '../constants';

const Animators = () => {
   return (
      <div className="space-y-6">

         {/* Search Toolbar */}
         {/* Search Toolbar */}
         <GlassCard className="p-4 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
               <input
                  type="text"
                  placeholder="Search by name or email..."
                  className="pl-10 pr-4 py-2 w-full bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-[#7C3AED] dark:text-white outline-none"
               />
            </div>
            <div className="flex gap-3 w-full md:w-auto">
               <select className="bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm outline-none w-full md:w-32 text-gray-700 dark:text-gray-200">
                  <option>All Cities</option>
                  <option>Paris</option>
                  <option>Lyon</option>
               </select>
               <select className="bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm outline-none w-full md:w-32 text-gray-700 dark:text-gray-200">
                  <option>All Skills</option>
                  <option>Magic</option>
                  <option>Face Paint</option>
               </select>
               <div className="flex items-center gap-2 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 bg-white/50 dark:bg-gray-700/50">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Availability:</span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded text-xs font-medium border border-green-100 dark:border-green-900/30">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                     This Week
                  </div>
               </div>
            </div>
         </GlassCard>

         {/* Animators Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {MOCK_ANIMATORS.map((animator) => (
               <GlassCard key={animator.id} className="p-5 hover:shadow-md transition-all flex flex-col h-full relative border border-gray-200 dark:border-gray-700">

                  {/* New Badge Mockup */}
                  {animator.eventsCompleted < 20 && (
                     <div className="absolute top-5 right-5 px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase rounded border border-blue-100 dark:border-blue-900/30">
                        New
                     </div>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                     <div className="relative">
                        <img
                           src={animator.avatar}
                           alt={animator.name}
                           className="w-16 h-16 rounded-full object-cover border border-gray-100 dark:border-gray-700"
                        />
                        <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800 ${animator.availability === 'available' ? 'bg-emerald-500' :
                           animator.availability === 'partial' ? 'bg-amber-500' : 'bg-red-500'
                           }`}></div>
                     </div>
                     <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">{animator.name}</h3>
                        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mt-1">
                           <MapPin size={12} /> {animator.cities[0]}
                           {animator.cities.length > 1 && <span className="text-xs text-gray-400 dark:text-gray-500">+{animator.cities.length - 1}</span>}
                        </div>
                     </div>
                  </div>

                  <div className="flex justify-between items-center text-xs mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                     <div className="bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 px-2 py-1 rounded font-medium">
                        ★ {animator.rating}
                     </div>
                     <div className="text-gray-400 dark:text-gray-500">
                        {animator.eventsCompleted} events
                     </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                     {animator.themes.slice(0, 3).map(theme => (
                        <span key={theme} className="px-2 py-1 bg-violet-50 dark:bg-violet-900/20 text-[#7C3AED] dark:text-violet-400 rounded text-xs font-medium border border-violet-100 dark:border-violet-900/30">
                           {theme}
                        </span>
                     ))}
                     {animator.themes.length > 3 && (
                        <span className="px-2 py-1 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs font-medium border border-gray-100 dark:border-gray-600">
                           +{animator.themes.length - 3}
                        </span>
                     )}
                  </div>

                  <button className="mt-auto w-full py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-violet-900/10 hover:text-gray-900 dark:hover:text-white transition-colors">
                     View Profile
                  </button>
               </GlassCard>
            ))}
         </div>

         <div className="flex justify-between items-center pt-4 text-sm text-gray-500 dark:text-gray-400">
            <div>Showing <span className="font-bold text-gray-900 dark:text-white">1-6</span> of <span className="font-bold text-gray-900 dark:text-white">42</span> animators</div>
            <div className="flex gap-2">
               <Button variant="secondary" size="sm">Previous</Button>
               <Button variant="primary" size="sm" className="bg-[#7C3AED] hover:bg-[#6D28D9]">Next</Button>
            </div>
         </div>
      </div>
   );
};

export default Animators;