import React from 'react';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { Button } from '../components/UI';
import { GlassCard } from '../components/ui/glass-card';

const CalendarPage = () => {
   const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

   // Generating a fake calendar grid for Feb 2026
   const calendarDays = Array.from({ length: 28 }, (_, i) => i + 1);
   // Start on Sunday (just for visual approximation based on mockup)
   const offset = [null, null, null, null, null, null];

   const events = [
      { day: 15, type: 'birthday', label: 'Harry Potter', color: 'bg-purple-500' },
      { day: 15, type: 'birthday', label: 'Superheroes', color: 'bg-pink-500' },
      { day: 16, type: 'corporate', label: 'Kids Day', color: 'bg-yellow-500' },
      { day: 22, type: 'wedding', label: 'Wedding Service', color: 'bg-blue-500' },
   ];

   return (
      <div className="space-y-6 h-full flex flex-col">
         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <GlassCard className="flex items-center gap-4 bg-white/50 dark:bg-gray-800/50 p-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
               <button className="p-1 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 rounded text-gray-700 dark:text-gray-300"><ChevronLeft size={20} /></button>
               <span className="font-bold text-lg min-w-[140px] text-center text-gray-900 dark:text-white">February 2026</span>
               <button className="p-1 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 rounded text-gray-700 dark:text-gray-300"><ChevronRight size={20} /></button>
            </GlassCard>

            <div className="flex gap-2">
               <select className="bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 ring-purple-500 text-gray-700 dark:text-white">
                  <option>All Cities</option>
                  <option>Paris</option>
                  <option>Lyon</option>
               </select>
               <select className="bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 ring-purple-500 text-gray-700 dark:text-white">
                  <option>All Animators</option>
               </select>
               <Button variant="secondary">Today</Button>
            </div>
         </div>

         <GlassCard className="flex-1 flex flex-col min-h-[600px] !p-0 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-7 border-b border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-700/50">
               {days.map(day => (
                  <div key={day} className="py-3 text-center text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                     {day}
                  </div>
               ))}
            </div>
            <div className="grid grid-cols-7 flex-1">
               {[...offset, ...calendarDays].map((day, idx) => {
                  const dayEvents = events.filter(e => e.day === day);
                  return (
                     <div key={idx} className={`min-h-[100px] border-b border-r border-gray-100 dark:border-gray-700 p-2 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors relative group ${!day ? 'bg-gray-50/30 dark:bg-gray-800/30' : ''}`}>
                        {day && (
                           <>
                              <span className={`text-sm font-medium ${dayEvents.length > 0 ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-600'}`}>{day}</span>
                              <div className="mt-1 space-y-1">
                                 {dayEvents.map((evt, i) => (
                                    <div key={i} className="text-[10px] truncate px-1.5 py-0.5 rounded text-white font-medium flex items-center gap-1 shadow-sm cursor-pointer hover:opacity-90" style={{ backgroundColor: evt.color === 'bg-purple-500' ? '#7C4DFF' : evt.color === 'bg-pink-500' ? '#FF4081' : evt.color === 'bg-yellow-500' ? '#FF9800' : '#2196F3' }}>
                                       <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                       {evt.label}
                                    </div>
                                 ))}
                                 {/* Mock slot for drag */}
                                 <div className="opacity-0 group-hover:opacity-100 absolute bottom-1 right-1">
                                    <button className="p-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-sm text-gray-400 dark:text-gray-500 hover:text-[#7C4DFF] dark:hover:text-violet-400">+</button>
                                 </div>
                              </div>
                           </>
                        )}
                     </div>
                  );
               })}
            </div>
         </GlassCard>

         <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
               <span className="w-3 h-3 rounded-full bg-[#7C4DFF]"></span> Birthday 4-6
            </div>
            <div className="flex items-center gap-2">
               <span className="w-3 h-3 rounded-full bg-[#FF4081]"></span> Birthday 7-12
            </div>
            <div className="flex items-center gap-2">
               <span className="w-3 h-3 rounded-full bg-[#FF9800]"></span> Corporate
            </div>
            <div className="flex items-center gap-2">
               <span className="w-3 h-3 rounded-full bg-[#2196F3]"></span> Wedding
            </div>
         </div>
      </div>
   );
};

export default CalendarPage;
