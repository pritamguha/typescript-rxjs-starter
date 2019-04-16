// Import stylesheets
import './style.css';
import { Observable } from "rxjs";

let observable = Observable.create((observer: any) => {
  try {
    observer.next('Hey guys!')
    observer.next('How are you?')
    observer.complete()
    observer.next('This will not send')
  } catch (err) {
    observer.error(err);
  }


})

observable.subscribe(
  (res: any) => {
    addItem(res)
  },
  (error: any) => {
    addItem(error);
  },
  () => {
    addItem('Completed')
  })

function addItem(val: any) {
  var node = document.createElement('li');
  var textNode = document.createTextNode(val);
  console.log(node);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}