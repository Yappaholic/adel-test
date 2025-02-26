"use client";
import Container from "@/components/Container";
import TopBarRight from "@/components/TopBarRight";
import TopBarLeft from "@/components/TopBarLeft";
import FilterPanel from "@/components/FilterPanel";
import Goods from "@/components/Goods";
import PageNavigation from "@/components/PageNavigation";

const TopBar = () => {
  return (
    <div className="flex justify-between gap-2 mb-4">
      <TopBarLeft />
      <TopBarRight />
    </div>
  );
};
const Home = () => {
  return (
    <Container className="py-2">
      <TopBar />
      <div className="grid grid-cols-[1fr,5fr]">
        <FilterPanel />
        <Goods />
      </div>
      <PageNavigation />
    </Container>
  );
};
export default Home;
