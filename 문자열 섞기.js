function solution(str1, str2) {
    let answer = '';
    str1_ = str1.split('');
    str2_ = str2.split('');
    for(let i=0; i<str1_.length; i++)
    {
        answer+=str1_[i]+str2_[i];
    }
    return answer;
}
