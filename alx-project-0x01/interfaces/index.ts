// Button Props
export interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

// Post Props 
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// User Props Props
export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

// User Props 
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
