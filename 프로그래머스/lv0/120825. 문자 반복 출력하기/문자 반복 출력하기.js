function solution(my_string, n) {
    let answer = '';
    
    for (const char of my_string) {
        for (let i = 0; i < n; i++) {
            answer += char;
        }
    }
    
    return answer;
}