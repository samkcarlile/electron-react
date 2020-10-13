import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Icon from './utils/Icon';
import useExternalLinks from '../hooks/useBrowserLinks';

export default function App() {
  const ref = useExternalLinks();

  return (
    <Card
      body={true}
      border="primary"
      bg="light"
      className="w-75 shadow"
      ref={ref}
    >
      <h2 className="">
        Electron + React + Bootstrap
        <br /> Starter Template
      </h2>
      <h5>Includes the following:</h5>
      <ul>
        <li>
          <a href="https://reactjs.org/docs/hooks-reference.html">
            ✨ React Hooks
          </a>
        </li>
        <li>
          <a href="https://react-bootstrap.github.io/">🎨 React Bootstrap</a>
        </li>
        <li>
          <a href="https://webpack.js.org/configuration/target/#root">
            📦 Webpack
          </a>
        </li>
        <li>
          <a href="https://swc.rs/">⚡️ swc</a>
        </li>
        <li>
          <a href="https://eslint.org/">🔬 ESLint</a>
        </li>
        <li>
          <a href="https://pnpm.js.org/">🧩 pnpm</a>
        </li>
      </ul>
      <p>
        <Button
          variant="outline-primary"
          className="d-inline-flex align-items-center"
          as="a"
          href="https://github.com/samkcarlile"
        >
          <Icon icon="code-slash" size={20} className="mr-2"></Icon>
          View on GitHub
        </Button>
      </p>
    </Card>
  );
}
