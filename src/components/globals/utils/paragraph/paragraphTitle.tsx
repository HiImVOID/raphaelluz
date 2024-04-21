import ReactNodeProps from '@/types/children.type'
import { ClassNameProps } from './paragraphRoot'

export default function ParagraphTitle({
	children,
	className,
}: ClassNameProps) {
	return (
		<p className={`flex text-2xl font-medium my-4 ${className}`}>{children}</p>
	)
}
