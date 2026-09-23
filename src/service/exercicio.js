class ServiceExercicio {

CF(C) {
    if(isNaN(C)) {
        throw new Error("Favor informar somente números")
    }
    return (C*9/5) + 32
}
FC(F) {
    if(isNaN(F)) {
        throw new Error("Favor informar somente números")
    }
    return (F-32) *5/9
}
CK(C){
    if(isNaN(C)) {
        throw new Error("Favor informar somente números")
    }
    return C + 273.15
}
}
export default new ServiceExercicio()