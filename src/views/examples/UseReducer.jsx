import React, { useReducer, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import { initialState, reducers } from "../../store";
import { login, numberAdd2 } from "../../store/actions";

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducers, initialState);
    const [numberToAdd, setNumberToAdd] = useState(0);
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div
                style={{
                    maxWidth: "500px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                }}
            >
                <span className="text">
                    {state.user?.name || "Efetue Login"}
                </span>
                <span className="text">{state.number}</span>
                <div>
                    <button
                        className="btn"
                        onClick={() => login(dispatch, "João")}
                    >
                        login
                    </button>
                    <button
                        className="btn"
                        onClick={() => numberAdd2(dispatch)}
                    >
                        +2
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "multiplyBy7" })}
                    >
                        x7
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "divideBy25" })}
                    >
                        /25
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "round" })}
                    >
                        arredondar
                    </button>
                    <div>
                        <input
                            type="number"
                            className="text"
                            value={numberToAdd}
                            onChange={(e) => setNumberToAdd(e.target.value)}
                            style={{ width: "500px" }}
                        />
                        <button
                            className="btn"
                            onClick={() => {
                                return dispatch({
                                    type: "numberAddN",
                                    payload: numberToAdd,
                                });
                            }}
                        >
                            + n
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseReducer;
