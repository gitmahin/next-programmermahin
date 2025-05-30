import { WarningIcon } from '@programmer/ui'
import React from 'react'

export const UnderDevelopment = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center px-5'>
        <div className="max-w-[330px] w-full">
                <div className="w-full h-fit border border-border-color_800C rounded overflow-hidden ">
                  <div className="px-2 flex justify-between items-center py-2 border-b border-border-color_800C bg-background-color_900C">
                    <div className="px-3 py-1 rounded bg-background-color_850C h-fit flex justify-center items-center w-fit gap-2 border-background-color_800C border ">
                      <WarningIcon width={10} height={10} />
                      <span className="text-read_1 font-medium text-text-color_1">
                        503
                      </span>
                    </div>
                    <span className="font-medium text-read_1 text-text-color_2 mr-3">
                      Under Development
                    </span>
                  </div>
      
                  <div className="p-2 bg-background-color_925C">
                    <p className="text-text-color_3 text-read_3">The page you are looking for is currently under development. Please check back later.</p>
                  </div>
                </div>
      
                
              </div>
    </div>
  )
}

