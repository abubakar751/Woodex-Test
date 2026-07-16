import { ImageOff } from 'lucide-react';

interface PlaceholderImageProps {
  text?: string;
  className?: string;
  aspect?: string;
}

export default function PlaceholderImage({ text = 'Image Placeholder', className = '', aspect = 'aspect-[4/3]' }: PlaceholderImageProps) {
  return (
    <div className={`placeholder-image ${aspect} ${className}`}>
      <div className="text-center p-4">
        <ImageOff className="w-8 h-8 text-gold-400 mx-auto mb-2" />
        <p className="text-sm text-wood-500 font-medium">{text}</p>
      </div>
    </div>
  );
}
