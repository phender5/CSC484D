function playSawtooth() {
    const REAL_TIME_FREQUENCY = 440;
  
    let audioContext = new AudioContext();
  
    let myOscillator = audioContext.createOscillator();
    myOscillator.type = 'sawtooth'
    myOscillator.frequency.value = REAL_TIME_FREQUENCY;
  
    myOscillator.connect(audioContext.destination);
    myOscillator.start();
    myOscillator.stop(audioContext.currentTime + 1);
  }

function playTriangle() {
    const REAL_TIME_FREQUENCY = 440;

    let audioContext = new AudioContext();

    let myOscillator = audioContext.createOscillator();
    myOscillator.type = 'triangle'
    myOscillator.frequency.value = REAL_TIME_FREQUENCY;

    myOscillator.connect(audioContext.destination);
    myOscillator.start();
    myOscillator.stop(audioContext.currentTime + 1);
}

function playSquare() {
    const REAL_TIME_FREQUENCY = 440;

    let audioContext = new AudioContext();

    let myOscillator = audioContext.createOscillator();
    myOscillator.type = 'square'
    myOscillator.frequency.value = REAL_TIME_FREQUENCY;

    myOscillator.connect(audioContext.destination);
    myOscillator.start();
    myOscillator.stop(audioContext.currentTime + 1);
}

function playNoise() {
    let audioContext = new AudioContext();
    const bufferSize = 44100 * 2;
    const noiseBuffer = new AudioBuffer({
    length: bufferSize,
    sampleRate: 44100,
    });
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }
    const noise = new AudioBufferSourceNode(audioContext, {
        buffer: noiseBuffer,
    });
    console.log(noise);
    noise.connect(audioContext.destination);
    noise.start();
}
