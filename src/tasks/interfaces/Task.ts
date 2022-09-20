//esto es solo para utilizarlo internamente en mi codigo
//a difencia de lo que hay en la carpeta dto que es para cuando se transfieren datos

import { Document } from 'mongoose';

export interface Task extends Document {
  id?: number; //la '?' significa que es un parámetro opcional
  title: string;
  description: string;
  done: boolean;
}
