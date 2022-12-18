/**{компонентийг өөрчлөх эсэхийг шийднэ Check} */
  shouldComponentUpdate(nextProps, nextStage) {
    console.log('====> shouldComponentUpdate');
    return true
  }


  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('====> getSnapshotBeforeUpdate');
    return true;
  }
  /**Component tataj bh hugatsaand load bj bln */
  componentDidMount() {
    console.log('====> componentDidMount');
  }

  /**Component өөрчлөгдөх үед дуудагдан */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('====> componentDidUpdate');
  }

  /**
   * Компонент алга болгох үед алерт өгөх юмуу ямар нэгэн логик хийж болно
   */
  componentWillUnmount() {
    console.log('====> componentWillUnmount');
  }
