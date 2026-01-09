
export interface RTOService {
  id: string;
  title: string;
  description: string;
  category: 'License' | 'Vehicle' | 'Permit' | 'Other';
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}
