import ReactNodeProps from '@/types/children.type'

export interface ClassNameProps extends ReactNodeProps {
	className?: string
}

export default function ParagraphRoot({ children, className }: ClassNameProps) {
	return (
		<div
			className={`flex flex-wrap flex-col items-start gap-4 min-w-min w-full h-full backdrop-blur-lg bg-gray-400/30 px-3 md:p-4 rounded-md ${className} `}>
			{children}
		</div>
	)
}
