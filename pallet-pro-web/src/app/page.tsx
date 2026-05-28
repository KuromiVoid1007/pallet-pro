import HeroSwiper from "@/app/components/home/HeroSwiper";
import AboutHome from "@/app/components/aboutHome/AboutHome"
import CtaHome from "@/app/components/CtaHome/CtaHome";
import ProductTypesHome from "@/app/components/ProductTypesHome/ProductTypesHome";
export default function Home() {
  return (
    <>
      
      <HeroSwiper></HeroSwiper>
      <AboutHome></AboutHome>
      <ProductTypesHome></ProductTypesHome>
      <CtaHome></CtaHome>
    </>
  );
}
