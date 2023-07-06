import express, { Router } from "express";
import BotController from "./controllers/BotController";

export default class Routes {
  public router: Router

  private botController: BotController = new BotController()

  constructor() {
    this.router = express()
    this.createRoutes()
  }

  private createRoutes(){
    this.router.get('/', this.botController.init)
  }
}