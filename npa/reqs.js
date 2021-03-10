function CalculResults(drill, secam) {
    var currentGrade, drillGrade, roundedGrade, secamGrade;
    if (((drill === "3plus") || (drill === "3"))) {
        currentGrade = 6;
    } else {
        if ((drill === "2")) {
            currentGrade = 5;
        } else {
            if ((drill === "1")) {
                currentGrade = 3;
            } else {
                if ((drill === "0")) {
                    currentGrade = 1;
                } else {
                    return false;
                }
            }
        }
    }
	var drillGrade = currentGrade;
    drill = secam;
    if (((drill === "3plus") || (drill === "3"))) {
        currentGrade = 6;
    } else {
        if ((drill === "2")) {
            currentGrade = 5;
        } else {
            if ((drill === "1")) {
                currentGrade = 3;
            } else {
                if ((drill === "0")) {
                    currentGrade = 1;
                } else {
                    return false;
                }
            }
        }
    }
    var secamGrade = currentGrade;
    console.log(("DRILL:%s:SECAM:%s" % [drillGrade, secamGrade]));
    var roundedGrade = Number.parseInt(((secamGrade + drillGrade) / 2));
	console.log("Got up to the first roundedGrade def");
    var roundedGrade = Math.round((roundedGrade + Number.EPSILON) * 100) / 100
    if ((roundedGrade === 1)) {
        return "INS";
    } else {
        if ((roundedGrade === 2)) {
            return "F";
        } else {
            if ((roundedGrade === 3)) {
                return "D";
            } else {
                if ((roundedGrade === 4)) {
                    return "C";
                } else {
                    if ((roundedGrade === 5)) {
                        return "B";
                    } else {
                        if ((roundedGrade === 6)) {
                            return "A";
                        } else {
                            return false;
                        }
                    }
                }
            }
        }
    }
}
//new CalculResults(drill, secam);

//# sourceMappingURL=reqs.js.map
