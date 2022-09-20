//esto es solo para cuando se transfieren datos
//a difeencia de lo que hay en la carpeta tasks que es para utilizarlo internamente en mi codigo

export class CreateTaskDto {
  title: string;
  description: string;
  done: boolean;
}
