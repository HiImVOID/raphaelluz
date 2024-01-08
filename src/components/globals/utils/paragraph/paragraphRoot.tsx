import ReactNodeProps from '@/types/children.type'

export interface ClassNameProps extends ReactNodeProps {
	className?: string
}

export default function ParagraphRoot({ children, className }: ClassNameProps) {
	return (
		<div
			className={`flex flex-wrap flex-col items-start gap-4 min-w-min w-full h-full bg-gray-500/60 backdrop-blur-lg px-0 md:px-4 rounded-md ${className} `}>
			{children}
		</div>
	)
}
