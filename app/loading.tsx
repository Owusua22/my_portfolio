import { FiLoader } from 'react-icons/fi'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin">
          <FiLoader className="text-brand-500" size={48} />
        </div>
        <p className="text-foreground/60">Loading...</p>
      </div>
    </div>
  )
}