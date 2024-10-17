import * as React from 'react';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function ProjectCarousel({ media, url }) {
	return (
		<Carousel className='w-full'>
			<CarouselContent>
				{media.map(media => {
					return (
						<CarouselItem key={Math.random()}>
							<a href={url} target='_blank' rel='noopener noreferrer'>
								<img className='rounded-lg' src={media.src} alt={media.alt} />
							</a>
						</CarouselItem>
					);
				})}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
