// Import stylesheets
import './style.css';
import {Observable} from "rxjs";

let observable = Observable.create((observer: any) => {
  observer.next('Hey guys!')
})

observable.subscribe((res: any) => {
console.log(res);
})