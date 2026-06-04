/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Program, Coach, Testimonial, GalleryItem, StatItem } from './types';

export const statsData: StatItem[] = [
  {
    id: 'stat-1',
    value: '12+',
    numericTarget: 12,
    suffix: '+',
    label: 'Years of Dominance'
  },
  {
    id: 'stat-2',
    value: '3,400+',
    numericTarget: 3400,
    suffix: '+',
    label: 'Active Members'
  },
  {
    id: 'stat-3',
    value: '48',
    numericTarget: 48,
    suffix: '',
    label: 'Weekly High-Octane Classes'
  },
  {
    id: 'stat-4',
    value: '6',
    numericTarget: 6,
    suffix: '',
    label: 'Elite Champions-Level Coaches'
  }
];

export const programsData: Program[] = [
  {
    id: 'powerlifting',
    title: 'STRENGTH / POWERLIFTING',
    description: 'Forge unbreakable raw skeletal power. Build absolute strength on the platform through heavy compound mechanics, elite technique, and scientific periodization under iron loads.',
    detailedBenefits: [
      'Master the Squat, Bench, and Deadlift',
      'Individualized RPE-based training structures',
      'Neurological adaptations to mega-loads',
      'Exclusive competition-grade bars & plates'
    ],
    scheduleFreq: 'Mon, Wed, Fri (Duration: 90 mins)',
    intensity: 'ELITE',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hiit',
    title: 'METABOLIC / HIIT',
    description: 'Explode fat reserves, scale your engine, and test athletic threshold. High-intensity multi-planar drills engineered to break mental barriers and elevate VO2 max to absolute peak performance.',
    detailedBenefits: [
      'Sled pushes, rogue Echo bike intervals, and ballistics',
      'Targeted EPOC cardiorespiratory burner',
      'Lactate threshold threshold conditioning',
      'Real-time automated heart-rate tracking'
    ],
    scheduleFreq: 'Tue, Thu, Sat (Duration: 45 mins)',
    intensity: 'HIGH',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'combat',
    title: 'COMBAT ATHLETICS',
    description: 'Train with the intensity of championship fighters. Heavy-bag drills, reaction tactical padwork, and high-performance core endurance designed to forge high-speed coordination, power delivery, and lethal agility.',
    detailedBenefits: [
      'Authentic combat mechanics & stance works',
      'Rotational power generation drills',
      'Reflex, perception and defensive response flows',
      'Conditioning designed for extreme ring endurance'
    ],
    scheduleFreq: 'Mon, Tue, Thu (Duration: 75 mins)',
    intensity: 'HIGH',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'recovery',
    title: 'ELITE MOBILITY & RECOVERY',
    description: 'Ensure continuous physical growth. Reset neuromuscular tension, restore full ranges of motion, and optimize biological recovery using deep myofascial tools, cold system routines, and postural stabilization.',
    detailedBenefits: [
      'PNF stretching & dynamic kinetic release',
      'Decompression and joint space therapy',
      'Trigger point decompression protocol',
      'Post-workout cold plunge breathing guidelines'
    ],
    scheduleFreq: 'Wed, Fri, Sun (Duration: 50 mins)',
    intensity: 'MEDIUM',
    image: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&w=800&q=80'
  }
];

export const coachesData: Coach[] = [
  {
    id: 'marcus-steel',
    name: 'Marcus Steel',
    role: 'Head Powerlifting & Bio-mechanics',
    bio: 'Former IPF championship medalist with 15+ years coaching record. Specializes in advanced heavy compound mechanics, CNS management, and breaking platform plateaus.',
    credentials: ['BS Kinesiology', 'IPF Coach certified', 'USAPL Advanced Referee'],
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80',
    signatureSpecialty: 'Neuromuscular Platform Deadlifts'
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Director of Conditioning & HIIT',
    bio: 'Ex-Olympic track athlete with a passion for unlocking absolute cardiorespiratory capacity. Known for intense, high-energy sessions that leave excuses at the door.',
    credentials: ['CSCS *D', 'MS Exercise Science', 'Olympic Athletics Coach Level II'],
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&q=80',
    signatureSpecialty: 'Lactate Buffer Conditioning'
  },
  {
    id: 'jaxson-reed',
    name: 'Jaxson "The Anvil" Reed',
    role: 'Tactical Striking & Combat Conditioning',
    bio: 'Retired cruiserweight fighter with 18 professional bouts. Teaches striking dynamics, footwork mechanics, and raw anaerobic conditioning under stress.',
    credentials: ['WBA Pro Licensed Coach', 'IKF Kickboxing Coach', 'Tactical Fitness Specialist'],
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80',
    signatureSpecialty: 'High-Velocity Strike Rotations'
  },
  {
    id: 'chloe-stone',
    name: 'Chloe Stone',
    role: 'Head of Neuromuscular Restoration',
    bio: 'Fascinated by fascial science and neurological regeneration. Helps power athletes and fighters restore proper joint mechanics, range of motion, and tissue health.',
    credentials: ['Certified Functional Range Conditioning (FRC)', 'Yoga Alliance RYT-500', 'LMT'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
    signatureSpecialty: 'Kinetic Chain Spatial Decompression'
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Barbell Platform 01',
    tag: 'IRON',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-2',
    title: 'Conditioning Rig',
    tag: 'SYSTEM',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-3',
    title: 'Heavy Sled Pulls',
    tag: 'METCON',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-4',
    title: 'Chalk & Friction',
    tag: 'WILL',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-5',
    title: 'Olympic Plates Barbell',
    tag: 'LOAD',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-6',
    title: 'High Focus Rope Core',
    tag: 'STRESS',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Forge is not a country club; there are no pampering towels here. It's a sanctuary of raw results. In eighteen months, I increased my squat by 140 pounds and reclaimed an athletic physique I thought was long gone.",
    author: "Dominic Thorne",
    achievement: "Squat +140lbs, Elite Member",
    duration: "Training: 1.5 Years",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 'test-2',
    quote: "The tactical stripping and combat conditioning at FORGE redefined what I believed was possible. Coach Jaxson expects martial standards and Marcus keeps your recovery bulletproof. Absolutely top-tier.",
    author: "Victoria Vance",
    achievement: "Amateur Light-Welterweight",
    duration: "Training: 3 Years",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 'test-3',
    quote: "I drive 45 minutes each way just to lift at FORGE. The chalk, the heavy chains, the elite platforms, and the infectious energy of like-minded members who lift with ultimate purpose. If you want results, train here.",
    author: "Zackary Stone",
    achievement: "Powerlifter 82.5kg Class",
    duration: "Training: 2 Years",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80"
  }
];
