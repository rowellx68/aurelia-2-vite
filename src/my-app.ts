import { customElement, IRouteViewModel, Routeable } from 'aurelia'
import template from './my-app.html'
import routes from './routes'

@customElement({
  name: 'my-app',
  template
})
export class MyApp implements IRouteViewModel {
  static routes: Routeable[] = routes
}