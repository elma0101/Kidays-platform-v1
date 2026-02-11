import { Reservation, Animator, Alert } from './types';

export const BRAND = {
  primary: '#7C3AED', // Violet 600
  secondary: '#8B5CF6', // Violet 500
  accent: '#F59E0B', // Amber 500
  dark: '#111827', // Gray 900
  light: '#F9FAFB', // Gray 50
  success: '#10B981', // Emerald 500
  warning: '#F59E0B',
  danger: '#EF4444', // Red 500
};

export const MOCK_RESERVATIONS: Reservation[] = [
  {
    id: 'EVT-1247',
    clientName: 'Marie Dupont',
    clientEmail: 'marie.dupont@email.com',
    clientPhone: '+33 6 12 34 56 78',
    clientAddress: '45 Rue de la Paix, Paris',
    date: '2026-02-15',
    time: '14:00',
    duration: 3,
    theme: 'Harry Potter',
    themeIcon: '⚡',
    city: 'Paris',
    childrenCount: 15,
    ageRange: '7-12',
    status: 'confirmed',
    animatorId: 'ANI-001',
    price: 280,
    depositPaid: true,
    balanceDue: 140,
    materialsPacked: true,
    specialRequests: 'Gluten-free cake required'
  },
  {
    id: 'EVT-1248',
    clientName: 'Martin Lefebvre',
    clientEmail: 'm.lefebvre@email.com',
    clientPhone: '+33 6 98 76 54 32',
    clientAddress: '12 Avenue des Vosges, Lyon',
    date: '2026-02-16',
    time: '10:00',
    duration: 2,
    theme: 'Princesses',
    themeIcon: '👑',
    city: 'Lyon',
    childrenCount: 8,
    ageRange: '4-6',
    status: 'pending',
    price: 220,
    depositPaid: false,
    balanceDue: 220,
    materialsPacked: false,
  },
  {
    id: 'EVT-1249',
    clientName: 'Sophie Martin',
    clientEmail: 'sophie.m@email.com',
    clientPhone: '+33 6 11 22 33 44',
    clientAddress: '88 La Canebière, Marseille',
    date: '2026-02-15',
    time: '15:00',
    duration: 3,
    theme: 'Superheroes',
    themeIcon: '🦸',
    city: 'Marseille',
    childrenCount: 12,
    ageRange: '4-6',
    status: 'inprogress',
    animatorId: 'ANI-003',
    price: 300,
    depositPaid: true,
    balanceDue: 0,
    materialsPacked: true,
  },
  {
    id: 'EVT-1250',
    clientName: 'Lucas Dubois',
    clientEmail: 'lucas.d@email.com',
    clientPhone: '+33 6 55 44 33 22',
    clientAddress: '5 Place de la Bourse, Bordeaux',
    date: '2026-02-17',
    time: '14:00',
    duration: 3,
    theme: 'Pokémon',
    themeIcon: '🦁',
    city: 'Bordeaux',
    childrenCount: 10,
    ageRange: '7-12',
    status: 'cancelled',
    price: 250,
    depositPaid: false,
    balanceDue: 0,
    materialsPacked: false,
  },
  {
    id: 'EVT-1251',
    clientName: 'Emma Bernard',
    clientEmail: 'emma.b@email.com',
    clientPhone: '+33 6 77 88 99 00',
    clientAddress: '22 Rue Victor Hugo, Nice',
    date: '2026-02-14',
    time: '11:00',
    duration: 2,
    theme: 'Pirates',
    themeIcon: '🏴‍☠️',
    city: 'Nice',
    childrenCount: 14,
    ageRange: '4-6',
    status: 'completed',
    animatorId: 'ANI-002',
    price: 260,
    depositPaid: true,
    balanceDue: 0,
    materialsPacked: true,
  }
];

export const MOCK_ANIMATORS: Animator[] = [
  {
    id: 'ANI-001',
    name: 'Sophie Martin',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 4.9,
    cities: ['Paris', 'Versailles'],
    themes: ['Princesses', 'Face Paint'],
    availability: 'available',
    eventsCompleted: 120
  },
  {
    id: 'ANI-002',
    name: 'Lucas Dubois',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200',
    rating: 4.7,
    cities: ['Lyon'],
    themes: ['Harry Potter', 'Magic'],
    availability: 'partial',
    eventsCompleted: 85
  },
  {
    id: 'ANI-003',
    name: 'Emma Petit',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    rating: 4.9,
    cities: ['Bordeaux'],
    themes: ['Balloon Art', 'Singing'],
    availability: 'booked',
    eventsCompleted: 203
  },
  {
    id: 'ANI-004',
    name: 'Thomas Leroy',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 4.8,
    cities: ['Paris'],
    themes: ['Superheroes', 'Sports'],
    availability: 'available',
    eventsCompleted: 42
  },
  {
    id: 'ANI-005',
    name: 'Sarah Connor',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    rating: 4.8,
    cities: ['Nice'],
    themes: ['Clown', 'Puppets'],
    availability: 'available',
    eventsCompleted: 156
  },
  {
    id: 'ANI-006',
    name: 'Marc Dupont',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 5.0,
    cities: ['Lyon'],
    themes: ['Santa Claus', 'Storytelling'],
    availability: 'partial',
    eventsCompleted: 340
  }
];

export const MOCK_ALERTS: Alert[] = [
  {
    id: 'ALT-1',
    severity: 'critical',
    message: 'Animator Shortage in Marseille',
    action: 'Find Staff',
    timestamp: '10 min ago'
  },
  {
    id: 'ALT-2',
    severity: 'warning',
    message: 'Booking #4092 (Nice) deposit pending',
    action: 'Send Reminder',
    timestamp: '2 hours ago'
  },
  {
    id: 'ALT-3',
    severity: 'info',
    message: 'New Venue Partnership Signed',
    action: 'View Details',
    timestamp: '4 hours ago'
  }
];