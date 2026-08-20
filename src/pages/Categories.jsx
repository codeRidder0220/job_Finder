import categories from "../data/category";
import CategoryCard from "../components/CategoryCard";
import search from '../assets/search.png'

const Categories = () => {

    return (
        <div className="p-10">

            <div className='flex gap-5 items-center max-w-7xl mx-auto mt-5'>
            
                    <img src={search} alt="" className='w-20' />
                    <div>
                      <h1 className='text-4xl font-bold text-[#334155]'>Explore Categories...</h1>
                      <p className=' pt-4 text-xl text-gray-500 '>Find opportunity based on your skills and interests.</p>
                    </div>
            
                  </div>

            <div className="grid grid-cols-3 gap-6 mt-20">

                {
                    categories.map((category) => {

                        return (
                            <CategoryCard
                                key={category.id}
                                category={category}
                            />
                        )

                    })
                }

            </div>

        </div>
    )
}

export default Categories;