/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(i=0; i<words.length; i++ ){
        let word=words[i]

        let left=0
        let right=word.length-1
        let isPalin=true

        while(left < right ){
            if(word[left] !== word[right]){
                isPalin=false
                break;
            }
            left++;
            right--;
        }
        if(isPalin){
            return word
        }
    }
    return ""
    
};