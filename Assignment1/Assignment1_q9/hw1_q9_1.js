// Resource: https://teropa.info/blog/2016/08/04/sine-waves.html
function playSineWave440hz() {
  const REAL_TIME_FREQUENCY = 440;

  let audioContext = new AudioContext();

  let myOscillator = audioContext.createOscillator();
  myOscillator.frequency.value = REAL_TIME_FREQUENCY;

  myOscillator.connect(audioContext.destination);
  myOscillator.start();
  myOscillator.stop(audioContext.currentTime + 3); // Stop after three seconds
}

