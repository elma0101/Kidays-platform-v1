import React from 'react';
import { Calendar, Users, Euro, AlertCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Card, Badge, Button } from '../components/UI';
import { MOCK_RESERVATIONS, MOCK_ALERTS } from '../constants';
import { Link } from 'react-router-dom';
import { GlassCard } from '../components/ui/glass-card';

const Dashboard = () => {
   const upcomingEvents = MOCK_RESERVATIONS.slice(0, 4);

   return (
      <div className="space-y-6 animate-fade-in">

         {/* Top Section: Hero & Stats */}
         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Hero Card */}
            <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white p-6 shadow-lg flex flex-col justify-between relative overflow-hidden">
               <div className="relative z-10">
                  <div className="text-violet-200 text-sm font-medium mb-1">Today's Events</div>
                  <div className="text-4xl font-bold mb-4 text-white">12</div>
                  <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-white">
                     <TrendingUp size={12} /> +2 vs yesterday
                  </div>
               </div>
               <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                  <Calendar size={180} />
               </div>
            </div>

            {/* Stat Card 1 */}
            <GlassCard className="flex flex-col justify-between p-6">
               <div className="flex justify-between items-start">
                  <div>
                     <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">This Week</div>
                     <div className="text-3xl font-bold text-gray-900 dark:text-white mt-2">85</div>
                  </div>
                  <div className="p-2 bg-violet-50 dark:bg-violet-900/20 text-[#7C3AED] dark:text-violet-400 rounded-lg">
                     <Calendar size={20} />
                  </div>
               </div>
               <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 mt-4">
                  <div className="bg-[#7C3AED] h-1.5 rounded-full w-[65%]"></div>
               </div>
               <div className="text-xs text-gray-400 mt-2">65% capacity booked</div>
            </GlassCard>

            {/* Stat Card 2 */}
            <GlassCard className="flex flex-col justify-between p-6">
               <div className="flex justify-between items-start">
                  <div>
                     <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">Available Animators</div>
                     <div className="text-3xl font-bold text-gray-900 dark:text-white mt-2">45<span className="text-lg text-gray-400 dark:text-gray-500 font-normal">/50</span></div>
                  </div>
                  <div className="p-2 bg-pink-50 dark:bg-pink-900/20 text-pink-500 dark:text-pink-400 rounded-lg">
                     <Users size={20} />
                  </div>
               </div>
               <div className="flex -space-x-2 mt-4">
                  {[1, 2, 3].map(i => (
                     <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://picsum.photos/32/32?random=${i}`} alt="User" />
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-medium text-gray-500 dark:text-gray-300">+42</div>
               </div>
            </GlassCard>
         </div>

         <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            {/* Left Column: Upcoming Events List */}
            <div className="xl:col-span-2 space-y-4">
               <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">Upcoming Events</h2>
                  <Link to="/calendar" className="text-sm text-[#7C3AED] dark:text-violet-400 font-medium hover:underline">View Calendar</Link>
               </div>

               <GlassCard className="overflow-hidden">
                  <table className="w-full text-left text-sm">
                     <thead className="bg-gray-50/50 dark:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                        <tr>
                           <th className="px-6 py-3 font-medium">Event</th>
                           <th className="px-6 py-3 font-medium">Date & Time</th>
                           <th className="px-6 py-3 font-medium">City</th>
                           <th className="px-6 py-3 font-medium">Animator</th>
                           <th className="px-6 py-3 font-medium text-center">Status</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                        {upcomingEvents.map(evt => (
                           <tr key={evt.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors">
                              <td className="px-6 py-4">
                                 <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-violet-50 dark:bg-violet-900/20 flex items-center justify-center text-lg">{evt.themeIcon}</div>
                                    <div>
                                       <div className="font-semibold text-gray-900 dark:text-white">{evt.clientName}</div>
                                       <div className="text-xs text-gray-500 dark:text-gray-400">{evt.theme} Theme</div>
                                    </div>
                                 </div>
                              </td>
                              <td className="px-6 py-4">
                                 <div className="flex items-center gap-2">
                                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs font-medium">Today</span>
                                    <span className="text-gray-600 dark:text-gray-400">{evt.time}</span>
                                 </div>
                              </td>
                              <td className="px-6 py-4">
                                 <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded text-xs font-medium">{evt.city}</span>
                              </td>
                              <td className="px-6 py-4">
                                 <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                    <img src={`https://picsum.photos/24/24?random=${evt.id}`} className="w-6 h-6 rounded-full" />
                                    <span>Sarah M.</span>
                                 </div>
                              </td>
                              <td className="px-6 py-4 text-center">
                                 <div className={`w-2.5 h-2.5 rounded-full mx-auto ${evt.status === 'confirmed' ? 'bg-emerald-500' :
                                    evt.status === 'pending' ? 'bg-amber-500' : 'bg-gray-300'
                                    }`}></div>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
                  <div className="p-4 border-t border-gray-100 dark:border-gray-700 text-center">
                     <button className="text-sm text-[#7C3AED] dark:text-violet-400 font-medium hover:underline">View all upcoming events</button>
                  </div>
               </GlassCard>
            </div>

            {/* Right Column: Alerts */}
            <div className="space-y-4">
               <h2 className="text-lg font-bold text-gray-900 dark:text-white">Alerts & Actions</h2>

               <div className="space-y-3">
                  {MOCK_ALERTS.map(alert => (
                     <GlassCard key={alert.id} className="p-4 flex gap-4">
                        <div className={`p-2 rounded-lg h-fit ${alert.severity === 'critical' ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' :
                           alert.severity === 'warning' ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400' : 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                           }`}>
                           <AlertCircle size={20} />
                        </div>
                        <div className="flex-1">
                           <h4 className="font-bold text-gray-900 dark:text-white text-sm">{alert.message}</h4>
                           <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-3">Action required based on operational rules.</p>
                           <div className="flex items-center justify-between">
                              <button className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">Ignore</button>
                              <Button size="sm" variant={alert.severity === 'critical' ? 'danger' : 'secondary'} className="h-7 text-xs">
                                 {alert.action}
                              </Button>
                           </div>
                        </div>
                     </GlassCard>
                  ))}
               </div>

               {/* AI Insight Box */}
               <div className="bg-[#F5F3FF] dark:bg-violet-900/10 border border-[#DDD6FE] dark:border-violet-800 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                     <div className="p-1 bg-[#8B5CF6] text-white rounded">
                        <Users size={12} />
                     </div>
                     <span className="text-xs font-bold text-[#6D28D9] dark:text-violet-400 uppercase tracking-wide">AI Insight</span>
                  </div>
                  <p className="text-sm text-[#4C1D95] dark:text-violet-200 italic mb-3">
                     "Based on current trends, you are likely to be understaffed in Lyon next Saturday. Consider opening 3 shifts now."
                  </p>
                  <Button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9]" size="sm">Action Suggestion</Button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;