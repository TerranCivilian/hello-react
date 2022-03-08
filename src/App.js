import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [1,2,3],
    };
  }

  render() {
    let renderedList = this.state.list.map((i) =>
      <li>{i}</li>
    );

    return (
      <div>
        <span>
          <button
            onClick={() => {
              const nums = this.state.list.slice();
              nums.push(this.state.list.length + 1);
              this.setState({list: nums});
            }}>
            +
          </button>
          <button
            onClick={() => {
              if (this.state.list.length > 0) {
                const nums = this.state.list.slice();
                nums.pop();
                this.setState({list: nums});
              };
            }}>
            -
          </button>
        </span>
        <ul>
        {renderedList}
        </ul>
      </div>
    );
  }
}

function App() {
  return (
      <List />
  );
}

export default App;
