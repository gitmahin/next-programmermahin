import { Ellipsis } from "lucide-react"

export const SidebarTitle = ({label, children}: {label: string, children?: React.ReactNode}) => {
    return <div className="px-2 py-0.5 pt-1 mb-1  flex justify-between items-center">
        <span className="uppercase text-[9px] text-pm_zinc-400">{label}</span>

        {
            children ?
            children: <div className="p-[1px] rounded-[3px] hover:bg-[var(--github-default-background-color-3)]">
                      <Ellipsis size={12} className="text-pm_zinc-400" />
                    </div>
        }
        
      </div>
}