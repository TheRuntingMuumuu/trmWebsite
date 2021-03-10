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
    drill = secam;
    drillGrade = Number.parseInt(currentGrade);
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
    secamGrade = Number.parseInt(currentGrade);
    console.log(("DRILL:%s:SECAM:%s" % [drillGrade, secamGrade]));
    roundedGrade = Number.parseInt(round(((secamGrade + drillGrade) / 2)));
    if ((roundedGrade === 1)) {
        return "F";
    } else {
        if ((roundedGrade === 2)) {
            return "D";
        } else {
            if ((roundedGrade === 3)) {
                return "C";
            } else {
                if ((roundedGrade === 4)) {
                    return "B";
                } else {
                    if ((roundedGrade === 5)) {
                        return "A";
                    } else {
                        if ((roundedGrade === 6)) {
                            return "A+";
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
