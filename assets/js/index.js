import * as d3 from 'd3';
import 'd3-selection-multi';
import 'graph-scroll';

const margin = {top: 10, right: 20, bottom: 20, left: 40};

const div = d3.select('#graph').node().getBoundingClientRect(),
      width = div.width - margin.left - margin.right,
      svgHeight = (window.innerWidth < 600) ? 350 : 550,
      height = svgHeight - margin.top - margin.bottom;

const graph = d3.select('#graph');

// `attrs` doesn't work because d3-selection-multi is not imported properly
const svg = d3.select('#graph')
  .append('svg')
  .attrs({
          width: width, 
          height: svgHeight
        });

const gs = d3.graphScroll() // This is not recognized as a function
  .container(d3.select('#container'))
  .graph(d3.selectAll('#graph'))
  .sections(d3.selectAll('#sections > .step'))
  .on('active', (i) => {

    console.log('Active', i)
    d3.select('#container').classed('scrolling', true);
    
});