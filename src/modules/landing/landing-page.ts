import { IRouteViewModel, IRouter } from 'aurelia'

export class LandingPage implements IRouteViewModel {
  constructor(@IRouter public readonly router: IRouter) {
  }

  attached() {
    console.log("ATTACHED", this.router)
  }
}