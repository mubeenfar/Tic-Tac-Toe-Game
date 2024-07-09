let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
        checkdraw();
    });
});
let cond = false;
const checkdraw = () => {
    for (pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        
        if (val1 != "" && val2 != "" && val3 != "") {
           if ((val1 != val2 && val2 != val3) || (val1 == val2 && val2 != val3) || (val1 != val2 && val2 == val3)){
            cond = true;
           }
           else {
            cond = false;
            break;
           }
        }
    
        else {
            cond = false;
            break;
        }
    }
if (cond) {
    console.log("draw");
    document.querySelector("#draw").style.display = "flex";
}
}


const checkwinner = () => {
    for (pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                console.log("winner", val1);
                document.querySelector("#win").style.display = "flex";
                for (let box of boxes) {
                    box.disabled = true;
                }
            }
        
            
        }
    }
}
resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        document.querySelector("#win").style.display = "none";
        document.querySelector("#draw").style.display = "none"
        
    })
})