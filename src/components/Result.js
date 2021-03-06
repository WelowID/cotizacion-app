import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultContainer = styled.div`
  text-align: center;
  padding: .5rem;
  border: 1px solid #26C6DA;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const ResultText = styled.p`
  color: #00838F;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({total}) => {

    return (
        (total === 0)
            ? <Message>Elige marca, año y plan.</Message>
            : (
                <ResultContainer>
                    <TransitionGroup
                        component="span"
                        className="results"
                    >
                        <CSSTransition
                            classNames="result"
                            key={total}
                            timeout={{enter: 500, exit: 500}}
                        >
                            <ResultText>El total es: <span>$ {total.toFixed(2)}</span></ResultText>
                        </CSSTransition>
                    </TransitionGroup>
                </ResultContainer>
            )
    );
}

Result.propTypes = {
    total: PropTypes.number.isRequired
};

export default Result;