import React from 'react';
import { X, Calendar, User, Star, MessageSquare, DollarSign, Package, CheckCircle, AlertTriangle } from 'lucide-react';
import { Reservation } from '../types';
import { Badge, Button } from './UI';

interface EventDetailPanelProps {
  reservation: Reservation | null;
  onClose: () => void;
}

const EventDetailPanel: React.FC<EventDetailPanelProps> = ({ reservation, onClose }) => {
  if (!reservation) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] transition-opacity"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white dark:bg-gray-800 z-[70] shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto border-l border-gray-200 dark:border-gray-700">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <button onClick={onClose} className="text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 mb-2 flex items-center">
                ← Back to List
              </button>
              <h2 className="text-xl font-bold font-poppins text-gray-800 dark:text-white">{reservation.theme} Party</h2>
              <div className="mt-2">
                <Badge status={reservation.status} />
              </div>
            </div>
            <Button variant="secondary" size="sm" className="!px-3">Edit</Button>
          </div>

          <div className="space-y-8">
            {/* Event Details Section */}
            <section>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Calendar size={14} /> Event Details
              </h3>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Date:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{new Date(reservation.date).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Time:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{reservation.time} ({reservation.duration} hours)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Theme:</span>
                  <span className="font-medium flex items-center gap-1 text-gray-900 dark:text-white">{reservation.themeIcon} {reservation.theme} ({reservation.ageRange})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Children:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{reservation.childrenCount} kids</span>
                </div>
              </div>
            </section>

            {/* Client Info Section */}
            <section>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <User size={14} /> Client Information
              </h3>
              <div className="text-sm space-y-2">
                <div className="font-medium text-base text-gray-800 dark:text-white">{reservation.clientName}</div>
                <div className="text-gray-600 dark:text-gray-300 flex items-center gap-2">📞 {reservation.clientPhone}</div>
                <div className="text-gray-600 dark:text-gray-300 flex items-center gap-2">✉️ {reservation.clientEmail}</div>
                <div className="text-gray-600 dark:text-gray-300 flex items-center gap-2">📍 {reservation.clientAddress}, {reservation.city}</div>
              </div>
            </section>

            {/* Animator Section */}
            <section className="border-t border-gray-100 dark:border-gray-700 pt-6">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Star size={14} /> Animator
              </h3>
              {reservation.animatorId ? (
                <div className="flex items-center justify-between bg-white dark:bg-gray-700/30 border border-gray-200 dark:border-gray-600 p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img src={`https://picsum.photos/40/40?random=${reservation.animatorId}`} alt="Animator" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <div className="font-medium text-sm text-gray-900 dark:text-white">Thomas Lefebvre</div>
                      <div className="flex items-center text-xs text-yellow-500">
                        <Star size={10} fill="currentColor" /> <span className="ml-1 text-gray-500">4.9</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm" className="!p-2"><User size={14} /></Button>
                    <Button variant="secondary" size="sm" className="!p-2"><MessageSquare size={14} /></Button>
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/50 rounded-lg text-yellow-700 dark:text-yellow-500 text-sm flex items-center gap-2">
                  <AlertTriangle size={16} /> No animator assigned yet.
                  <button className="underline font-medium ml-auto">Assign</button>
                </div>
              )}
            </section>

            {/* Financial Section */}
            <section className="border-t border-gray-100 dark:border-gray-700 pt-6">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <DollarSign size={14} /> Financial
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                  <div className="text-xs text-gray-500 dark:text-gray-400">Total</div>
                  <div className="font-mono font-medium text-gray-900 dark:text-white">€{reservation.price}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                  <div className="text-xs text-gray-500">Balance</div>
                  <div className={`font-mono font-medium ${reservation.balanceDue > 0 ? 'text-red-500' : 'text-green-500'}`}>
                    €{reservation.balanceDue}
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <div className={`w-4 h-4 rounded border flex items-center justify-center ${reservation.depositPaid ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 dark:border-gray-600'}`}>
                  {reservation.depositPaid && <CheckCircle size={12} />}
                </div>
                Deposit Paid
              </div>
            </section>

            {/* Logistics Section */}
            <section className="border-t border-gray-100 dark:border-gray-700 pt-6">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Package size={14} /> Logistics Status
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className={`w-4 h-4 rounded border flex items-center justify-center ${reservation.materialsPacked ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 dark:border-gray-600'}`}>
                    {reservation.materialsPacked && <CheckCircle size={12} />}
                  </div>
                  <span className={reservation.materialsPacked ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400'}>Materials Packed</span>
                </div>
                {reservation.specialRequests && (
                  <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg border border-red-100 dark:border-red-900/50">
                    <span className="font-bold">Note:</span> {reservation.specialRequests}
                  </div>
                )}
              </div>
            </section>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 flex flex-col gap-3">
          <Button className="w-full">Send Confirmation Email</Button>
          <div className="flex gap-3">
            <Button variant="secondary" className="flex-1">Invoice</Button>
            <Button variant="danger" className="flex-1">Cancel</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetailPanel;
