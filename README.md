# Globe

### Problems I have met and Solution

- 地球的baseTexture（为图片路径）没有效果
```js
import earth from './assets/earth.jpg';

baseTexture: earth
```

- `map no find`
```js
import echarts from 'echarts/dist/echarts';
import china from 'echarts/map/json/china.json';
import world from 'echarts/map/json/world';
echarts.registerMap('china', china);
echarts.registerMap('world', world);
```

- canvas背景颜色
```js
option = {
  backgroundColor: '#babebc',
  globe: { ...otherOptions },
}
```

- src目录下的.json文件无法正常打包
`webpack.config.js`:
```js
module: {
  rules: [
    {
      type: 'javascript/auto',
      test: /\.(json)$/,
      exclude: /node_modules/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
         },
      },
    },
  ]
}
```
