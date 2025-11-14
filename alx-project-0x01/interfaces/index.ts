// Button Props
export interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

// Post Card Props
export interface PostCardProps {
  title: string;
  body?: string;
}

// User Card Props 
export interface UserCardProps {
  id: number;
  name: string;
  email: string;
}
