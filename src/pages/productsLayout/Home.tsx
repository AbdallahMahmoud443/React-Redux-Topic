import ProductCard from "../../components/ProductCard";

interface IProps {}

const Home = ({}: IProps) => {
  return (
    <section className="flex flex-col items-center mt-20">
      <h1 className="mt-10 text-4xl font-bold text-blue-700">New Products</h1>
      <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:gap-6">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </section>
  );
};

export default Home;
