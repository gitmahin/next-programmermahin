export const VSButton = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={`text-center w-full text-[9px] py-0.5 rounded-[2px] text-pm_zinc-200 font-weight_450 bg-[var(--github-default-button-color-2)] hover:bg-[var(--github-default-button-color-1)] ${className ? className : ""}`}>
      {children}
    </button>
  );
};