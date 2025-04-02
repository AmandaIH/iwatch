import BuyButton from "./BuyButton";

const HeaderText = () => {
  return (
    <section className="grid col-span-2 content-center gap-y-10">
      <h1 className="text-white leading-relaxed text-5xl">
        <span className="font-bold">The Perfect Moment</span> Between Past And
        Future.
      </h1>
      <BuyButton />
    </section>
  );
};

export default HeaderText;
