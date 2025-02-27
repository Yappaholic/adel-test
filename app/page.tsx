import Container from "@/components/Container";
import FilterPanel from "@/components/filterPanel/FilterPanel";
import Goods from "@/components/goods/Goods";
import PageNavigation from "@/components/PageNavigation";
import TopBar from "@/components/topBar/TopBar";

const Home = () => {
  return (
    <Container className="py-2">
      <TopBar />
      <div className="flex items-start justify-between mb-4">
        <FilterPanel />
        <Goods />
      </div>
      <PageNavigation />
    </Container>
  );
};
export default Home;
