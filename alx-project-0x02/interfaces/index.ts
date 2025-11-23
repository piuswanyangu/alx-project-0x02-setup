// not empty

// Define a CardProps interface in interfaces/index.ts.
export interface CardProps {
  title: string;
  content: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Callback function to send the new post data back to the parent
  onPostSubmit: (newPost: { title: string; content: string }) => void;
}

// Define specific literal types for size and shape
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The content displayed inside the button. */
  children: React.ReactNode;
  /** Defines the size of the button (padding and text size). */
  size?: ButtonSize;
  /** Defines the corner radius/shape of the button. */
  shape?: ButtonShape;
  // Any other props for a standard HTML button (e.g., onClick, type, disabled)
  // are inherited via React.ButtonHTMLAttributes
}

export interface PostCardProps {
  /** The unique ID of the post author. */
  userId: number;
  /** The unique ID of the post itself. */
  id: number; // Included for good practice/key
  /** The title of the post. */
  title: string;
  /** The body content of the post. */
  content: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}