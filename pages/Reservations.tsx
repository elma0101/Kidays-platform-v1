import React, { useState } from 'react';
import { Search, Filter, Plus, MoreVertical, Calendar } from 'lucide-react';
import { Button, Badge } from '../components/UI';
import { GlassCard } from '../components/ui/glass-card';
import { MOCK_RESERVATIONS } from '../constants';
import { Reservation } from '../types';
import EventDetailPanel from '../components/EventDetailPanel';

const Reservations = () => {
   const [selectedEvent, setSelectedEvent] = useState<Reservation | null>(null);

   return (
      <div className="space-y-6">
         <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">Reservations</h1>
            <div className="flex gap-3">
               <div className="hidden md:flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                  <button className="px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm font-medium rounded shadow-sm">All</button>
                  <button className="px-3 py-1.5 text-gray-500 dark:text-gray-400 text-sm font-medium hover:text-gray-900 dark:hover:text-white">Pending</button>
                  <button className="px-3 py-1.5 text-gray-500 dark:text-gray-400 text-sm font-medium hover:text-gray-900 dark:hover:text-white">Confirmed</button>
               </div>
               <Button variant="primary" onClick={() => setSelectedEvent(MOCK_RESERVATIONS[0])}>
                  <Plus size={18} /> Create Reservation
               </Button>
            </div>
         </div>

         <GlassCard className="!p-0 overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
            {/* Table Toolbar */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex gap-4 bg-gray-50/30 dark:bg-gray-800/30">
               <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                     type="text"
                     placeholder="Search by client, ID, or theme..."
                     className="pl-10 pr-4 py-2 w-full bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-[#7C3AED] dark:text-white outline-none"
                  />
               </div>
               <div className="flex gap-2">
                  <select className="bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm outline-none text-gray-600 dark:text-gray-300">
                     <option>Status: All</option>
                     <option>Confirmed</option>
                     <option>Pending</option>
                  </select>
                  <select className="bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm outline-none text-gray-600 dark:text-gray-300">
                     <option>City: All</option>
                     <option>Paris</option>
                     <option>Lyon</option>
                  </select>
                  <select className="bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm outline-none text-gray-600 dark:text-gray-300">
                     <option>Date: Any</option>
                     <option>Today</option>
                     <option>This Week</option>
                  </select>
               </div>
            </div>

            <div className="overflow-x-auto">
               <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50/30 dark:bg-gray-700/30 border-b border-gray-200 dark:border-gray-700 text-xs uppercase text-gray-500 dark:text-gray-400 font-semibold tracking-wider">
                     <tr>
                        <th className="p-4 w-10"><input type="checkbox" className="rounded border-gray-300" /></th>
                        <th className="p-4">Date & Time</th>
                        <th className="p-4">Client</th>
                        <th className="p-4">Theme</th>
                        <th className="p-4">City</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 text-right">Actions</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700 bg-transparent">
                     {MOCK_RESERVATIONS.map((res) => (
                        <tr
                           key={res.id}
                           onClick={() => setSelectedEvent(res)}
                           className="hover:bg-violet-50/30 dark:hover:bg-violet-900/10 transition-colors cursor-pointer group"
                        >
                           <td className="p-4"><input type="checkbox" onClick={(e) => e.stopPropagation()} className="rounded border-gray-300" /></td>
                           <td className="p-4">
                              <div className="font-medium text-gray-900 dark:text-white">{new Date(res.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                              <div className="text-gray-500 dark:text-gray-400 text-xs font-mono">{res.time} - {parseInt(res.time) + res.duration}:00</div>
                           </td>
                           <td className="p-4">
                              <div className="flex items-center gap-2">
                                 <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">
                                    {res.clientName.charAt(0)}
                                 </div>
                                 <span className="font-medium text-gray-900 dark:text-white">{res.clientName}</span>
                              </div>
                           </td>
                           <td className="p-4 text-gray-600 dark:text-gray-300">{res.theme}</td>
                           <td className="p-4 text-gray-600 dark:text-gray-300">{res.city}</td>
                           <td className="p-4">
                              <Badge status={res.status} />
                           </td>
                           <td className="p-4 text-right">
                              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                                 <MoreVertical size={16} />
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>

            {/* Pagination Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
               <div>Showing 1-5 of 24 results</div>
               <div className="flex gap-2">
                  <Button variant="secondary" size="sm">Previous</Button>
                  <Button variant="secondary" size="sm">Next</Button>
               </div>
            </div>
         </GlassCard>

         <EventDetailPanel
            reservation={selectedEvent}
            onClose={() => setSelectedEvent(null)}
         />
      </div>
   );
};

export default Reservations;