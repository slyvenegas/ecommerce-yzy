import Image from 'next/image';
import { motion } from 'framer-motion'; // Asegúrate de que estás usando la importación correcta
import { Product } from '@/lib/products';

interface ProductImageProps {
  product: Product;
  priority?: boolean;
  maxWidth?: string;
  maxHeight?: string;
  className?: string;
  layoutId?: string;
}

export function ProductImage({
  product,
  priority = false,
  maxWidth = '100%',
  maxHeight = 'none',
  className = '',
  layoutId,
}: ProductImageProps) {
  return (
    <motion.div
      className={`relative mb-1 ${className}`}
      style={{
        width: '100%',
        maxWidth,
        maxHeight,
        aspectRatio: '1',
        overflow: 'hidden',
      }}
      layoutId={layoutId}
    >
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain transition-opacity duration-200 aspect-square"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        placeholder="blur"
        blurDataURL={product.blurDataURL || '/path-to-blur-image.jpg'} // Asegúrate de tener una URL para la imagen borrosa
        quality={75}
        unoptimized={false}
      />
    </motion.div>
  );
}