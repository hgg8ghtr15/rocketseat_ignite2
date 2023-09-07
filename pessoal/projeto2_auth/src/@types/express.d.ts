import { Usuario } from "../modules/usuarios/entities/Usuario";

declare global {
  namespace Express {
    export interface Request {
      user: Usuario
    }
  }
}