'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier';

// Constants
const SATS_PER_BTC = 100_000_000n;

// Types
interface Transaction {
  txid: string;
  value_sats: bigint;
}

// Utility functions
const btcToUsd = (btc: number, price: number) => btc * price;
const satsToBtc = (sats: bigint) => Number(sats) / Number(SATS_PER_BTC);

const radiusForSats = (sats: bigint) => {
  const btc = satsToBtc(sats);
  const base = Math.log10(1 + btc * 1e6);
  return Math.min(1.6, Math.max(0.12, base * 0.18));
};

const colorForSats = (sats: bigint) => {
  const btc = satsToBtc(sats);
  if (btc >= 10) return '#f97316';
  if (btc >= 1) return '#ef4444';
  if (btc >= 0.1) return '#a855f7';
  if (btc >= 0.01) return '#22c55e';
  return '#3b82f6';
};

// Hooks
function useBitcoinPrice() {
  const [price, setPrice] = useState<number>(65000);
  return { price, setPrice };
}

function useMempoolStream({ url, enabled }: { url: string; enabled: boolean }) {
  const [live, setLive] = useState<Transaction | null>(null);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.addEventListener('message', (ev) => {
      try {
        const data = JSON.parse(ev.data);
        const txid = data.txid;
        const value_sats = BigInt(data.value_sats);
        setLive({ txid, value_sats });
      } catch {
        // Ignore errors
      }
    });

    return () => ws.close();
  }, [url, enabled]);

  return live;
}

function useMockStream(active: boolean) {
  const [live, setLive] = useState<Transaction | null>(null);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      const sats = 50_000n + BigInt(Math.floor(Math.random() * 500_000));
      setLive({ txid: crypto.randomUUID(), value_sats: sats });
    }, 450);
    return () => clearInterval(id);
  }, [active]);

  return live;
}

// Components
function TxBall({ tx, x }: { tx: Transaction; x: number }) {
  const r = radiusForSats(tx.value_sats);
  const color = colorForSats(tx.value_sats);
  const rb = useRef<any>(null);

  useEffect(() => {
    rb.current?.applyImpulse({ x: (Math.random() - 0.5) * 0.4, y: 0, z: 0 }, true);
  }, []);

  return (
    <RigidBody
      ref={rb}
      colliders={false}
      restitution={0.55}
      mass={Math.max(1, r * 4)}
      position={[x, 6 + Math.random() * 2, 0]}
      friction={0.4}
    >
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[r, 32, 32]} />
        <meshStandardMaterial metalness={0.2} roughness={0.4} color={color} />
      </mesh>
    </RigidBody>
  );
}

function Arena() {
  return (
    <>
      <RigidBody type="fixed" restitution={0.35} friction={0.8}>
        <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, 0, 0]}>
          <planeGeometry args={[18, 10]} />
          <meshStandardMaterial />
        </mesh>
        <CuboidCollider args={[9, 2, 0.2]} position={[0, 1, -5]} />
        <CuboidCollider args={[9, 2, 0.2]} position={[0, 1, 5]} />
        <CuboidCollider args={[0.2, 2, 5]} position={[-9, 1, 0]} />
        <CuboidCollider args={[0.2, 2, 5]} position={[9, 1, 0]} />
      </RigidBody>
    </>
  );
}

function Controller() {
  const [useLiveWS, setUseLiveWS] = useState(false);
  const wsUrl = 'wss://mempool.space/api/v1/ws';
  const liveTx = useMempoolStream({ url: wsUrl, enabled: useLiveWS });
  const mockTx = useMockStream(!useLiveWS);
  const incoming = liveTx ?? mockTx;

  const [txs, setTxs] = useState<Transaction[]>([]);
  const { price } = useBitcoinPrice();

  useEffect(() => {
    if (incoming) {
      setTxs((prev) => [...prev, incoming].slice(-300));
    }
  }, [incoming]);

  return (
    <div className="w-full h-screen bg-black text-white">
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={() => setUseLiveWS(!useLiveWS)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
        >
          {useLiveWS ? 'Switch to Mock' : 'Switch to Live'}
        </button>
      </div>
      <Canvas shadows camera={{ position: [0, 5.5, 10], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <spotLight position={[6, 12, 8]} angle={0.4} penumbra={0.6} castShadow intensity={1.1} />
        <Physics gravity={[0, -9.81, 0]}>
          <Arena />
          {txs.map((tx, i) => (
            <TxBall key={tx.txid} tx={tx} x={-7 + (i % 18) * (14 / 18)} />
          ))}
        </Physics>
        <Environment preset="city" />
        <OrbitControls enablePan={false} minDistance={8} maxDistance={25} />
      </Canvas>
    </div>
  );
}

export default function AnimationBalls() {
  return <Controller />;
}
