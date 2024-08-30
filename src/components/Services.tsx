import { CardProyect } from "./CardProyect";

export const Services = () => {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center gap-10 py-5 text-center lg:flex-row">
        <CardProyect
          title="Our Services"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et pulvinar tortor, at tristique lorem. Nulla euismod porttitor purus vitae efficitur. Maecenas at odio condimentum, mattis mi tempor, suscipit arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus interdum laoreet gravida."
          image="/macbook.png"
        />

        <CardProyect
          title="Enzo chupala CM"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et pulvinar tortor, at tristique lorem. Nulla euismod porttitor purus vitae efficitur. Maecenas at odio condimentum, mattis mi tempor, suscipit arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus interdum laoreet gravida."
          image="/macbook.png"
        />
      </div>
    </section>
  );
};
