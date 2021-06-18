function fun(obj) {
    obj.levelOfHydrated += (obj.dizziness ? (obj.weight * .1 * obj.experience) : 0)
    obj.dizziness = false
    return  obj
}


fun({weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true})
// { weight: 80, experience: 1, levelOfHydrated: 8, dizziness: false }

fun({weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true})
// { weight: 120, experience: 20, levelOfHydrated: 440, dizziness: false }

fun({weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false})
// { weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false }
