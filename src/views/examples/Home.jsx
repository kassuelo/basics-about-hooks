import React, { useContext } from "react";
import PageTitle from "../../components/layout/PageTitle";
import { DataContext } from "../../data/DataContext";
const Home = (props) => {
    const context = useContext(DataContext);
    return (
        <div className="Home">
            <PageTitle
                title="Módulo Hooks"
                subtitle="Hooks são uma nova adição ao React 16.8."
            />
            <div className="center">
                <span className="text">context: {context.state.number}</span>
            </div>
        </div>
    );
};

export default Home;
