import React from 'react'

export const ArticlePageWrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='w-full'>
            <div className='layout_max_750 mx-auto'>
            {children}
            </div>
        </div>
    )
}

export const ArticlePage = ({children}: {children: React.ReactNode}) => {
  return (
    <article className='w-full h-fit prose prose-gray dark:prose-invert'>
      {children}
    </article>
  )
}
