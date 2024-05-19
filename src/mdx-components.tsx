import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children }) => (
      <a target="_blank" href={href}>
        {children}
      </a>
    ),
    ...components,
  };
}
