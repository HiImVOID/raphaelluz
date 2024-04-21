import ReactNodeProps from '@/types/children.type'
import { ClassNameProps } from './paragraphRoot'

export default function ParagraphSubtitle({
	children,
	className,
}: ClassNameProps) {
	return (
		<h2 className={`flex text-xl font-medium mb-4 ${className} `}>{children}</h2>
	)
}
