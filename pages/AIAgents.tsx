import React from 'react';
import { Bot, Package, Activity, AlertTriangle, ArrowRight, Zap, TrendingUp } from 'lucide-react';
import { Button, Badge } from '../components/UI';
import { GlassCard } from '../components/ui/glass-card';

const AgentCard = ({ name, icon: Icon, status, lastRun, alerts, description, color }: any) => (
   <GlassCard className="flex flex-col h-full p-6 border-t-4" style={{ borderColor: color }}>
      <div className="flex justify-between items-start mb-4">
         <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-gray-50/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200">
               <Icon size={24} />
            </div>
            <div>
               <h3 className="font-bold text-lg font-poppins text-gray-800 dark:text-white">{name}</h3>
               <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <span className={`w-2 h-2 rounded-full ${status === 'active' ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}></span>
                  {status === 'active' ? 'Active' : 'Idle'} • Last run: {lastRun}
               </div>
            </div>
         </div>
         <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"><Activity size={20} /></button>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 flex-1">{description}</p>

      <div className="space-y-3 mb-6">
         {alerts.map((alert: any, i: number) => (
            <div key={i} className="flex items-start gap-2 text-sm bg-gray-50/50 dark:bg-gray-700/30 p-2 rounded">
               <AlertTriangle size={16} className={alert.type === 'critical' ? 'text-red-500' : 'text-yellow-500'} />
               <span className="text-gray-700 dark:text-gray-300">{alert.text}</span>
            </div>
         ))}
      </div>

      <Button variant="secondary" className="w-full mt-auto">View Insights</Button>
   </GlassCard>
);

const AIAgents = () => {
   return (
      <div className="space-y-6">
         <div className="bg-gradient-to-r from-[#7C4DFF] to-[#B388FF] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
               <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Zap size={14} className="text-yellow-300" /> AI Powered Operations
               </div>
               <h1 className="text-3xl font-bold font-poppins mb-2">Operational Intelligence Center</h1>
               <p className="text-purple-100">
                  Your autonomous agents are monitoring 42 active events. 3 optimization opportunities detected today.
               </p>
            </div>
            <Bot className="absolute right-8 bottom-[-40px] text-white opacity-10" size={240} />
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AgentCard
               name="BudgetBot"
               icon={TrendingUp}
               color="#FFC107"
               status="active"
               lastRun="15 min ago"
               description="Monitors financial health, detects cost overruns, and suggests margin optimizations."
               alerts={[
                  { type: 'critical', text: 'Event #1247 margin projected below 20%' },
                  { type: 'warning', text: 'Recurring venue cost spike in Lyon' }
               ]}
            />
            <AgentCard
               name="Logistics Agent"
               icon={Package}
               color="#4CAF50"
               status="active"
               lastRun="2 min ago"
               description="Automates vendor coordination, inventory tracking, and task timeline generation."
               alerts={[
                  { type: 'warning', text: 'Low stock: Pirate Theme Kit (Paris)' }
               ]}
            />
            <AgentCard
               name="Orchestrator"
               icon={Activity}
               color="#F44336"
               status="active"
               lastRun="Just now"
               description="Meta-level analysis of cross-functional conflicts and pre-event risk assessment."
               alerts={[
                  { type: 'critical', text: 'Conflict: Animator double-booked for Feb 15' }
               ]}
            />
         </div>

         {/* Detailed Analysis Section */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <GlassCard className="lg:col-span-2 p-6">
               <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-white">Recent Agent Activities</h3>
               <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                     <div key={i} className="flex gap-4 p-4 border border-gray-100 dark:border-gray-700 rounded-lg hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                        <div className="mt-1">
                           <div className="w-8 h-8 rounded-full bg-purple-100/50 dark:bg-purple-900/20 flex items-center justify-center text-[#7C4DFF] dark:text-violet-400">
                              <Bot size={18} />
                           </div>
                        </div>
                        <div className="flex-1">
                           <div className="flex justify-between">
                              <span className="font-semibold text-gray-800 dark:text-white">Optimization Recommendation</span>
                              <span className="text-xs text-gray-400 dark:text-gray-500">2h ago</span>
                           </div>
                           <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                              BudgetBot identified a potential saving of <span className="font-bold text-green-600 dark:text-green-400">€45</span> by bundling travel for Paris events on Feb 15.
                           </p>
                           <div className="mt-3 flex gap-2">
                              <Button size="sm" className="h-8 text-xs">Apply</Button>
                              <Button variant="secondary" size="sm" className="h-8 text-xs">Dismiss</Button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </GlassCard>

            <GlassCard className="bg-gray-900/80 dark:bg-gray-800/80 text-white border-none p-6">
               <h3 className="font-bold text-lg mb-4 text-purple-300">System Health</h3>
               <div className="space-y-6">
                  <div>
                     <div className="flex justify-between text-sm mb-1">
                        <span>API Usage</span>
                        <span className="text-green-400">Normal</span>
                     </div>
                     <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full w-[45%] bg-purple-500"></div>
                     </div>
                  </div>
                  <div>
                     <div className="flex justify-between text-sm mb-1">
                        <span>Database Load</span>
                        <span className="text-green-400">Low</span>
                     </div>
                     <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full w-[20%] bg-blue-500"></div>
                     </div>
                  </div>
                  <div>
                     <div className="flex justify-between text-sm mb-1">
                        <span>Agent Accuracy</span>
                        <span className="text-yellow-400">94%</span>
                     </div>
                     <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full w-[94%] bg-green-500"></div>
                     </div>
                  </div>
               </div>
               <div className="mt-8 pt-6 border-t border-gray-800">
                  <Button variant="secondary" className="w-full bg-transparent border-gray-600 text-gray-300 hover:text-white hover:border-white">
                     System Logs
                  </Button>
               </div>
            </GlassCard>
         </div>
      </div>
   );
};

export default AIAgents;
