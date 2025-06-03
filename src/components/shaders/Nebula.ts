const NebulaShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor1: { value: [0.05, 0.02, 0.1] }, // muted deep violet (almost black)
    uColor2: { value: [0.1, 0.12, 0.2] }   // very dark bluish-grey
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    varying vec2 vUv;

    float random(vec2 p) {
      return fract(sin(dot(p.xy, vec2(12.9898,78.233))) * 43758.5453);
    }

    float noise(vec2 p){
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f*f*(3.0 - 2.0*f);
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }

    void main() {
      vec2 p = vUv * 5.0;
      float n = noise(p + uTime * 0.05);
      vec3 color = mix(uColor1, uColor2, n);
      gl_FragColor = vec4(color, 0.25);
    }
  `
};

export default NebulaShader;
