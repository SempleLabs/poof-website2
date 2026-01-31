interface ImagePlaceholderProps {
  alt: string
  aspectRatio?: '16/9' | '4/3' | '1/1'
  className?: string
}

const ratioClasses = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
}

export default function ImagePlaceholder({
  alt,
  aspectRatio = '16/9',
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${ratioClasses[aspectRatio]} bg-slate-100 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center ${className}`}
    >
      <div className="text-center text-slate-400">
        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
        </svg>
        <p className="text-sm font-medium">{alt}</p>
      </div>
    </div>
  )
}
