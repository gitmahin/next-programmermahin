import React from 'react'
import fs from "fs"
import path from 'path';
import { fileURLToPath } from 'url';
import ProcessedContent from './processed-content';

interface ContentPagePropsType {
  params: Promise<{slug: string[]}>  
}

export default async function ContentPage({
  params
}: ContentPagePropsType) {
  const {slug} = await params

 try {
   const filePath = `src/content/${slug.join("/")}.mdx`
   const getData = fs.readFileSync(filePath, "utf-8")

 
   return (
   
     <div>
       {/* in content page {filePath} */}
       <ProcessedContent data={getData} />
     </div>
   )
 } catch (error) {
  return <div>Error dude</div>
 }
}


