export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Emblème */}
      <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center shadow-lg shadow-violet-600/30 overflow-hidden">
        {/* Côté Game */}
        <span className="absolute left-1 top-1 text-[10px] text-white/90 font-bold leading-none">
          ▶
        </span>
        {/* Côté Admin */}
        <span className="absolute right-1 bottom-1 text-[10px] text-green-300 font-mono leading-none">
          $
        </span>
        {/* Initiale centrale */}
        <span className="text-sm font-bold text-white tracking-tight">IK</span>
      </div>

      {/* Texte */}
      <div className="flex flex-col leading-none">
        <span className="text-sm font-bold tracking-tight text-white">
          Xalil<span className="text-violet-400">.Tech</span>
        </span>
        <span className="text-[10px] text-slate-500 tracking-wider uppercase">
          Game · SysAdmin
        </span>
      </div>
    </div>
  );
}
