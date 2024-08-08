import { eventsUrl } from "./urls.mjs";
import { storiesUrl } from "./urls.mjs";

async function test1() {
    const heroes2 = await fetch(eventsUrl(1009664));
    const data2 = await heroes2.json();
    console.log("Info:  ~ test ~ data2:", data2)
}


async function test2() {
    const heroes2 = await fetch(storiesUrl(1009664));
    const data2 = await heroes2.json();
    console.log("Info:  ~ test ~ data2:", data2)
}

async function test3(){
    await test1();
    await test2();
}

test3();