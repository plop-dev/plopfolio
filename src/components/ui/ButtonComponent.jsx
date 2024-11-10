import { Button } from '@/components/ui/button';

export function ButtonComponent(props) {
	return (
		<Button variant={props.variant} asChild>
			<a className='ghost' href={`${props.link}`}>
				{props.text}
			</a>
		</Button>
	);
}
