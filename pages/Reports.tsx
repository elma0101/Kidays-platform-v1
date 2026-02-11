import React from 'react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Calendar, Filter, Download, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/UI';
import { GlassCard } from '../components/ui/glass-card';

const SALES_DATA = [
   { month: 'Aug', sales: 40 },
   { month: 'Sep', sales: 45 },
   { month: 'Oct', sales: 55 },
   { month: 'Nov', sales: 50 },
   { month: 'Dec', sales: 75 },
   { month: 'Jan', sales: 65 },
   { month: 'Feb', sales: 85 },
];

const THEME_DATA = [
   { name: 'Harry Potter', value: 35, color: '#7C4DFF' },
   { name: 'Frozen', value: 25, color: '#00B0FF' },
   { name: 'Superheroes', value: 20, color: '#FF4081' },
   { name: 'Pirates', value: 10, color: '#FF9800' },
   { name: 'Other', value: 10, color: '#9E9E9E' },
];

const CUSTOMER_SATISFACTION = [
   { name: '5 Stars', value: 65 },
   { name: '4 Stars', value: 25 },
   { name: '3 Stars', value: 8 },
   { name: '1-2 Stars', value: 2 },
];

const Reports = () => {
   return (
      <div className="space-y-6">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
               <h1 className="text-2xl font-bold text-gray-800 dark:text-white font-poppins">Reports & Analytics</h1>
               <p className="text-gray-500 dark:text-gray-400">Deep dive into your business performance.</p>
            </div>
            <div className="flex gap-2 bg-white/50 dark:bg-gray-800/50 p-1 rounded-lg border border-gray-200 dark:border-gray-700">
               <button className="px-3 py-1.5 text-sm font-medium bg-gray-100/50 dark:bg-gray-700/50 rounded text-gray-800 dark:text-white">Last 30 Days</button>
               <button className="px-3 py-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Quarter</button>
               <button className="px-3 py-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Year</button>
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Sales Trend */}
            <GlassCard className="lg:col-span-2 h-fit p-6">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-800 dark:text-white text-lg">Booking Growth</h3>
                  <div className="flex items-center gap-2 text-green-500 dark:text-green-400 text-sm font-bold bg-green-50/50 dark:bg-green-900/20 px-2 py-1 rounded">
                     <ArrowUpRight size={16} /> +24% vs prev period
                  </div>
               </div>
               <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={SALES_DATA}>
                        <defs>
                           <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#7C4DFF" stopOpacity={0.3} />
                              <stop offset="95%" stopColor="#7C4DFF" stopOpacity={0} />
                           </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" strokeOpacity={0.2} />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                        <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', backgroundColor: '#1F2937', color: '#F9FAFB' }} itemStyle={{ color: '#F9FAFB' }} />
                        <Area type="monotone" dataKey="sales" stroke="#7C4DFF" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
            </GlassCard>

            {/* Theme Popularity */}
            <GlassCard className="h-fit p-6">
               <h3 className="font-bold text-gray-800 dark:text-white text-lg mb-4">Top Themes</h3>
               <div className="h-[250px] relative">
                  <ResponsiveContainer width="100%" height="100%">
                     <PieChart>
                        <Pie
                           data={THEME_DATA}
                           cx="50%"
                           cy="50%"
                           innerRadius={60}
                           outerRadius={80}
                           paddingAngle={5}
                           dataKey="value"
                        >
                           {THEME_DATA.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                           ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} iconType="circle" />
                     </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center -mt-4">
                     <div className="text-2xl font-bold text-gray-800 dark:text-white">485</div>
                     <div className="text-xs text-gray-500 dark:text-gray-400">Total Bookings</div>
                  </div>
               </div>
               <div className="mt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                     <span className="text-gray-600 dark:text-gray-300">Harry Potter</span>
                     <span className="font-medium text-gray-900 dark:text-white">35%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                     <div className="h-full bg-[#7C4DFF] w-[35%]"></div>
                  </div>
               </div>
            </GlassCard>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Customer Satisfaction */}
            <GlassCard className="h-fit p-6">
               <h3 className="font-bold text-gray-800 dark:text-white text-lg mb-6">Customer Satisfaction (NPS)</h3>
               <div className="space-y-4">
                  {CUSTOMER_SATISFACTION.map((item, idx) => (
                     <div key={idx} className="flex items-center gap-4">
                        <span className="w-16 text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                        <div className="flex-1 h-3 bg-gray-100/50 dark:bg-gray-700 rounded-full overflow-hidden">
                           <div
                              className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                              style={{ width: `${item.value}%` }}
                           ></div>
                        </div>
                        <span className="w-8 text-sm font-medium text-right text-gray-900 dark:text-white">{item.value}%</span>
                     </div>
                  ))}
               </div>
               <div className="mt-6 p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg flex justify-between items-center">
                  <div>
                     <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Average Rating</div>
                     <div className="text-2xl font-bold text-gray-800 dark:text-white">4.8/5</div>
                  </div>
                  <Button variant="secondary" size="sm">View Reviews</Button>
               </div>
            </GlassCard>

            {/* Animator Leaderboard */}
            <GlassCard className="h-fit p-6">
               <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-800 dark:text-white text-lg">Top Animators</h3>
                  <Button variant="ghost" size="sm">View All</Button>
               </div>
               <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                     <div key={i} className="flex items-center gap-3 p-2 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                        <div className="font-bold text-gray-300 dark:text-gray-600 w-4">#{i}</div>
                        <img src={`https://picsum.photos/40/40?random=${i + 10}`} className="w-10 h-10 rounded-full object-cover" alt="User" />
                        <div className="flex-1">
                           <div className="font-medium text-sm text-gray-800 dark:text-white">Animator Name</div>
                           <div className="text-xs text-gray-500 dark:text-gray-400">42 Events • 4.9 Rating</div>
                        </div>
                        <div className="text-sm font-bold text-[#7C4DFF] dark:text-violet-400">€1,240</div>
                     </div>
                  ))}
               </div>
            </GlassCard>
         </div>
      </div>
   );
};

export default Reports;