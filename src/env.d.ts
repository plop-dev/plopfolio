/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ProjectItem {
	title: string;
	description: string;
	media: ProjectMedia[];
	url: string;
	position?: 'right' | 'left' = 'left';
	newTab?: boolean = true;
}

interface ProjectMedia {
	src: string;
	alt: string;
	type: 'image' | 'video';
}
