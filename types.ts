import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}