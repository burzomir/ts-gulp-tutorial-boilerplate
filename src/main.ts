import { sayHello } from './greet';

function showHello(elName: string, name: string){
    const elt = document.getElementById('greeting');
    elt.innerText = sayHello(name);
}

showHello('greeting', 'TypeScript');