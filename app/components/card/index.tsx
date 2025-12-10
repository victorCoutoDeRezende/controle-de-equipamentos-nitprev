import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type CardProps = {
  titulo: string;
  qtd: number
  imagem?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
};

export default function CardComponent({titulo, qtd, children}: CardProps){
    return(
        <Card className="w-full max-w-sm m-4 hover:text-amber-700
          hover:cursor-pointer hover:p-5 hover:duration-300">
            <CardHeader>
                <CardTitle className="text-xl flex place-content-center">{titulo}</CardTitle>
                <CardDescription className="text-xl flex place-content-center">{qtd}</CardDescription>
            </CardHeader>
            <CardContent className="grid place-content-center">
                {children}
            </CardContent>
        </Card>
    )
}
