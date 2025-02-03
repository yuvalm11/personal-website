# Minimoog Synthesizer - Digital Replica

Building a replica of the legendary Minimoog synthesizer was a dream of mine for a long time. As part of Prof. Leeb's class, I finaly got the chance to build one. The project was a great opportunity to learn about digital signal processing, sound synthesis, and the PSoC 5LP microcontroller.

The original Minimoog is a monophonic analog synthesizer that was designed in the early 1970s by Robert Moog. It was the first synthesizer to be sold in stores and is featured in many famous songs. The Minimoog uses three voltage-controlled oscillators (VCOs), a noise generator, and a low-pass filter. I wanted to replicate the original feel and synthesis method of the Minimoog, but with digital components that provide more flexibility and stability.

The main challenge was to get fast processing of the audio signal to allow a clean, low-latency sound. I used the PSoC 5LP microcontroller, which has programmable analog and digital blocks, to implement the sound synthesis, MIDI signal processing, and user interface.

### Full Demo

<p style="text-align: center">
    <video style="width: 95%; height: 100%" controls poster="./projects/Moog/synth.jpg">
        <source src="./projects/Moog/synth.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</p>