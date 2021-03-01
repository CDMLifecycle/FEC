import React from 'react';
import AnswerOptions from './AnswerOptions.jsx';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
        <div className="qaAnswerBody">{'Candy canes topping marshmallow jujubes pudding icing macaroon. Candy pudding carrot cake powder tiramisu candy biscuit. Marshmallow ice cream cupcake pastry chupa chups cake. Jelly-o chocolate cake gummi bears powder cake chocolate bar sweet roll pudding dessert.'}</div>
        <AnswerOptions />
      </>
    )
  }
}

export default AnswerItem