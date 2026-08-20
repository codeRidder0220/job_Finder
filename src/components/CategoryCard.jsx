const CategoryCard = ({ category }) => {

    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">

            <h2 className="text-xl font-bold text-[#334155]">
                {category.name}
            </h2>

            <p className="text-gray-500 text-sm mt-3 leading-6">
                {category.description}
            </p>

            <div className="flex justify-between items-center mt-6">

                <span className="bg-[#526176] text-[#fac486] px-4 py-2 rounded-full text-sm">
                    {category.jobs} Jobs
                </span>

                <button className="text-[#D97706] font-medium cursor-pointer hover:text-[#f5a952] transition-all">
                    Explore →
                </button>

            </div>

        </div>
    )
}

export default CategoryCard;
