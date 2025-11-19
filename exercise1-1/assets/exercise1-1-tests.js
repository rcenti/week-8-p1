import { TestResults, canvasStatus, testSettingIsCalled, LOAD_SOUND, advanceToFrame, substituteDraw } from "../../lib/test-utils.js";

/**
 * A hacky solution to wait for p5js to load the canvas. Include in all exercise test files.
 */
function waitForP5() {
    const canvases = document.getElementsByTagName("canvas");
    if (canvases.length > 0) {
        clearInterval(loadTimer);
        runTests(canvases[0]);
    }
}

async function runTests(canvas) {
    canvas.style.pointerEvents = "none";
    substituteDraw();
    const resultsDiv = document.getElementById("results");
    for (const e of canvasStatus.errors) {
        TestResults.addFail(`In frame ${frameCount}, ${e}`);
    }
    TestResults.addWarning("Only a small amount of functionality can be tested for this exercise. Passing all tests doesn't necessarily mean the exercise is complete.");
    const loadInPreload = testSettingIsCalled(LOAD_SOUND, false, false, true);
    const loadInSetup = testSettingIsCalled(LOAD_SOUND, true, false, false);
    const loadInDraw = testSettingIsCalled(LOAD_SOUND, false, true, false);
    if (loadInPreload) {
        TestResults.addPass("<code>loadSound()</code> is called in <code>preload()</code>.");
    }
    if (loadInSetup) {
        TestResults.addWarning("<code>loadSound()</code> is called in <code>setup()</code>. Although this can work, it should only be called in <code>preload()</code> to ensure the sound file is fully loaded before any other code is run.");
    }
    if (loadInDraw) {
        TestResults.addFail("<code>loadSound()</code> should not be called in <code>draw()</code> because it will repeatedly load the sound file.");
    }
    if (!loadInPreload && !loadInSetup && !loadInDraw) {
        TestResults.addWarning("<code>loadSound()</code> does not appear to be called (this test will not detect usage of <code>loadSound()</code> outside <code>preload()</code>, <code>setup()</code>, or <code>draw()</code>).");
    }
    if (window.hasOwnProperty("keyPressed")) {
        TestResults.addPass("<code>keyPressed()</code> is implemented.");
    } else {
        TestResults.addFail("<code>keyPressed()</code> is not implemented.");
    }
    TestResults.display(resultsDiv);
}


const loadTimer = setInterval(waitForP5, 500);
