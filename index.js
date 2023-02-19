// Question 3

let ScienceSubjects ="Physics, Chemistry, Biology, Technical Drawing"
let SocialScienceSubjects ="Accounting, Commerce, Marketing, Geography"
let ArtsSubjects = "Government, Economics, Literature, History"
let GeneralSubjects ="English, Mathematics"

let BolatitoSubject= ArtsSubjects

if(ScienceSubjects==BolatitoSubject){
    console.log(ScienceSubjects)
}else if(SocialScienceSubjects==BolatitoSubject){
    console.log(SocialScienceSubjects)
}else if(ArtsSubjects==BolatitoSubject){
    console.log(ArtsSubjects)
}else{
    console.log(GeneralSubjects)
}

//Question 5
let num=5
let pwr=0

for(i=1;i<num;i++){

    pwr=pwr*i;
    console.log(pwr)
}

