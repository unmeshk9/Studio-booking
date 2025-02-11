export interface User {
  id: string;
  email: string;
  name: string;
  role: 'STUDIO' | 'FREELANCER';
}

export interface AuthResponse {
  access_token: string;
  user: User;
} 