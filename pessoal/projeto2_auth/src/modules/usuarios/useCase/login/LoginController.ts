import { Request, Response } from "express"
import { LoginUseCase } from "./LoginUseCase"

class LoginController {
  private loginUseCase: LoginUseCase
  constructor(loginUseCase: LoginUseCase) {
    this.loginUseCase = loginUseCase
  }

  async handle(request: Request, response: Response) {
    const { email, senha } = request.body
    try {
      const result = await this.loginUseCase.execute({ email, senha })
      return response.status(201).json(result)
    } catch (error) {
      throw new Error(`Erro ao realizar Handler em login!`)
    }
  }
}
export { LoginController }