import {
  Center,
  Environment,
  Float,
  Sparkles,
  Text3D,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { MathUtils } from "three";
import { ChristmasBall } from "./ChristmasBall";

const Scene = () => {
  const { viewport } = useThree();
  const { width, height } = viewport;

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="city" />
      <Sparkles count={140} scale={[width, height, 3]} size={4} />

      {Array.from({ length: 15 }).map((_, i) => (
        <ChristmasBall
          key={i}
          position={[
            MathUtils.randFloatSpread(width),
            MathUtils.randFloatSpread(height),
            MathUtils.randFloat(-3, 1),
          ]}
          rotation={[
            MathUtils.randFloat(0, Math.PI * 2),
            MathUtils.randInt(0, Math.PI * 2),
            MathUtils.randInt(0, Math.PI * 2),
          ]}
          color={i % 2 === 0 ? "#b32a2a" : "#dcb777"}
        />
      ))}
      <Float rotation-y={Math.PI / 8} position-x={0.5}>
        <Center center>
          <Text3D font={"/lobster_font.json"}>
            Merry Christmas
            <meshStandardMaterial
              color="#b32a2a"
              envMapIntensity={2}
              roughness={0.2}
            />
          </Text3D>
        </Center>
        <Center position-y={-1.5}>
          <Text3D font={"/lobster_font.json"}>
            2022
            <meshStandardMaterial
              color="#dcb777"
              envMapIntensity={2}
              roughness={0.2}
            />
          </Text3D>
        </Center>
      </Float>
    </>
  );
};

export default Scene;
