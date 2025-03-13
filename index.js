async function sayHello(){
    let [tab] = await chrome.tabs.query({active:true});
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
            alert(" You clicked this icon");
        }
    });
}

document.getElementById("btn").addEventListener("click",sayHello);