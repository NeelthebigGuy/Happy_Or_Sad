
var globalselection = false;
var globalcordx = -1;
var globalcordy = -1;
var globalmood = -1;

export var data = {
    globalselectiontest : false,
    globalmoodtest : -1,
};

export function changemoodset(moodselected){
    globalmood = moodselected;
    globalselection = true;
}

export function changecordx(cord){
    globalcordx = cord;
    //alert("" + globalcordx);
}

export function changecordy(cord){
    globalcordy = cord;
}

export function seemoodselectionbool(){
    return globalselection;
}

export function seemoodstatus(){
    return globalmood;
}

export function seeuserlocationx(){
    return globalcordx;
}

export function seeuserlocationy(){
    return globalcordy;
}