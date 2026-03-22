import { Code } from "lucide-react";
import Grainient from "@/components/react-bits/grainient";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Contacts = () => {
  return (
    <section className="relative main-container">
      <div className="rounded-2xl overflow-hidden">
        <Grainient timeSpeed={1.2} />
        <div className="z-10 absolute top-1/2 left-1/2 -translate-1/2">
          <h6 className="text-3xl font-bold leading-relaxed tracking-wider text-white backdrop-blur-2xl px-4 py-2 rounded-2xl">
            Não é só código, entregas pensadas para resolver seu problema, da
            ideia ao deploy. Aqui está o que posso fazer por você.
          </h6>

          <div className="flex gap-4">
            <Card size="sm" className="mx-auto w-full max-w-fit p-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="size-5" />{" "}
                  <span className="text-lg">Frontend</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Criação de sites</p>
              </CardContent>
            </Card>

            <Card size="sm" className="mx-auto w-full max-w-fit p-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="size-5" />{" "}
                  <span className="text-lg">Frontend</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Criação de sites</p>
              </CardContent>
            </Card>

            <Card size="sm" className="mx-auto w-full max-w-fit p-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="size-5" />{" "}
                  <span className="text-lg">Frontend</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Criação de sites</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
