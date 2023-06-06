import Datetime from "./Datetime";
import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description, isExternal } = frontmatter;
  return (
    <li className="mb-12">
      <a
        href={href}
        className="mb-1 flex items-center font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        target={isExternal ? "_blank" : "_self"}
      >
        {isExternal && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style={{ fill: "transparent" }}
            className="mr-2 text-slate-400"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        )}
        {secHeading ? (
          <h2 className="text-lg font-medium decoration-dashed hover:underline lg:text-xl">
            {decodeURIComponent(title)}
          </h2>
        ) : (
          <h3 className="text-lg font-medium decoration-dashed hover:underline lg:text-xl">
            {decodeURIComponent(title)}
          </h3>
        )}
      </a>
      <Datetime datetime={pubDatetime} className="mb-2" />
      <p>{description}</p>
    </li>
  );
}
