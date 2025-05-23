// types/toc.d.ts

declare module 'toc' {
  interface AnchorizeOptions {
    headers?: RegExp;
    tocMin?: number;
    tocMax?: number;
    anchorMin?: number;
    anchorMax?: number;
    header?: string | ((data: { level: number; attrs: string; anchor: string; header: string }) => string);
  }

  interface TOCOptions {
    openUL?: string | ((data: { depth: number }) => string);
    closeUL?: string | (() => string);
    openLI?: string | ((data: { level: number; anchor: string; text: string }) => string);
    closeLI?: string | (() => string);
    TOC?: string | ((data: { toc: string }) => string);
  }

  interface ProcessOptions extends AnchorizeOptions, TOCOptions {
    placeholder?: RegExp;
  }

  interface Header {
    level: number;
    anchor: string;
    text: string;
  }

  interface AnchorizeResult {
    headers: Header[];
    html: string;
  }

  interface TOCResult {
    toc: string;
  }

  /**
   * Strip HTML tags from a string.
   */
  function untag(html: string): string;

  /**
   * Convert a string of text into something URL-friendly.
   */
  function anchor(text: string): string;

  /**
   * Get a unique name and store it in `names`.
   */
  function unique(names: Record<string, boolean>, name: string): string;

  /**
   * Anchorize all headers and inline a generated TOC, returning processed HTML.
   */
  function process(html: string, options?: ProcessOptions): string;

  /**
   * Parse HTML, returning an array of header objects and anchorized HTML.
   */
  function anchorize(html: string, options?: AnchorizeOptions): AnchorizeResult;

  /**
   * Generate TOC HTML from an array of header objects.
   */
  function toc(headers: Header[], options?: TOCOptions): TOCResult;

  export {
    untag,
    anchor,
    unique,
    process,
    anchorize,
    toc
  };
}
