import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Built with <Heart className="h-4 w-4 text-primary fill-primary" /> by Dhruv Rupala © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
