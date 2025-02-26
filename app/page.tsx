"use client";
import Image from "next/image";
import Container from "@/components/Container";
import TopBarRight from "@/components/TopBarRight";
import TopBarLeft from "@/components/TopBarLeft";

const Filters = () => {
  return (
    <div className="flex justify-between gap-2">
      <TopBarLeft />
      <TopBarRight />
    </div>
  );
};
const Home = () => {
  return (
    <Container className="py-2">
      <Filters />
    </Container>
  );
};
export default Home;
