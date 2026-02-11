import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { DollarSign, CreditCard, TrendingUp, TrendingDown, Download, FileText, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Button, Badge } from '../components/UI';
import { GlassCard } from '../components/ui/glass-card';

const REVENUE_DATA = [
   { month: 'Jan', revenue: 12500, expenses: 8400 },
   { month: 'Feb', revenue: 15200, expenses: 9100 },
   { month: 'Mar', revenue: 18400, expenses: 10500 },
   { month: 'Apr', revenue: 16800, expenses: 9800 },
   { month: 'May', revenue: 21500, expenses: 12200 },
   { month: 'Jun', revenue: 24000, expenses: 14500 },
];

const TRANSACTIONS = [
   { id: 'INV-2024-001', client: 'Marie Dupont', date: '2026-02-14', amount: 280, status: 'paid', type: 'Income' },
   { id: 'EXP-2024-042', client: 'Party Supplies Co.', date: '2026-02-13', amount: 150, status: 'paid', type: 'Expense' },
   { id: 'INV-2024-002', client: 'Martin Lefebvre', date: '2026-02-13', amount: 220, status: 'pending', type: 'Income' },
   { id: 'EXP-2024-043', client: 'Transport Logistics', date: '2026-02-12', amount: 45, status: 'pending', type: 'Expense' },
   { id: 'INV-2024-003', client: 'Sophie Martin', date: '2026-02-10', amount: 300, status: 'overdue', type: 'Income' },
];

const KPICard = ({ title, amount, trend, trendUp, icon: Icon, color }: any) => (
   <GlassCard className="flex items-center justify-between p-6">
      <div>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{title}</p>
         <h3 className="text-2xl font-bold font-mono text-gray-800 dark:text-white">{amount}</h3>
         <div className={`flex items-center gap-1 text-xs mt-1 ${trendUp ? 'text-green-500' : 'text-red-500'}`}>
            {trendUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            <span className="font-medium">{trend}</span>
            <span className="text-gray-400 dark:text-gray-500 ml-1">vs last month</span>
         </div>
      </div>
      <div className={`p-3 rounded-full ${color} bg-opacity-10 dark:bg-opacity-20 text-opacity-100 dark:text-opacity-90`}>
         <Icon size={24} className={color.replace('bg-', 'text-')} />
      </div>
   </GlassCard>
);

const Finance = () => {
   return (
      <div className="space-y-6">
         <div className="flex justify-between items-center">
            <div>
               <h1 className="text-2xl font-bold text-gray-800 dark:text-white font-poppins">Finance Hub</h1>
               <p className="text-gray-500 dark:text-gray-400">Track revenue, expenses, and invoices.</p>
            </div>
            <div className="flex gap-2">
               <Button variant="secondary"><Download size={18} /> Export Report</Button>
               <Button variant="primary"><Plus size={18} /> Create Invoice</Button>
            </div>
         </div>

         {/* KPI Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <KPICard title="Total Revenue" amount="€108,400" trend="+12.5%" trendUp={true} icon={DollarSign} color="bg-green-500" />
            <KPICard title="Total Expenses" amount="€64,500" trend="+8.2%" trendUp={false} icon={CreditCard} color="bg-red-500" />
            <KPICard title="Net Profit" amount="€43,900" trend="+18.4%" trendUp={true} icon={TrendingUp} color="bg-purple-500" />
            <KPICard title="Pending Invoices" amount="€2,450" trend="-5%" trendUp={true} icon={Clock} color="bg-orange-500" />
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Chart */}
            <GlassCard className="lg:col-span-2 h-full p-6">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-800 dark:text-white text-lg">Revenue vs Expenses</h3>
                  <select className="bg-gray-50/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded text-sm px-2 py-1 outline-none text-gray-700 dark:text-gray-200">
                     <option>Last 6 Months</option>
                     <option>This Year</option>
                  </select>
               </div>
               <div className="h-[320px]">
                  <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={REVENUE_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                        <Tooltip
                           contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', backgroundColor: '#1F2937', color: '#F9FAFB' }}
                           itemStyle={{ color: '#F9FAFB' }}
                           cursor={{ fill: '#F3F4F6', opacity: 0.1 }}
                        />
                        <Bar dataKey="revenue" name="Revenue" fill="#7C4DFF" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="expenses" name="Expenses" fill="#FF4081" radius={[4, 4, 0, 0]} />
                     </BarChart>
                  </ResponsiveContainer>
               </div>
            </GlassCard>

            {/* Invoices Status */}
            <div className="space-y-6">
               <GlassCard className="p-6">
                  <h3 className="font-bold text-gray-800 dark:text-white text-lg mb-4">Invoice Status</h3>
                  <div className="space-y-4">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"><CheckCircle size={20} /></div>
                           <div>
                              <div className="font-medium text-gray-800 dark:text-white">Paid</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">45 invoices</div>
                           </div>
                        </div>
                        <span className="font-mono font-bold text-gray-800 dark:text-white">€12,500</span>
                     </div>
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"><Clock size={20} /></div>
                           <div>
                              <div className="font-medium text-gray-800 dark:text-white">Pending</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">12 invoices</div>
                           </div>
                        </div>
                        <span className="font-mono font-bold text-gray-800 dark:text-white">€3,200</span>
                     </div>
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"><AlertCircle size={20} /></div>
                           <div>
                              <div className="font-medium text-gray-800 dark:text-white">Overdue</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">3 invoices</div>
                           </div>
                        </div>
                        <span className="font-mono font-bold text-gray-800 dark:text-white">€850</span>
                     </div>
                  </div>
                  <Button variant="secondary" className="w-full mt-6">View All Invoices</Button>
               </GlassCard>

               <GlassCard className="bg-[#7C4DFF] text-white p-6">
                  <h3 className="font-bold text-lg mb-2">Pro Tip 💡</h3>
                  <p className="text-purple-100 text-sm mb-4">
                     Automate your follow-up emails for overdue invoices to recover payments 30% faster.
                  </p>
                  <Button size="sm" className="bg-white text-[#7C4DFF] hover:bg-gray-100 w-full border-none">Enable Automation</Button>
               </GlassCard>
            </div>
         </div>

         {/* Transactions Table */}
         <GlassCard className="p-6">
            <div className="flex justify-between items-center mb-4">
               <h3 className="font-bold text-gray-800 dark:text-white text-lg">Recent Transactions</h3>
               <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="overflow-x-auto">
               <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50/50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400">
                     <tr>
                        <th className="p-3 rounded-l-lg">Transaction ID</th>
                        <th className="p-3">Entity</th>
                        <th className="p-3">Date</th>
                        <th className="p-3">Type</th>
                        <th className="p-3">Status</th>
                        <th className="p-3 text-right rounded-r-lg">Amount</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                     {TRANSACTIONS.map((tx) => (
                        <tr key={tx.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/50">
                           <td className="p-3 font-mono text-gray-600 dark:text-gray-400">{tx.id}</td>
                           <td className="p-3 font-medium text-gray-900 dark:text-white">{tx.client}</td>
                           <td className="p-3 text-gray-500 dark:text-gray-400">{tx.date}</td>
                           <td className="p-3">
                              <span className={`px-2 py-1 rounded text-xs ${tx.type === 'Income' ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'}`}>
                                 {tx.type}
                              </span>
                           </td>
                           <td className="p-3">
                              <Badge status={tx.status === 'paid' ? 'completed' : tx.status === 'pending' ? 'pending' : 'cancelled'} />
                           </td>
                           <td className={`p-3 text-right font-mono font-bold ${tx.type === 'Income' ? 'text-green-600 dark:text-green-400' : 'text-gray-800 dark:text-gray-300'}`}>
                              {tx.type === 'Income' ? '+' : '-'}€{tx.amount}
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </GlassCard>
      </div>
   );
};

export default Finance;

function Plus({ size }: { size: number }) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width={size}
         height={size}
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         <path d="M5 12h14" />
         <path d="M12 5v14" />
      </svg>
   )
}