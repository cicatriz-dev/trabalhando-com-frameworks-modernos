export default function HelloWorldWithParamsInfoLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className='bg-blue-400 min-h-screen text-black'>{children}</div>;
}
