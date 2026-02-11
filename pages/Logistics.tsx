import React from 'react';
import { Package, Truck, ClipboardList, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { Button, Badge } from '../components/UI';
import { GlassCard } from '../components/ui/glass-card';

const INVENTORY = [
   { id: 'KIT-HP-01', name: 'Harry Potter Deluxe Kit', category: 'Theme Kit', stock: 4, total: 5, status: 'good' },
   { id: 'KIT-PR-02', name: 'Princess Castle Set', category: 'Theme Kit', stock: 1, total: 4, status: 'low' },
   { id: 'EQ-SP-05', name: 'Sound System (Portable)', category: 'Equipment', stock: 8, total: 8, status: 'good' },
   { id: 'COS-SM-01', name: 'Spiderman Costume (M)', category: 'Costume', stock: 0, total: 2, status: 'out' },
   { id: 'KIT-PI-03', name: 'Pirate Treasure Chest', category: 'Theme Kit', stock: 3, total: 3, status: 'good' },
];

const DISPATCHES = [
   { id: 'DSP-884', event: 'EVT-1247', theme: 'Harry Potter', date: 'Feb 15', status: 'ready', assignee: 'Thomas L.' },
   { id: 'DSP-885', event: 'EVT-1249', theme: 'Superheroes', date: 'Feb 15', status: 'packing', assignee: 'Julie M.' },
   { id: 'DSP-886', event: 'EVT-1248', theme: 'Princesses', date: 'Feb 16', status: 'pending', assignee: 'Unassigned' },
];

const Logistics = () => {
   return (
      <div className="space-y-6">
         <div className="flex justify-between items-center">
            <div>
               <h1 className="text-2xl font-bold text-gray-800 dark:text-white font-poppins">Logistics & Inventory</h1>
               <p className="text-gray-500 dark:text-gray-400">Manage equipment availability and event preparation.</p>
            </div>
            <Button variant="primary"><ClipboardList size={18} /> Inventory Check</Button>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Inventory Section */}
            <div className="lg:col-span-2 space-y-6">
               <GlassCard className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                     <Package className="text-[#7C4DFF] dark:text-violet-400" /> Inventory Levels
                  </h3>
                  <div className="space-y-4">
                     {INVENTORY.map(item => (
                        <div key={item.id} className="flex items-center gap-4 p-3 border border-gray-100 dark:border-gray-700 rounded-lg hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors">
                           <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.category === 'Theme Kit' ? 'bg-purple-100/50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' :
                              item.category === 'Costume' ? 'bg-pink-100/50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400' : 'bg-blue-100/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                              }`}>
                              {item.category === 'Costume' ? '👕' : item.category === 'Theme Kit' ? '📦' : '🔊'}
                           </div>
                           <div className="flex-1">
                              <div className="flex justify-between mb-1">
                                 <span className="font-medium text-gray-800 dark:text-white">{item.name}</span>
                                 <span className="text-sm font-mono text-gray-500 dark:text-gray-400">{item.stock}/{item.total}</span>
                              </div>
                              <div className="w-full h-2 bg-gray-100/50 dark:bg-gray-700 rounded-full overflow-hidden">
                                 <div
                                    className={`h-full rounded-full ${item.status === 'good' ? 'bg-green-500' :
                                       item.status === 'low' ? 'bg-orange-500' : 'bg-red-500'
                                       }`}
                                    style={{ width: `${(item.stock / item.total) * 100}%` }}
                                 ></div>
                              </div>
                           </div>
                           <div className="w-20 text-right">
                              <span className={`text-xs px-2 py-1 rounded font-medium ${item.status === 'good' ? 'bg-green-100/50 dark:bg-green-900/20 text-green-700 dark:text-green-400' :
                                 item.status === 'low' ? 'bg-orange-100/50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400' : 'bg-red-100/50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                                 }`}>
                                 {item.status.toUpperCase()}
                              </span>
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="mt-4 text-center">
                     <Button variant="ghost" className="text-sm">View Full Inventory</Button>
                  </div>
               </GlassCard>

               {/* Warehouse Alerts */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50/50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-lg p-4 flex gap-3">
                     <AlertTriangle className="text-red-500 dark:text-red-400 flex-shrink-0" />
                     <div>
                        <h4 className="font-bold text-red-700 dark:text-red-400 text-sm">Low Stock Alert</h4>
                        <p className="text-red-600 dark:text-red-300 text-xs mt-1">Spiderman Costume (M) is out of stock. Needed for EVT-1255 on Feb 20.</p>
                        <button className="text-xs font-bold text-red-800 dark:text-red-200 mt-2 underline">Order Replacement</button>
                     </div>
                  </div>
                  <div className="bg-blue-50/50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-lg p-4 flex gap-3">
                     <Truck className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
                     <div>
                        <h4 className="font-bold text-blue-700 dark:text-blue-400 text-sm">Incoming Delivery</h4>
                        <p className="text-blue-600 dark:text-blue-300 text-xs mt-1">New Frozen Theme Kits arriving tomorrow, 10:00 AM.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Dispatch Column */}
            <div className="space-y-6">
               <GlassCard className="h-fit p-6 border-none dark:border dark:border-gray-700">
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                     <Truck className="text-[#FF4081]" /> Upcoming Dispatches
                  </h3>
                  <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 space-y-6 pl-6 py-2">
                     {DISPATCHES.map((dispatch, idx) => (
                        <div key={dispatch.id} className="relative">
                           <div className={`absolute -left-[31px] top-0 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800 shadow-sm ${dispatch.status === 'ready' ? 'bg-green-500' :
                              dispatch.status === 'packing' ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                              }`}></div>

                           <div className="bg-white/50 dark:bg-gray-700/50 p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                              <div className="flex justify-between items-start mb-1">
                                 <span className="font-bold text-gray-800 dark:text-white text-sm">{dispatch.theme}</span>
                                 <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">{dispatch.date}</span>
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Event: {dispatch.event}</div>

                              <div className="flex justify-between items-center mt-2">
                                 <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${dispatch.status === 'ready' ? 'bg-green-100/50 dark:bg-green-900/20 text-green-700 dark:text-green-400' :
                                    dispatch.status === 'packing' ? 'bg-blue-100/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' : 'bg-gray-100/50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400'
                                    }`}>
                                    {dispatch.status}
                                 </span>
                                 <div className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                                    <div className="w-4 h-4 rounded-full bg-gray-200/50 dark:bg-gray-600 text-[8px] flex items-center justify-center text-gray-600 dark:text-gray-300">
                                       {dispatch.assignee.charAt(0)}
                                    </div>
                                    {dispatch.assignee}
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
                  <Button className="w-full mt-4" variant="secondary">View Schedule</Button>
               </GlassCard>
            </div>
         </div>
      </div>
   );
};

export default Logistics;