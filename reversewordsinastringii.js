//Objective is to reverse a string word by word

let s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]


//O(n) solution where we reverse the entire array first then we reverse each
//word one by one

reverse(s, 0, s.length - 1)
    
let start = 0
let end = 0

while (end < s.length) {
    //Find the end of current word
    while (end < s.length && s[end] != ' ') {
        end++
    }
    
    //Reverse word
    reverse(s, start, end - 1)
    
    //Move start pointer to next word
    start = end + 1
    
    //Skip next space
    end++
}

function reverse(string, start, end) {
    while (start < end) {
        let temp = string[start]
        string[start++] = string[end]
        string[end--] = temp
    }
    
    return string
}