import ReactNodeProps from '@/types/children.type'

import { ClassNameProps } from './paragraphRoot'

export default function ParagraphContent({
	children,
	className,
}: ClassNameProps) {
	return (
		<p className={`flex flex-wrap text-lg w-full h-max ${className}`}>
			{children}
		</p>
	)
}
