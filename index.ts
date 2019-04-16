// Import stylesheets
import './style.css';
import { Observable } from "rxjs";

let observable = Observable.create((observer: any) => {
  try {
    observer.next('Hey guys!')
    observer.next('How are you?')
    setInterval(() => {
      observer.next('I am good!')
    }, 2000)
  } catch (err) {
    observer.error(err);
  }


})

let observer = observable.subscribe(
  (res: any) => {
    addItem(res)
  },
  (error: any) => {
    addItem(error);
  },
  () => {
    addItem('Completed')
  })

setTimeout(() => {
  observer.unsubscribe();
}, 6001);

function addItem(val: any) {
  var node = document.createElement('li');
  var textNode = document.createTextNode(val);
  console.log(node);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}