

const data = [
              {
                "x": "Jan",
                "y": 20 
              },
              {
                "x" : "Feb",
                "y": 12
              },
              {
                "x" : "Mar",
                "y": 47
              },
              {
                "x" : "Apr",
                "y": 34
              },
              {
                "x" : "May",
                "y" : 54
              },
              {
                "x" : "Jun",
                "y" : 21
              },
              {
                "x" : "Jul",
                "y" : 57
              },
              {
                "x" : "Aug",
                "y" : 31
              },
              {
                "x" : "Sep",
                "y" : 17
              },
              {
                "x" : "Oct",
                "y" : 6
              },
              {
                "x" : "Nov",
                "y" : 23
              },
              {
                "x" : "Dec",
                "y" : 39
              }];

const filter = [
              {x: 'A', y: 9}, 
              {x: 'B', y: 5}, 
              {x: 'C', y: 14}, 
              {x: 'D', y: 25}, 
              {x: 'E', y: 10}, 
              {x: 'F', y: 7}, 
              {x: 'G', y: 14}, 
              {x: 'H', y: 9},
              {x: 'I', y: 18},
              {x: 'J', y: 10},
              {x: 'L', y: 20}
            ];

class Home extends React.Component {

  constructor(){
    super();
    this.state = {
       height : 500,
       width : 960,
       data : data,
       color : 'steelblue',
       margin : {top: 20, right: 20, bottom: 30, left: 40}
    }
  }

  showAll(){
    this.setState({ data : data, color : 'steelblue' })
  }

  filter(){
    this.setState({ data : filter, color : 'pink'})
  }

  render() {

      let xScale = d3.scale.ordinal().domain(d3.range(this.state.data.length)).rangeRoundBands([0, this.state.width], 0.05),
          data = this.state.data.map(function(d) {
                   return d.y
                  }),
          yScale = d3.scale.linear().domain([0, d3.max(data)]).range([this.state.height, 0]),
          xtickFormat = xScale.domain(this.state.data.map(function(d) { return d.x; }))
     
      return (
         <div>
            <div className="page-header">
              <h1>React App d3js</h1>
            </div>
            <div className="selection">
                <button className = 'btn btn-primary'><li onClick={this.showAll.bind(this)}>Chart A</li></button>
                <button className = 'btn btn-primary'><li onClick={this.filter.bind(this)}>Chart B</li></button>
            </div>
            <center>
              <Chart height = {this.state.height} width = {this.state.width} margin={this.state.margin} >
                 <Axis tickFormat = {xtickFormat} className = 'x axis' data={this.state.data} orientation='bottom' scale = {xScale} height={this.state.height} width={this.state.width} />
                 <Axis className = 'y axis' orientation='left' scale = {yScale} height={innerHeight} width={innerWidth} />
                 <Bar color={this.state.color} height = {this.state.height} width={this.state.width} data = {this.state.data} ></Bar>
              </Chart>
          </center>
          <Footer/>
         </div>
      );
   }
}

