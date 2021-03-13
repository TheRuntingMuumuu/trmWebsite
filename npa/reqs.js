/*https://gist.github.com/stekhn/a12ed417e91f90ecec14bcfa4c2ae16a*/
function weightedMean(arrValues, arrWeights) {

  var result = arrValues.map(function (value, i) {

    var weight = arrWeights[i];
    var sum = value * weight;

    return [sum, weight];
  }).reduce(function (p, c) {

    return [p[0] + c[0], p[1] + c[1]];
  }, [0, 0]);

  return result[0] / result[1];
}
function CalculResults(drill, secam, guard, plans) {
    var currentGrade, drillGrade, roundedGrade, secamGrade, guardGrade;
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
			console.log("else_drill_else");
		    window.location.href = "index.html";
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
			console.log("secam_else");
			window.location.href = "index.html";
                    return false;
                }
            }
        }
    }
    var secamGrade = currentGrade;
	drill = guard;
    if (drill == "y") {
        currentGrade = 6; }
	else if (drill == "n") {
            currentGrade = 1;
                } else {
			console.log("else_gurd_else");
                        window.location.href = "index.html";
                    return false;
                }
	var guardGrade = currentGrade;
	var drill = plans;
	if (drill == "lots") {
        currentGrade = 6; }
        else if (drill == "y") {
            currentGrade = 5;
	}else if (drill == "n") {
		currentGrade = 1;
                } else {
                        console.log("else_plan_else");
                        window.location.href = "index.html";
                    return false;
                }  var planGrade = currentGrade;
	var drill = id;

    console.log(("DRILL:%s:SECAM:%s:GUARD:%s:PLAN:%s" % [drillGrade, secamGrade, guardGrade, planGrade]));
    var notroundedGrade = weightedMean([Number.parseInt(secamGrade), Number.parseInt(drillGrade), Number.parseInt(guardGrade), Number.parseInt(planGrade), Number.parseInt(idGrade)], [0.22, 0.22, 0.12, 0.22, 0.22]);console.log("Not rounded grade");console.log(notroundedGrade);
	var notroundedGrade = Number.parseFloat(notroundedGrade);
	console.log("Got up to the first roundedGrade def");
    var roundedGrade = Math.round((notroundedGrade));
	console.log("ROUNDEDGRADE");
	console.log(roundedGrade);
    if ((roundedGrade === 1 || roundedGrade === 0)) {
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
			    console.log("b");
                    } else {
                        if ((roundedGrade === 6)) {
                            return "A";
				console.log("a");
                        } else {
				console.log("else");
				window.location.href = "index.html";
                            return false;
                        }
                    }
                }
            }
        }
    }
}
function DoTheChromeDance() {
	for (;;) {
		alert("Nice try...");
		document.write("nice try...");
	}
}
//new CalculResults(drill, secam);

//# sourceMappingURL=reqs.js.map
