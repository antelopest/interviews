import type React from "react";

type CardProps = {
  title: string;
  children: React.ReactNode;
}

const Card = ({ title, children }: CardProps) => {
  return (
    <section>
      <h2>{title}</h2>

      {children}
    </section>
  );
}

export default Card;