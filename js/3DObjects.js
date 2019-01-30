import React from 'react';
import { Viro3DObject } from 'react-viro';

import cupcakeObj from './res/assets/cupcake/12187_Cupcake_v1_L3.obj';
import cupcakeMtl from './res/assets/cupcake/12187_Cupcake_v1_L3.mtl';
import cupcakeBasket from './res/assets/cupcake/Cupcake_basket.jpg';
import cupcakeCream from './res/assets/cupcake/Cupcake_cream_diffuse.jpg';
import cupcakeFilling from './res/assets/cupcake/Cupcake_filling.jpg';

import donutObj from './res/assets/donut/Donut1.obj';
import donutMtl from './res/assets/donut/Donut1.mtl';
import donutDiffuse from './res/assets/donut/Bread (Diffuse).bmp';
import donutInverted from './res/assets/donut/Bread (Displacement) (Inverted).bmp';
import donutDisplace from './res/assets/donut/Bread (Displacement).bmp';

export const cupcake = (pos, collision, ref) => (
  <Viro3DObject
    position={pos}
    scale={[0.01, 0.01, 0.01]}
    rotation={[90, 90, 180]}
    source={cupcakeObj}
    resources={[cupcakeMtl, cupcakeBasket, cupcakeCream, cupcakeFilling]}
    type="OBJ"
    ref={ref}
    onCollision={collision}
    viroTag="token"
    physicsBody={{
      type: 'Dynamic',
      mass: 25,
      enabled: true,
      useGravity: true,
      restitution: 0.35,
      friction: 0.75
    }}
  />
);

export const donut = (pos, collision, ref) => (
  <Viro3DObject
    position={pos}
    scale={[0.01, 0.01, 0.01]}
    rotation={[0, 0, 0]}
    source={donutObj}
    resources={[donutMtl, donutDiffuse, donutInverted, donutDisplace]}
    type="OBJ"
    ref={ref}
    onCollision={collision}
    viroTag="donut"
    physicsBody={{
      type: 'Dynamic',
      mass: 1,
      enabled: true,
      useGravity: true,
      restitution: 0.35,
      friction: 0.75
    }}
  />
);
