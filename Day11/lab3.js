// 🧪 Lab 03 — Nested Scope Construction Site

let appName = "Swiggy" ;
function outer() {
    let version = "2.56.126" ;
    function inner() {
        let buildNumber = 9 ;
        console.log(appName);
        console.log(version);
        console.log(buildNumber);

    }
    inner();
}
outer();

// Build a 3-level nested structure from scratch:

// js
// // Requirement:
// // - global variable: appName
// // - outer() with a local variable: version
// // - inner() (inside outer) with a local variable: buildNumber
// // - inner() must console.log all three


// Then answer in comments:
// Can outer() access buildNumber? Why/why not?

// Can the global scope access version? Why/why not?