// JavaScript already uses buffers so been doing q5 throughout all these

function playHarmony() {
    let audioContext = new AudioContext();

    let osc1 = audioContext.createOscillator();
    let osc2 = audioContext.createOscillator();
    let osc3 = audioContext.createOscillator();
    let osc4 = audioContext.createOscillator();

    let masterGain = audioContext.createGain();

    osc1.frequency.value = 440;
    osc2.frequency.value = 550;
    osc3.frequency.value = 660;
    osc4.frequency.value = 880;
    masterGain.gain.value = 0.25;

    osc1.connect(masterGain);
    osc2.connect(masterGain);
    osc3.connect(masterGain);
    osc4.connect(masterGain);
    masterGain.connect(audioContext.destination);

    osc1.start();
    osc2.start();
    osc3.start();
    osc4.start();
    osc1.stop(audioContext.currentTime + 3)
    osc2.stop(audioContext.currentTime + 3)
    osc3.stop(audioContext.currentTime + 3)
    osc4.stop(audioContext.currentTime + 3)
}