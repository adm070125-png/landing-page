
export interface LinkItem {
  id: string;
  name: string;
  url: string;
  thumbnailUrl: string;
}

export interface SocialItem {
  type: 'instagram' | 'email' | 'whatsapp';
  url: string;
}
