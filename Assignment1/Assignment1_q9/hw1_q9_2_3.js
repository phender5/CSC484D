
function playMidi() {
  let audioCtx = new AudioContext();

  let osc = audioCtx.createOscillator();
  let gain = audioCtx.createGain();

  osc.frequency.value = 440;
  gain.gain.value = 0.1;

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  let A = 440;
  let Bb = 440 * Math.pow(2, 1/12);
  let B = 440 * Math.pow(2, 2/12);
  let C = 440 * Math.pow(2, 3/12);
  let Db = 440 * Math.pow(2, 4/12);
  let D = 440 * Math.pow(2, 5/12);
  let Eb = 440 * Math.pow(2, 6/12);
  let E = 440 * Math.pow(2, 7/12);
  let F = 440 * Math.pow(2, 8/12);
  let Gb = 440 * Math.pow(2, 9/12);
  let G = 440 * Math.pow(2, 10/12);
  let Ab = 440 * Math.pow(2, 11/12);
  let A_high = 440 * Math.pow(2, 1);

  osc.frequency.setValueAtTime(A, audioCtx.currentTime + 1);
  osc.frequency.linearRampToValueAtTime(Bb, audioCtx.currentTime + 2);
  osc.frequency.setValueAtTime(Bb, audioCtx.currentTime + 3);
  osc.frequency.linearRampToValueAtTime(B, audioCtx.currentTime + 4);
  osc.frequency.setValueAtTime(C, audioCtx.currentTime + 5);
  osc.frequency.linearRampToValueAtTime(Db, audioCtx.currentTime + 6);
  osc.frequency.setValueAtTime(Db, audioCtx.currentTime + 7);
  osc.frequency.linearRampToValueAtTime(D, audioCtx.currentTime + 8);
  osc.frequency.setValueAtTime(D, audioCtx.currentTime + 9);
  osc.frequency.linearRampToValueAtTime(Eb, audioCtx.currentTime + 10);
  osc.frequency.setValueAtTime(Eb, audioCtx.currentTime + 11);
  osc.frequency.linearRampToValueAtTime(E, audioCtx.currentTime + 12);

  osc.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 13);
}