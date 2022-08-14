import React from 'react';
import { AddClientModalContainer } from '../Components/AddClientModalContainer';
import { ProjectsContainer } from '../Components/ProjectsContainer';
import { ClientContainer } from '../Components/ClientContainer';
import { AddProjectContainer } from '../Components/AddProjectContainer/AddProjectContainer';

export const Home = () => (
    <>
        <div className="d-flex gap-3 mb-4">
            <AddClientModalContainer />
            <AddProjectContainer />
        </div>
        <ProjectsContainer />
        <hr/>
        <ClientContainer />
    </>
)