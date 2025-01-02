# VAE Image Generation + Tiny CNN Classifier

I built a small **Variational Auto Encoder** with PyTorch that maps a 2 dimensional gaussian latent space and generate an MNIST image of one digit from 0-9. I then played around with CNN classifiers and built a tiny 2-layer **Convolutional Neural Network** that achieves a 97% accuracy.

<table>
<td width="50%">

<p style="text-align: center"><img style=" width: 95%; height:100%" src="/projects/MNIST-VAE/vid.mp4"></p>

</td>
<td>

<p style="text-align: center"><img style="width: 95%; height:100%" src="/projects/MNIST-VAE/VAE.png"></p>

</td>
</table>

To understand the latent space mapping better, I used Dash to build a simple interface that interactively lets the user to color the latent space based on the CNN classification of the VAE's generated image.

I also plotted the intermediate outputs of each layer of the CNN classifier for different inputs to explore some of the logic behind it.

### TODOs
- [ ] Add color legend to the UI
- [x] Change to dark theme
- [ ] Add the CNN intermediate outputs to the UI


\
[![GitHub](https://img.shields.io/badge/GitHub-Repo-blue?logo=github)](https://github.com/yuvalm11/mnist-vae)