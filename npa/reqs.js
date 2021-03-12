function CalculResults(drill, secam, guard, plans, id) {
    var currentGrade, drillGrade, roundedGrade, secamGrade, guardGrade;
	console.log("Guard:");
	console.log(guard);
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
        if (drill == "y") {
        currentGrade = 6; }
        else if (drill == "n") {
            currentGrade = 1;
                } else {
                        console.log("else_id_else");
                        window.location.href = "index.html";
                    return false;
                }  var idGrade = currentGrade;

    console.log(("DRILL:%s:SECAM:%s:GUARD:%s:PLAN:%s" % [drillGrade, secamGrade, guardGrade, planGrade]));
    var roundedGrade = Number.parseInt((((Number.parseInt(secamGrade) * 0.22) + (Number.parseInt(drillGrade) * 0.22) + (Number.parseInt(guardGrade) * 0.12) + (Number.parseInt(planGrade) * 0.22) + (Number.parseInt(idGrade) * 0.22)) / 5));
	console.log("Got up to the first roundedGrade def");
    var roundedGrade = Math.round((roundedGrade + Number.EPSILON) * 100) / 100
	console.log("ROUNDEDGRADE");
	console.log(roundedGrade);
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
