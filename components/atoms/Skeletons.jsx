import Image from 'next/image';

export const CardSkeleton = () => {
	return (
		<div className="flex flex-col bg-gray-700 animate-pulse rounded overflow-hidden">
			<div className="flex items-center max-h-[298px] justify-center h-full min-h-[174px]">
				<Image
					className={'opacity-0 w-full p-2 max-w-xs'}
					src="/img/unknown-pokemon.png"
					width="200"
					height="200"
					alt="Pokemon image"
					blurDataURL="URL"
					placeholder="blur"
				/>
			</div>
			<div className="p-4 flex gap-3 flex-col  ">
				<h2 className="card__tittle text-transparent">.</h2>
			</div>
		</div>
	);
};
