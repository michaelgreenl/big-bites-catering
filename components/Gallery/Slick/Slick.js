import { ArrowSvg } from '@/components/svgs/ArrowSvg';

export function PrevArrow({ className, style, onClick }) {
  return (
    <div className={`prev-arrow ${className}`} style={{ ...style, display: 'block' }} onClick={onClick}>
      <ArrowSvg className='arrow' style={{ transform: 'rotate(90deg)', marginRight: '0.2em' }} />
    </div>
  );
}

export function NextArrow({ className, style, onClick }) {
  return (
    <div className={`next-arrow ${className}`} style={{ ...style, display: 'block' }} onClick={onClick}>
      <ArrowSvg className='arrow' style={{ transform: 'rotate(-90deg)', marginLeft: '0.2em' }} />
    </div>
  );
}
