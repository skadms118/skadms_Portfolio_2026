interface LevelBarProps {
  level: 1 | 2 | 3;
}

/**
 * 점 3개 중 level번째까지는 채우고, 그 이후 점들은 비워서 표시하는 레벨 표시 바.
 */
function LevelBar({ level }: LevelBarProps) {
  return (
    <div className="relative h-13.75 w-24 shrink-0">
      <span
        aria-hidden="true"
        className="absolute left-3 right-3 top-2.25 h-0.75 bg-[#c2c2c2]"
      />
      <div className="absolute inset-x-0 top-0 flex justify-between">
        {[1, 2, 3].map((dot) => (
          <span
            key={dot}
            aria-hidden="true"
            className={`size-5 rounded-full border-[3px] border-[#c2c2c2] ${
              dot <= level ? "bg-[#a0a0a0]" : "bg-[#f7f7f7]"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-between text-[20px] font-bold text-[#a0a0a0]">
        {[1, 2, 3].map((dot) => (
          <span key={dot} className="w-5 text-center">
            {dot}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LevelBar;
