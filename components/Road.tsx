type Props = {
  position: [number, number, number];
  length?: number;
};

export default function Road({
  position,
  length = 10,
}: Props) {
  return (
    <mesh position={position}>
      <boxGeometry
        args={[4, 0.2, length]}
      />
      <meshStandardMaterial
        color="#555"
      />
    </mesh>
  );
}