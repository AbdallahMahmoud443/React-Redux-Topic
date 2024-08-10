import ProductCard from "../../components/ProductCard";
import useCustomHook from "../../hooks/CustomHook";

const Home = () => {
  //* Fetch Data using useQuery() hook
  const { isPending, error, data } = useCustomHook({
    //** todoList-id any chnage in queryKey (useQuery Will Fetch Data Again) unique Keys*/
    queryKey: [`Products`],
    url: `/products?limit=5`, 
  });

  // return Skeleton while fetching data
  if (isPending) {
    return <div className="space-y-2">Data Loading 📣</div>;
  }
  // Print error
  if (error) {
    return (
      <p className="w-full font-semibold">
        Error in fetching data😌{error.message}
      </p>
    );
  }
  console.log(data);
  // setpage count

  return (
    <section className="flex flex-col items-center mt-20">
      <h1 className="mt-10 text-4xl font-bold text-blue-700">New Products</h1>
      <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:gap-6">
        {data.data.map(
          ({
            id,
            title,
            price,
            image,
          }: {
            id: number;
            title: string;
            price: number;
            image: string;
          }) => {
            return (
              <div key={id}>
                <ProductCard id={id} title={title} price={price} image={image} qty={1}/>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Home;
