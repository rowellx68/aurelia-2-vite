import Aurelia, { RouterConfiguration } from 'aurelia'
import { MyApp } from './my-app'
import './style.css'

Aurelia
  .register(RouterConfiguration)
  .app(MyApp)
  .start()