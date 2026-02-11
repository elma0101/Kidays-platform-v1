import React from 'react';

export type EventStatus = 'confirmed' | 'pending' | 'inprogress' | 'completed' | 'cancelled';
export type EventType = 'birthday-4-6' | 'birthday-7-12' | 'corporate' | 'wedding';

export interface Reservation {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientAddress: string;
  date: string; // ISO string
  time: string;
  duration: number; // in hours
  theme: string;
  themeIcon: string;
  city: string;
  childrenCount: number;
  ageRange: string;
  status: EventStatus;
  animatorId?: string;
  price: number;
  depositPaid: boolean;
  balanceDue: number;
  materialsPacked: boolean;
  specialRequests?: string;
}

export interface Animator {
  id: string;
  name: string;
  avatar: string; // URL
  rating: number;
  cities: string[];
  themes: string[];
  availability: 'available' | 'partial' | 'booked';
  eventsCompleted: number;
}

export interface Venue {
  id: number | string;
  name: string;
  location: string;
  capacity: string;
  price: number;
  rating: number;
  image: string;
  amenities: string[];
  status: string;
  description?: string;
  images?: string[];
}

export interface Metric {
  label: string;
  value: string | number;
  trend?: string; // e.g., "+15%"
  trendDirection?: 'up' | 'down';
  icon?: React.ReactNode;
}

export interface Alert {
  id: string;
  severity: 'critical' | 'warning' | 'info';
  message: string;
  action: string;
  timestamp: string;
}

// Navigation Types
export type NavItem = 'dashboard' | 'reservations' | 'animators' | 'calendar' | 'finance' | 'logistics' | 'reports' | 'ai-agents';