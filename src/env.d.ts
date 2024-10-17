/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ProjectItem {
	title: string;
	description: string;
	media: ProjectMedia[];
	url: string;
	position?: 'right' | 'left';
}

interface ProjectMedia {
	src: string;
	alt: string;
	type: 'image' | 'video';
}
