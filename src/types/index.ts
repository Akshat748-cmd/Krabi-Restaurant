export interface MenuItem {
  id: string;
  name: string;
  thaiName?: string;
  hindiName?: string;
  description: string;
  category: 'curries' | 'tandoor' | 'appetizers' | 'biryani' | 'drinks' | 'desserts' | 'breads';
  price: string;
  isVegetarian: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
  image: string;
  allergens?: string[];
}

export interface DrinkItem {
  id: string;
  name: string;
  thaiName?: string;
  description: string;
  category: 'lassi' | 'tea-coffee' | 'refreshers' | 'fresh-juices';
  price: string;
  image: string;
  isPopular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  subname: string;
  description: string;
  image: string;
  href: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  quote: string;
  source: 'Google' | 'TripAdvisor';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'interior' | 'dishes' | 'atmosphere' | 'drinks';
  image: string;
  aspect?: 'square' | 'portrait' | 'landscape';
}
