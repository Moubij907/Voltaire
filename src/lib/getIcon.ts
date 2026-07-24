import type { IconName } from '@/config/types';
import {
  Zap, Lightbulb, Car, Home, Shield, Plug, Wrench, Cpu, Battery, Gauge,
  Sun, Sparkles, Phone, Mail, MapPin, Clock, Check, ArrowRight, ArrowUpRight,
  Star, Award, BadgeCheck, Leaf, Snowflake, Flame, Droplets, Wind, Hammer,
  KeyRound, PaintRoller, Bug, Truck, Building, Ruler, Users, Quote,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const map: Record<IconName, LucideIcon> = {
  zap: Zap, lightbulb: Lightbulb, car: Car, home: Home, shield: Shield,
  plug: Plug, wrench: Wrench, cpu: Cpu, battery: Battery, gauge: Gauge,
  sun: Sun, sparkles: Sparkles, phone: Phone, mail: Mail, mapPin: MapPin,
  clock: Clock, check: Check, arrowRight: ArrowRight, arrowUpRight: ArrowUpRight,
  star: Star, award: Award, badgeCheck: BadgeCheck, leaf: Leaf,
  snowflake: Snowflake, flame: Flame, droplets: Droplets, wind: Wind,
  hammer: Hammer, keyRound: KeyRound, paintRoller: PaintRoller, bug: Bug,
  truck: Truck, building: Building, ruler: Ruler, users: Users, quote: Quote,
};

export function getIcon(name: IconName): LucideIcon {
  return map[name];
}
