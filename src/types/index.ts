export interface Company {
  id: string;
  name: string;
  sector: string;
  wilaya: string;
  size: 'TPE' | 'PME' | 'GE';
  logo?: string;
  description?: string;
  website?: string;
  joinedDate: string;
}

export interface BureauMember {
  id: string;
  name: string;
  role: string;
  roleAr?: string;
  roleEn?: string;
  bio?: string;
  bioAr?: string;
  bioEn?: string;
  photo: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  category: 'institutionnel' | 'economique' | 'international' | 'media';
  website?: string;
}

export interface Document {
  id: string;
  title: string;
  titleAr?: string;
  titleEn?: string;
  filename: string;
  category: DocumentCategory;
  date: string;
  size?: string;
  restricted: boolean;
}

export type DocumentCategory =
  | 'fondateurs'
  | 'adhesion'
  | 'rapports'
  | 'circulaires'
  | 'publications'
  | 'comptes-rendus';

export interface GalleryAlbum {
  id: string;
  title: string;
  titleAr?: string;
  titleEn?: string;
  date: string;
  description?: string;
  images: string[];
}

export interface Stat {
  value: string;
  label: string;
  labelAr: string;
  labelEn: string;
  icon: string;
}
