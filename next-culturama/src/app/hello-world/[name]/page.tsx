export default function HelloWorldWithParams({ params }: { params: { name: string } }) {
	return (
		<div>
			Hello World {params.name}, estamos dentro de uma pasta com App Router e roteamento dinâmico
		</div>
	);
}
