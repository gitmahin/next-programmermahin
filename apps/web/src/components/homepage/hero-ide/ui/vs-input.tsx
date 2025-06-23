export const VSInputBox = ({placeholder, ...props}: {
    placeholder: string,
    
} & React.InputHTMLAttributes<HTMLInputElement> ) => {
    return <input type="text" className="w-full py-0.5 px-1 text-[10px] placeholder:text-pm_zinc-400 text-pm_zinc-200n bg-[var(--github-default-background-color-3)] outline-none focus:!ring-1 ring-blue-600" placeholder={placeholder} {...props} />
       
}