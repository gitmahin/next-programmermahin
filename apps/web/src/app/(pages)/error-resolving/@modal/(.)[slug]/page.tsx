'use client'
import { Dialog, DialogContent, LUCIDE_DEFAULT_ICON_SIZE } from '@programmer/ui'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function InterceptedSingleErrorResolvePage() {
    const [isOpen, setOpen] = useState(true)
    const router = useRouter()
    const handleOpenChange = (state: boolean) => {
      setOpen(state)
      router.back()
    }

  return (

      <Dialog
      defaultOpen={isOpen}
      open={isOpen}
      onOpenChange={(state) => handleOpenChange(state)}
    >
      <DialogContent className="max-w-[900px] !rounded-[20px] border border-border-color_800C w-full h-[calc(100vh-64px)] backdrop-blur-sm bg-background-color_950C">
        <button
          onClick={() => handleOpenChange(false)}
          className="absolute top-3 right-3 outline-none bg-background-color_850C transition-all shadow rounded-full group hover:bg-background-color_800C p-2"
        >
          <X
            size={LUCIDE_DEFAULT_ICON_SIZE}
            className="text-text-svg_default_color group-hover:text-text-color_1"
          />
        </button>
        <div className=" w-full h-full overflow-y-auto custom_scrollbar  p-5">
          
        </div>
      </DialogContent>
    </Dialog>

  )
}


