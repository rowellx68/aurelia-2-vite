import { IRouteViewModel, Routeable } from 'aurelia'
import routes from './routes'

export class MyApp implements IRouteViewModel {
  static routes: Routeable[] = routes
}