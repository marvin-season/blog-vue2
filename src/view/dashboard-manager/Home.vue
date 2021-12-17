<template>
  <div>
    <el-select v-model="type" placeholder="请选择">
      <el-option
          v-for="(item, index) in options"
          :key="index"
          :label="item"
          :value="item">
      </el-option>
    </el-select>
    <el-button @click="setEarth">earth</el-button>
    <div ref="main" id="main" style="width: 1100px;height:600px;"></div>

  </div>
</template>
<script>
import * as echarts from 'echarts';


export default {
  name: 'Home',
  data: function () {
    return {
      type: 'pie',
      options: ['bar', 'line', 'pie']
    }
  },
  mounted() {
    this.drawBar()
  },
  watch: {
    type: {
      handler() {
        this.setOptions()
      },
    }
  },
  methods: {
    drawBar() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$refs.main);
      this.setOptions()
    },
    setOptions() {
      this.chart.setOption({
        legend: {
          // Try 'horizontal'
          orient: 'vertical',
          right: 10,
          top: 'top',
        },
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          type: 'time'
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '2021',
            type: this.type,
            data: [
              {
                name: 'springboot',
                value: 20
              },
              {
                name: 'spring',
                value: 13
              },
              {
                name: 'java',
                value: 30
              },
              {
                name: 'js',
                value: 20
              },
              {
                name: 'sql',
                value: 20
              },
              {
                name: 'vue',
                value: 18
              },
              {
                name: 'react',
                value: 25
              }
            ],

          },
        ]
      });
    },
    setEarth() {
      let ROOT_PATH =
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
      const option = {
        backgroundColor: '#000',
        globe: {
          baseTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',
          heightTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',
          displacementScale: 0.04,
          shading: 'realistic',
          environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
          realisticMaterial: {
            roughness: 0.9
          },
          postEffect: {
            enable: true
          },
          light: {
            main: {
              intensity: 5,
              shadow: true
            },
            ambientCubemap: {
              texture: ROOT_PATH + '/data-gl/asset/pisa.hdr',
              diffuseIntensity: 0.2
            }
          }
        }
      };
      this.chart.setOption(option)
    }
  }
}
</script>

<style scoped>

</style>