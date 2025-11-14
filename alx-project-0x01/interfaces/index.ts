// Button Props
export interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

// User Card Props 
export interface UserCardProps {
  id: number;
  name: string;
  email: string;
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
