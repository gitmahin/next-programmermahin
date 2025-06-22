"use client"

import dynamic from "next/dynamic"

const ImportDynamicErrorResolvingComp = dynamic(() => import("../error-resolving-comp").then((module) => module.ErrorResolvingComp), {
    ssr: false
})

export const DynamicErrorResolveShowupSection = () => {
    return (
        <ImportDynamicErrorResolvingComp/>
    )
}