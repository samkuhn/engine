export default /* glsl */`
    vec3 light = negNormal.x*lightCube[0] + posNormal.x*lightCube[1] +
                 negNormal.y*lightCube[2] + posNormal.y*lightCube[3] +
                 negNormal.z*lightCube[4] + posNormal.z*lightCube[5];

    light.r = 1.0
    light.g = 0.0
    light.b = 0.0

    rgb *= light;
`;
