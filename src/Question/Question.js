import React from "react";

const Question = props => {
    return(
        <div className="Question">
        
        <div id="Question_question">
          <div className="Product__cat">{question.varugrupp}</div>
          <h4>{product.namn}</h4>
          <h4>{product.namn2}</h4>
          <p>{product.artikelnr}</p>
          <p>
            {product.ursprung}, {product.ursprungsland}
          </p>
          <div className="Product__price-cart">
            <p>{product.prisinklmoms} SEK</p>
            <button onClick={this.props.handleClick.bind(this, product)}>
              <span className="fa fa-cart-plus" /> Köp
            </button>
          </div>
          <div className="BootItem__description">{product.name}</div>
          <div
            className="Product__stock"
            style={{ color: product.lagersaldo >= 5 ? "#417505" : "#CE0814" }}
          >
            {product.lagersaldo} i lager.
          </div>
        </div>
      </div>
    );
}

export default Question;