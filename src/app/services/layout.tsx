import { ButtonBack } from "@/components/ui/button-back";

export const metadata = {
  title: "Servicios Disponibles",
  description: "Servicios Disponibles",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="flex justify-end mb-2">
        <ButtonBack />
      </div>
      {children}
    </main>
  );
}
