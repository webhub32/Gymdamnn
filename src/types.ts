/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Program {
  id: string;
  title: string;
  description: string;
  detailedBenefits: string[];
  scheduleFreq: string;
  intensity: 'MEDIUM' | 'HIGH' | 'ELITE';
  image: string;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  image: string;
  signatureSpecialty: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  achievement: string;
  duration: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  image: string;
}

export interface StatItem {
  id: string;
  value: string;
  numericTarget: number;
  suffix: string;
  label: string;
}
