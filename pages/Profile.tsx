import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Camera, Bell, Shield, Key, LogOut, Save, CheckCircle } from 'lucide-react';
import { Button, Badge } from '../components/UI';
import { GlassCard } from '../components/ui/glass-card';

const PROFILE_DATA = {
   name: 'Marie Dupont',
   role: 'Senior Event Coordinator',
   email: 'marie.dupont@kidays.com',
   phone: '+33 6 12 34 56 78',
   location: 'Paris, France',
   avatar: 'https://picsum.photos/100/100?random=99',
   bio: 'Passionate about creating magical moments for children. Specializing in large-scale corporate kids events and themed birthday parties.',
   stats: {
      eventsManaged: 142,
      rating: 4.9,
      yearsActive: 3
   }
};

const Profile = () => {
   const [activeTab, setActiveTab] = useState<'general' | 'notifications' | 'security'>('general');
   const [isEditing, setIsEditing] = useState(false);

   return (
      <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
         <div className="flex justify-between items-center">
            <div>
               <h1 className="text-2xl font-bold text-gray-800 dark:text-white font-poppins">My Profile</h1>
               <p className="text-gray-500 dark:text-gray-400">Manage your account settings and preferences.</p>
            </div>
            <Button variant="danger" className="bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 border-none shadow-none">
               <LogOut size={18} /> Sign Out
            </Button>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Left Column: Profile Card */}
            <div className="space-y-6">
               <GlassCard className="flex flex-col items-center text-center relative overflow-hidden pb-6">
                  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]"></div>

                  <div className="relative mt-8 mb-4">
                     <img
                        src={PROFILE_DATA.avatar}
                        alt="Profile"
                        className="w-28 h-28 rounded-full border-4 border-white/50 shadow-lg object-cover"
                     />
                     <button className="absolute bottom-1 right-1 p-2 bg-white/80 dark:bg-gray-800 rounded-full shadow-md text-gray-500 dark:text-gray-400 hover:text-[#4ECDC4] transition-colors">
                        <Camera size={16} />
                     </button>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 dark:text-white font-poppins">{PROFILE_DATA.name}</h2>
                  <p className="text-[#4ECDC4] font-medium text-sm mb-4">{PROFILE_DATA.role}</p>

                  <div className="flex gap-2 mb-6">
                     <Badge status="active">Online</Badge>
                     <span className="px-3 py-1 bg-purple-50/50 dark:bg-purple-900/20 text-[#7C4DFF] dark:text-violet-400 rounded-full text-xs font-bold border border-purple-100 dark:border-purple-900/30">
                        Paris HQ
                     </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 w-full border-t border-gray-100 dark:border-gray-700 pt-6">
                     <div className="text-center">
                        <div className="font-bold text-gray-800 dark:text-white text-lg">{PROFILE_DATA.stats.eventsManaged}</div>
                        <div className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wide">Events</div>
                     </div>
                     <div className="text-center border-l border-r border-gray-100 dark:border-gray-700">
                        <div className="font-bold text-gray-800 dark:text-white text-lg">{PROFILE_DATA.stats.rating}</div>
                        <div className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wide">Rating</div>
                     </div>
                     <div className="text-center">
                        <div className="font-bold text-gray-800 dark:text-white text-lg">{PROFILE_DATA.stats.yearsActive}y</div>
                        <div className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wide">Exp</div>
                     </div>
                  </div>
               </GlassCard>

               <GlassCard className="p-6">
                  <h3 className="font-bold text-gray-800 dark:text-white mb-4 text-sm uppercase tracking-wider">Contact Info</h3>
                  <div className="space-y-4">
                     <div className="flex items-center gap-3 text-sm">
                        <div className="p-2 bg-blue-50/50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400 rounded-lg"><Mail size={16} /></div>
                        <div className="flex-1 overflow-hidden text-ellipsis">
                           <div className="text-gray-400 dark:text-gray-500 text-xs">Email</div>
                           <div className="font-medium text-gray-700 dark:text-gray-200">{PROFILE_DATA.email}</div>
                        </div>
                     </div>
                     <div className="flex items-center gap-3 text-sm">
                        <div className="p-2 bg-green-50/50 dark:bg-green-900/20 text-green-500 dark:text-green-400 rounded-lg"><Phone size={16} /></div>
                        <div>
                           <div className="text-gray-400 dark:text-gray-500 text-xs">Phone</div>
                           <div className="font-medium text-gray-700 dark:text-gray-200">{PROFILE_DATA.phone}</div>
                        </div>
                     </div>
                     <div className="flex items-center gap-3 text-sm">
                        <div className="p-2 bg-orange-50/50 dark:bg-orange-900/20 text-orange-500 dark:text-orange-400 rounded-lg"><MapPin size={16} /></div>
                        <div>
                           <div className="text-gray-400 dark:text-gray-500 text-xs">Location</div>
                           <div className="font-medium text-gray-700 dark:text-gray-200">{PROFILE_DATA.location}</div>
                        </div>
                     </div>
                  </div>
               </GlassCard>
            </div>

            {/* Right Column: Details & Settings */}
            <div className="lg:col-span-2 space-y-6">
               <GlassCard className="min-h-[600px] flex flex-col p-8">
                  {/* Tabs */}
                  <div className="flex gap-1 p-1 bg-gray-50/50 dark:bg-gray-700/50 rounded-xl mb-8 w-fit">
                     <button
                        onClick={() => setActiveTab('general')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'general' ? 'bg-white/80 dark:bg-gray-600 shadow-sm text-gray-800 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}
                     >
                        General
                     </button>
                     <button
                        onClick={() => setActiveTab('notifications')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'notifications' ? 'bg-white/80 dark:bg-gray-600 shadow-sm text-gray-800 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}
                     >
                        Notifications
                     </button>
                     <button
                        onClick={() => setActiveTab('security')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'security' ? 'bg-white/80 dark:bg-gray-600 shadow-sm text-gray-800 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}
                     >
                        Security
                     </button>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1">
                     {activeTab === 'general' && (
                        <div className="space-y-6 animate-fade-in">
                           <div className="flex justify-between items-center mb-4">
                              <h3 className="text-lg font-bold text-gray-800 dark:text-white">Personal Information</h3>
                              {!isEditing ? (
                                 <Button variant="secondary" size="sm" onClick={() => setIsEditing(true)}>Edit Details</Button>
                              ) : (
                                 <div className="flex gap-2">
                                    <Button variant="ghost" size="sm" onClick={() => setIsEditing(false)}>Cancel</Button>
                                    <Button variant="primary" size="sm" onClick={() => setIsEditing(false)}><Save size={14} /> Save</Button>
                                 </div>
                              )}
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                 <label className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                                 <input
                                    type="text"
                                    defaultValue="Marie"
                                    disabled={!isEditing}
                                    className="w-full px-4 py-2 rounded-xl bg-gray-50/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-[#4ECDC4] focus:bg-white dark:focus:bg-gray-700 text-gray-900 dark:text-white outline-none disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                                 />
                              </div>
                              <div className="space-y-2">
                                 <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                                 <input
                                    type="text"
                                    defaultValue="Dupont"
                                    disabled={!isEditing}
                                    className="w-full px-4 py-2 rounded-xl bg-gray-50/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-[#4ECDC4] focus:bg-white dark:focus:bg-gray-700 text-gray-900 dark:text-white outline-none disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                                 />
                              </div>
                              <div className="space-y-2 md:col-span-2">
                                 <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Bio</label>
                                 <textarea
                                    defaultValue={PROFILE_DATA.bio}
                                    disabled={!isEditing}
                                    rows={3}
                                    className="w-full px-4 py-2 rounded-xl bg-gray-50/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-[#4ECDC4] focus:bg-white dark:focus:bg-gray-700 text-gray-900 dark:text-white outline-none disabled:opacity-60 disabled:cursor-not-allowed transition-all resize-none"
                                 />
                              </div>
                              <div className="space-y-2">
                                 <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Department</label>
                                 <select
                                    disabled={!isEditing}
                                    className="w-full px-4 py-2 rounded-xl bg-gray-50/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-[#4ECDC4] focus:bg-white dark:focus:bg-gray-700 text-gray-900 dark:text-white outline-none disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                                 >
                                    <option>Operations</option>
                                    <option>Sales</option>
                                    <option>Management</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                     )}

                     {activeTab === 'notifications' && (
                        <div className="space-y-6 animate-fade-in">
                           <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Notification Preferences</h3>

                           <div className="space-y-4">
                              {[
                                 { title: 'New Booking Alerts', desc: 'Get notified when a new reservation is created.' },
                                 { title: 'Payment Reminders', desc: 'Receive alerts for overdue invoices.' },
                                 { title: 'Team Messages', desc: 'Notifications for direct messages and mentions.' },
                                 { title: 'Marketing Emails', desc: 'Receive newsletters and feature updates.' }
                              ].map((item, i) => (
                                 <div key={i} className="flex items-center justify-between p-4 border border-gray-100 dark:border-gray-700 rounded-xl hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                    <div>
                                       <div className="font-bold text-gray-800 dark:text-white text-sm">{item.title}</div>
                                       <div className="text-gray-500 dark:text-gray-400 text-xs">{item.desc}</div>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                       <input type="checkbox" className="sr-only peer" defaultChecked={i < 3} />
                                       <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 dark:after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4ECDC4]"></div>
                                    </label>
                                 </div>
                              ))}
                           </div>
                        </div>
                     )}

                     {activeTab === 'security' && (
                        <div className="space-y-6 animate-fade-in">
                           <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Security Settings</h3>

                           <div className="p-4 bg-yellow-50/50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/30 rounded-xl flex gap-3 mb-6">
                              <Shield className="text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                              <div>
                                 <h4 className="font-bold text-yellow-800 dark:text-yellow-300 text-sm">Two-Factor Authentication (2FA)</h4>
                                 <p className="text-yellow-700 dark:text-yellow-400 text-xs mt-1">Your account is currently protected with 2FA enabled.</p>
                              </div>
                           </div>

                           <div className="space-y-4">
                              <div className="flex items-center justify-between p-4 border border-gray-100 dark:border-gray-700 rounded-xl">
                                 <div className="flex items-center gap-3">
                                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"><Key size={20} className="text-gray-600 dark:text-gray-300" /></div>
                                    <div>
                                       <div className="font-bold text-gray-800 dark:text-white text-sm">Change Password</div>
                                       <div className="text-gray-500 dark:text-gray-400 text-xs">Last changed 3 months ago</div>
                                    </div>
                                 </div>
                                 <Button variant="secondary" size="sm">Update</Button>
                              </div>

                              <div className="flex items-center justify-between p-4 border border-gray-100 dark:border-gray-700 rounded-xl">
                                 <div className="flex items-center gap-3">
                                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"><LogOut size={20} className="text-gray-600 dark:text-gray-300" /></div>
                                    <div>
                                       <div className="font-bold text-gray-800 dark:text-white text-sm">Active Sessions</div>
                                       <div className="text-gray-500 dark:text-gray-400 text-xs">2 active devices detected</div>
                                    </div>
                                 </div>
                                 <Button variant="secondary" size="sm">Manage</Button>
                              </div>
                           </div>
                        </div>
                     )}
                  </div>
               </GlassCard>
            </div>
         </div>
      </div>
   );
};

export default Profile;