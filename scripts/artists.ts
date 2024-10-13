import type { ParsedContent } from "@nuxt/content";

export interface ArtistInfo extends ParsedContent {
  name: string;
  links: Array<{ name: string; url: string }>;
  genres: Array<string>;
}

export function getArtistLinkFromName(name: string): string {
  return `/#artist-${name.replaceAll(" ", "-")}`;
}
