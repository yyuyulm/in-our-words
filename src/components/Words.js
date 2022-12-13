function Words(flexbox, data, setData) {
    let dataCopy = data
    flexbox.selectAll('span')
        .data(dataCopy)
        .join('span')
        .text(d => d.token)
        .style('background-color',
            d => d.hovered || d.blacked ? "rgb(31, 31, 31)" : 'rgb(31, 31, 31,0)')
        .on('mouseover', (event, d) => {
            let newData = [...data]
            newData[d.i].hovered = true
            setData(newData)
            //console.log(data[d.i])
        })
        .on('mouseout', (event, d) => {
            let newData = [...data]
            newData[d.i].hovered = false
            setData(newData)
            //console.log(data[d.i])
        })
        .on('click', (event, d) => {
            let newData = [...data]
            newData[d.i].blacked = !newData[d.i].blacked
            setData(newData)
            //console.log(data[d.i])
        })
}

export default Words;