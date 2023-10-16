// 1. Գտնել զանգվածի չկրկնվող տարրերը
function FindNonRepeatingElements(...args) {
    this.repeatingElements = () => {
        if (!args.length) {
            return args
        }
        let res = []
        for (let i = 0; i < args.length; i++) {
            if (args.indexOf(args[i]) === args.lastIndexOf(args[i])) {
                res.push(args[i])
            }
        }
        return res
    }

}

let findNonRepeatingElements = new FindNonRepeatingElements(1, 1, 2, 3, 5, 1, 6, 2, 5, 6, 7)
console.log(findNonRepeatingElements.repeatingElements()); //[3,7]

findNonRepeatingElements = new FindNonRepeatingElements()
console.log(findNonRepeatingElements.repeatingElements()); //[]



// 2. Հեռացնել զանգվածի կրկնվող տարրերը
function RemoveRepeatingElements(...args) {
    this.deleteRepeatingElements = () => {
        if (!args.length) {
            return args;
        }
        let res = [];
        for (let i = 0; i < args.length; i++) {
            if (!res.includes(args[i])) {
                res.push(args[i]);
            }
        }
        return res;
    };
}

let removeRepeatingElements = new RemoveRepeatingElements(1, 1, 2, 3, 5, 1, 6, 2, 5, 6, 7);
console.log(removeRepeatingElements.deleteRepeatingElements()); //[1, 2, 3, 5, 6, 7]

removeRepeatingElements = new RemoveRepeatingElements();
console.log(removeRepeatingElements.deleteRepeatingElements());// []


//3. Գտնել փոխանցված թվերից մեծագույնը

function MaxFind() {
    this.findMax = (...args) => {
        if (!args.length) {
            return -Infinity
        }

        let max = args[0]
        for (let i = 1; i < args.length; i++) {
            if (args[i] > max) {
                max = args[i]
            }
        }
        return max
    }
}

let maxFind = new MaxFind()
console.log(maxFind.findMax()); //-Infinity
console.log(maxFind.findMax(3, 37, 87, -15, 14)); //87


//4. Հեռացնել զանգվածի վերջին տարրը
function PopLastElement(...args) {
    this.pop = () => {
        if (!args.length) {
            return args
        }
        return args.slice(0, args.length - 1)

    }
}

let popLastElement = new PopLastElement(1, 2, 3, 4)
console.log(popLastElement.pop()); //[1, 2, 3]


//5. Հեռացնել զանգվածի առաջին տարրը
function ShiftFirstElement(...args) {
    this.shift = () => {
        if (!args.length) {
            return args
        }

        return args.slice(1)
    }

}

let shiftFirstElement = new ShiftFirstElement(1, 2, 3, 4)
console.log(shiftFirstElement.shift()); //[2, 3, 4]