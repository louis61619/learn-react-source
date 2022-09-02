// const element = <h1 title="foo">Hello</h1>
// const container = document.getElementById("root")
// ReactDOM.render(element, container)

// const ele = {
//   type: 'h1',
//   props: {
//     className: "foo",
//     children: "Hello",
//   },
// }


// const node = document.createElement('h1')

// node.className = ele.props.className

// node.textContent = ele.props.children

// const container = document.getElementsByTagName('body')

// container[0].appendChild(node)

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      // 遞迴遍歷
      children: children.map(child => {

      })
    }
  }
}