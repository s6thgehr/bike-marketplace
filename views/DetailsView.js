function DetailsView({ bike }) {
    return (
        <div className="flex">
            <div className="w-1/2">
                <img src={bike.imageUrl} alt={bike.model} className="w-full" />
            </div>
            <div class="w-1/2 grid grid-rows-5 grid-flow-col gap-4">
                <h2 className="px-4 pt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {bike.model}
                </h2>
                <p className="px-4">{bike.description}</p>
                <div className="px-4">Location: Aachen</div>
                <div className="px-4">Price: {bike.price} Euro</div>
                <div className="px-4">Kontakt: Thomas</div>
            </div>
        </div>
    );
}

export default DetailsView;
