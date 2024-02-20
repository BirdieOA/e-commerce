

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

const beneficios = [
  {
    name: "Entrega Inmediata",
    Icon: ArrowDownToLine,
    Description:
      "Obtene tus recursos via email en segundos y descargalos de inmediato"
  },
  {
    name: "Garantia de Calidad",
    Icon: CheckCircle,
    Description:
      "Cada recurso en nuestra plataforma es verificada por nuestro equipo para asegurar la alta calidad de los standares"
  },
  {
    name: "Para el Planeta",
    Icon: Leaf,
    Description:
      "Colaboramos con el 1% de las ventas para la preservación y restauración del medio ambiente"
  }
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        {" "}
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-sky-950 sm:text-6xl">
            Tu mercado de recursos
            <span className="text-indigo-700"> de alta calidad </span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Bienvenidos a RecursosBirdie. Cada recurso en nuestra plataforma es
            verificada por nuestro equipo para asegurar la alta calidad de los
            standares.{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/productos" className={buttonVariants()}>
              Buscar tendencias
            </Link>
            <Button variant="ghost">Nuestra promesa de calidad &rarr;</Button>
          </div>
        </div>{" "}
        {/* TODO: lista de productos */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {beneficios.map((beneficios) => (
              <div key={beneficios.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<beneficios.Icon className='w-1/3 h-1/3'/>}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-sky-900">{beneficios.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {beneficios.Description}
                  </p>
                </div>
              </div>
            )

            )}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
