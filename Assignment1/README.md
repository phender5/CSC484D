# QUESTION 1

Basic Hello World of digital music synthesis.

# QUESTION 2

Using the formula for midi note to frequency was able to generate the opening to starwars.

# QUESTION 3

Creating a look-up table, was able to create a basic score language for pitch and duration and created a melody to Somewhere Over the Rainbow. This table could be expanded to all notes of a piano for more variation, but already includes rests and durations so is a good proof of concept.

# QUESTION 4

Use scipy signal implementations for sawtooth, square/pulse, and triangle waves. Create noise with math.random to get white noise.

# QUESTION 5

Going over the previous questions with buffers took using a new oscillator fucntion with number of samples, bits, and buffer size. I immediately added the mathematical way of calculating amplitude but also added a 'mute' option for when playing a melody with rests. I also used the sounddevice library for this section to play the melodies in real time as they are executed and got to try some other functions of the library along the way like real time recording from my computer's microphone into playing the audio (had to use headphones to stop it from creating feedback)

# QUESTION 6

Use harmonics with the different types of osciallars to create polyphony, including one of noise. It started to sound weird after 8 with my current set up so stayed with that here, but with maybe not so many tabs open or a better computer I could have more voices going on at once.

# QUESTION 7

It was fun playing with MAX/MSP, although I didn't want to activate my trial just yet so took pictures since it wouldn't let me save the files. I created a basic 440Hz sine wave oscillator as well as a midi generator where you can choose the pitch and duration by playing on a virtual keyboard.

# QUESTION 8

Exploring Nyquist was interesting although I had a very difficult time finding any documentation on how to actually run the code. I got to explore a good number of examples though of how to generate different pitches, durations, and types of oscillators. So added that code in the commented out blocks of the q8 cell.

# QUESTION 9

I have had some JavaScript experience at some of my co-ops but definitely not in the world of synthesizers and musical information, so I chose that as my unfamiliar programming language. I created another folder in my repository to store that code with the index.html file being used to test out that my component functions were working (as shown in the attached photo in the notebook). There is a good audio library called AudioContext that helped with coding in JavaScript and it seems to primarily use buffers already.

# QUESTION 10

Using the Taylor Series approximation I chose to show orders of 1, 3, and 20 for the sine wave approximations. The order of 1 sounds and looks just like a sawtooth wave which makes sense as there is no polynomial curving. With a degree of 3 it starts to bend a bit like the sine wave around 0, but starts to get wonky the further away you go. At a degree of 20 it starts to look a lot like a sine wave so although it is computationally more intensive it does a more effective job of approximating sine!
