"use client";
import React from "react";
import { useInstantSearch } from "react-instantsearch";

interface NoResultsBoundaryType {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

export default function NoResultsBoundary({
  children,
  fallback,
}: NoResultsBoundaryType) {
  const { results } = useInstantSearch();

  // The `__isArtificial` flag makes sure not to display the No Results message
  // when no hits have been returned.
  if (!results.__isArtificial && results.nbHits === 0) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    );
  }

  return children;
}
