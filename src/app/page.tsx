import Hero from "../../components/section/Hero";
import Jewellery from "../../components/section/Jewellery/Jewellery";
import ProductType from "../../components/section/ProductType";
import Promotion from "../../components/section/Promotion";
import Newsletter from "../../components/section/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Promotion />
      <ProductType />
      <Jewellery />
      <Newsletter />
    </>
  );
}
