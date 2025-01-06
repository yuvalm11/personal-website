# Prompter Plotter

With inspiration from Quinton's V-shaped plotter machine, I designed and built my version of a similar machine. The machine has interesting dynamics and using Jake's code I was able to set up a moving machine pretty quickly.

### Mechanics

The machine is built using 3D printed parts and laser cut acrylic. It is driven by two stepper motors and controlled in a modular manner using two custom PCBs. The overall design is sleek and compact and can be easily placed at the corner of a desk. You can find the design files in the github repo linked below.

### Code

The firmware code was written by Jake and Quintin and was very easy to use as a plug and play module. The code is written in C and is loaded on the microcontroller on each of the two PCBs. For the user, the firmware code is abstracted away and can be controlled using a simple python script.

### Future Work

The machine is currently in a working state and is fully functional. However, there are a few improvements I plan to make in order to improve the user experience.

*The Prompter Part*

I would like to make the machine more user friendly and add an option to provide a short prompt to it and by using an image generation model, create a drawing from the prompt. I will then algorithmically generate machine instructions to draw generated image and the user will see its prompt being slowly drawn by the machine - without knowing what the final image will be.

### TODOs

- [ ] Add a binary Z axis to the machine to allow non-contiguous plotting.
- [ ] Add image generation model to the machine to allow for prompt based drawing.
- [ ] Add WiFi connectivity to the machine to allow for remote control.


<img src="./projects/VPlotter/kirb.mp4" style="width: 100%">