import * as THREE from "three";
import { TrackballControls } from "./TrackballControls.js";

var scene,camera,renderer,mycanvas,cube,sphere,cylinder,pyramid,torusKnot;

init();
animate();

function init() {
    scene = new THREE.Scene();
  
    mycanvas = document.getElementById("MyCanVas");
    const width = mycanvas.clientWidth;
    const height = mycanvas.clientHeight;
  
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.set(1, 12, 20);
    //camera.position.z=250
    scene.add(camera);
  
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0xc0c0c0);
    renderer.setSize(width, height);
    mycanvas.appendChild(renderer.domElement);
  
    CONTROL = new TrackballControls(camera, renderer.domElement);
    CONTROL.enabled = false;
    camera.position.z = 10;

}