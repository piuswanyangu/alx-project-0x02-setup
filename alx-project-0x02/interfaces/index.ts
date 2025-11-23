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